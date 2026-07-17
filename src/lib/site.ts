export const SITE = {
  name: "Dev Tattoo & Art",
  artist: "Debasis Adak",
  phone: "+91 80803 53553",
  phoneHref: "tel:+918080353553",
  whatsapp: (text?: string) =>
    `https://wa.me/918080353553${text ? `?text=${encodeURIComponent(text)}` : ""}`,
  instagram: "https://www.instagram.com/devtattooandart",
  facebook: "https://www.facebook.com/devtattooandart",
  address:
    "Nanda Bhavan, 184 Rajarhat Main Road, Opposite Lokenath Temple, Pearabagan, New Town, Rajarhat, Kolkata, West Bengal 700157",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dev+Tattoo+and+Art+Rajarhat+Main+Road+New+Town+Kolkata",
  mapsEmbed:
    "https://www.google.com/maps?q=Dev+Tattoo+and+Art,+Rajarhat+Main+Road,+New+Town,+Kolkata&output=embed",
  rating: "5.0",
  reviews: "1560+",
  hours: "Open daily · 11:00 AM – 9:00 PM",
} as const;

export const REELS = [
  "https://www.instagram.com/reel/DZ99Gshz21B/?hl=en",
  "https://www.instagram.com/reel/DBqBHijt1K_/?hl=en",
  "https://www.instagram.com/reel/DaN4J7cBjNA/?hl=en",
  "https://www.instagram.com/reel/Dah2TqPIzJ9/?hl=en",
  "https://www.instagram.com/reel/DWZdN_WD3N0/?hl=en",
  "https://www.instagram.com/reel/DWO12M5DwtU/?hl=en",
] as const;
