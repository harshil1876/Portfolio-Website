"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Zap,
  Layers,
  FileText
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

interface VersionDetailClientProps {
  project: Project;
  version: any; // The specific version object
  prevVersion: any | null;
  nextVersion: any | null;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function VersionDetailClient({
  project,
  version,
  prevVersion,
  nextVersion,
  prevProject,
  nextProject,
}: VersionDetailClientProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Version Indicator Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
             {/* Breadcrumb */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <ChevronRight size={14} />
              <Link href="/#projects" className="transition-colors hover:text-foreground">Projects</Link>
              <ChevronRight size={14} />
              <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-foreground">
                {project.title.split("–")[0].trim()}
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground">{version.version}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest italic">
                  {version.slug === "current" ? "Current Version" : version.version.split("(")[0].trim()}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {project.title.split("–")[0].trim()} <span className="text-primary/50 text-2xl sm:text-3xl font-medium block sm:inline">({version.slug === "current" ? "Current" : version.version.split("(")[1]?.replace(")", "") || ""})</span>
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {version.longDescription || version.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Version Specific Gallery */}
        {version.gallery && version.gallery.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <FileText size={20} className="text-primary" />
                    Version Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {version.gallery.map((img: string, i: number) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-sm group">
                      <Image
                        src={img}
                        alt={`${version.version} gallery image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Problem → Solution → Impact (Version Specific) */}
        {(version.problem || version.solution || version.impact) && (
            <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="grid gap-6 md:grid-cols-3">
                {version.problem && (
                    <AnimatedSection delay={0.1}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-full">
                        <div className="inline-flex rounded-xl bg-red-500/10 p-3 mb-3">
                        <Target className="h-5 w-5 text-red-500 dark:text-red-400" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">The Challenge</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {version.problem}
                        </p>
                    </div>
                    </AnimatedSection>
                )}
                {version.solution && (
                    <AnimatedSection delay={0.2}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-full">
                        <div className="inline-flex rounded-xl bg-amber-500/10 p-3 mb-3">
                        <Lightbulb className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">The Approach</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {version.solution}
                        </p>
                    </div>
                    </AnimatedSection>
                )}
                {version.impact && (
                    <AnimatedSection delay={0.3}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-full">
                        <div className="inline-flex rounded-xl bg-emerald-500/10 p-3 mb-3">
                        <TrendingUp className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-base font-bold text-foreground">The Result</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {version.impact}
                        </p>
                    </div>
                    </AnimatedSection>
                )}
                </div>
            </div>
            </section>
        )}

        {/* Features & Tech (Version Specific) */}
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
             <div className="grid gap-12 lg:grid-cols-2">
                <AnimatedSection>
                    <h2 className="text-xl font-bold text-foreground mb-6">Key Capabilities</h2>
                    <div className="grid gap-3">
                        {version.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/30">
                            <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm text-foreground">{feature}</span>
                        </div>
                        ))}
                    </div>
                </AnimatedSection>

                {version.techStack && (
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-xl font-bold text-foreground mb-6">Tools & Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {version.techStack.map((tech: string) => (
                            <span key={tech} className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                                {tech}
                            </span>
                            ))}
                        </div>
                    </AnimatedSection>
                )}
             </div>
          </div>
        </section>

        {/* Lessons Learned */}
        {version.lessonsLearned && version.lessonsLearned.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-xl font-bold text-foreground mb-6">Key Takeaways</h2>
                <div className="space-y-3">
                  {version.lessonsLearned.map((lesson: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Custom Navigation Footer */}
        <section className="py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
             <div className="mb-8 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Explore Evolution & Context</h3>
                <p className="text-sm text-muted-foreground">Jump between versions or discover related projects</p>
             </div>

             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Previous Version */}
                {prevVersion ? (
                  <Link href={`/projects/${project.slug}/version/${prevVersion.slug}`} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Previous Version</span>
                     <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                        {prevVersion.version.split("(")[0].trim()}
                     </div>
                  </Link>
                ) : (
                  <div className="rounded-xl border border-dashed border-border p-4 flex flex-col items-center justify-center opacity-40">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Initial Version</span>
                  </div>
                )}

                {/* Previous Project (AI-CFO indicator) */}
                {prevProject ? (
                  <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Previous Project</span>
                     <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        <Layers size={14} />
                        {prevProject.title.split("–")[0].trim()}
                     </div>
                  </Link>
                ) : (
                  <div className="rounded-xl border border-dashed border-border p-4 flex flex-col items-center justify-center opacity-40">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">First Project</span>
                  </div>
                )}

                {/* All Projects */}
                <Link href="/#projects" className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Showcase</span>
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                       View All Projects
                    </div>
                </Link>

                {/* Next Project */}
                {nextProject ? (
                  <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Next Project</span>
                     <div className="flex items-center justify-between gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        <span className="truncate">{nextProject.title.split("–")[0].trim()}</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                     </div>
                  </Link>
                ) : (
                  <div className="rounded-xl border border-dashed border-border p-4 flex flex-col items-center justify-center opacity-40">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Final Project</span>
                  </div>
                )}
             </div>

             <div className="mt-8 flex justify-center">
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5">
                    Back to Current Project Details
                    <ChevronRight size={16} />
                </Link>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
