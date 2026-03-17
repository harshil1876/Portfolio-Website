import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { VersionDetailClient } from "./VersionDetailClient";

type Props = {
  params: Promise<{ slug: string; vSlug: string }>;
};

export default async function ProjectVersionPage(props: Props) {
  const { slug, vSlug } = await props.params;
  
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();
  const project = projects[projectIndex];

  if (!project.versions) notFound();
  
  const versionIndex = project.versions.findIndex((v) => v.slug === vSlug);
  if (versionIndex === -1) notFound();
  const version = project.versions[versionIndex];

  // Calculate version navigation
  const prevVersion = versionIndex > 0 ? project.versions[versionIndex - 1] : null;
  const nextVersion = versionIndex < project.versions.length - 1 ? project.versions[versionIndex + 1] : null;

  // Calculate project navigation
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <VersionDetailClient 
      project={project} 
      version={version}
      prevVersion={prevVersion}
      nextVersion={nextVersion}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
