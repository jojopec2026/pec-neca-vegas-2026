export type ItineraryEvent = {
  time?: string;
  title: string;
  description?: string;
  location?: string;
  tag?: "optional" | "provided" | "travel" | "required";
  link?: { label: string; href: string };
  /** A short highlighted callout, e.g. flagging a scheduling conflict. */
  note?: string;
  /** Only set for events with a confirmed, specific start/end time. */
  calendar?: {
    start: string; // ISO with offset
    end: string;
  };
};

export type ItineraryDay = {
  dayNumber: number;
  date: string;
  dayOfWeek: string;
  events: ItineraryEvent[];
};

export const itinerary: ItineraryDay[] = [
  {
    dayNumber: 1,
    dayOfWeek: "Saturday",
    date: "October 3, 2026",
    events: [
      {
        time: "2:08 PM",
        title: "Outbound flights: MFR → SFO → LAS",
        description: "UA1754 MFR→SFO, then UA751 SFO→LAS. Arrive LAS 6:31 PM.",
        location: "Medford Airport (MFR) → Harry Reid Intl (LAS)",
        tag: "travel",
        calendar: {
          start: "2026-10-03T14:08:00-07:00",
          end: "2026-10-03T18:31:00-07:00",
        },
      },
      {
        time: "Evening",
        title: "Check-in at Mandalay Bay",
        description: "Free evening — rest up before the convention kicks off.",
      },
    ],
  },
  {
    dayNumber: 2,
    dayOfWeek: "Sunday",
    date: "October 4, 2026",
    events: [
      {
        time: "8:00 AM",
        title: "Pre-Convention Workshops",
        description:
          "For team members registered for a pre-convention workshop. Check the official NECA schedule for your specific workshop's time and location.",
        tag: "optional",
        link: {
          label: "View NECA Schedule",
          href: "https://www.necaconvention.org/schedule",
        },
      },
      {
        title: "Convention Check-In",
        description: "Badge pickup — have your registration confirmation ready.",
      },
      {
        time: "7:00 – 9:00 PM",
        title: "Opening Reception: The Power of Connection",
        description:
          "Celebrating 125 years of NECA at T-Mobile Arena — multiple levels of food, live music, and sponsor lounges (Flux Capacitor Lounge by Graybar, NHL Shootout by Atkore, EHV Elvi Lounge by NECA Australia, Biergarten by Milwaukee Tool). After party runs 9–10 PM, also hosted by Milwaukee Tool.",
        location: "T-Mobile Arena",
        tag: "provided",
        calendar: {
          start: "2026-10-04T19:00:00-07:00",
          end: "2026-10-04T21:00:00-07:00",
        },
      },
    ],
  },
  {
    dayNumber: 3,
    dayOfWeek: "Monday",
    date: "October 5, 2026",
    events: [
      {
        time: "10:00 – 11:30 AM",
        title: "Opening General Session: Nick Saban",
        description: "Speaker: Nick Saban.",
        link: {
          label: "Session details",
          href: "https://www.necaconvention.org/session/opening-general-session-nick-saban/",
        },
      },
      {
        title: "Lunch",
        description: "Provided, covered by registration.",
        tag: "provided",
      },
      {
        title: "Team Show Floor Walk",
        description: "The team walks the show floor together after lunch.",
      },
      {
        time: "5:30 – 8:30 PM",
        title: "Sonepar Customer Party at Beer Park",
        description:
          "Optional. The Marshall Tucker Band, signature cocktails, gourmet bites, and Vegas games. RSVP required — use free NECA registration code 26EXH.",
        location: "Beer Park, Paris Las Vegas",
        tag: "optional",
        link: {
          label: "RSVP for Sonepar Party",
          href: "https://customerpartyatneca.events.sonepar.com/sonepar-customer-party-at-neca",
        },
        note:
          "This overlaps with the required Chapter Dinner (6:30–9:30 PM). Both are at Paris Las Vegas, so you could catch the start of Sonepar before heading over to dinner.",
        calendar: {
          start: "2026-10-05T17:30:00-07:00",
          end: "2026-10-05T20:30:00-07:00",
        },
      },
      {
        time: "6:30 – 9:30 PM",
        title: "Oregon-Pacific Cascade Chapter Dinner",
        description:
          "Required. Join your Oregon-Pacific Cascade peers at The Left Bank Room, an elevated extension of the Eiffel Tower Restaurant's main dining room, with spectacular views of the Strip and the Bellagio Fountains.",
        location: "The Left Bank Room, Eiffel Tower Restaurant, Paris Las Vegas",
        tag: "required",
      },
    ],
  },
  {
    dayNumber: 4,
    dayOfWeek: "Tuesday",
    date: "October 6, 2026",
    events: [
      {
        time: "10:00 – 11:30 AM",
        title: "Tuesday General Session: Andre Agassi",
        description: "Speaker: Andre Agassi.",
        link: {
          label: "Session details",
          href: "https://www.necaconvention.org/session/tuesday-general-session-andre-agassi/",
        },
      },
      { title: "Lunch", description: "Provided.", tag: "provided" },
      {
        time: "4:00 – 6:00 PM",
        title: "District 6 Happy Hour",
        description:
          "Open to all D6 contractors. Unwind with contractors and industry partners from across the district over passed hors d'oeuvres and drinks.",
        location: "Chandelier Bar, The Cosmopolitan",
        tag: "optional",
        calendar: {
          start: "2026-10-06T16:00:00-07:00",
          end: "2026-10-06T18:00:00-07:00",
        },
      },
      { time: "Evening", title: "Free evening" },
    ],
  },
  {
    dayNumber: 5,
    dayOfWeek: "Wednesday",
    date: "October 7, 2026",
    events: [
      {
        time: "1:15 – 2:30 PM",
        title: "Closing General Session: Melissa Stockwell",
        description: "Speaker: Melissa Stockwell.",
        link: {
          label: "Session details",
          href: "https://www.necaconvention.org/session/closing-general-session-melissa-stockwell/",
        },
      },
      {
        title: "Closing Celebration: Beachside Music Festival",
        description:
          "At Mandalay Bay Beach, featuring O.A.R. and +LIVE+. Casual & party-ready dress — sandals recommended, it may be on sand. Heavy apps provided.",
        tag: "provided",
      },
    ],
  },
  {
    dayNumber: 6,
    dayOfWeek: "Thursday",
    date: "October 8, 2026",
    events: [
      {
        time: "7:15 AM",
        title: "Return flights: LAS → SFO → MFR",
        description: "UA2356 LAS→SFO, then UA2322 SFO→MFR. Arrive MFR 11:50 AM.",
        location: "Harry Reid Intl (LAS) → Medford Airport (MFR)",
        tag: "travel",
        calendar: {
          start: "2026-10-08T07:15:00-07:00",
          end: "2026-10-08T11:50:00-07:00",
        },
      },
    ],
  },
];
