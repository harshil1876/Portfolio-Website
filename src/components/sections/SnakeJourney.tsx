"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { journeyMilestones } from "@/lib/data";
import { GraduationCap, Code, Award, Briefcase, FileBadge, Baby, Hand } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ExpandableJourneyCard } from "./ExpandableJourneyCard";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={24} />,
  Code: <Code size={24} />,
  Award: <Award size={24} />,
  Briefcase: <Briefcase size={24} />,
  Certificate: <FileBadge size={24} />,
  Baby: <Baby size={24} />
};

// --- ROAD CONFIGURATION (Adjust these to grow/shrink the journey) ---
const NUM_ROWS = 2;             // Manual control: change this to 3, 4, etc.
const ROW_HEIGHT = 180;         // Vertical space between horizontal lines
const ROAD_START_Y = 100;       // Starting top offset
const ROAD_WIDTH = 800;         // Length of the horizontal lines
const ROAD_LEFT_X = 100;         // Left padding
const ROAD_RIGHT_X = ROAD_LEFT_X + ROAD_WIDTH; 
const ARC_RADIUS = ROW_HEIGHT / 2;

/**
 * Dynamically generates the SVG path string for a snake pattern
 */
function getJourneyPath() {
  let d = `M ${ROAD_LEFT_X} ${ROAD_START_Y}`;
  for (let i = 0; i < NUM_ROWS; i++) {
    const y = ROAD_START_Y + i * ROW_HEIGHT;
    const isEven = i % 2 === 0;
    const nextY = y + ROW_HEIGHT;
    const endX = isEven ? ROAD_RIGHT_X : ROAD_LEFT_X;
    
    // Add Horizontal Line
    d += ` L ${endX} ${y}`;

    // Add U-Turn Arc (except for the last row)
    if (i < NUM_ROWS - 1) {
      const sweepFlag = isEven ? 1 : 0; // Curve right or curve left
      d += ` A ${ARC_RADIUS} ${ARC_RADIUS} 0 0 ${sweepFlag} ${endX} ${nextY}`;
    }
  }
  return d;
}

const SVG_PATH = getJourneyPath();
// Total Length = (Rows * RoadWidth) + ((Rows-1) * ArcLength)
const PATH_LENGTH = (NUM_ROWS * ROAD_WIDTH) + ((NUM_ROWS - 1) * Math.PI * ARC_RADIUS);
const START_PADDING = 0.1; // 10% road buffer for the "Start" area
const VIEWBOX_HEIGHT = ROAD_START_Y + (NUM_ROWS - 1) * ROW_HEIGHT + 100;


export function SnakeJourney() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const animatedProgress = useSpring(0, { stiffness: 400, damping: 40 });
  
  const [milestonePoints, setMilestonePoints] = useState<{x:number, y:number}[]>([]);
  // We use state to force a re-render once the path length is calculated
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      // UNIT-BASED PROGRESS: Each '1.0' in roadPosition now represents exactly one full segment (Line + Arc).
      // This means adding Row 3 won't move Row 1 milestones!
      const SEG_LEN = ROAD_WIDTH + Math.PI * ARC_RADIUS;
      
      const pts = journeyMilestones.map((milestone, i) => {
        const manualP = milestone.roadPosition ?? 0;
        const absDist = START_PADDING * PATH_LENGTH + (manualP * SEG_LEN);
        const p = Math.min(1, absDist / PATH_LENGTH);
        return pathRef.current!.getPointAtLength(p * PATH_LENGTH);
      });
      setMilestonePoints(pts);
      setIsReady(true);
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    // Removed instant snap on click: User must drag to move the car
  };

  const handlePointerMove = (e: React.PointerEvent, force = false) => {
    if (!isDragging && !force) return;
    if (!svgRef.current) return;
    
    const pt = svgRef.current.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svgRef.current.getScreenCTM()!.inverse());

    let bestProgress = 0;
    const L_LINE = ROAD_WIDTH;
    const L_ARC = Math.PI * ARC_RADIUS;
    const L_SEG = L_LINE + L_ARC;

    // 1. Determine which row or arc the user is likely dragging on
    // Map directly to row indices
    const rawRowIdx = (svgP.y - ROAD_START_Y) / ROW_HEIGHT;
    const rowIdx = Math.max(0, Math.min(NUM_ROWS - 1, Math.round(rawRowIdx)));
    const targetY = ROAD_START_Y + rowIdx * ROW_HEIGHT;
    
    const isEvenRow = rowIdx % 2 === 0;

    // Is the mouse vertically close enough to a line?
    if (Math.abs(svgP.y - targetY) < ROW_HEIGHT * 0.4) {
      const x = Math.max(ROAD_LEFT_X, Math.min(ROAD_RIGHT_X, svgP.x));
      const lineProgress = isEvenRow ? (x - ROAD_LEFT_X) / L_LINE : (ROAD_RIGHT_X - x) / L_LINE;
      bestProgress = (rowIdx * L_SEG + lineProgress * L_LINE) / PATH_LENGTH;
    } else {
      // Check for arc between rows
      const arcIdx = svgP.y > targetY ? rowIdx : rowIdx - 1;
      if (arcIdx >= 0 && arcIdx < NUM_ROWS - 1) {
        const isRightArc = arcIdx % 2 === 0;
        const centerX = isRightArc ? ROAD_RIGHT_X : ROAD_LEFT_X;
        const centerY = ROAD_START_Y + arcIdx * ROW_HEIGHT + ARC_RADIUS;
        
        const dy = svgP.y - centerY;
        const dx = svgP.x - centerX;
        const angle = Math.atan2(dy, dx);
        
        let arcProgress = isRightArc 
            ? (angle + Math.PI/2) / Math.PI 
            : (Math.PI/2 - angle) / Math.PI;

        arcProgress = Math.max(0, Math.min(1, arcProgress));
        bestProgress = (arcIdx * L_SEG + L_LINE + arcProgress * L_ARC) / PATH_LENGTH;
      }
    }

    animatedProgress.set(Math.max(0, Math.min(1, bestProgress)));
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <section id="journey" className="relative min-h-screen bg-background border-y border-border flex flex-col items-center overflow-hidden pt-24 pb-48 gap-12">
      <div className="w-full relative z-20 pointer-events-none">
        <SectionHeading title="The Road Map" subtitle="Drag anywhere along the road to travel your journey" />
      </div>

      <div className="absolute bottom-12 z-20 flex items-center gap-2 text-muted-foreground bg-secondary/80 px-6 py-2 rounded-full border border-border backdrop-blur-md pointer-events-none">
        <Hand size={18} /> Drag on the track
      </div>

      {/* The Responsive Dynamic Container */}
      <div 
        className="w-full max-w-6xl relative touch-none cursor-crosshair group"
        style={{ aspectRatio: `1000 / ${VIEWBOX_HEIGHT}` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* The SVG Track */}
        <svg ref={svgRef} viewBox={`0 0 1000 ${VIEWBOX_HEIGHT}`} className="absolute inset-0 w-full h-full drop-shadow-2xl">
          {/* Base Track (Brighter and Attractive Color) */}
          <path ref={pathRef} d={SVG_PATH} fill="none" stroke="#475569" strokeWidth="20" strokeLinecap="round" opacity="0.8" />
          
          {/* Active Glowing Track */}
          <motion.path 
            d={SVG_PATH} 
            fill="none" 
            stroke="url(#activeGradient)" 
            strokeWidth="20" 
            strokeLinecap="round" 
            style={{ pathLength: animatedProgress }}
          />

          <defs>
            <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818CF8" /> {/* Indigo-400 */}
              <stop offset="100%" stopColor="#C084FC" /> {/* Purple-400 */}
            </linearGradient>
          </defs>
        </svg>

        {/* The Checkpoints & Glowing Ball */}
        {isReady && (
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* The "Start" Marker at the very beginning */}
            <StartNode pathRef={pathRef as React.RefObject<SVGPathElement>} pathLength={PATH_LENGTH} />

             {/* The Checkpoints */}
            {journeyMilestones.map((milestone, idx) => {
               const pt = milestonePoints[idx];
               if (!pt) return null;
               
               const percentX = (pt.x / 1000) * 100;
               const percentY = (pt.y / VIEWBOX_HEIGHT) * 100;
               
               // Use the same absolute unit logic
               const SEG_LEN = ROAD_WIDTH + Math.PI * ARC_RADIUS;
               const manualP = milestone.roadPosition ?? 0;
               const absDist = START_PADDING * PATH_LENGTH + (manualP * SEG_LEN);
               const progress = Math.min(1, absDist / PATH_LENGTH);
               
               return (
                 <CheckpointNode 
                   key={idx}
                   milestone={milestone}
                   percentX={percentX}
                   percentY={percentY}
                   idx={idx}
                   targetProgress={progress}
                   animatedProgress={animatedProgress}
                 />
               );
            })}

            {/* The Draggable Car / Blip mapped identically */}
            <CarBlip animatedProgress={animatedProgress} pathLength={PATH_LENGTH} pathRef={pathRef as React.RefObject<SVGPathElement>} />
          </div>
        )}
      </div>
    </section>
  );
}

function CarBlip({ animatedProgress, pathLength, pathRef }: { animatedProgress: any, pathLength: number, pathRef: React.RefObject<SVGPathElement> }) {
  const [pos, setPos] = useState({ x: 0, y: 0 }); 

  useEffect(() => {
    // Set initial position
    if (pathRef.current) {
        const pt = pathRef.current.getPointAtLength(animatedProgress.get() * pathLength);
        setPos({ 
            x: (pt.x / 1000) * 100, 
            y: (pt.y / VIEWBOX_HEIGHT) * 100 
        });
    }

    const unsub = animatedProgress.on("change", (p: number) => {
      if (pathRef.current) {
         const pt = pathRef.current.getPointAtLength(p * pathLength);
         setPos({ 
           x: (pt.x / 1000) * 100, 
           y: (pt.y / VIEWBOX_HEIGHT) * 100 
         });
      }
    });
    return () => unsub();
  }, [animatedProgress, pathLength, pathRef, VIEWBOX_HEIGHT]);

  return (
    <div 
      className="absolute w-8 h-8 md:w-10 md:h-10 bg-background border-4 border-primary rounded-full shadow-[0_0_30px_rgba(var(--accent-rgb),1)] flex items-center justify-center z-50 pointer-events-none transition-none"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent" />
    </div>
  );
}

function CheckpointNode({ milestone, percentX, percentY, idx, targetProgress, animatedProgress }: any) {
  // isHovered means the car is physically hovering over this specific node
  const [isHovered, setIsHovered] = useState(false);

  // Reveal checkpoints (bloom into boxes) ONLY when the car is directly over them!
  useEffect(() => {
    // We listen to the spring directly
    const unsub = animatedProgress.on("change", (latest: number) => {
      // If within 8% of the target, the car is "hovering" over the node
      if (Math.abs(latest - targetProgress) < 0.02) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    });
    return () => unsub();
  }, [animatedProgress, targetProgress]);

  // Shared content for the expanded modal
  const expandedContent = (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl">
          {iconMap[milestone.icon]}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground">{milestone.title}</h2>
          <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full mt-2 inline-block">
            {milestone.date}
          </span>
        </div>
      </div>
      <div className="p-8 bg-secondary/20 rounded-3xl border border-border/50">
        <p className="text-xl text-muted-foreground leading-relaxed">{milestone.description}</p>
      </div>
    </div>
  );

  // INDIVIDUAL POSITION CONTROLS (Tweak these pixels to align perfectly)
  const iconY = milestone.isMainCheckpoint ? -80 : -50;
  const dateY = milestone.isMainCheckpoint ? 50 : 50;
  const dateX = milestone.isMainCheckpoint ? 30 : 10; // Positive moves RIGHT, Negative moves LEFT
  const boxY = -130;

  return (
    <div
      className="absolute z-40"
      style={{
        left: `${percentX}%`,
        top: `${percentY}%`,
      }}
    >
      {/* Layer 1: The Icon (Pin or Tick) - Fades out on hover */}
      <motion.div 
        initial={false}
        animate={{ 
          opacity: isHovered ? 0 : 1, 
          scale: isHovered ? 0.5 : 1,
          y: iconY 
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto origin-bottom"
      >
        <ExpandableJourneyCard
          id={`idle-icon-${idx}`}
          className="group hover:scale-110 transition-transform"
          triggerCard={
            milestone.isMainCheckpoint ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-primary drop-shadow-xl z-10 transition-colors group-hover:text-accent cursor-pointer">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            ) : (
              <div className="w-8 h-8 rounded-full bg-background border-2 border-muted flex items-center justify-center shadow-lg group-hover:border-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            )
          }
          expandedContent={expandedContent}
        />
      </motion.div>

      {/* Layer 2: The Date Label - Sepatated control, stays visible and blooms */}
      <motion.div 
        initial={false}
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          y: dateY,
          x: dateX
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <span className={`
          text-[10px] md:text-xs font-black text-foreground bg-background px-3 py-1 rounded-full border shadow-lg whitespace-nowrap transition-colors
          ${milestone.isMainCheckpoint ? 'border-primary' : 'border-border'}
          ${isHovered && 'border-primary text-primary'}
        `}>
          {milestone.date}
        </span>
      </motion.div>

      {/* Layer 3: The Bloomed Box UI - Fades in on hover */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
          y: boxY
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-max origin-bottom pointer-events-none"
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      >
        <ExpandableJourneyCard
          id={`active-box-${idx}`}
          className="group hover:z-50"
          triggerCard={
            <div className="w-56 border-border/50 bg-secondary/90 bg-card/90 backdrop-blur-md p-4 rounded-2xl border flex flex-col gap-2 relative transition-colors hover:border-primary cursor-pointer shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full shrink-0 bg-background text-foreground">
                  {iconMap[milestone.icon]}
                </div>
                <div>
                  <h3 className="font-bold text-foreground leading-tight text-sm line-clamp-2">{milestone.title}</h3>
                </div>
              </div>
              <p className="text-[10px] uppercase font-bold text-primary mt-2">Click to expand</p>
            </div>
          }
          expandedContent={expandedContent}
        />
      </motion.div>
    </div>
  );
}

function StartNode({ pathRef, pathLength }: { pathRef: React.RefObject<SVGPathElement>, pathLength: number }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const pt = pathRef.current.getPointAtLength(0);
      setPos({ x: (pt.x / 1000) * 100, y: (pt.y / VIEWBOX_HEIGHT) * 100 });
    }
  }, [pathRef, VIEWBOX_HEIGHT]);

  if (pos.x === 0 && pos.y === 0) return null;

  return (
    <div 
      className="absolute z-30"
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    >
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full border border-primary shadow-lg whitespace-nowrap mb-1">
          START
        </div>
        <div className="w-0.5 h-4 bg-primary/30" />
      </div>
    </div>
  );
}

