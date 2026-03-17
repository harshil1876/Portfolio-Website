"use client";

import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, BadgeCheck, FileText, ArrowLeft, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Certification } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ImageLightbox } from "@/components/ImageLightbox";

export function CertDetailClient({ cert }: { cert: Certification }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* ... hero and other sections ... */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-12 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <ChevronRight size={14} />
              <Link href="/#certifications" className="transition-colors hover:text-foreground">Certifications</Link>
              <ChevronRight size={14} />
              <span className="text-foreground">{cert.organization}</span>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-5 items-start">
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <BadgeCheck size={14} /> {cert.year}
                </span>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {cert.title}
                </h1>
                <p className="mt-3 text-lg text-primary font-medium">
                  {cert.organization}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} /> Verify Credential
                    </a>
                  )}
                  {cert.pdfUrl && (
                    <Link
                      href={`/certifications/${cert.slug}/view`}
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <FileText size={16} /> View Original PDF
                    </Link>
                  )}
                  {cert.linkedInPost && (
                    <a
                      href={cert.linkedInPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-[#0077B5] transition-all hover:border-primary hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Linkedin size={16} /> View LinkedIn Post
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ImageLightbox src={cert.image} alt={cert.title}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card shadow-xl group">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 400px"
                      priority
                    />
                  </div>
                </ImageLightbox>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learnings & Outcomes */}
        {(cert.learnings?.length > 0 || cert.outcomes?.length > 0) && (
          <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <div className="grid gap-8 md:grid-cols-2">
                {cert.learnings?.length > 0 && (
                  <AnimatedSection delay={0.1}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-full">
                      <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">Key Learnings</h3>
                      <ul className="space-y-3">
                        {cert.learnings.map((learning, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                )}

                {cert.outcomes?.length > 0 && (
                  <AnimatedSection delay={0.2}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-full">
                      <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">Practical Outcomes</h3>
                      <ul className="space-y-3">
                        {cert.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Courses Breakdown */}
        {cert.courses?.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-foreground mb-8">Courses inside this Specialization</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cert.courses.map((course, i) => (
                    <Link 
                      key={course.slug} 
                      href={`/certifications/${cert.slug}/course/${course.slug}`}
                      className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-primary/30"
                    >
                      <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-accent/5 p-4 border-b border-border">
                         <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                            <div className="flex flex-col items-center gap-2">
                              <FileText size={32} className="text-primary/50 group-hover:text-primary transition-colors" />
                              <span className="text-xs">View Course Details</span>
                            </div>
                         </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <h4 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors">{course.title}</h4>
                        <p className="mt-2 text-xs text-muted-foreground">{course.platform}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Back navigation */}
        <section className="py-12 border-t border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Link
              href="/#certifications"
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-md"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to All Certifications
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
