"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, certifications, achievements, leadership } from "@/lib/data";
import { MoveRight, ExternalLink, ArrowRight, MousePointer2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export function ShowcaseSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scrollY = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.3, 0.45, 0.55, 0.7, 0.8, 1], 
    ["0%", "0%", "25%", "25%", "50%", "50%", "75%", "100%"]
  );

  return (
    <section ref={containerRef} id="showcase" className="relative bg-background pt-32">
      
      {/* Continuous Vertical Progress Line */}
      <div className="absolute left-[50px] md:left-[100px] lg:left-[180px] top-[250px] bottom-[200px] w-[2px] bg-primary/60 z-10 hidden md:block">
        
        {/* Permanent Markers - Placeholder capsules for each category */}
        {[0, 0.25, 0.5, 0.75, 1].map((pos, idx) => (
          <div 
            key={idx}
            className="absolute -left-[13px] w-7 h-11 border border-primary/20 rounded-full bg-background/20 backdrop-blur-[2px] translate-y-[-50%]"
            style={{ top: `${pos * 100}%` }}
          />
        ))}

        <motion.div 
          style={{ top: scrollY }}
          className="absolute -left-[32px] flex flex-col items-center gap-2 group z-50 pointer-events-none"
        >
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] whitespace-nowrap bg-background/80 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">
            Scroll
          </span>
          <div className="w-7 h-11 border-2 border-primary rounded-full flex justify-center pt-2 bg-background/80 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.4)]">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full shadow-[0_0_10px_#8b5cf6]"
            />
          </div>
        </motion.div>
      </div>

      {/* Section Header - Left Aligned */}
      <div className="px-10 md:px-24 mb-24">
        <SectionHeading
          title="The Showcase"
          subtitle="Explore my work, achievements, and leadership"
          align="left"
        />
      </div>

      {/* 1. Projects Section */}
      <HorizontalScrollRow 
        title="Projects" 
        data={projects}
        height="h-[250vh]"
        trackHeight="h-[450px]"
        labelSize="text-3xl md:text-5xl"
        renderCard={(project, i) => (
          <div
            key={i}
            className="group relative w-[80vw] md:w-[60vw] lg:w-[45vw] h-full flex-shrink-0 rounded-3xl overflow-hidden border border-border bg-card shadow-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
              <p className="text-primary font-bold tracking-widest text-sm uppercase mb-3">
                {project.category}
              </p>
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
                {project.title.split("–")[0].trim()}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mb-8 max-w-2xl">
                {project.techStack.slice(0, 5).map((tech: string, j: number) => (
                  <span key={j} className="text-xs font-semibold px-3 py-1 bg-secondary text-secondary-foreground rounded-full border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform w-fit"
              >
                View Case Study <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      />

      {/* 2. Achievements Section */}
      <HorizontalScrollRow 
        title="Achievements" 
        data={achievements}
        height="h-[250vh]"
        trackHeight="h-[450px]"
        labelSize="text-3xl md:text-5xl"
        renderCard={(item, i) => (
          <Link 
            href={`/achievements/${item.slug}`}
            key={i}
            className="group relative w-[300px] md:w-[400px] h-full flex-shrink-0 rounded-2xl overflow-hidden border border-border bg-card flex flex-col justify-end shadow-lg transition-all hover:border-primary/50 hover:shadow-primary/10"
          >
            {item.hasPhoto !== false && item.image && (
              <div className="absolute inset-0">
                 <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
            )}
            
            <div className={`relative p-8 ${item.hasPhoto === false ? "bg-card h-full justify-center flex flex-col" : ""}`}>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">{item.organization}</span>
              <h3 className="text-2xl font-black text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-bold text-primary mb-4 italic">
                {item.year}
              </p>
              <p className="text-sm text-foreground/90 font-medium leading-relaxed line-clamp-3 mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                View Details <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        )}
      />

      {/* 3. Certifications Section */}
      <HorizontalScrollRow 
        title="Certifications" 
        data={certifications}
        height="h-[250vh]"
        trackHeight="h-[450px]"
        labelSize="text-3xl md:text-5xl"
        renderCard={(cert, i) => (
          <Link 
            href={`/certifications/${cert.slug}`}
            key={i}
            className="group relative w-[300px] md:w-[400px] h-full flex-shrink-0 rounded-2xl overflow-hidden border border-border bg-card flex flex-col justify-end shadow-lg transition-all hover:border-primary/50 hover:shadow-primary/10"
          >
            {cert.image && (
              <div className="absolute inset-0">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
            )}
            <div className="relative p-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">{cert.organization}</span>
              <h3 className="text-2xl font-black text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-bold text-primary mb-4 italic">
                {cert.year}
              </p>
              <p className="text-sm text-foreground/90 font-medium leading-relaxed line-clamp-3 mb-6">
                {cert.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                View Certificate <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        )}
      />

      {/* 4. Leadership Section */}
      <HorizontalScrollRow 
        title="Leadership" 
        data={leadership}
        height="h-[250vh]"
        trackHeight="h-[450px]"
        labelSize="text-3xl md:text-5xl"
        renderCard={(item, i) => (
          <Link 
            href={`/leadership/${item.slug}`}
            key={i}
            className="group relative w-[300px] md:w-[400px] h-full flex-shrink-0 rounded-2xl overflow-hidden border border-border bg-card flex flex-col justify-end shadow-lg transition-all hover:border-primary/50 hover:shadow-primary/10"
          >
             <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.role}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

            <div className="relative p-8 h-fit">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">{item.organization}</span>
              <h3 className="text-2xl font-black text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <p className="text-sm font-bold text-primary mb-4 italic">
                {leadership.length > 0 ? "Leadership Role" : ""}
              </p>
              <p className="text-sm text-foreground/90 font-medium leading-relaxed line-clamp-3 mb-6">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                View Role Details <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        )}
      />
    </section>
  );
}

function HorizontalScrollRow({
  title,
  data,
  height,
  trackHeight = "h-[65vh]",
  labelSize = "text-4xl md:text-6xl",
  renderCard
}: {
  title: string;
  data: any[];
  height: string;
  trackHeight?: string;
  labelSize?: string;
  renderCard: (item: any, index: number) => React.ReactNode;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal travel based on data length. 
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", `-${(data.length) * 35}%`]);

  return (
    <div ref={targetRef} className={`relative ${height}`}>
      {/* 
          Sticky container is now h-fit (matches cards) and sticks with an offset. 
          This removes the huge h-screen "empty buffer" between rows.
      */}
      <div className="sticky top-40 flex h-fit items-start overflow-hidden z-20">

        {/* Horizontal Moving Track */}
        <motion.div style={{ x }} className={`flex gap-12 pl-12 md:pl-24 pr-48 ${trackHeight} items-center`}>
          
          {/* Vertical Label - Strictly constrained to card height */}
          <div className="flex flex-col h-full items-center mr-10 flex-shrink-0 justify-center overflow-hidden">
            <h2 
              className={`${labelSize} font-black text-foreground/35 uppercase tracking-tighter rotate-180 select-none whitespace-nowrap`} 
              style={{ writingMode: 'vertical-rl' }}
            >
              {title}
            </h2>
          </div>

          {data.map((item, i) => renderCard(item, i))}
        </motion.div>
      </div>
    </div>
  );
}

