"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Code2,
  ArrowLeft,
  FileText,
  MousePointer2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  personalInfo,
  education,
  experience,
  skillCategories,
  certifications,
} from "@/lib/data";

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"pdf" | "interactive">("pdf");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {personalInfo.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-primary">
                  {personalInfo.headline}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {personalInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail size={14} /> {personalInfo.email}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center rounded-xl bg-secondary/50 p-1 border border-border">
                  <button
                    onClick={() => setViewMode("pdf")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      viewMode === "pdf"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <FileText size={14} /> PDF
                  </button>
                  <button
                    onClick={() => setViewMode("interactive")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      viewMode === "interactive"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <MousePointer2 size={14} /> Interactive
                  </button>
                </div>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Download size={16} /> Download
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 mb-8 h-px bg-border" />

          {viewMode === "pdf" ? (
            <AnimatedSection>
              <div className="w-full aspect-[1/1.414] max-h-[1200px] overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
                <iframe
                  src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-0"
                  title="PDF Resume Resume"
                />
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-10">
              {/* Summary */}
              <AnimatedSection delay={0.1}>
            <section className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="h-6 w-1 rounded-full bg-primary" />
                Summary
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {personalInfo.summary}
              </p>
            </section>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection delay={0.2}>
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <Briefcase size={18} className="text-primary" /> Experience
              </h2>
              {experience.map((exp, i) => (
                <div key={i} className="mt-5 rounded-xl border border-border bg-card p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {exp.description.map((d, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={0.3}>
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <GraduationCap size={18} className="text-primary" /> Education
              </h2>
              {education.map((edu, i) => (
                <div key={i} className="mt-5 rounded-xl border border-border bg-card p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        CGPA: {edu.cgpa}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                  {edu.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {edu.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection delay={0.4}>
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <Code2 size={18} className="text-primary" /> Skills
              </h2>
              <div className="mt-5 space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.title} className="flex flex-col gap-2 sm:flex-row sm:items-start">
                    <span className="w-40 flex-shrink-0 text-sm font-semibold text-foreground">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.5}>
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground mb-5">
                <span className="h-6 w-1 rounded-full bg-primary" />
                Certifications
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {cert.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.organization} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
              </AnimatedSection>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
