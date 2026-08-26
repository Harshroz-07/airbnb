export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
  caption?: string;
  features?: string;
}

export const categoryFeatures: Record<string, string> = {
  "Living Room": "Sofa · Air conditioning · Ceiling fan · Smart TV",
  "Jacuzzi": "Private hot tub · Hydromassage jets · Mood lighting",
  "Bedroom": "Plush queen mattress · Wardrobe · Natural sunlight · Air conditioning",
  "Building Exterior": "Modern complex facade · Gated security · Red tiled roof",
  "Bathroom": "Ensuite bathroom · Rain shower · Hot water · Glass enclosure",
  "Kitchen": "Induction cooktop · Microwave · Refrigerator · Cookware",
  "Balcony": "Private balcony nook · Tropical garden view · Outdoor seating",
  "Outdoor & Pool": "Shared outdoor pool · Sun loungers · Tropical landscape",
  "Neighborhood": "10-min walk to Candolim Beach · Nearby Goan cafes & dining",
  "Dining": "Intimate dining space · Ambient sconces · 2-seater setup",
  "Workspace": "Ergonomic desk setup · High-speed 200 Mbps Wi-Fi"
};


export interface Review {
  id: string;
  author: string;
  avatar: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
}

export interface ListingData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  pricePerNight: number;
  currency: string;
  discountBadge?: string;
  host: {
    name: string;
    avatar: string;
    superhost: boolean;
    responseRate: string;
    responseTime: string;
    yearsHosting: number;
    coHosts?: Array<{ name: string; avatar: string }>;
  };
  highlights: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  description: string;
  amenities: Array<{
    name: string;
    icon: string;
    category: string;
    popular?: boolean;
  }>;
  photos: Photo[];
  reviews: Review[];
  ratingsBreakdown: {
    cleanliness: number;
    accuracy: number;
    communication: number;
    location: number;
    checkIn: number;
    value: number;
  };
}

export const listingData: ListingData = {
  id: "mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, India",
  location: "Candolim, Goa, India",
  rating: 4.92,
  reviewCount: 48,
  isGuestFavorite: true,
  pricePerNight: 1850,
  currency: "₹",
  discountBadge: "Get 10% off your next stay",
  host: {
    name: "Mirashya",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    superhost: true,
    responseRate: "100%",
    responseTime: "within an hour",
    yearsHosting: 4,
    coHosts: [
      {
        name: "Rahul",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  highlights: [
    {
      title: "Guest favorite",
      description: "One of the most loved homes on Airbnb, according to guests",
      icon: "trophy"
    },
    {
      title: "Private jacuzzi",
      description: "Relax in your own private hot tub on the terrace",
      icon: "sparkles"
    },
    {
      title: "Self check-in",
      description: "Check yourself in with the keypad",
      icon: "key"
    },
    {
      title: "Free cancellation for 48 hours",
      description: "Get a full refund if your plans change",
      icon: "calendar-check"
    }
  ],
  description: `Welcome to Mirashya UG10, a luxurious and romantic 1BHK serviced apartment located in the heart of Candolim, North Goa. 

Equipped with a private jacuzzi, premium rattan furnishings, warm ambient lighting, high-speed Wi-Fi, and a fully functional kitchen, this apartment provides an intimate holiday experience just a 10-minute walk from Candolim Beach.

Whether you are looking for a romantic couples' retreat, a workcation with dedicated desk setup, or a relaxing getaway near top Goan restaurants, Mirashya UG10 delivers total comfort, privacy, and 24/7 security.`,
  photos: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
      alt: "Spacious living room with elegant rattan seating and warm sconce lights",
      category: "Living Room",
      caption: "Main living lounge featuring custom rattan furniture, white ottoman, and ambient sconce lighting"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      alt: "Private luxury jacuzzi tub in indoor deck area",
      category: "Jacuzzi",
      caption: "Private jacuzzi with hydromassage jets and mood lighting"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1000",
      alt: "Close up view of jacuzzi tub with wooden deck surround",
      category: "Jacuzzi",
      caption: "Custom wooden deck surrounding the private jacuzzi tub"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000",
      alt: "Cozy bedroom with plush king bed, wardrobe, and mirror",
      category: "Bedroom",
      caption: "Master bedroom featuring plush queen mattress, wardrobe, and natural sunlight"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      alt: "Exterior view of apartment building in Candolim Goa",
      category: "Building Exterior",
      caption: "Modern apartment complex building facade with red tiled roof"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1000",
      alt: "Modern ensuite bathroom with rain shower",
      category: "Bathroom",
      caption: "Clean ensuite bathroom with glass enclosure and modern rain shower"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
      alt: "Fully equipped kitchen with induction stove and fridge",
      category: "Kitchen",
      caption: "Kitchenette equipped with cookware, microwave, fridge, and induction cooktop"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1000",
      alt: "Private balcony seating area with lush plant view",
      category: "Balcony",
      caption: "Balcony nook overlooking tropical Goan greens"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1000",
      alt: "Complex outdoor swimming pool",
      category: "Outdoor & Pool",
      caption: "Shared outdoor pool accessible to guests"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000",
      alt: "Alternate view of living room seating area",
      category: "Living Room",
      caption: "Cozy seating corner with warm interior accents"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&q=80&w=1000",
      alt: "Bedroom nightstand and ambient lighting",
      category: "Bedroom",
      caption: "Warm bedside lamps creating a soothing ambiance"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000",
      alt: "Nearby Candolim Beach coastline",
      category: "Neighborhood",
      caption: "Candolim Beach shore just 10 minutes walking distance"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000",
      alt: "Dining table setup",
      category: "Dining",
      caption: "Dining space for romantic meals"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
      alt: "Dedicated workspace desk setup",
      category: "Workspace",
      caption: "Ergonomic workspace with high-speed 200 Mbps Wi-Fi"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
      alt: "Jacuzzi illuminated at dusk",
      category: "Jacuzzi",
      caption: "Evening mood lighting around the private jacuzzi"
    }
  ],
  amenities: [
    { name: "Private Jacuzzi", icon: "sparkles", category: "Popular", popular: true },
    { name: "Fast Wi-Fi (200 Mbps)", icon: "wifi", category: "Popular", popular: true },
    { name: "Free parking on premises", icon: "car", category: "Popular", popular: true },
    { name: "Air conditioning", icon: "snowflake", category: "Popular", popular: true },
    { name: "Kitchen", icon: "utensils", category: "Popular", popular: true },
    { name: "Dedicated workspace", icon: "laptop", category: "Popular", popular: true },
    { name: "Shared pool", icon: "waves", category: "Popular", popular: true },
    { name: "TV with Netflix", icon: "tv", category: "Popular", popular: true },
    { name: "Elevator", icon: "arrow-up-down", category: "Facilities" },
    { name: "Washing machine", icon: "shirt", category: "Facilities" },
    { name: "Microwave", icon: "microwave", category: "Kitchen" },
    { name: "Refrigerator", icon: "refrigerator", category: "Kitchen" },
    { name: "Hot water", icon: "flame", category: "Bathroom" },
    { name: "Hair dryer", icon: "wind", category: "Bathroom" },
    { name: "Iron & ironing board", icon: "iron", category: "Bedroom" },
    { name: "First aid kit", icon: "cross", category: "Safety" },
    { name: "Fire extinguisher", icon: "shield-alert", category: "Safety" },
    { name: "Security cameras on property", icon: "eye", category: "Safety" }
  ],
  ratingsBreakdown: {
    cleanliness: 4.9,
    accuracy: 5.0,
    communication: 5.0,
    location: 4.8,
    checkIn: 5.0,
    value: 4.9
  },
  reviews: [
    {
      id: "rev-1",
      author: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      location: "Mumbai, India",
      date: "August 2026",
      rating: 5,
      comment: "Absolutely incredible stay! The private jacuzzi on the balcony was clean, warm, and romantic. Mirashya was super responsive and helpful throughout our trip. Highly recommend for couples visiting Goa!"
    },
    {
      id: "rev-2",
      author: "Vikram Malhotra",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      location: "Bengaluru, India",
      date: "July 2026",
      rating: 5,
      comment: "Great location in Candolim, close to all top cafes and the beach. The apartment is exactly as shown in photos. Wi-Fi speed was top notch as I worked remotely for 2 days. 10/10!"
    },
    {
      id: "rev-3",
      author: "Aarav Mehta",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      location: "New Delhi, India",
      date: "June 2026",
      rating: 5,
      comment: "The interior design and rattan furniture give such a cozy aesthetic vibe. Self check-in was seamless and the place was spotless."
    },
    {
      id: "rev-4",
      author: "Jessica Taylor",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      location: "London, UK",
      date: "May 2026",
      rating: 5,
      comment: "Wonderful apartment! Mirashya and Rahul were superhosts in every sense. The jacuzzi after a long day at Candolim Beach was pure bliss."
    },
    {
      id: "rev-5",
      author: "Karan Patel",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
      location: "Ahmedabad, India",
      date: "April 2026",
      rating: 5,
      comment: "Peaceful environment, ultra clean, and private. Parking space inside premises made hiring a car super easy."
    },
    {
      id: "rev-6",
      author: "Sneha Reddy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      location: "Hyderabad, India",
      date: "March 2026",
      rating: 5,
      comment: "Best Airbnb experience in Goa! We loved the attention to detail, soft linens, and romantic setup."
    }
  ]
};
