"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Medal,
  TrendingUp,
  ChevronRight,
  Zap,
  Globe,
  Award,
  FileText,
  Linkedin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Achievement, Project } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ImageLightbox } from "@/components/ImageLightbox";
import { useState } from "react";
import { PDFViewer } from "@/components/PDFViewer";

interface AchievementDetailClientProps {
  achievement: Achievement;
  prevAchievement: Achievement | null;
  nextAchievement: Achievement | null;
  relatedProjects: Project[];
}

export function AchievementDetailClient({
  achievement,
  prevAchievement,
  nextAchievement,
  relatedProjects,
}: AchievementDetailClientProps) {
  const [showPdf, setShowPdf] = useState(false);

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
              <span className="text-foreground">Achievement Detail</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Award size={28} />
                 </div>
                 <span className="text-xl font-bold text-primary">{achievement.organization}</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                {achievement.title}
              </h1>
              
              <p className="text-xl text-primary font-medium italic mb-8">
                "{achievement.tagline}"
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                 <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground border border-border">
                    <Medal size={16} className="text-primary" />
                    {achievement.year}
                 </span>
                 <div className="flex items-center gap-4">
                    {achievement.url && (
                        <a 
                            href={achievement.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4"
                        >
                            Verify Credential <Globe size={16} />
                        </a>
                    )}
                     {achievement.pdfUrl && (
                        <button 
                            onClick={() => setShowPdf(!showPdf)}
                            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline underline-offset-4"
                        >
                            {showPdf ? "Hide Certificate PDF" : "View Certificate PDF"} <FileText size={16} />
                        </button>
                     )}
                     {achievement.linkedInPost && (
                        <a 
                            href={achievement.linkedInPost} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#0077B5] hover:underline underline-offset-4"
                        >
                            View LinkedIn Post <Linkedin size={16} />
                        </a>
                     )}
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Embedded PDF Viewer Section */}
        {showPdf && achievement.pdfUrl && (
            <section className="pb-12 bg-background">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden"
                    >
                        <PDFViewer url={achievement.pdfUrl} title={`${achievement.title} Certificate`} />
                    </motion.div>
                </div>
            </section>
        )}

        {/* Story & Impact */}
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold text-foreground mb-6">The Story</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {achievement.longDescription}
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl font-bold text-foreground mb-6">Impact & Recognition</h2>
                        <div className="space-y-4">
                            {achievement.impact.map((point, i) => (
                                <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/30">
                                    <div className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500">
                                        <TrendingUp size={20} />
                                    </div>
                                    <span className="text-sm font-medium text-foreground leading-relaxed">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>

        {/* Gallery Section - Moved here to follow Story & Impact */}
        {achievement.gallery && achievement.gallery.length > 0 && (
          <section className="py-12 bg-secondary/20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                   <Zap size={24} className="text-primary" />
                   Evidence & Recognition
                </h2>
                <div className={`grid gap-8 ${
                  achievement.gallery.length === 1 
                    ? "grid-cols-1 max-w-2xl mx-auto" 
                    : achievement.gallery.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}>
                  {achievement.gallery.map((img, i) => (
                    <ImageLightbox key={i} src={img} alt={`${achievement.title} evidence ${i + 1}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                        <Image
                          src={img}
                          alt={`${achievement.title} gallery image ${i + 1}`}
                          fill
                          className="object-contain p-4 transition-transform duration-500 hover:scale-105"
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

        {/* Skills & Takeaways */}
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold text-foreground mb-6">Skills Demonstrated</h2>
                        <div className="flex flex-wrap gap-2">
                            {achievement.skills.map((skill) => (
                                <span key={skill} className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl font-bold text-foreground mb-6">Key Takeaways</h2>
                        <div className="space-y-4">
                            {achievement.learnings.map((lesson, i) => (
                                <div key={i} className="flex items-start gap-4 p-2">
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{lesson}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>

        {/* Navigation Footer */}
        <section className="py-20 border-t border-border bg-muted/20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="mb-12 text-center">
                    <h3 className="text-2xl font-black text-foreground mb-3">Explore the Journey</h3>
                    <p className="text-muted-foreground">Continue discovering more milestones and projects</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Previous Achievement */}
                    {prevAchievement ? (
                        <Link href={`/achievements/${prevAchievement.slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4 block">Previous Achievement</span>
                            <div className="flex items-center gap-3">
                                <ArrowLeft className="text-primary group-hover:-translate-x-2 transition-transform" />
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{prevAchievement.title}</h4>
                            </div>
                        </Link>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-border p-6 flex items-center justify-center opacity-40">
                            <span className="text-xs font-bold uppercase tracking-widest">Initial Achievement</span>
                        </div>
                    )}

                    {/* Related Projects */}
                    {relatedProjects.length > 0 && (
                         <Link href={`/projects/${relatedProjects[0].slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4 block">Associated Project</span>
                            <div className="flex items-center gap-3">
                                <Zap className="text-primary" />
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{relatedProjects[0].title.split("–")[0].trim()}</h4>
                            </div>
                        </Link>
                    )}

                    {/* Next Achievement */}
                    {nextAchievement ? (
                        <Link href={`/achievements/${nextAchievement.slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4 block">Next Achievement</span>
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{nextAchievement.title}</h4>
                                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-border p-6 flex items-center justify-center opacity-40">
                             <span className="text-xs font-bold uppercase tracking-widest">Final Milestone</span>
                        </div>
                    )}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link href="/#showcase" className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-white transition-all">
                        Return to Showcase
                    </Link>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
