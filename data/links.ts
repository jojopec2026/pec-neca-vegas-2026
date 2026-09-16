export type NecaLink = {
  title: string;
  description: string;
  href: string;
  pinned?: boolean;
};

export const necaLinks: NecaLink[] = [
  {
    title: "Schedule at a Glance",
    description: "The full convention schedule — sessions, times, and locations.",
    href: "https://www.necaconvention.org/schedule/",
    pinned: true,
  },
  {
    title: "Tips & Tools for Attendees",
    description: "Official NECA guidance for making the most of the convention.",
    href: "https://www.necaconvention.org/about-convention/tips-tools/",
    pinned: true,
  },
  {
    title: "First-Time Attendees Guide",
    description: "New to NECA? Start here for a walkthrough of what to expect.",
    href: "https://www.necaconvention.org/first-time-attendees/",
  },
  {
    title: "Sonepar Customer Party RSVP",
    description:
      "RSVP for the Monday night Sonepar party at Beer Park. Use registration code 26EXH.",
    href: "https://customerpartyatneca.events.sonepar.com/sonepar-customer-party-at-neca",
  },
];
