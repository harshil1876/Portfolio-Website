import { notFound } from "next/navigation";
import { certifications } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PDFViewer } from "@/components/PDFViewer";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CertViewPage(props: Props) {
  const { slug } = await props.params;
  const cert = certifications.find((c) => c.slug === slug);

  if (!cert || !cert.pdfUrl) {
    notFound();
  }

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
              <span className="text-foreground">Certificate PDF</span>
            </div>

            <AnimatedSection>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">{cert.title}</h1>
                <p className="text-muted-foreground">Official Digital Certificate</p>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-2xl p-2 sm:p-4">
                <PDFViewer url={cert.pdfUrl} title={cert.title} />
              </div>
            </AnimatedSection>

            <div className="mt-12">
               <Link
                href={`/certifications/${cert.slug}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-md"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
