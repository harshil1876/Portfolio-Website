import { notFound } from "next/navigation";
import { achievements, projects } from "@/lib/data";
import { AchievementDetailClient } from "./AchievementDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AchievementPage(props: Props) {
  const { slug } = await props.params;
  
  const achievementIndex = achievements.findIndex((a) => a.slug === slug);
  if (achievementIndex === -1) notFound();
  
  const achievement = achievements[achievementIndex];

  // Calculate navigation
  const prevAchievement = achievementIndex > 0 ? achievements[achievementIndex - 1] : null;
  const nextAchievement = achievementIndex < achievements.length - 1 ? achievements[achievementIndex + 1] : null;

  // Find related projects (e.g. HealthVitals-AI for SSIP and MECIA)
  const relatedProjects = projects.filter(p => 
    achievement.title.toLowerCase().includes(p.title.split("–")[0].trim().toLowerCase()) ||
    achievement.longDescription.toLowerCase().includes(p.title.split("–")[0].trim().toLowerCase())
  );

  return (
    <AchievementDetailClient 
      achievement={achievement}
      prevAchievement={prevAchievement}
      nextAchievement={nextAchievement}
      relatedProjects={relatedProjects}
    />
  );
}
