"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Layers,
  TrendingUp,
  ChevronRight,
  Zap,
  Users,
  Briefcase,
  FileText,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { LeadershipItem, Project } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ImageLightbox } from "@/components/ImageLightbox";
import { Linkedin } from "lucide-react";

interface LeadershipDetailClientProps {
  item: LeadershipItem;
  prevLeadership: LeadershipItem | null;
  nextLeadership: LeadershipItem | null;
  relatedProject: Project | null;
}

export function LeadershipDetailClient({
  item,
  prevLeadership,
  nextLeadership,
  relatedProject,
}: LeadershipDetailClientProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* ... hero and other sections ... */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <ChevronRight size={14} />
              <Link href="/#showcase" className="transition-colors hover:text-foreground">Showcase</Link>
              <ChevronRight size={14} />
              <span className="text-foreground">Leadership Detail</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Users size={28} />
                 </div>
                 <span className="text-xl font-bold text-primary">{item.organization}</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6 leading-tight">
                {item.role}
              </h1>
              
              <p className="text-xl text-primary font-medium italic mb-8">
                "{item.tagline}"
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                 <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-2 text-sm font-bold text-secondary-foreground shadow-sm">
                    <Briefcase size={16} className="text-primary" />
                    Leadership Role
                 </span>
                 {item.linkedInPost && (
                    <a
                      href={item.linkedInPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2 text-sm font-bold text-[#0077B5] shadow-sm transition-all hover:border-primary hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Linkedin size={16} /> 
                      {item.slug === "ipl-auction" ? "View LinkedIn Profile" : "View LinkedIn Post"}
                    </a>
                 )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Narrative & Highlights */}
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <FileText size={20} className="text-primary" />
                            Role Narrative
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {item.longDescription}
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <Zap size={20} className="text-primary" />
                            Key Highlights
                        </h2>
                        <div className="space-y-4">
                            {item.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/30">
                                    <div className="mt-1 h-5 w-5 flex-shrink-0 text-primary">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-sm font-medium text-foreground leading-relaxed">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>

        {/* Gallery Section - Moved here to follow Narrative & Highlights */}
        {item.gallery && item.gallery.length > 0 && (
          <section className="py-12 bg-secondary/20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                   <Users size={24} className="text-primary" />
                   Role in Action & Recognition
                </h2>
                <div className={`grid gap-8 ${
                  item.gallery.length === 1 
                    ? "grid-cols-1 max-w-2xl mx-auto" 
                    : item.gallery.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}>
                  {item.gallery.map((img, i) => (
                    <ImageLightbox key={i} src={img} alt={`${item.role} evidence ${i + 1}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                        <Image
                          src={img}
                          alt={`${item.role} gallery image ${i + 1}`}
                          fill
                          className="object-contain p-6 transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                      </div>
                    </ImageLightbox>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
        {/* Responsibilities & Outcomes Detail */}
        <section className="py-12 bg-secondary/20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold text-foreground mb-6">Core Responsibilities</h2>
                        <div className="space-y-3">
                            {item.responsibilities.map((task, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{task}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl font-bold text-foreground mb-6">Quantifiable Outcomes</h2>
                        <div className="space-y-4">
                            {item.outcomes.map((outcome, i) => (
                                <div key={i} className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4 py-2 hover:border-primary transition-colors">
                                    <span className="text-lg font-bold text-foreground">{outcome.split(":")[0]}</span>
                                    <p className="text-sm text-muted-foreground">{outcome.split(":")[1] || outcome}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>



        {/* Leadership Toolkit (Skills) */}
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <AnimatedSection>
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center underline decoration-primary/30 underline-offset-8">Leadership Toolkit</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {item.skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-bold text-primary shadow-sm hover:bg-primary hover:text-white transition-all cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* Lessons Learned */}
        {item.learnings && item.learnings.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-foreground mb-6">Ethos & Takeaways</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {item.learnings.map((lesson, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Target size={20} />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Navigation Footer */}
        <section className="py-20 border-t border-border">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Previous Leadership */}
                    {prevLeadership ? (
                        <Link href={`/leadership/${prevLeadership.slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4 block">Previous Role</span>
                            <div className="flex items-center gap-3">
                                <ArrowLeft className="text-primary group-hover:-translate-x-2 transition-transform" />
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{prevLeadership.role}</h4>
                            </div>
                        </Link>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-border p-6 flex items-center justify-center opacity-40">
                             <span className="text-xs font-bold uppercase tracking-widest">Initial Role</span>
                        </div>
                    )}

                    {/* Associated Project */}
                    {relatedProject && (
                         <Link href={`/projects/${relatedProject.slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4 block">Engineered Project</span>
                            <div className="flex items-center gap-3">
                                <Layers className="text-primary" />
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{relatedProject.title.split("–")[0].trim()}</h4>
                            </div>
                        </Link>
                    )}

                    {/* Next Leadership */}
                    {nextLeadership ? (
                        <Link href={`/leadership/${nextLeadership.slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4 block">Next Role</span>
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{nextLeadership.role}</h4>
                                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-border p-6 flex items-center justify-center opacity-40">
                             <span className="text-xs font-bold uppercase tracking-widest">Current Roles</span>
                        </div>
                    )}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link href="/#showcase" className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-bold hover:scale-105 shadow-lg shadow-primary/25 transition-all">
                        Back to Showcase
                    </Link>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
