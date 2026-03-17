"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MapPin, Mail, ArrowRight, Download, Briefcase, GraduationCap, Code2, ExternalLink, Globe, Languages } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, aboutText, experience, education, skillCategories } from "@/lib/data";
import { ExpandableBentoCard } from "./ExpandableBentoCard";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

function BentoCard({ children, className = "" }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // For 3D Tilt
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // For Glow effect
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 overflow-hidden flex flex-col group ${className}`}
    >
      {/* Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Content wrapper with translateZ for depth */}
      <div 
        className="relative z-10 w-full h-full flex flex-col"
        style={{ transform: "translateZ(30px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function BentoFoundation() {
  return (
    <section id="profile" className="min-h-screen py-24 flex items-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-foreground mb-8 ml-2">Profile</h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* Main Hero Tile (Spans 2x2) */}
          <ExpandableBentoCard
            id="hero"
            className="md:col-span-2 md:row-span-2 group"
            triggerCard={
              <BentoCard className="h-full">
                <div className="flex flex-col h-full justify-between relative">
                  <div>
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                      <Image
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 tracking-tight">
                      Hi, I&apos;m {personalInfo.name.split(" ")[0]}
                    </h1>
                    <p className="mt-2 text-lg font-medium text-primary">
                      {personalInfo.headline}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full border border-border">
                        <MapPin size={14} /> {personalInfo.location}
                      </span>
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full border border-border">
                        <Mail size={14} /> {personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      View Full Profile
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </div>
              </BentoCard>
            }
            expandedContent={
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 tracking-tight">
                      {personalInfo.name}
                    </h2>
                    <p className="mt-2 text-xl font-medium text-primary">
                      {personalInfo.headline}
                    </p>
                  </div>
                  <div className="p-6 bg-secondary/20 rounded-2xl border border-border/50">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {personalInfo.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                    <Link 
                      href={personalInfo.github} 
                      target="_blank"
                      className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-4 py-2 rounded-xl transition-colors font-medium"
                    >
                      <ExternalLink size={18} /> GitHub
                    </Link>
                    <Link 
                      href={personalInfo.linkedin} 
                      target="_blank"
                      className="flex items-center gap-2 bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5]/20 px-4 py-2 rounded-xl transition-colors font-medium border border-[#0077b5]/20"
                    >
                      <ExternalLink size={18} /> LinkedIn
                    </Link>
                    <Link 
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-xl transition-colors font-medium border border-primary/20"
                    >
                      <Mail size={18} /> Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            }
          />

          {/* About Tile (Spans 2x1) */}
          <ExpandableBentoCard
            id="about"
            className="md:col-span-2 md:row-span-1 group"
            triggerCard={
              <BentoCard className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> About Me
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed line-clamp-5 group-hover:text-foreground/80 transition-colors">
                    {aboutText[0]} {aboutText[1]}
                  </p>
                  <p className="text-xs text-primary font-bold mt-auto pt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More <ArrowRight size={12} />
                  </p>
                </div>
              </BentoCard>
            }
            expandedContent={
              <div className="space-y-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-8">
                  About Me
                </h2>
                {aboutText.map((paragraph, idx) => (
                  <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            }
          />

          {/* Experience Tile (Spans 1x1) */}
          <ExpandableBentoCard
            id="experience"
            className="md:col-span-1 md:row-span-1 group"
            triggerCard={
              <BentoCard className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <Briefcase size={14} /> Experience
                  </h3>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="font-bold text-foreground text-lg leading-tight">
                      {experience[0].role}
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">
                      @ {experience[0].company.split(" ")[0]} {experience[0].company.split(" ")[1]}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {experience[0].duration}
                    </p>
                    <p className="text-xs text-primary font-bold mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight size={12} />
                    </p>
                  </div>
                </div>
              </BentoCard>
            }
            expandedContent={
              <div className="space-y-8">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-8 flex items-center gap-3">
                  <Briefcase className="text-primary" /> Professional Experience
                </h2>
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-primary/20 bg-secondary/20 p-6 rounded-2xl">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-6 ring-4 ring-background" />
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-lg font-medium text-primary mt-1">{exp.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                      <span className="px-2 py-1 bg-secondary rounded-md text-xs font-semibold">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="text-primary font-bold mt-1">▹</span> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            }
          />

          {/* Education Tile (Spans 1x1) */}
          <ExpandableBentoCard
            id="education"
            className="md:col-span-1 md:row-span-1 group"
            triggerCard={
              <BentoCard className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <GraduationCap size={14} /> Education
                  </h3>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="font-bold text-foreground text-lg leading-tight">
                      {education[0].degree.split("–")[0].trim()}
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">
                      SVIT Vasad
                    </p>
                    <p className="text-xs font-semibold bg-primary/10 text-primary w-max px-2 py-1 rounded-md mt-2">
                      CGPA: {education[0].cgpa}
                    </p>
                    <p className="text-xs text-primary font-bold mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Full History <ArrowRight size={12} />
                    </p>
                  </div>
                </div>
              </BentoCard>
            }
            expandedContent={
              <div className="space-y-8">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-8 flex items-center gap-3">
                  <GraduationCap className="text-primary" /> Education History
                </h2>
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-primary/20 bg-secondary/20 p-6 rounded-2xl">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-6 ring-4 ring-background" />
                    <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-lg font-medium text-primary mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-secondary rounded-md text-xs font-semibold">
                        {edu.year}
                      </span>
                      {edu.cgpa && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-bold ring-1 ring-primary/30">
                          CGPA: {edu.cgpa}
                        </span>
                      )}
                    </div>
                    <ul className="mt-6 space-y-3">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="text-primary font-bold mt-1">▹</span> {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            }
          />

          {/* Skills Tile (Spans 2x1) */}
          <ExpandableBentoCard
            id="skills"
            className="md:col-span-2 md:row-span-1 group"
            triggerCard={
              <BentoCard className="h-full overflow-hidden relative">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <Code2 size={14} /> Core Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "SQL", "C", "Machine Learning", "Data Analytics", 
                    "Data Visualization", "RAG Pipelines", "Prompt Engineering", 
                    "EDA", "Django", "Flask", "LangChain"
                  ].map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-xs font-bold bg-primary text-primary-foreground rounded-lg flex items-center gap-1 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">
                    View All <ArrowRight size={14} />
                  </span>
                </div>
              </BentoCard>
            }
            expandedContent={
              <div className="space-y-8">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-8 flex items-center gap-3">
                  <Code2 className="text-primary" /> Technical Proficiency
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-secondary/20 rounded-2xl p-6 border border-border/50">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {category.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5 mb-6 overflow-hidden">
                        <motion.div 
                          className="bg-primary h-2.5 rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ width: `${category.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Language Tile (Spans 1x1) */}
          <ExpandableBentoCard
            id="languages"
            className="md:col-span-1 md:row-span-1 group"
            triggerCard={
              <BentoCard className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <Languages size={14} /> Language
                  </h3>
                  <div className="space-y-3">
                    {(personalInfo as any).languages.map((lang: any, idx: number) => (
                      <div key={idx}>
                        <p className="text-sm font-bold text-foreground">{lang.name}</p>
                        <p className="text-[10px] text-primary/80 font-medium leading-tight">
                          {lang.proficiency}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            }
            expandedContent={
              <div className="space-y-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-8 flex items-center gap-3">
                  <Globe className="text-primary" /> Languages & Proficiency
                </h2>
                <div className="grid gap-4">
                  {(personalInfo as any).languages.map((lang: any, idx: number) => (
                    <div key={idx} className="p-4 bg-secondary/20 rounded-xl border border-border/50 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{lang.name}</h3>
                        <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div 
                            key={star}
                            className={`w-2 h-2 rounded-full ${
                              star <= (idx === 0 ? 5 : idx === 1 ? 4 : 5) 
                                ? "bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" 
                                : "bg-secondary"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Resume Tile (Spans 1x1) */}
          <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/50 transition-colors">
            <div className="flex flex-col h-full items-center justify-center text-center">
              <a 
                href="/resume"
                className="flex flex-col items-center gap-3 group/resume"
              >
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center shadow-lg group-hover/resume:scale-110 group-hover/resume:border-primary/50 transition-transform">
                  <Download size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">View Resume</p>
                  <p className="text-xs text-muted-foreground mt-1">Interactive PDF</p>
                </div>
              </a>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
