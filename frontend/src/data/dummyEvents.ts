export interface Event {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  price: number;
  image: string;
  description: string;
}

export const dummyEvents: Event[] = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "Music",
    location: "Chennai",
    date: "Oct 12, 2026",
    price: 799,
    image: "https://picsum.photos/seed/music1/600/800",
    description: "An unforgettable evening of live music and performances.",
  },
  {
    id: 2,
    title: "Laugh Out Loud",
    category: "Comedy",
    location: "Bangalore",
    date: "Oct 18, 2026",
    price: 499,
    image: "https://picsum.photos/seed/comedy1/600/800",
    description: "A night of stand-up comedy featuring amazing performers.",
  },
  {
    id: 3,
    title: "Future Tech Summit",
    category: "Technology",
    location: "Hyderabad",
    date: "Oct 25, 2026",
    price: 999,
    image: "https://picsum.photos/seed/tech1/600/800",
    description: "Explore the future of technology, AI and innovation.",
  },
  {
    id: 4,
    title: "Champions Arena",
    category: "Sports",
    location: "Mumbai",
    date: "Nov 2, 2026",
    price: 699,
    image: "https://picsum.photos/seed/sports1/600/800",
    description: "Experience an exciting day of competitive sports.",
  },
  {
    id: 5,
    title: "The Grand Stage",
    category: "Theatre",
    location: "Chennai",
    date: "Nov 8, 2026",
    price: 599,
    image: "https://picsum.photos/seed/theatre1/600/800",
    description: "A spectacular theatrical performance on the grand stage.",
  },
  {
    id: 6,
    title: "Creative Minds",
    category: "Workshops",
    location: "Coimbatore",
    date: "Nov 15, 2026",
    price: 399,
    image: "https://picsum.photos/seed/workshop1/600/800",
    description: "Learn, create and connect with other creative minds.",
  },
  {
    id: 7,
    title: "Sunset Beats",
    category: "Music",
    location: "Goa",
    date: "Nov 20, 2026",
    price: 899,
    image: "https://picsum.photos/seed/music2/600/800",
    description: "Music, sunset and unforgettable memories by the beach.",
  },
  {
    id: 8,
    title: "Startup Stories",
    category: "Technology",
    location: "Chennai",
    date: "Nov 25, 2026",
    price: 499,
    image: "https://picsum.photos/seed/startup1/600/800",
    description: "Meet founders and discover inspiring startup journeys.",
  },
  {
    id: 9,
    title: "Comedy Nights",
    category: "Comedy",
    location: "Pune",
    date: "Dec 2, 2026",
    price: 449,
    image: "https://picsum.photos/seed/comedy2/600/800",
    description: "A hilarious evening packed with live comedy.",
  },
  {
    id: 10,
    title: "Art & Soul",
    category: "Workshops",
    location: "Bangalore",
    date: "Dec 10, 2026",
    price: 349,
    image: "https://picsum.photos/seed/art1/600/800",
    description: "A creative workshop for art lovers and beginners.",
  },
];