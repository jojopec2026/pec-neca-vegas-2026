export type FlightLeg = {
  flightNumber: string;
  from: { code: string; city: string };
  to: { code: string; city: string };
  departTime: string;
  arriveTime: string;
  cabin: string;
};

export type FlightGroup = {
  label: string;
  date: string;
  legs: FlightLeg[];
  /** Minutes between the first leg's arrival and the second leg's departure. */
  connectionMinutes?: number;
  note?: string;
};

/** Connections at or under this many minutes are flagged as tight. */
export const TIGHT_CONNECTION_THRESHOLD_MINUTES = 90;

export function formatConnection(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m.toString().padStart(2, "0")}m`;
}

export const airlineConfirmation = "BF6RBW";
export const airlineName = "United Airlines";
export const flightGroupNote =
  "All travelers except Parker Berberet are on the same United itinerary.";

export const flightGroups: FlightGroup[] = [
  {
    label: "Outbound",
    date: "Saturday, October 3, 2026",
    connectionMinutes: 65, // SFO: arrive 3:35 PM, depart 4:40 PM
    legs: [
      {
        flightNumber: "UA1754",
        from: { code: "MFR", city: "Medford, OR" },
        to: { code: "SFO", city: "San Francisco, CA" },
        departTime: "2:08 PM",
        arriveTime: "3:35 PM",
        cabin: "United Economy (L)",
      },
      {
        flightNumber: "UA751",
        from: { code: "SFO", city: "San Francisco, CA" },
        to: { code: "LAS", city: "Las Vegas, NV" },
        departTime: "4:40 PM",
        arriveTime: "6:31 PM",
        cabin: "United Economy (L)",
      },
    ],
  },
  {
    label: "Return",
    date: "Thursday, October 8, 2026",
    connectionMinutes: 87, // SFO: arrive 8:56 AM, depart 10:23 AM
    legs: [
      {
        flightNumber: "UA2356",
        from: { code: "LAS", city: "Las Vegas, NV" },
        to: { code: "SFO", city: "San Francisco, CA" },
        departTime: "7:15 AM",
        arriveTime: "8:56 AM",
        cabin: "United Economy (L)",
      },
      {
        flightNumber: "UA2322",
        from: { code: "SFO", city: "San Francisco, CA" },
        to: { code: "MFR", city: "Medford, OR" },
        departTime: "10:23 AM",
        arriveTime: "11:50 AM",
        cabin: "United Economy (L)",
      },
    ],
  },
];

export type ETicket = {
  traveler: string;
  eTicketNumber: string;
};

export const eTickets: ETicket[] = [
  { traveler: "Christopher Cox", eTicketNumber: "0162124124587" },
  { traveler: "Jolene Myers", eTicketNumber: "0162124124582" },
  { traveler: "Joseph Myers", eTicketNumber: "0162124124580" },
  { traveler: "Jason Seidel", eTicketNumber: "0162124124628" },
  { traveler: "Brandon Douglas", eTicketNumber: "0162124124568" },
  { traveler: "Jordan Berberet Hess", eTicketNumber: "0162124124566" },
  { traveler: "Justin Locy", eTicketNumber: "0162124124622" },
  { traveler: "Lonny Ruda", eTicketNumber: "0162124124618" },
  { traveler: "Colin Sowers", eTicketNumber: "0162124124575" },
  { traveler: "Wyatt Sharrard", eTicketNumber: "0162124124653" },
  { traveler: "Gabriel Wine", eTicketNumber: "0162124124595" },
  { traveler: "Tawny Wine", eTicketNumber: "0162124124596" },
  { traveler: "Amber Cox", eTicketNumber: "0162124124594" },
  { traveler: "Aaron Frymire", eTicketNumber: "0162124124572" },
  { traveler: "Jessica Sharrard", eTicketNumber: "0162124124616" },
  { traveler: "Kristine Hess", eTicketNumber: "0162124124634" },
  { traveler: "James Hess", eTicketNumber: "0162124124632" },
  { traveler: "Jamie Bradley", eTicketNumber: "0162124124613" },
  { traveler: "Trisha Pylant", eTicketNumber: "0162124124599" },
  { traveler: "Andrea Majano", eTicketNumber: "0162124124577" },
  { traveler: "Scott Cancilla", eTicketNumber: "0162124124655" },
  { traveler: "Danielle Seidel", eTicketNumber: "0162124124629" },
  { traveler: "Zachariah Zurlinden", eTicketNumber: "0162124124607" },
];
