import { notFound } from "next/navigation";
import { leadership, projects } from "@/lib/data";
import { LeadershipDetailClient } from "./LeadershipDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LeadershipPage(props: Props) {
  const { slug } = await props.params;
  
  const leadershipIndex = leadership.findIndex((l) => l.slug === slug);
  if (leadershipIndex === -1) notFound();
  
  const item = leadership[leadershipIndex];

  // Calculate navigation
  const prevLeadership = leadershipIndex > 0 ? leadership[leadershipIndex - 1] : null;
  const nextLeadership = leadershipIndex < leadership.length - 1 ? leadership[leadershipIndex + 1] : null;

  // Find related project (e.g. IPL Auction Management System for IPL Auction Role)
  const relatedProject = projects.find(p => 
    item.role.toLowerCase().includes("ipl auction") && p.slug === "cricket-auction-system"
  ) || null;

  return (
    <LeadershipDetailClient 
      item={item}
      prevLeadership={prevLeadership}
      nextLeadership={nextLeadership}
      relatedProject={relatedProject}
    />
  );
}
