// ============================================================================
// BOOKING FORM — INTEGRATION POINT
//
// This is the ONLY place the booking form talks to the outside world.
//
// It's wired to submit to Formspree (https://formspree.io) — a no-code form
// backend that emails you every submission. There's exactly one manual step
// left to activate it (see README.md "Activate the booking form"):
//
//   1. Create a free Formspree account and a new form.
//   2. Copy the Form ID Formspree gives you (the part after "f/" in your
//      form's endpoint URL, e.g. "abcdwxyz").
//   3. Paste it into src/data/business.ts -> formspreeFormId.
//   4. Formspree will email you a confirmation link the first time a real
//      submission comes in — click it once to fully activate the form.
//
// Until formspreeFormId is filled in, this intentionally returns
// { success: false } so the site never tells a customer their request was
// received when it wasn't — the booking form then honestly falls back to
// "please call or WhatsApp us" with working buttons.
//
// Want to switch to a different backend instead (your own API, a CRM, a
// database, Google Sheets, a WhatsApp Business webhook)? Replace the fetch
// call below with a call to that service. Whichever you use, remember:
//   - Validate and sanitize the payload again on the server — never trust
//     client-side validation alone.
//   - Rate-limit or add spam protection on the real endpoint (Formspree
//     includes its own spam filtering out of the box).
//   - Never put API keys or secrets in this file or anywhere in src/ — they
//     end up in the client-side bundle. Keep them server-side only. (This is
//     why Formspree is a good fit for a static site: the Form ID isn't a
//     secret — it only lets people submit to your form, not read past
//     submissions — so it's safe to reference directly here.)
// ============================================================================

import { business, isPlaceholder } from "../data/business";

export interface BookingPayload {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  applianceType: string;
  brand: string;
  modelNumber: string;
  problemDescription: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  areaCity: string;
  additionalNotes: string;
}

export interface BookingSubmitResult {
  success: boolean;
  message?: string;
}

export async function submitBookingRequest(payload: BookingPayload): Promise<BookingSubmitResult> {
  if (isPlaceholder(business.formspreeFormId)) {
    return { success: false, message: "not_configured" };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${business.formspreeFormId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // Nicer email subject/reply-to in the Formspree notification email.
        _subject: `New booking request — ${payload.fullName} (${payload.applianceType})`,
        _replyto: payload.email || undefined,

        "Full Name": payload.fullName,
        "Phone Number": payload.phone,
        "WhatsApp Number": payload.whatsapp,
        Email: payload.email,
        "Appliance Type": payload.applianceType,
        Brand: payload.brand,
        "Model Number": payload.modelNumber,
        "Problem Description": payload.problemDescription,
        "Preferred Date": payload.preferredDate,
        "Preferred Time": payload.preferredTime,
        Address: payload.address,
        "Area / City": payload.areaCity,
        "Additional Notes": payload.additionalNotes,
      }),
    });

    if (response.ok) {
      return { success: true };
    }

    return { success: false, message: "submit_failed" };
  } catch {
    // Network error, offline, Formspree unreachable, etc.
    return { success: false, message: "network_error" };
  }
}
