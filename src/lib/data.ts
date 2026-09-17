// ==========================================
// Portfolio Data
// ==========================================

export const personalInfo = {
  name: "Harshil Patel",
  headline: "AI & Data Science Engineer | Building Intelligent Systems",
  summary:
    "Information Technology graduate from SVIT Vasad (CGPA 9.15) specializing in AI-driven analytics, machine learning, Generative AI, AI automation, and full-stack development. Focused on building intelligent platforms and workflows to solve real business problems.",
  location: "Vadodara, Gujarat, India",
  email: "harshilpatel1876@gmail.com",
  phone: "+91 6354252779",
  linkedin: "http://www.linkedin.com/in/harshil-patel-833768258",
  github: "https://github.com/harshil1876",
  portfolio: "https://harshilpatel.dev",
  resumeUrl: "/assets/resume/Harshil Resume.pdf",
  profileImage: "/assets/profile/profile.jpeg",
  languages: [
    { name: "English", proficiency: "Full professional proficiency" },
    { name: "Gujarati", proficiency: "Professional working proficiency" },
    { name: "Hindi", proficiency: "Native or bilingual proficiency" },
  ],
};

export const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "10+" },
  { label: "Experience", value: "1+ yr" },
  { label: "CGPA", value: "9.15" },
];

export const aboutText = [
  "I'm an Information Technology graduate from SVIT Vasad with a CGPA of 9.15, specializing in AI-driven analytics, machine learning, Generative AI, AI automation, and full-stack development. My work spans AI-powered healthcare platforms, enterprise financial intelligence systems at Gujarat Alkalies and Chemicals Ltd., and AI-driven automation solutions.",
  "I thrive at the intersection of engineering, analytics, and automation — building intelligent platforms and workflows that solve real business problems. From working on RAG pipelines for AI-CFO automation software to developing a self-hosted AI Personal Agent using n8n, Google Gemini, PostgreSQL, and Slack, I focus on connecting AI with real-world tools to automate tasks, manage information, and improve productivity.",
  "Beyond technical work, I'm an active leader — co-heading major events like the IPL Auction at Prakarsh'25 (150+ participants) and the BuzzTech startup event at SVIT. I believe great technology is built by collaborative teams with a shared vision for impact.",
];

export const education = [
  {
    degree: "Bachelor of Engineering – Information Technology",
    institution: "Sardar Vallabhbhai Patel Institute Of Technology (SVIT), Vasad",
    cgpa: "9.15",
    year: "Aug 2022 – Jun 2026",
    highlights: [
      "Specializing in AI/ML, Data Science & Analytics, and Backend Systems",
      "Secured ₹50,000 SSIP Grant for HealthVitals-AI project",
      "Led multiple technical projects and events",
      "Active contributor to university tech community",
    ],
  },
  {
    degree: "Higher Secondary School (GSEB)",
    institution: "Parth School of Science & Competition",
    year: "Apr 2020 – May 2022",
    highlights: [
      "Science stream with focus on Physics, Chemistry, Mathematics and Computer Science",
    ],
  },
  {
    degree: "Secondary School (GSEB)",
    institution: "ST. Kabir School",
    year: "Apr 2018 – May 2020",
    highlights: [
      "General stream with focus on all acedemic subjects",
    ],
  },
  {
    degree: "Primary School (GSEB)",
    institution: "ST. Kabir School",
    year: "Jun 2008 – Apr 2018",
    highlights: [
      "General stream with focus on all acedemic subjects and extra-curricular activities",
    ],
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    proficiency: 85,
    skills: ["Python", "SQL", "C"],
  },
  {
    title: "Data Science & AI",
    icon: "Brain",
    proficiency: 90,
    skills: [
      "Machine Learning",
      "Data Analytics",
      "Data Visualization",
      "Generative AI",
      "NLP",
      "LLM Agents & APIs",
      "RAG Pipelines",
      "Prompt Engineering",
      "EDA",
      "AI Automation",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "Layers",
    proficiency: 80,
    skills: [
      "Django",
      "Flask",
      "LangChain",
      "Crew AI",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    proficiency: 80,
    skills: ["PostgreSQL", "Supabase", "SQL Databases", "MongoDB"],
  },
  {
    title: "Tools & Platform",
    icon: "Tools",
    proficiency: 85,
    skills: ["VS Code", "Jupyter Notebook", "Google Colab", "PyCharm", "Hugging Face", "Excel", "Tableau", "Power BI", "Kaggle", "Cursor", "Google Antigravity"],
  },
  {
    title: "Cloud / Dev Tools",
    icon: "Cloud",
    proficiency: 75,
    skills: ["Git", "GitHub", "Vercel", "Redis", "Firebase", "Clerk Auth", "Upstash Vector", "n8n"],
  },
  {
    title: "Analytics & Business",
    icon: "BarChart3",
    proficiency: 80,
    skills: [
      "Data Analytics",
      "Business Analytics",
      "EDA",
      "Forecasting (Prophet)",
      "Anomaly Detection",
      "KPI Analytics",
      "Enterprise Reporting",
    ],
  },
];

export const experience = [
  {
    company: "Gujarat Alkalies and Chemicals Ltd. (GACL)",
    role: "IT Intern",
    duration: "Feb 2026 – May 2026",
    location: "Vadodara, Gujarat",
    description: [
      "Executing SQL-based data analysis and enterprise reporting tasks while developing an AI-powered CFO Automation Software Platform",
      "Integrating financial analytics, forecasting, and anomaly detection to support data-driven business decisions",
      "Collaborating in an Agile development environment with continuous mentor guidance",
      "Implementing backend analytics workflows and automated financial insight generation",
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  techStack: string[];
  github: string;
  live: string;
  heroImage: string;
  gallery: string[];
  architectureImage: string;
  lessonsLearned: string[];
  category: string;
  versions?: {
    slug: string;
    version: string;
    description: string;
    longDescription?: string;
    problem?: string;
    solution?: string;
    impact?: string;
    features: string[];
    techStack?: string[];
    gallery?: string[];
    lessonsLearned?: string[];
  }[]; // New support for version tracking (e.g., v1, v2, v3)
}

export const projects: Project[] = [
  {
    slug: "ai-personal-agent",
    title: "AI Personal Agent & Automation System",
    tagline: "Self-Hosted Executive AI Assistant",
    description: "A self-hosted AI executive assistant built with n8n and Google Gemini. It uses Slack for natural-language interaction and automates calendar, email, expenses, notes, tasks, web search, and productivity workflows.",
    longDescription: "Designed and developed a modular personal AI assistant capable of understanding natural-language requests and executing multi-step actions through connected services. The system uses Google Gemini for reasoning and tool selection, PostgreSQL for persistent conversational memory, Slack as the user interface, and n8n as the workflow orchestration layer. Implemented integrations with Google Calendar, Gmail, Google Sheets, Google Docs, Google Tasks, and SerpAPI. Configured Docker-based infrastructure, Cloudflare Tunnel secure webhooks, timezone-aware scheduling, confirmation flows, and safeguards against duplicate Slack responses.",
    problem: "Managing daily workflows across emails, calendars, tasks, and notes requires constant context switching. Existing AI assistants lack the deep integrations needed to actively perform complex, multi-step actions across personal accounts without compromising privacy or incurring high SaaS costs.",
    solution: "Developed a self-hosted AI automation system using n8n and Google Gemini. It connects directly to personal APIs (Google Workspace, Slack) to execute actions like email drafting, calendar scheduling, and expense tracking from a single conversational interface, all while maintaining persistent memory in PostgreSQL.",
    impact: "Centralized daily operations into a single conversational interface, saving hours of manual context-switching and tool management. Proved the viability of scalable, self-hosted AI orchestration over expensive SaaS alternatives.",
    features: [
      "Natural-language Slack assistant",
      "Persistent PostgreSQL conversation memory",
      "Calendar creation, lookup, and updates",
      "Gmail retrieval and email sending",
      "Expense tracking through Google Sheets",
      "Notes and document management",
      "Task management",
      "Google web search integration",
      "Multi-step AI-powered automation",
      "Asia/Kolkata timezone support",
      "Cloudflare-secured external webhook access",
      "Docker-based self-hosted deployment",
      "Slack bot-loop prevention",
      "Confirmation handling for important actions"
    ],
    techStack: [
      "n8n",
      "Google Gemini API",
      "PostgreSQL",
      "Docker Desktop",
      "Slack API",
      "Google Calendar API",
      "Gmail API",
      "Google Sheets API",
      "Google Docs API",
      "Google Tasks API",
      "SerpAPI",
      "Cloudflare Tunnel"
    ],
    github: "https://github.com/harshil1876/AI-Personal-Agent-Automation-System",
    live: "",
    heroImage: "/assets/projects/ai-personal-agent-automation system/PA-1.png",
    gallery: [
      "/assets/projects/ai-personal-agent-automation system/PA-1.png",
      "/assets/projects/ai-personal-agent-automation system/PA-2.png",
      "/assets/projects/ai-personal-agent-automation system/PA-3.png"
    ],
    architectureImage: "/assets/projects/ai-personal-agent-automation system/AI Personal Agent Automation Architecture.png",
    lessonsLearned: [
      "Self-hosting AI orchestration with n8n and Docker requires careful webhook and tunnel configurations for secure external access.",
      "Managing conversational memory in PostgreSQL enables deep context continuity across disparate workflows.",
      "Connecting multiple third-party APIs requires robust error handling and user confirmation flows to prevent unintended actions.",
      "Using Slack as a UI provides a seamless, highly accessible way to interact with complex backend automations."
    ],
    category: "AI & Automation"
  },
  {
    slug: "ai-cfo",
    title: "AI-CFO – Automation Software Platform",
    tagline: "AI-Driven Financial Decision Intelligence",
    description:
      "An AI-driven financial decision intelligence platform that automates financial analysis, forecasting, and anomaly detection to reduce manual reporting effort and improve business decision-making.",
    longDescription:
      "Developing an AI-driven financial decision intelligence platform that automates financial analysis, forecasting, and anomaly detection to reduce manual reporting effort and improve business decision-making. Implements KPI analytics, revenue forecasting using Prophet, and Isolation Forest anomaly detection to identify unusual financial patterns and generate prescriptive insights across key financial metrics. Designed as a scalable multi-tenant SaaS system with AI-powered financial query support using RAG pipelines and automated generation of P&L, cash flow, and balance-sheet reports for real-time financial visibility.",
    problem:
      "Organizations spend enormous time on manual financial reporting and analysis, often missing unusual patterns in financial data that could indicate risks or opportunities. Traditional reporting is slow, error-prone, and lacks predictive capability.",
    solution:
      "Built an AI-powered platform that uses Prophet for revenue forecasting, Isolation Forest for anomaly detection, and RAG pipelines for AI-powered financial queries. The system automatically generates P&L, cash flow, and balance-sheet reports with prescriptive insights.",
    impact:
      "Can reduce manual financial analysis time by 60–70%, enabling real-time financial visibility and data-driven business decisions through automated reporting and anomaly detection.",
    features: [
      "KPI analytics and financial dashboards",
      "Revenue forecasting using Prophet",
      "Isolation Forest anomaly detection for financial patterns",
      "RAG pipeline-powered financial query support",
      "Automated P&L, cash flow, and balance-sheet reports",
      "Prescriptive insights across key financial metrics",
      "Scalable multi-tenant SaaS architecture",
      "Real-time financial visibility",
    ],
    techStack: [
      "Django",
      "Next.js",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Google Gemini API",
      "Upstash Vector",
      "Clerk Authentication",
      "Scikit-Learn",
    ],
    github: "https://github.com/harshil1876/AI-CFO",
    live: "",
    heroImage: "/assets/projects/ai-cfo/Screenshot 2026-03-12 120251.png",
    gallery: [
      "/assets/projects/ai-cfo/Screenshot 2026-03-12 120251.png",
      "/assets/projects/ai-cfo/Screenshot 2026-03-12 120315.png",
      "/assets/projects/ai-cfo/Screenshot 2026-03-12 120341.png",
      "/assets/projects/ai-cfo/Screenshot 2026-03-12 120406.png",
      "/assets/projects/ai-cfo/Screenshot 2026-03-13 144252.png",
    ],
    architectureImage: "/assets/projects/ai-cfo/AI-CFO Architecture.png",
    lessonsLearned: [
      "RAG pipeline optimization is critical for response quality — chunk size and overlap significantly affect accuracy",
      "Financial data requires strict validation layers to prevent hallucinated numbers from reaching users",
      "Prophet provides excellent time-series forecasting for financial KPIs with minimal tuning",
      "Isolation Forest is highly effective for unsupervised anomaly detection in financial datasets",
    ],
    category: "AI / FinTech",
  },
  {
    slug: "healthvitals-ai",
    title: "HealthVitals-AI – AI-Powered Healthcare Platform",
    tagline: "Predictive Analytics & AI Health Intelligence",
    description:
      "An AI-powered healthcare platform funded by a ₹50,000 SSIP Grant, delivering Predictive Analytics, AI Symptom Scanning, Calorie Tracking, Daily Goals, and a production-ready mobile app.",
    longDescription:
      "Architected an AI-powered healthcare platform funded by a ₹50,000 SSIP Grant, delivering Predictive Analytics, AI Symptom Scanning, Calorie Tracking, Daily Goals, and a production-ready Mobile app. Led backend, software architecture designing, AI Automation & API integrations, and database engineering, achieving health assessment efficiency improvement by 70% through optimized workflows. The platform was selected amongst the top 30 teams at HackBangalore (International Hackathon) organized by Angel Hacks and won MECIA Hacks 2.0 (24-Hours Hackathon) under the Software category.",
    problem:
      "Individuals lack accessible, AI-powered tools for proactive health monitoring. Traditional healthcare approaches are reactive, and there's no unified platform combining symptom analysis, calorie tracking, and predictive health analytics.",
    solution:
      "Built a comprehensive healthcare platform with AI-powered symptom scanning using Google Gemini API, predictive analytics for health assessments, calorie tracking, and daily health goal systems — all accessible through a mobile app with Appwrite backend and Clerk authentication.",
    impact:
      "Improved health assessment efficiency by 70% through optimized AI workflows. Secured ₹50,000 SSIP Grant. Selected top 30 at HackBangalore international hackathon. Won MECIA Hacks 2.0 competing against 100+ teams.",
    features: [
      "AI-powered symptom scanning and analysis",
      "Predictive health analytics",
      "Calorie tracking and nutritional insights",
      "Daily health goals and progress tracking",
      "Production-ready React Native mobile app",
      "Secure authentication with Clerk",
      "Cloud backend with Appwrite",
    ],
    versions: [
      {
        slug: "prototype",
        version: "Version 1.0 (Prototype)",
        description: "Initial prototype built during MECIA Hacks 2.0 featuring basic symptom scanning and calorie tracking via API.",
        longDescription: "The prototype version of HealthVitals-AI was a proof-of-concept developed under high pressure during a 24-hour hackathon. It focused on the core value proposition: using AI to bridge the gap between user symptoms and preliminary health insights.",
        problem: "Patients often wait for hours just to get a basic understanding of their symptoms, leading to anxiety and delayed care decisions.",
        solution: "A web-based interface that integrated a basic NLP model to parse user symptoms and provide a ranked list of potential concerns based on a curated medical dataset.",
        impact: "Won MECIA Hacks 2.0 and validated the market need for an AI-powered health assistant, directly leading to the SSIP grant.",
        features: ["Basic Symptom Check", "Simple Calorie Input", "NLP Parsing"],
        techStack: ["React", "Express", "Python", "Gemini API key", "MongoDB"],
        gallery: ["/assets/projects/healthvitals/v1-1.jpg", "/assets/projects/healthvitals/v1-2.jpg"],
        lessonsLearned: ["We need perfect data to train a model on Healthcare", "Healthcare data requires exceptional attention to privacy and compliance standards", "Hackathon environments require rapid feature prioritization", "User interface simplicity is key for health applications"],
      },
      {
        slug: "ssip-grant",
        version: "Version 2.0 (SSIP Grant)",
        description: "Scale-up phase funded by SSIP Gujarat, introducing predictive health analytics, goal tracking, and user authentication.",
        longDescription: "With the backing of the SSIP grant, Version 2.0 transformed from a hackathon project into a robust platform. We introduced predictive modeling to shift from reactive symptom checking to proactive health management.",
        problem: "Prototype lacked persistence and personalized health tracking, making it a one-off tool rather than a health companion along with authenticity of data generated by AI.",
        solution: "Implemented a full authentication system and built a longitudinal data tracking system to provide personalized health trends and predictive analytics for chronic condition risks.",
        impact: "Improved health assessment efficiency by 50% and secured further government interest for pilot programs.",
        features: ["Predictive Analytics", "User Authentication", "Goal Tracking", "Blood Pressure Trends"],
        techStack: ["React.js", "Clerk Authentication", "Python", "Flask", "Gemini API key"],
        gallery: ["/assets/projects/healthvitals/v2-1.jpg", "/assets/projects/healthvitals/v2-2.jpg"],
        lessonsLearned: ["Requires Doctors Integration for data authenticity and trust related issue", "Requires personal healthcare AI modal to train on real world data", "Data privacy compliance becomes critical once you store personal health info", "Scalability must be considered early in the architecture"],
      },
      {
        slug: "current",
        version: "Version 3.0 (Current)",
        description: "Production-ready mobile application with full cloud backend integration, offline support, and refined Gemini AI models.",
        features: ["React Native Mobile App", "Appwrite Cloud Backend", "Health Dashboard"],
      }
    ],
    techStack: [
      "React Native",
      "Node.js",
      "Express",
      "Google Gemini API",
      "Appwrite",
      "Clerk Authentication",
    ],
    github: "https://github.com/harshil1876/SSIP_MOBILE_APP_-HealthVitals-AI-.git",
    live: "https://play.google.com/store/apps/details?id=com.anonymous.LifeTNative",
    heroImage: "/assets/projects/healthvitals/HV1.jpeg",
    gallery: [
      "/assets/projects/healthvitals/HV1.jpeg",
      "/assets/projects/healthvitals/HV2.jpeg",
      "/assets/projects/healthvitals/HV3.jpg",
      "/assets/projects/healthvitals/HV4.jpg",
      "/assets/projects/healthvitals/HV5.jpg",
    ],
    architectureImage: "/assets/projects/healthvitals/HealthVitals-3.png",
    lessonsLearned: [
      "Healthcare data requires exceptional attention to privacy and compliance standards",
      "Mobile app architecture with React Native requires careful cross-platform testing",
      "AI symptom analysis needs robust validation to avoid misleading health advice",
      "SSIP grant process taught valuable lessons in project pitching and documentation",
    ],
    category: "AI / HealthTech",
  },
  {
    slug: "cricket-auction-system",
    title: "Cricket Auction Management System",
    tagline: "Real-Time Bidding & Squad Analytics Platform",
    description:
      "A live auction platform with real-time bidding, rule validation, analytics dashboards, and squad-validation logic — reducing data inconsistency by 95% and auction processing time by 70%.",
    longDescription:
      "Designed and migrated a live auction platform from JSON to SQL Database with modular Flask architecture, enabling real-time bidding, rule validation, and multi-user access, reducing data inconsistency and manual errors by 95%. Built analytics dashboards and squad-validation logic, improving team decision accuracy by 90%+ and reducing auction processing time by 70% during live events. The system managed 200+ players across multiple teams, automating stats, base price, past performance tracking, and team evaluation.",
    problem:
      "Managing cricket auctions manually is chaotic — tracking bids, validating squad rules, and managing 200+ players across teams leads to errors, delays, and inconsistencies during live events.",
    solution:
      "Built a modular Flask-based platform with SQL database backend, replacing JSON-based storage. Implemented real-time bidding with rule validation, analytics dashboards, and squad-validation logic for live auction management.",
    impact:
      "Reduced data inconsistency and manual errors by 95%. Improved team decision accuracy by 90%+. Reduced auction processing time by 70% during live events. Successfully used at Prakarsh'25 IPL Auction with 150+ participants.",
    features: [
      "Real-time bidding with live updates",
      "Rule validation for squad composition",
      "Analytics dashboards for team insights",
      "200+ player management with stats tracking",
      "Base price and past performance automation",
      "Multi-user access for concurrent bidding",
      "Team evaluation and squad validation logic",
    ],
    techStack: ["Flask", "JavaScript", "Supabase (PostgreSQL)"],
    github: "https://github.com/harshil1876/IPL-Auction-Management-System",
    live: "",
    heroImage: "/assets/projects/cricket-auction/CA1.png",
    gallery: [
      "/assets/projects/cricket-auction/CA1.png",
      "/assets/projects/cricket-auction/CA2.png",
      "/assets/projects/cricket-auction/CA3.png",
      "/assets/projects/cricket-auction/CA4.png",
      "/assets/projects/cricket-auction/CA5.png",
    ],
    architectureImage: "/assets/projects/cricket-auction/IPL Auction Architecture.png",
    lessonsLearned: [
      "Migrating from JSON to SQL dramatically improves data consistency and query performance",
      "Real-time multi-user systems require careful concurrency handling",
      "Live event software must be battle-tested — there's no room for bugs during an auction",
    ],
    category: "Software Engineering",
  },
];

export interface Achievement {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  organization: string;
  year: string;
  url?: string;
  pdfUrl?: string; // Added for embedded PDF viewer
  icon: string;
  image: string;
  gallery: string[];
  learnings: string[];
  skills: string[];
  impact: string[];
  hasPhoto?: boolean;
  linkedInPost?: string;
}

export const achievements: Achievement[] = [
  {
    slug: "ssip-grant",
    title: "₹50,000 SSIP Grant",
    tagline: "Government Funding for HealthTech Innovation",
    description: "Secured a Rs.50,000/- Grant for HealthVitals-AI under the Student Startup Innovation & Program (SSIP) Gujarat.",
    longDescription: "Securing the SSIP grant was a pivotal moment for HealthVitals-AI. The rigorous evaluation process by the government panel validated our technical architecture and the social impact of our AI-powered symptom scanner. This funding enabled us to scale from a hackathon prototype to a cloud-integrated mobile platform.",
    organization: "SSIP Gujarat",
    year: "Jun 2025",
    icon: "Grant",
    image: "",
    gallery: [],
    learnings: ["Agile Development", "Requirements Gathering & Analysis", "Government grant application processes", "Project financial management", "Technical pitching to non-experts", "Project pitching to judges"],
    skills: ["Strategic Planning", "Technical Documentation", "Product Vision", "Marketing", "Team Management", "Project Management", "Business Development"],
    impact: ["₹50,000 seed funding secured", "Official recognition from the State Government", "Access to specialized startup mentorship"],  
    hasPhoto: false
  },
  {
    slug: "hackbangalore",
    title: "HackBangalore – Top 30",
    tagline: "International Recognition amongst 100+ Teams",
    description: "Participated in HackBangalore, an International Level Hackathon organized by Angel Hacks at Bengaluru, and were selected amongst the top 30 teams with INFO.mark Project that connects Investors and Founders.",
    longDescription: "HackBangalore brought together some of the brightest minds across the globe. Competing at this international level required high-speed engineering and robust system design. Our selection in the top 30 was a testament to our team's ability to build complex solutions under pressure and present it to judges and mentors under Project INFO.mark that connects Investors and Founders through a single platform.",
    organization: "Angel Hacks",
    year: "May 2024",
    url: "https://www.virtualbadge.io/certificate-validator?credential=e9e5d095-8b8f-4f44-abf4-a3326270a384",
    pdfUrl: "/assets/achievements/HackBanglore/HackBanglore-Certificate.pdf",
    icon: "Award",
    image: "/assets/achievements/HackBanglore/HackBanglore-Certificate.png",
    gallery: ["/assets/achievements/HackBanglore/HackBanglore-Certificate.png", "/assets/achievements/HackBanglore/HackBanglore-img.jpg"],
    learnings: ["Global engineering standards", "Cross-functional team collaboration", "Rapid prototyping at scale"],
    skills: ["System Architecture", "AI Automation", "API Integration"],
    impact: ["Selected in Top 30 internationally", "Validated product scalability with global mentors", "Built networking with industry experts from Bengaluru"],
    hasPhoto: true,
    linkedInPost: "https://www.linkedin.com/posts/harshil-patel-833768258_hackbangalore-angelhack-socialresponsibility-ugcPost-7200353279598321664-7CVD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD949KcB5yOKKfIQB0UuOI54IQiTckkC9Mw"
  },
  {
    slug: "mecia-hacks",
    title: "MECIA Hacks 2.0 Winner",
    tagline: "1st Place in Software Category",
    description: "Won MECIA Hacks 2.0 (24-Hours Hackathon) under the Software category with project HealthVitals-AI, competing against over 100 teams.",
    longDescription: "MECIA Hacks 2.0 was where the foundation of HealthVitals-AI was laid. In 24 hours, we built a fully functional symptom scanning prototype (MVP) that won the top spot. The intensity of the competition fueled our innovation and set the stage for our subsequent grant and international success.",
    organization: "MECIA Hacks",
    year: "2024",
    icon: "Medal",
    image: "/assets/achievements/MeciaHack/Meciahacks.jpeg",
    gallery: ["/assets/achievements/MeciaHack/Meciahacks.jpeg"],
    learnings: ["Extreme pressure prioritization", "Effective pitch delivery", "Real-world hardware-software integration"],
    skills: ["Full Stack Development", "Python AI", "Project Management", "System Architecture", "AI Automation", "API Integration"],
    impact: ["1st Place Winner (Software)", "Defeated 100+ competing teams", "Direct fast-track to SSIP Grant evaluation", "Prototype with MVP ready", "Received recognition from judges and mentors"],
    hasPhoto: true,
    linkedInPost: "https://www.linkedin.com/posts/harshil-patel-833768258_meciahack-hackathon-svitvasad-ugcPost-7238412282618142722-0fpu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD949KcB5yOKKfIQB0UuOI54IQiTckkC9Mw"
  },
];

export interface CertificationCourse {
  slug: string;
  title: string;
  platform: string;
  completedDate?: string;
  pdfUrl: string;
  summary: string;
  learnings: string[];
  outcomes: string[];
}

export interface Certification {
  slug: string;
  title: string;
  organization: string;
  year: string;
  url: string;
  image: string;
  pdfUrl?: string; // Spec pdf document
  description: string;
  learnings: string[];
  outcomes: string[];
  courses: CertificationCourse[];
  linkedInPost?: string;
}

export const certifications: Certification[] = [
  {
    slug: "google-it-support",
    title: "Google IT Support Professional Certification",
    organization: "Google / Coursera",
    year: "Feb 2024",
    url: "https://www.coursera.org/account/accomplishments/specialization/V4T5VF6NNZGE",
    image: "/assets/certificates/Google-IT-Support/google-it-support-professional-certificate.1.png",
    pdfUrl: "/assets/certificates/Google-IT-Support/Specialization Certificate.pdf",
    description: "A comprehensive 5-course certificate developed by Google that includes innovative curriculum designed to prepare developers for an entry-level role in IT support.",
    learnings: [
      "Troubleshooting and system administration",
      "Operating systems (Linux, Windows)",
      "Network protocols and cloud computing",
      "Security concepts and administrative procedures"
    ],
    outcomes: [
      "Ability to assemble computers and write effective support documentation",
      "Configure routing, subnets, and DNS directories",
      "Utilize Linux systems and command-line interfaces"
    ],
    courses: [
      {
        slug: "technical-support-fundamentals",
        title: "Technical Support Fundamentals",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Support/Course-1/Course 1.pdf",
        summary: "Troubleshooting and system administration basics.",
        learnings: ["Assembling computers", "Writing support documentation"],
        outcomes: ["Technical troubleshooting skills"]
      },
      {
        slug: "computer-networking",
        title: "The Bits and Bytes of Computer Networking",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Support/Course-2/Course 2.pdf",
        summary: "Networking protocols and diagnostics.",
        learnings: ["TCP/IP", "DNS", "Networking hardware"],
        outcomes: ["Network configuration and troubleshooting"]
      },
      {
        slug: "operating-systems",
        title: "Operating Systems and You: Becoming a Power User",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Support/Course-3/Course 3.pdf",
        summary: "Linux and Windows administration.",
        learnings: ["Command line interface", "Process management"],
        outcomes: ["OS administration and power user skills"]
      },
      {
        slug: "system-administration",
        title: "System Administration and IT Infrastructure Services",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Support/Course-4/Course 4.pdf",
        summary: "Enterprise infrastructure services.",
        learnings: ["Active Directory", "OpenLDAP"],
        outcomes: ["System administration and service management"]
      },
      {
        slug: "it-security",
        title: "IT Security: Defense against the digital dark arts",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Support/Course-5/Course 5.pdf",
        summary: "Cybersecurity fundamentals.",
        learnings: ["Encryption", "Authentication", "Authorization"],
        outcomes: ["Security implementation and threat analysis"]
      }
    ],
    linkedInPost: "https://www.linkedin.com/posts/harshil-patel-833768258_completion-certificate-for-google-it-support-share-7186804374961045504-vBJx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD949KcB5yOKKfIQB0UuOI54IQiTckkC9Mw"
  },
  {
    slug: "google-python-automation",
    title: "Google IT Automation With Python Professional Certification",
    organization: "Google / Coursera",
    year: "Jun 2024",
    url: "https://www.coursera.org/account/accomplishments/specialization/ED7PJ2GTNYZ4",
    image: "/assets/certificates/Google-IT-Automation/google-it-automation-with-python-professional-certi.png",
    pdfUrl: "/assets/certificates/Google-IT-Automation/Specialization Certificate.pdf",
    description: "A 6-course curriculum developed by Google teaching how to program with Python and how to use Python to automate common system administration tasks.",
    learnings: [
      "Python programming constructs and basic data structures",
      "Git and GitHub for version control",
      "Configuration management and automation using cloud APIs",
      "Troubleshooting and debugging code"
    ],
    outcomes: [
      "Automate tasks by writing Python scripts",
      "Manage IT resources at scale using configuration management",
      "Analyze real-world IT problems and implement appropriate solutions"
    ],
    courses: [
      {
        slug: "python-crash-course",
        title: "Crash Course on Python",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Automation/Course-1/Course 1.pdf",
        summary: "Fundamentals of Python programming.",
        learnings: ["Data types", "Control structures", "Functions"],
        outcomes: ["Basic Python scripting capability"]
      },
      {
        slug: "python-os-interaction",
        title: "Using Python to Interact with the Operating System",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Automation/Course-2/Course2.pdf",
        summary: "Python scripts for OS tasks.",
        learnings: ["File manipulation", "Regular expressions"],
        outcomes: ["OS task automation with Python"]
      },
      {
        slug: "git-github-intro",
        title: "Introduction to Git and GitHub",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Automation/Course-3/Course3.pdf",
        summary: "Version control fundamentals.",
        learnings: ["Commits", "Branches", "Merging"],
        outcomes: ["Effective version control usage"]
      },
      {
        slug: "troubleshooting-debugging",
        title: "Troubleshooting and Debugging Techniques",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Automation/Course-4/Course4.pdf",
        summary: "Practical debugging strategies.",
        learnings: ["Root cause analysis", "Performance profiling"],
        outcomes: ["Advanced debugging skills"]
      },
      {
        slug: "config-mgmt-cloud",
        title: "Configuration Management and the Cloud",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Automation/Course-5/Course5.pdf",
        summary: "Managing resources at scale.",
        learnings: ["Puppet", "Cloud APIs"],
        outcomes: ["Infrastructure as Code skills"]
      },
      {
        slug: "automating-real-world-tasks",
        title: "Automating Real-World Tasks with Python",
        platform: "Coursera",
        pdfUrl: "/assets/certificates/Google-IT-Automation/Course-6/Course6.pdf",
        summary: "Captsone project for automation.",
        learnings: ["API integration", "Email automation"],
        outcomes: ["Comprehensive automation solution design"]
      }
    ],
    linkedInPost: "https://www.linkedin.com/posts/harshil-patel-833768258_completion-certificate-for-google-it-automation-share-7209197187749019648-xGSx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD949KcB5yOKKfIQB0UuOI54IQiTckkC9Mw"
  },
  {
    slug: "advanced-digital-transformation",
    title: "Advanced Digital Transformation (Part 1)",
    organization: "IIM Ahmedabad (IIMA) / Coursera",
    year: "Jan 2024",
    url: "https://www.coursera.org/account/accomplishments/records/LVXDZJQ7MPG4",
    image: "/assets/certificates/Digital-Transformation/IIMA.jpg",
    pdfUrl: "/assets/certificates/Digital-Transformation/Digital Transformation Part-1.pdf",
    description: "Course focusing on advanced digital transformation strategies from IIM Ahmedabad.",
    learnings: [
      "Strategic planning for technology adoption",
      "Digital disruption evaluation in businesses"
    ],
    outcomes: [
      "Implement strategic digital transformation initiatives",
      "Assess organization readiness for adopting emerging tech"
    ],
    courses: [],
    linkedInPost: "https://www.linkedin.com/posts/harshil-patel-833768258_completion-certificate-for-advanced-digital-share-7173520774899589120-eHHZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD949KcB5yOKKfIQB0UuOI54IQiTckkC9Mw"
  }
];

export interface LeadershipItem {
  slug: string;
  role: string;
  tagline: string;
  organization: string;
  description: string;
  longDescription: string;
  highlights: string[];
  image: string;
  gallery: string[];
  learnings: string[];
  skills: string[];
  responsibilities: string[];
  outcomes: string[];
  linkedInPost?: string;
}

export const leadership: LeadershipItem[] = [
  {
    slug: "ipl-auction",
    role: "Co-Head – IPL Auction Event",
    tagline: "Scaling High-Pressure Event Software",
    organization: "Prakarsh'25, SVIT Vasad",
    description: "Co-Headed the IPL Auction Event at Prakarsh'25 with 150+ participants, engineered a full software solution managing 200+ players across multiple teams, automating stats, base price, past performance tracking, and team evaluation.",
    longDescription: "As Co-Head of the IPL Auction at Prakarsh'25, I did more than just manage operations; I engineered the heart of the event. I built a custom software platform that handled real-time bidding for over 200 players. The challenge was ensuring zero latency and 100% data consistency during a live event with 150+ participants.",
    highlights: [
      "150+ participants in the live auction event",
      "Engineered custom auction management software",
      "Managed 200+ players across multiple teams",
      "Automated stats, base price, and team evaluation",
    ],
    image: "/assets/leadership/Prakarsh/Prakarsh.jpeg",
    gallery: ["/assets/leadership/Prakarsh/Prakarsh.jpeg"],
    learnings: ["Team management", "Event management & planning","Public speaking", "Real-time data synchronization", "Large-scale event logistics", "Crisis management under pressure"],
    skills: ["Real-time Data Management", "Crisis Resolution", "Strategic Logic", "Event Planning", "Team Management", "Resource Management", "Public Speaking"],
    responsibilities: [
      "Spearheaded player data management for 8 competing franchise teams",
      "Orchestrated real-time bid validation and budget tracking under live pressure",
      "Managed the high-stakes 'Unsold Player' liquidation phase"
    ],
    outcomes: [
      "Successfully processed 200+ player transactions with zero data latency",
      "Maintained 100% budget accuracy across all team portfolios",
      "Digitized a traditionally manual spreadsheet-based auction system"
    ],
    linkedInPost: "https://www.linkedin.com/in/harshil-patel-833768258/"
  },
  {
    slug: "buzztech-startup",
    role: "Co-Head – BuzzTech Startup Event",
    tagline: "Nurturing Student Entrepreneurship",
    organization: "SVIT Vasad",
    description: "Co-Headed the 50-day BuzzTech startup event at SVIT Vasad, spearheading operational planning and participant workflows with end-to-end execution for 25+ teams.",
    longDescription: "BuzzTech was a 50-day marathon of innovation. Managing a program of this duration required sustained operational excellence and deep empathy for participant goals. I orchestrated the entire workflow, from initial ideation workshops to final pitching sessions, ensuring every team had the resources they needed to succeed. I also mentored teams on technical implementation and helped them secure the SSIP grant through recommendations and guidance. There were external mentors invited, which had a lot of experience in Business Development and Startup funding. Mitesh Shetwala Sir, Founder & CEO of 'Currently' who has been to Shark Tank India 2026, was one of the mentors. Another was Nikhil Parmar Sir, Founder & CEO of 'Impactful Pitch & Instapitch.io' who is a well-known entrepreneur and investor in the startup ecosystem. And finally, there was Rudresh Vyas Sir, Head of Education at EnggTechnique.com who help students and founders to build successful startups with aligning with startup incubators. We also had a conversation in our mentors in form of podcast where students, participants had gain a lot of insights and knowledge about the startup ecosystem along with their questions and doubts.",
    highlights: [
      "50-day continuous startup program",
      "25+ participating teams",
      "End-to-end operational planning and execution",
      "Mentored teams on technical implementation",
    ],
    image: "/assets/leadership/BuzzTech/BuzzTech.jpg",
    gallery: ["/assets/leadership/BuzzTech/BuzzTech Pic.jpg", "/assets/leadership/BuzzTech/BuzzTech.jpg"],
    learnings: ["Startup ideation", "Business Development", "Long-term project sustainability", "Stakeholder management (Faculty & Industry)", "Market research", "Curriculum design for workshops"],
    skills: ["Operational Excellence", "Mentorship", "Resource Management", "Business Development", "Market Research & Demand", "Public Speaking", "Team Management", "Event Management", "Stakeholder Management"],
    responsibilities: [
      "Designing the 50-day roadmap and deliverables",
      "Coordinating with industry mentors and judges",
      "Operational oversight of workshops and seminars",
      "Resource allocation for 25+ student teams"
    ],
    outcomes: [
      "Successfully launched 10+ validated startup ideas",
      "Had a Incredible Talk with Mitesh Shetwala Sir, Nikhil Parmar Sir, and Rudresh Vyas Sir",
      "Facilitated SSIP grant applications for top-performing teams"
    ],
    linkedInPost: "https://www.linkedin.com/posts/harshil-patel-833768258_buzztech-buzztech2025-entrepreneur-activity-7398290113392373760-T7jm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD949KcB5yOKKfIQB0UuOI54IQiTckkC9Mw"
  },
];

export const testimonials = [
  {
    name: "Mentor at GACL",
    role: "IT Department, GACL",
    quote:
      "Harshil brings exceptional technical depth and initiative to the team. His AI-CFO platform demonstrates a rare combination of data science expertise and software engineering skills.",
    avatar: "",
  },
  {
    name: "Team Member",
    role: "HealthVitals-AI Project Colleague",
    quote:
      "Working with Harshil on HealthVitals-AI was an incredible experience. His leadership and technical vision drove us to win the hackathon and secure the SSIP grant.",
    avatar: "",
  },
];

export const navLinks = [
  { label: "Profile", href: "/#profile" },
  { label: "Showcase", href: "/#showcase" },
  { label: "Contact", href: "/#contact" },
];

export const commandActions = [
  { label: "Home / Profile", href: "/#profile", icon: "Layers" },
  { label: "Home / Showcase", href: "/#showcase", icon: "Layers" },
  { label: "View Resume", href: "/resume", icon: "FileText" },
  { label: "Download Resume", href: "/assets/resume/Harshil Resume.pdf", icon: "Download" },
  { label: "Contact Me", href: "/#contact", icon: "Mail" },
  { label: "View GitHub", href: "https://github.com/harshil1876", icon: "Github", external: true },
  { label: "View LinkedIn", href: "http://www.linkedin.com/in/harshil-patel-833768258", icon: "Linkedin", external: true },
  ...projects.map((p) => ({
    label: `Project: ${p.title.split("–")[0].trim()}`,
    href: `/projects/${p.slug}`,
    icon: "ArrowRight",
  })),
  ...certifications.map((c) => ({
    label: `Certification: ${c.title}`,
    href: `/certifications/${c.slug}`,
    icon: "Certificate",
  })),
];
