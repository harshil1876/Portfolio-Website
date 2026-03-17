import { notFound } from "next/navigation";
import { certifications } from "@/lib/data";
import { CertDetailClient } from "./CertDetailClient";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const cert = certifications.find((c) => c.slug === resolvedParams.slug);

  if (!cert) {
    return { title: "Certification Not Found" };
  }

  return {
    title: `${cert.title} | Harshil Patel`,
    description: cert.description,
  };
}

export function generateStaticParams() {
  return certifications.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CertificationPage(props: Props) {
  const params = await props.params;
  const cert = certifications.find((c) => c.slug === params.slug);

  if (!cert) {
    notFound();
  }

  return <CertDetailClient cert={cert} />;
}
