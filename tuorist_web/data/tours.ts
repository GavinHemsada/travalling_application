export interface TourData {
  slug: string;
  images: string[];
  gallery: string[];
  locationSrc: string;
  reviews: number;
}

export const toursData: Record<string, TourData> = {
  "yala-national-park-safari": {
    slug: "yala-national-park-safari",
    images: ["/Tours/saffari.jpg", "/Destination/yala.jpg", "/Tours/yala/yala1.jpg", "/Tours/yala/yala2.jpg"],
    gallery: ["/Tours/yala/yala2.jpg", "/Destination/yala.jpg", "/Tours/yala/yala3.jpg", "/Tours/yala/yala4.jpg", "/Tours/saffari.jpg","/Tours/yala/yala1.jpg"],
    locationSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.42595287328!2d81.51537631520327!3d6.367034596392859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6b297492e01ab%3A0x9380f32e7d930f27!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1708792000000!5m2!1sen!2slk",
    reviews: 120
  },
  "sigiriya-dambulla-day-trip": {
    slug: "sigiriya-dambulla-day-trip",
    images: ["/Tours/sigiri.jpg", "/Tours/sigiriya/sigiriya5.jpg", "/Tours/sigiriya/sigiriya2.jpg", "/Tours/sigiriya/sigiriya3.jpg"],
    gallery: ["/Tours/sigiri.jpg", "/Tours/sigiriya/sigiriya2.jpg", "/Tours/sigiriya/sigiriya5.jpg", "/Tours/sigiriya/sigiriya3.jpg", "/Tours/sigiriya/sigiriya4.jpg", "/Tours/sigiriya/sigiriya1.jpg"],
    locationSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.535805568571!2d80.7570973147761!3d7.954203894270273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0dfa7318359%3A0xc6cb1cd7d7e35b0b!2sSigiriya%20Rock!5e0!3m2!1sen!2slk!4v1684347690629!5m2!1sen!2slk",
    reviews: 85
  },
  "tea-plantation-tour": {
    slug: "tea-plantation-tour",
    images: ["/Tours/tea.jpg", "/Tours/ella/ella1.jpg", "/images/bg_img2.jpg", "/images/bg_img3.jpg"],
    gallery: ["/Tours/tea.jpg", "/Tours/ella/ella2.jpg", "/images/bg_img1.jpg", "/Tours/ella/ella1.jpg", "/Tours/tea.jpg", "/images/bg_img.jpg"],
    locationSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.81529712035!2d80.73033585038089!3d6.953509062334812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1684347781075!5m2!1sen!2slk",
    reviews: 42
  },
  "whale-dolphin-watching": {
    slug: "whale-dolphin-watching",
    images: ["/Tours/Dolphin.jpg", "/Tours/mirissa/mirissa2.jpg", "/Tours/mirissa/fish1.jpg", "/Tours/mirissa/fish2.jpg"],
    gallery: ["/Tours/Dolphin.jpg", "/Tours/mirissa/mirissa1.jpg", "/Tours/mirissa/fish1.jpg", "/Tours/mirissa/fish2.jpg", "/Tours/Dolphin.jpg", "/Tours/mirissa/mirissa2.jpg"],
    locationSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15872.290516805046!2d80.44318356977539!3d5.952906800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13ecc5ce88c87%3A0x67909c2a6dcfa4b0!2sMirissa%20Beach!5e0!3m2!1sen!2slk!4v1684347881075!5m2!1sen!2slk",
    reviews: 67
  },
  "galle-full-day-journey": {
    slug: "galle-full-day-journey",
    images: ["/Tours/galle.jpg", "/Tours/galle/galle1.jpg", "/Tours/galle/galle2.jpg", "/Tours/galle/galle3.jpg"],
    gallery: ["/Tours/galle.jpg", "/Tours/galle/galle1.jpg", "/Tours/galle/galle2.jpg", "/Tours/galle/galle3.jpg", "/Tours/galle/galle4.jpg", "/Tours/galle/galle5.jpg"],
    locationSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15870.027041549488!2d80.20785002931144!3d6.027964669864235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a113ec5db1%3A0xb3fc07df3029fc!2sGalle%20Dutch%20Fort!5e0!3m2!1sen!2slk!4v1684347967272!5m2!1sen!2slk",
    reviews: 58
  },
  "cultural-triangle-history": {
    slug: "cultural-triangle-history",
    images: ["/Tours/history.jpg", "/Tours/Cultural/Cultural2.jpg", "/Tours/Cultural/Cultural1.jpg", "/Tours/Cultural/Cultural5.jpg"],
    gallery: ["/Tours/history.jpg", "/Tours/Cultural/Cultural2.jpg", "/Tours/Cultural/Cultural1.jpg", "/Tours/Cultural/Cultural3.jpg", "/Tours/Cultural/Cultural4.jpg", "/Tours/Cultural/Cultural5.jpg"],
    locationSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.464670267498!2d80.62772712411985!3d7.291418721998583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sTemple%20of%20the%20Sacred%20Tooth%20Relic!5e0!3m2!1sen!2slk!4v1684348037341!5m2!1sen!2slk",
    reviews: 34
  },
  "ella-scenic-wonders": {
    slug: "ella-scenic-wonders",
    images: ["/Tours/Arches.jpg", "/Tours/ella/ella2.jpg", "/Tours/ella/ella3.jpg", "/Tours/ella/ella4.jpg"],
    gallery: ["/Tours/Arches.jpg", "/Tours/ella/ella2.jpg", "/Tours/ella/ella3.jpg", "/Tours/ella/ella4.jpg", "/Tours/Arches.jpg", "/Tours/ella/ella5.jpg"],
    locationSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34084.773801287955!2d81.02641772671505!3d6.874136611385419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465955bc09a25%3A0xbdf4d47384451731!2sElla!5e0!3m2!1sen!2slk!4v1684348123485!5m2!1sen!2slk",
    reviews: 92
  }
};
