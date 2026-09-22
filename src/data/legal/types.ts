// ============================================================================
// SHARED TYPES FOR LEGAL DOCUMENTS (Privacy Policy, Terms & Conditions)
// ============================================================================

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDoc {
  title: string;
  intro: string;
  sections: LegalSection[];
}

export type LanguageCode = "en" | "te";

export const languageLabels: Record<LanguageCode, string> = {
  en: "English",
  te: "తెలుగు",
};

export type LegalContent = Record<LanguageCode, LegalDoc>;
