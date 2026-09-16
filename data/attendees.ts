export type Attendee = {
  name: string;
  phone: string; // tel: href, digits only with country code
  phoneDisplay: string;
  type: "Employee" | "Guest";
  travelingWith?: string; // for employees: their guest's name. for guests: the employee's name.
};

const employees: Attendee[] = [
  { name: "Chris Cox", phone: "+15419514618", phoneDisplay: "541-951-4618", type: "Employee", travelingWith: "Amber Cox" },
  { name: "Joe Myers", phone: "+15412103492", phoneDisplay: "541-210-3492", type: "Employee", travelingWith: "Jolene Myers" },
  { name: "Jason Seidel", phone: "+15412100915", phoneDisplay: "541-210-0915", type: "Employee", travelingWith: "Danielle Seidel" },
  { name: "Brandon Douglas", phone: "+15418414269", phoneDisplay: "541-841-4269", type: "Employee" },
  { name: "Jordan Berberet Hess", phone: "+15412612133", phoneDisplay: "541-261-2133", type: "Employee", travelingWith: "Parker Berberet" },
  { name: "J.D. Locy", phone: "+15416219883", phoneDisplay: "541-621-9883", type: "Employee" },
  { name: "Lonny Ruda", phone: "+15413731298", phoneDisplay: "541-373-1298", type: "Employee" },
  { name: "Colin Sowers", phone: "+15413014568", phoneDisplay: "541-301-4568", type: "Employee", travelingWith: "Andrea Majano" },
  { name: "Wyatt Sharrard", phone: "+15412185200", phoneDisplay: "541-218-5200", type: "Employee", travelingWith: "Jessica Sharrard" },
  { name: "Gabe Wine", phone: "+15412100900", phoneDisplay: "541-210-0900", type: "Employee", travelingWith: "Tawny Wine" },
  { name: "Aaron Frymire", phone: "+15412823204", phoneDisplay: "541-282-3204", type: "Employee" },
  { name: "Jim Hess", phone: "+15419447630", phoneDisplay: "541-944-7630", type: "Employee", travelingWith: "Kristine Hess" },
  { name: "Scott Cancilla", phone: "+15412103491", phoneDisplay: "541-210-3491", type: "Employee", travelingWith: "Trisha Pylant" },
  { name: "Zach Zurlinden", phone: "+15418416227", phoneDisplay: "541-841-6227", type: "Employee", travelingWith: "Jamie Bradley" },
];

const guests: Attendee[] = [
  { name: "Amber Cox", phone: "+15419514617", phoneDisplay: "541-951-4617", type: "Guest", travelingWith: "Chris Cox" },
  { name: "Jolene Myers", phone: "+15416606448", phoneDisplay: "541-660-6448", type: "Guest", travelingWith: "Joe Myers" },
  { name: "Danielle Seidel", phone: "+15419735543", phoneDisplay: "541-973-5543", type: "Guest", travelingWith: "Jason Seidel" },
  { name: "Kristine Hess", phone: "+15416014843", phoneDisplay: "541-601-4843", type: "Guest", travelingWith: "Jim Hess" },
  { name: "Tawny Wine", phone: "+15416018853", phoneDisplay: "541-601-8853", type: "Guest", travelingWith: "Gabe Wine" },
  { name: "Jessica Sharrard", phone: "+15412187992", phoneDisplay: "541-218-7992", type: "Guest", travelingWith: "Wyatt Sharrard" },
  { name: "Jamie Bradley", phone: "+15415007962", phoneDisplay: "541-500-7962", type: "Guest", travelingWith: "Zach Zurlinden" },
  { name: "Trisha Pylant", phone: "+15412189442", phoneDisplay: "541-218-9442", type: "Guest", travelingWith: "Scott Cancilla" },
  { name: "Andrea Majano", phone: "+15419444795", phoneDisplay: "541-944-4795", type: "Guest", travelingWith: "Colin Sowers" },
  { name: "Parker Berberet", phone: "+17142253546", phoneDisplay: "714-225-3546", type: "Guest", travelingWith: "Jordan Berberet Hess" },
];

export const attendees: Attendee[] = [...employees, ...guests];

export const attendeeStats = {
  total: attendees.length,
  employees: employees.length,
  guests: guests.length,
};
