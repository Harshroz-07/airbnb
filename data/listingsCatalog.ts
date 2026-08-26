export interface CatalogListing {
  id: string;
  title: string;
  location: string;
  distance: string;
  datesAvailable: string;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  badge?: string;
  photos: string[];
  categorySection: string;
}

export interface GetawayTab {
  name: string;
  items: Array<{ name: string; type: string }>;
}

export const listingsCatalog: CatalogListing[] = [
  // Section 1: Homes for stay in North Goa
  {
    id: "mirashya-ug10",
    title: "Romantic Jacuzzi 1BHK Candolim",
    location: "Candolim, Goa, India",
    distance: "10-min walk to Candolim Beach",
    datesAvailable: "Sep 10 – 15",
    pricePerNight: 1850,
    currency: "₹",
    rating: 4.92,
    reviewCount: 48,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Homes for stay in North Goa"
  },
  {
    id: "villa-calangute-pool",
    title: "Luxury 3BHK Private Pool Villa",
    location: "Calangute, Goa, India",
    distance: "500m from Calangute Beach",
    datesAvailable: "Sep 12 – 17",
    pricePerNight: 5400,
    currency: "₹",
    rating: 4.98,
    reviewCount: 92,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Homes for stay in North Goa"
  },
  {
    id: "assagao-heritage-home",
    title: "Portuguese Heritage Villa & Garden",
    location: "Assagao, Goa, India",
    distance: "Near Gunpowder & Sublime",
    datesAvailable: "Sep 15 – 20",
    pricePerNight: 4200,
    currency: "₹",
    rating: 4.89,
    reviewCount: 64,
    isGuestFavorite: false,
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Homes for stay in North Goa"
  },
  {
    id: "siolim-riverfront-studio",
    title: "Serene Riverfront Studio with Sunset Deck",
    location: "Siolim, Goa, India",
    distance: "Chapora river view",
    datesAvailable: "Sep 08 – 13",
    pricePerNight: 2100,
    currency: "₹",
    rating: 4.95,
    reviewCount: 37,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Homes for stay in North Goa"
  },

  // Section 2: Top rated Jacuzzi & Pool Stays
  {
    id: "vagator-cliff-suite",
    title: "Vagator Cliff Suite with Hot Tub",
    location: "Vagator, Goa, India",
    distance: "Overlooking Vagator Beach",
    datesAvailable: "Oct 01 – 06",
    pricePerNight: 3800,
    currency: "₹",
    rating: 4.96,
    reviewCount: 118,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Top rated Jacuzzi & Pool Stays"
  },
  {
    id: "alibaug-glass-villa",
    title: "Alibaug Glass Villa & Plunge Pool",
    location: "Alibaug, Maharashtra, India",
    distance: "2 hours drive from Mumbai",
    datesAvailable: "Sep 18 – 22",
    pricePerNight: 6500,
    currency: "₹",
    rating: 4.91,
    reviewCount: 84,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Top rated Jacuzzi & Pool Stays"
  },
  {
    id: "lonavala-infinity-pool",
    title: "Lonavala Hill View Infinity Pool Chalet",
    location: "Lonavala, Maharashtra, India",
    distance: "Mountain cliff view",
    datesAvailable: "Sep 14 – 19",
    pricePerNight: 4900,
    currency: "₹",
    rating: 4.88,
    reviewCount: 142,
    isGuestFavorite: false,
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Top rated Jacuzzi & Pool Stays"
  },
  {
    id: "coorg-coffee-estate-villa",
    title: "Coorg Plantation Jacuzzi Cottage",
    location: "Madikeri, Coorg, India",
    distance: "Surrounded by coffee trees",
    datesAvailable: "Sep 20 – 25",
    pricePerNight: 3200,
    currency: "₹",
    rating: 4.97,
    reviewCount: 76,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Top rated Jacuzzi & Pool Stays"
  },

  // Section 3: Available next month in Pune
  {
    id: "pune-skyline-penthouse",
    title: "Koregaon Park Luxury Skyline Penthouse",
    location: "Pune, Maharashtra, India",
    distance: "Heart of KP food district",
    datesAvailable: "Oct 05 – 10",
    pricePerNight: 2800,
    currency: "₹",
    rating: 4.94,
    reviewCount: 53,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Available next month in Pune"
  },
  {
    id: "pune-baner-boho-apartment",
    title: "Modern Boho 2BHK Baner Balcony",
    location: "Baner, Pune, India",
    distance: "High-speed 300 Mbps Wi-Fi",
    datesAvailable: "Oct 02 – 07",
    pricePerNight: 1950,
    currency: "₹",
    rating: 4.87,
    reviewCount: 29,
    isGuestFavorite: false,
    photos: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Available next month in Pune"
  },
  {
    id: "pune-viman-nagar-suite",
    title: "Executive Studio near Airport & Mall",
    location: "Viman Nagar, Pune, India",
    distance: "5-min from Phoenix Marketcity",
    datesAvailable: "Oct 10 – 15",
    pricePerNight: 1600,
    currency: "₹",
    rating: 4.90,
    reviewCount: 41,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Available next month in Pune"
  },
  {
    id: "mulshi-lakeview-cottage",
    title: "Mulshi Lakeview Nature Cottage",
    location: "Mulshi, Pune, India",
    distance: "Panoramic lake & hill view",
    datesAvailable: "Oct 12 – 16",
    pricePerNight: 3100,
    currency: "₹",
    rating: 4.93,
    reviewCount: 68,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Available next month in Pune"
  },

  // Section 4: Check out homes in South Goa
  {
    id: "benaulim-palms-resort",
    title: "Benaulim Palms 2BHK Pool Villa",
    location: "Benaulim, South Goa, India",
    distance: "300m to white sand beach",
    datesAvailable: "Sep 22 – 27",
    pricePerNight: 2900,
    currency: "₹",
    rating: 4.95,
    reviewCount: 81,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Check out homes in South Goa"
  },
  {
    id: "palolem-beach-hut",
    title: "Palolem Oceanfront Eco Wooden Hut",
    location: "Palolem, South Goa, India",
    distance: "Direct oceanfront views",
    datesAvailable: "Oct 01 – 06",
    pricePerNight: 2400,
    currency: "₹",
    rating: 4.89,
    reviewCount: 104,
    isGuestFavorite: false,
    photos: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Check out homes in South Goa"
  },
  {
    id: "cavelossim-luxury-apartment",
    title: "Cavelossim River & Beach Apartment",
    location: "Cavelossim, South Goa, India",
    distance: "Walk to Mobor Beach",
    datesAvailable: "Sep 25 – 30",
    pricePerNight: 2600,
    currency: "₹",
    rating: 4.92,
    reviewCount: 56,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Check out homes in South Goa"
  },
  {
    id: "colva-coconut-grove-villa",
    title: "Colva Coconut Grove Garden Villa",
    location: "Colva, South Goa, India",
    distance: "Private patio & lush palm garden",
    datesAvailable: "Oct 04 – 09",
    pricePerNight: 2250,
    currency: "₹",
    rating: 4.86,
    reviewCount: 39,
    isGuestFavorite: false,
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Check out homes in South Goa"
  },

  // Section 5: Popular homes in Udaipur & Heritage
  {
    id: "udaipur-lakeview-haveli",
    title: "Lake Pichola Heritage Haveli Suite",
    location: "Udaipur, Rajasthan, India",
    distance: "Overlooking City Palace & Lake",
    datesAvailable: "Oct 15 – 20",
    pricePerNight: 4500,
    currency: "₹",
    rating: 4.98,
    reviewCount: 162,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Popular homes in Udaipur & Heritage"
  },
  {
    id: "jaipur-royal-courtyard",
    title: "Jaipur Royal Courtyard Boutique Stay",
    location: "Jaipur, Rajasthan, India",
    distance: "Near Hawa Mahal & Pink City",
    datesAvailable: "Oct 18 – 23",
    pricePerNight: 3900,
    currency: "₹",
    rating: 4.91,
    reviewCount: 110,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Popular homes in Udaipur & Heritage"
  },
  {
    id: "jodhpur-fortview-villa",
    title: "Mehrangarh Fort View Terrace Loft",
    location: "Jodhpur, Rajasthan, India",
    distance: "Panoramic Blue City terrace view",
    datesAvailable: "Oct 20 – 25",
    pricePerNight: 2750,
    currency: "₹",
    rating: 4.88,
    reviewCount: 75,
    isGuestFavorite: false,
    photos: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Popular homes in Udaipur & Heritage"
  },
  {
    id: "pushkar-desert-resort",
    title: "Pushkar Royal Tent & Pool Sanctuary",
    location: "Pushkar, Rajasthan, India",
    distance: "Desert dunes & private pool",
    datesAvailable: "Oct 22 – 27",
    pricePerNight: 3400,
    currency: "₹",
    rating: 4.93,
    reviewCount: 58,
    isGuestFavorite: true,
    badge: "Guest favorite",
    photos: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    ],
    categorySection: "Popular homes in Udaipur & Heritage"
  }
];

export const getawayTabs: GetawayTab[] = [
  {
    name: "Popular",
    items: [
      { name: "Canmore", type: "Apartment rentals" },
      { name: "Benalmádena", type: "Beach house rentals" },
      { name: "Marbella", type: "Villa rentals" },
      { name: "Mijas", type: "House rentals" },
      { name: "Prescott", type: "Cabin rentals" },
      { name: "Scottsdale", type: "Condo rentals" },
      { name: "Tucson", type: "Pet-friendly rentals" },
      { name: "Jasper", type: "Mountain rentals" },
      { name: "Mountain View", type: "Tech hub rentals" },
      { name: "Devonport", type: "Cottage rentals" },
      { name: "Mallacoota", type: "Lakefront rentals" },
      { name: "Ibiza", type: "Luxury holiday stays" }
    ]
  },
  {
    name: "Arts & culture",
    items: [
      { name: "Phoenix", type: "Mansion rentals" },
      { name: "Hot Springs", type: "Spa chalet rentals" },
      { name: "Los Angeles", type: "Loft rentals" },
      { name: "San Diego", type: "Beachfront stays" },
      { name: "San Francisco", type: "Victorian home stays" },
      { name: "Prague", type: "Historic apartment stays" }
    ]
  },
  {
    name: "Outdoors",
    items: [
      { name: "Lake Tahoe", type: "Cabin rentals" },
      { name: "Yosemite", type: "Nature retreat stays" },
      { name: "Zion National Park", type: "Glamping stays" },
      { name: "Banff", type: "Ski chalet rentals" }
    ]
  },
  {
    name: "Mountains",
    items: [
      { name: "Aspen", type: "Luxury chalet rentals" },
      { name: "Whistler", type: "Ski-in ski-out stays" },
      { name: "Manali", type: "Pine cottage stays" },
      { name: "Shimla", type: "Heritage hill stays" }
    ]
  },
  {
    name: "Beach",
    items: [
      { name: "Candolim Beach", type: "Jacuzzi apartment stays" },
      { name: "Calangute", type: "Pool villa stays" },
      { name: "Benaulim", type: "White sand beach stays" },
      { name: "Palolem", type: "Oceanfront hut stays" }
    ]
  },
  {
    name: "Unique stays",
    items: [
      { name: "Treehouses", type: "Nature treehouse stays" },
      { name: "Private Islands", type: "Island retreat stays" },
      { name: "Houseboats", type: "Floating home stays" },
      { name: "Domes", type: "Stargazing dome stays" }
    ]
  }
];
