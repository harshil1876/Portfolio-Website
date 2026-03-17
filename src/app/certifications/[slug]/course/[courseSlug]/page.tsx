import { notFound } from "next/navigation";
import { certifications } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PDFViewer } from "@/components/PDFViewer";
import { ChevronRight, ArrowLeft, BadgeCheck, Lightbulb, Target } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

type Props = {
  params: Promise<{ slug: string; courseSlug: string }>;
};

export default async function CourseDetailPage(props: Props) {
  const { slug, courseSlug } = await props.params;
  
  const cert = certifications.find((c) => c.slug === slug);
  if (!cert) notFound();

  const course = cert.courses.find((c) => c.slug === courseSlug);
  if (!course) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="py-12 sm:py-20 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <ChevronRight size={14} />
              <Link href="/#certifications" className="transition-colors hover:text-foreground">Certifications</Link>
              <ChevronRight size={14} />
              <Link href={`/certifications/${cert.slug}`} className="transition-colors hover:text-foreground">{cert.organization}</Link>
              <ChevronRight size={14} />
              <span className="text-foreground truncate max-w-[150px] sm:max-w-none">{course.title}</span>
            </div>

            <AnimatedSection>
              <div className="mb-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                  <BadgeCheck size={14} /> Course Component
                </span>
                <h1 className="text-3xl font-bold text-foreground mb-2">{course.title}</h1>
                <p className="text-lg text-primary font-medium">{course.platform}</p>
              </div>

              {/* PDF Viewer Section */}
              <div className="bg-card rounded-2xl border border-border shadow-2xl p-2 sm:p-4 mb-12">
                <PDFViewer url={course.pdfUrl} title={`${course.title} Certificate`} />
              </div>

              {/* Course Metadata Section */}
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                   <div>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-primary" />
                        Course Summary
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {course.summary}
                    </p>
                   </div>

                   <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <Lightbulb size={18} className="text-yellow-500" />
                                Key Learnings
                            </h3>
                            <ul className="space-y-3">
                                {course.learnings.map((learning, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                                    {learning}
                                </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <Target size={18} className="text-green-500" />
                                Practical Outcomes
                            </h3>
                            <ul className="space-y-3">
                                {course.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                                    {outcome}
                                </li>
                                ))}
                            </ul>
                        </div>
                   </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24 rounded-2xl border border-border bg-muted/30 p-6">
                        <h3 className="font-bold text-foreground mb-4">Part of Specialization</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            This course is part of the <strong>{cert.title}</strong> by {cert.organization}.
                        </p>
                        <Link
                            href={`/certifications/${cert.slug}`}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90"
                        >
                            View Specialization
                        </Link>
                    </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="mt-16 pt-8 border-t border-border">
               <Link
                href={`/certifications/${cert.slug}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-md"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to Specialization
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Add FileText icon to imports
import { FileText } from "lucide-react";
