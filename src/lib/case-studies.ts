export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  headline: string;
  description: string;
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  results: string;
  isProofOfConcept?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "support-agent-team",
    title: "AI Support Agent Team",
    industry: "Telecommunications",
    headline: "80% workload reduction, $4.5K/mo saved",
    description:
      "Replaced manual support workflows with an AI agent team that handles customer queries in seconds instead of minutes.",
    metrics: [
      { value: "80%", label: "Workload Reduction" },
      { value: "$4.5K/mo", label: "Cost Savings" },
      { value: "25%", label: "Satisfaction Boost" },
      { value: "10sec", label: "Response Time (from 5min)" },
    ],
    problem:
      "A telecommunications provider was drowning in support tickets. Response times averaged 5 minutes, customer satisfaction was declining, and the support team was stretched thin across multiple channels.",
    solution:
      "We built an AI support agent team that handles incoming queries across all channels. The system understands context, resolves common issues autonomously, and escalates complex cases to human agents with full context — eliminating the back-and-forth.",
    results:
      "Within 60 days, support workload dropped by 80%. Response times fell from 5 minutes to 10 seconds. Customer satisfaction increased 25%. The team now focuses on complex, high-value interactions instead of repetitive queries.",
  },
  {
    slug: "marketing-performance",
    title: "AI Marketing Performance System",
    industry: "Healthcare",
    headline: "60x faster reporting, 25% ROAS increase",
    description:
      "Automated marketing performance reporting and optimisation for a healthcare company, turning 4-hour reports into 10-minute automated insights.",
    metrics: [
      { value: "60x", label: "Faster Reporting" },
      { value: "$1.2K/mo", label: "Cost Savings" },
      { value: "25%", label: "ROAS Increase" },
      { value: "10min", label: "Report Time (from 4hrs)" },
    ],
    problem:
      "A healthcare company spent 4 hours per week manually pulling marketing data from multiple platforms, building reports, and identifying what was working. Decisions were always based on last week's data.",
    solution:
      "We built an automated performance system that pulls data from all marketing channels, generates reports in real-time, and surfaces actionable insights. The AI identifies trends, recommends budget allocation, and flags underperforming campaigns automatically.",
    results:
      "Weekly reporting went from 4 hours to 10 minutes. ROAS increased 25% through AI-driven budget recommendations. The marketing team saved $1.2K/month in time costs and started making decisions on current data instead of stale reports.",
  },
  {
    slug: "smart-patient-intake",
    title: "Smart Patient Intake System",
    industry: "Healthcare",
    headline: "50% time reduction, near-zero data errors",
    description:
      "Digitised and automated the patient intake process, cutting processing time in half and virtually eliminating data entry errors.",
    metrics: [
      { value: "50%", label: "Time Reduction" },
      { value: "$3.5K/mo", label: "Cost Savings" },
      { value: "~0%", label: "Data Errors" },
      { value: "10min", label: "Intake Time (from 20min)" },
    ],
    problem:
      "Patient intake was a manual, paper-based process. Staff spent 20 minutes per patient on data entry, and human errors in medical records created compliance risks and downstream issues.",
    solution:
      "We built a smart intake system that digitises patient information capture, validates data in real-time, and integrates directly with the existing EHR system. The AI pre-fills known information and flags inconsistencies before they become problems.",
    results:
      "Intake time dropped from 20 to 10 minutes per patient. Data entry errors dropped to near-zero. Staff saved $3.5K/month in administrative time and could focus on patient care instead of paperwork.",
  },
  {
    slug: "diagnostic-ai",
    title: "Probabilistic Diagnostic AI",
    industry: "Health Technology",
    headline: "99% diagnostic accuracy at 200 patients/sec",
    description:
      "Built an AI-powered probabilistic triage system that analyses patient symptoms against medical databases to generate ranked differential diagnoses.",
    metrics: [
      { value: "99%", label: "Diagnostic Accuracy" },
      { value: "200/sec", label: "Patient Capacity" },
      { value: "RAG", label: "Knowledge Architecture" },
      { value: "Real-time", label: "Processing Speed" },
    ],
    problem:
      "Clinical triage relied on individual practitioner knowledge, leading to variable diagnostic quality and long wait times. There was no systematic way to cross-reference symptoms against the full breadth of medical literature in real-time.",
    solution:
      "We built a probabilistic diagnostic AI using retrieval-augmented generation (RAG) over medical databases. The system analyses patient symptoms, generates ranked differential diagnoses with confidence scores, and provides supporting evidence — all in real-time.",
    results:
      "In internal testing, the system achieved 99% diagnostic accuracy across test cases and can process 200 patients per second. The RAG architecture ensures diagnoses are grounded in verified medical data, not hallucinated.",
    isProofOfConcept: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
