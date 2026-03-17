"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Layers,
  Lightbulb,
  Target,
  Zap,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ImageLightbox } from "@/components/ImageLightbox";

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-16 sm:py-24">
          {/* ... existing breadcrumb and text content ... */}
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/#projects"
                className="transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground">
                {project.title.split("–")[0].trim()}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {project.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-lg text-primary font-medium">
                {project.tagline}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {project.longDescription}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Github size={16} /> View Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        {project.heroImage && (
          <section className="py-8">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <AnimatedSection>
                <ImageLightbox src={project.heroImage} alt={`${project.title} Hero Image`}>
                  <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg aspect-video bg-secondary/20">
                    <Image
                      src={project.heroImage}
                      alt={`${project.title} Hero Image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      priority
                    />
                  </div>
                </ImageLightbox>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery.map((img, i) => (
                    <ImageLightbox key={i} src={img} alt={`${project.title} gallery image ${i + 1}`}>
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
                        <Image
                          src={img}
                          alt={`${project.title} gallery image ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </ImageLightbox>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Architecture Diagram */}
        {project.architectureImage && (
          <section className="py-12 bg-secondary/10">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
              <AnimatedSection delay={0.3}>
                <h2 className="text-2xl font-bold text-foreground mb-8">System Architecture</h2>
                <div className="mx-auto max-w-4xl">
                  <ImageLightbox 
                    src={project.architectureImage} 
                    alt={`${project.title} System Architecture`}
                    className="border border-border/50 shadow-2xl rounded-3xl"
                  />
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Problem → Solution → Impact */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Problem",
                  text: project.problem,
                  color: "text-red-500 dark:text-red-400",
                  bg: "bg-red-500/10",
                },
                {
                  icon: Lightbulb,
                  title: "Solution",
                  text: project.solution,
                  color: "text-amber-500 dark:text-amber-400",
                  bg: "bg-amber-500/10",
                },
                {
                  icon: TrendingUp,
                  title: "Impact",
                  text: project.impact,
                  color: "text-emerald-500 dark:text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-full">
                    <div className={`inline-flex rounded-xl ${item.bg} p-3 mb-3`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Key Features
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Versions */}
        {project.versions && project.versions.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Project Versions & Evolution
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.versions.map((v, i) => (
                    <Link
                      key={v.slug}
                      href={v.slug === "current" ? `/projects/${project.slug}` : `/projects/${project.slug}/version/${v.slug}`}
                      className={`group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md ${v.slug === "current" ? "ring-1 ring-primary/20 bg-primary/5" : ""}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{v.version}</h3>
                        {v.slug === "current" && (
                          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider">Current</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{v.description}</p>
                      
                      {v.features.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {v.features.slice(0, 3).map((feature, j) => (
                            <span key={j} className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                              <Target size={10} className="text-primary" />
                              {feature}
                            </span>
                          ))}
                          {v.features.length > 3 && (
                            <span className="text-[10px] text-muted-foreground font-medium">+{v.features.length - 3} more</span>
                          )}
                        </div>
                      )}

                      <div className="mt-6 flex items-center justify-between text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>{v.slug === "current" ? "Viewing Now" : "View Version Details"}</span>
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary hover:shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>



        {/* Lessons Learned */}
        {project.lessonsLearned.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Lessons Learned
                </h2>
                <div className="space-y-3">
                  {project.lessonsLearned.map((lesson, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {lesson}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-12 border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex items-center justify-between">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-md"
                >
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Previous</p>
                    <p className="text-sm">
                      {prevProject.title.split("–")[0].trim()}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Link
                href="/#projects"
                className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-foreground"
              >
                All Projects
              </Link>

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Next</p>
                    <p className="text-sm">
                      {nextProject.title.split("–")[0].trim()}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
