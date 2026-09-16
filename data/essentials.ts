export const packingChecklist: string[] = [
  "Registration confirmation (needed for on-site badge pickup)",
  "Comfortable walking shoes",
  "Business casual outfits for convention days",
  "Sport jacket or blazer (optional, for chapter dinner)",
  "Casual party-ready outfit + sandals (for closing beach festival)",
  "Swimwear (for the pool or the closing Beachside Music Festival)",
  "Layers for AC-heavy convention halls",
  "Sunglasses, sunscreen",
  "Refillable water bottle",
  "Chargers (phone + laptop)",
  "Business cards",
];

export type DressCodeItem = {
  occasion: string;
  code: string;
  note?: string;
};

export const dressCode: DressCodeItem[] = [
  { occasion: "Convention days", code: "Business casual" },
  { occasion: "Opening reception", code: "Business casual" },
  {
    occasion: "Chapter dinner",
    code: "Smart casual / dressy",
    note: "Optional sport jacket or blazer",
  },
  {
    occasion: "Closing beach party",
    code: "Casual & party-ready",
    note: "Sandals recommended — may be on sand",
  },
];

export const expenseNotes: string[] = [
  "Save all receipts — photos are fine.",
  "Lunch during the convention is provided and covered by registration.",
  "Chapter dinner: dinner is provided.",
  "Opening & closing receptions: heavy appetizers provided.",
  "Rideshare: no need to submit receipts — Uber tracks expenses through the PEC voucher.",
];

export type SurvivalTip = {
  title: string;
  description: string;
};

export const survivalTips: SurvivalTip[] = [
  {
    title: "Hydrate constantly",
    description:
      "Desert climate + long days = dehydration sneaks up on you. Keep water on you at all times.",
  },
  {
    title: "Distances are deceiving",
    description:
      "The walk from Mandalay Bay to other Strip destinations is often 30–40 minutes. Plan accordingly.",
  },
  {
    title: "Beat the Starbucks line",
    description:
      "Two Starbucks locations sit right on the walk between the hotel rooms and the convention center, and they get very busy on convention mornings. Download the Starbucks app and place a pickup order before you leave your room so it's ready when you walk by.",
  },
  {
    title: "Wear comfortable shoes",
    description: "The convention floor is huge — plan for 15,000+ steps a day.",
  },
  {
    title: "Cash for tips",
    description: "Keep small bills handy for bellhops, valets, and housekeeping.",
  },
];

export type EmergencyContact = {
  name: string;
  value: string;
  isPhone: boolean;
};

export const emergencyContacts: EmergencyContact[] = [
  { name: "Mandalay Bay Front Desk", value: "+18776327800", isPhone: true },
  { name: "Prime Time Shuttle", value: "+18007338267", isPhone: true },
  { name: "United Airlines", value: "+18008648331", isPhone: true },
  { name: "Group Confirmation (PNR)", value: "BF6RBW", isPhone: false },
];

export const emergencyContactsDisplay: Record<string, string> = {
  "+18776327800": "(877) 632-7800",
  "+18007338267": "1-800-733-8267",
  "+18008648331": "1-800-864-8331",
};
