// ============================================================================
// BENEFITS & PROCESS DATA
// Content for the "Why Choose SVPHome ARS" and "How SVPHome ARS Appliance Repair
// Works" sections. Edit the arrays below to add, remove, or reword an entry —
// Benefits.astro and HowItWorks.astro render straight from these lists.
// ============================================================================

export type BenefitIconName =
  | "skilled-technicians"
  | "doorstep-convenience"
  | "transparent-communication"
  | "quality-parts"
  | "convenient-scheduling"
  | "multiple-appliances";

export interface Benefit {
  id: BenefitIconName;
  title: string;
  description: string;
}

// Only claims SVPHome ARS can actually stand behind — no awards, certifications,
// years of experience, customer counts, success percentages, "No. 1" claims,
// or guarantees.
export const benefits: Benefit[] = [
  {
    id: "skilled-technicians",
    title: "Skilled Technicians",
    description: "Professional troubleshooting and repair focused on identifying the actual appliance problem.",
  },
  {
    id: "doorstep-convenience",
    title: "Doorstep Convenience",
    description: "Get appliance service at your home without unnecessary travel or hassle.",
  },
  {
    id: "transparent-communication",
    title: "Transparent Communication",
    description: "Understand the appliance issue and recommended repair before proceeding.",
  },
  {
    id: "quality-parts",
    title: "Quality Replacement Parts",
    description: "Use suitable replacement parts based on the appliance and repair requirements.",
  },
  {
    id: "convenient-scheduling",
    title: "Convenient Scheduling",
    description: "Request a service appointment at a convenient time.",
  },
  {
    id: "multiple-appliances",
    title: "Multiple Appliance Services",
    description: "Get support for several common household appliances from one service provider.",
  },
];

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Contact SVPHome ARS",
    description: "Call, WhatsApp, or submit a service request.",
  },
  {
    number: "02",
    title: "Tell Us the Problem",
    description: "Share the appliance type, brand/model if known, and describe the issue.",
  },
  {
    number: "03",
    title: "Technician Visit",
    description: "A technician visits the customer's location at the scheduled time.",
  },
  {
    number: "04",
    title: "Diagnosis & Repair",
    description: "The appliance is inspected and the appropriate repair/service is recommended.",
  },
];
