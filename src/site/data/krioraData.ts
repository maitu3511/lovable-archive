import sourceImage0Src from "@/assets/amber_candle_duo.jpg";
import sourceImage1Src from "@/assets/angel_shadow_holder_1791890608651.jpg";
import sourceImage2Src from "@/assets/bespoke_gifts_1791888487226.jpg";
import sourceImage3Src from "@/assets/botanical_resin_coasters.jpg";
import sourceImage4Src from "@/assets/business_card_cradle_1791890602851.jpg";
import sourceImage5Src from "@/assets/calendar_clock_desk_1791890605892.jpg";
import sourceImage6Src from "@/assets/chrono_calendar_stand_1791890611713.jpg";
import sourceImage7Src from "@/assets/classic_envelope_clutch.jpg";
import sourceImage8Src from "@/assets/compartment_dryfruit_box_1791890609978.jpg";
import sourceImage9Src from "@/assets/desk_essentials_suite_1791806073821.jpg";
import sourceImage10Src from "@/assets/diwali_dryfruit_box.jpg";
import sourceImage11Src from "@/assets/employee_joining_kit_1791806109720.jpg";
import sourceImage12Src from "@/assets/executive_reed_diffuser.jpg";
import sourceImage13Src from "@/assets/festive_dryfruit_tealight_1791806085915.jpg";
import sourceImage14Src from "@/assets/founder_namrata_1791878021459.jpg";
import sourceImage15Src from "@/assets/ganesha_lakshmi_decor_1791890606658.jpg";
import sourceImage16Src from "@/assets/ganesha_pen_stand_1791890602812.jpg";
import sourceImage17Src from "@/assets/ganesha_shadow_holder_1791890607997.jpg";
import sourceImage18Src from "@/assets/glass_jar_pouch_1791890609954.jpg";
import sourceImage19Src from "@/assets/grace_curve_clutch_1791890612732.jpg";
import sourceImage20Src from "@/assets/hero_kriora_gifting_1791806062836.jpg";
import sourceImage21Src from "@/assets/house_pen_holder_1791890602313.jpg";
import sourceImage22Src from "@/assets/keepsake_box.jpg";
import sourceImage23Src from "@/assets/laptop_stand_wood_1791890602237.jpg";
import sourceImage24Src from "@/assets/lattice_luxe_clutch_1791890612587.jpg";
import sourceImage25Src from "@/assets/lifestyle_clutch_keepsake_1791806098377.jpg";
import sourceImage26Src from "@/assets/lotus_tealight_holder_1791890607924.jpg";
import sourceImage27Src from "@/assets/message_cover_diary_1791890610482.jpg";
import sourceImage28Src from "@/assets/multifunction_desk_organiser.jpg";
import sourceImage29Src from "@/assets/oval_dryfruit_box_1791890609896.jpg";
import sourceImage30Src from "@/assets/phone_charging_dock_1791890604589.jpg";
import sourceImage31Src from "@/assets/rangoli_stencil_kit_1791890605941.jpg";
import sourceImage32Src from "@/assets/resin_essentials_1791888404312.jpg";
import sourceImage33Src from "@/assets/scented_candles_1791888427792.jpg";
import sourceImage34Src from "@/assets/signature_fragrance_1791888455452.jpg";
import sourceImage35Src from "@/assets/wood_coaster_set_1791890604107.jpg";
import sourceImage36Src from "@/assets/wooden_display_stand_1791890612098.jpg";
const sourceImage0 = { url: sourceImage0Src };
const sourceImage1 = { url: sourceImage1Src };
const sourceImage2 = { url: sourceImage2Src };
const sourceImage3 = { url: sourceImage3Src };
const sourceImage4 = { url: sourceImage4Src };
const sourceImage5 = { url: sourceImage5Src };
const sourceImage6 = { url: sourceImage6Src };
const sourceImage7 = { url: sourceImage7Src };
const sourceImage8 = { url: sourceImage8Src };
const sourceImage9 = { url: sourceImage9Src };
const sourceImage10 = { url: sourceImage10Src };
const sourceImage11 = { url: sourceImage11Src };
const sourceImage12 = { url: sourceImage12Src };
const sourceImage13 = { url: sourceImage13Src };
const sourceImage14 = { url: sourceImage14Src };
const sourceImage15 = { url: sourceImage15Src };
const sourceImage16 = { url: sourceImage16Src };
const sourceImage17 = { url: sourceImage17Src };
const sourceImage18 = { url: sourceImage18Src };
const sourceImage19 = { url: sourceImage19Src };
const sourceImage20 = { url: sourceImage20Src };
const sourceImage21 = { url: sourceImage21Src };
const sourceImage22 = { url: sourceImage22Src };
const sourceImage23 = { url: sourceImage23Src };
const sourceImage24 = { url: sourceImage24Src };
const sourceImage25 = { url: sourceImage25Src };
const sourceImage26 = { url: sourceImage26Src };
const sourceImage27 = { url: sourceImage27Src };
const sourceImage28 = { url: sourceImage28Src };
const sourceImage29 = { url: sourceImage29Src };
const sourceImage30 = { url: sourceImage30Src };
const sourceImage31 = { url: sourceImage31Src };
const sourceImage32 = { url: sourceImage32Src };
const sourceImage33 = { url: sourceImage33Src };
const sourceImage34 = { url: sourceImage34Src };
const sourceImage35 = { url: sourceImage35Src };
const sourceImage36 = { url: sourceImage36Src };
export interface Product {
  id: string;
  name: string;
  category: "desk-office-essentials" | "festive-celebration" | "lifestyle-keepsakes";
  categoryLabel: string;
  description: string;
  materials: string[];
  customisationOptions: string[];
  bestFor: string;
  image: string;
  featured?: boolean;
  // Configurable Marketplace Purchase URLs (Amazon, Flipkart, Meesho)
  // Leave empty or undefined if not listed; buttons are automatically hidden when URL is unavailable.
  amazonUrl?: string;
  flipkartUrl?: string;
  meeshoUrl?: string;
}

export interface BusinessSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  typicalItems: string[];
  suitableFor: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const BRAND_INFO = {
  name: "KRIORA",
  tagline: "Wit • Whimsy • Wonder",
  representative: "Namrata Adhvaryu",
  phone: "+91 96877 39779",
  phoneRaw: "919687739779",
  email: "kriorawitwhimsywonder26@gmail.com",
  waNumber: "919687739779",
  heroImage: sourceImage20.url,
  employeeKitImage: sourceImage11.url,
  deskImage: sourceImage9.url,
  festiveImage: sourceImage13.url,
  lifestyleImage: sourceImage25.url,
  founderImage: sourceImage14.url,
  resinImage: sourceImage32.url,
  candleImage: sourceImage33.url,
  fragranceImage: sourceImage34.url,
  bespokeImage: sourceImage2.url,
  founder: {
    name: "Namrata Adhvaryu",
    role: "Founder & Creative Director",
    credentials: "Lead Curator & B2B Solutions Architect",
    bio: "With an eye for artisanal aesthetics and functional elegance, Namrata founded KRIORA with a distinct vision: transforming corporate and milestone gifting from routine commercial transactions into heartfelt, memorable celebrations of human connection and mutual respect.",
    vision:
      "“A gift is a tangible touchpoint of organizational culture. When it is designed with intention, crafted in noble materials, and personalized with precision, it leaves an enduring impression that standard merchandise never could.”",
    experience: "10+ Years in Curated Gifting, Brand Aesthetics & Craft Traditions",
    speciality:
      "Natural Hardwood, Precision Laser Engraving, Bespoke Festive Suites, and Executive Onboarding Kits",
  },
};

export const createWhatsAppUrl = (productName?: string, extraDetails?: string): string => {
  if (productName) {
    const text =
      `Hello KRIORA, I am interested in ${productName} for a corporate/bulk gifting requirement. Please share the available customisation options and details. My approximate quantity and requirements are: ${extraDetails || ""}`.trim();
    return `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(text)}`;
  }
  const defaultText =
    `Hello KRIORA, I would like to discuss a corporate/bulk gifting requirement for our organisation. Please share your catalogue and customisation possibilities.`.trim();
  return `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(defaultText)}`;
};

export const createBuyNowWhatsAppUrl = (product: Product): string => {
  const materials = product.materials?.length
    ? product.materials.join(", ")
    : "Handcrafted premium materials";
  const customisation = product.customisationOptions?.length
    ? product.customisationOptions.join(", ")
    : "Standard branding available";

  const message = [
    `*Hello KRIORA, I want to BUY NOW / Order this product:*`,
    ``,
    `📦 *Product Name:* ${product.name}`,
    `🏷️ *Category:* ${product.categoryLabel}`,
    `📝 *Description:* ${product.description}`,
    `🪵 *Materials:* ${materials}`,
    `🎨 *Customisation:* ${customisation}`,
    ``,
    `Please share the price, availability, payment details, and dispatch timeline. Thank you!`,
  ].join("\n");

  return `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(message)}`;
};

export const CATEGORIES = [
  {
    slug: "desk-office-essentials",
    title: "Desk & Office Essentials",
    shortTitle: "Desk Essentials",
    tagline: "Useful objects with a crafted, distinctive edge.",
    summary:
      "Useful objects with a crafted, distinctive edge. Functional, artisan-crafted workplace accessories, desk organisers, and executive stationery designed to bring beauty and utility to everyday business workspaces.",
    image: BRAND_INFO.deskImage,
    highlight: "8 Handcrafted Pieces",
    partNumber: "1",
  },
  {
    slug: "festive-celebration",
    title: "Festive & Celebration",
    shortTitle: "Festive Gifting",
    tagline: "Warm, versatile pieces designed for gifting moments.",
    summary:
      "Warm, versatile pieces designed for gifting moments. Auspicious and memorable festive gifts crafted for Diwali, seasonal celebrations, and corporate milestone appreciations.",
    image: BRAND_INFO.festiveImage,
    highlight: "9 Festive Designs",
    partNumber: "2",
  },
  {
    slug: "lifestyle-keepsakes",
    title: "Lifestyle & Keepsakes",
    shortTitle: "Lifestyle Keepsakes",
    tagline: "Compact statement pieces for everyday use, occasions and gifting.",
    summary:
      "Compact statement pieces for everyday use, occasions and gifting. Textured clutches, chronos, resin essentials, hand-poured botanical candles, and bespoke mementos.",
    image: BRAND_INFO.lifestyleImage,
    highlight: "14 Curated Pieces",
    partNumber: "3",
  },
];

export const PRODUCTS: Product[] = [
  // ==============================================================
  // 1. Desk & Office Essentials
  // ==============================================================
  {
    id: "house-shaped-pen-card-holder",
    name: "House-shaped Pen & Card Holder",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "Distinctive architectural silhouette crafted in fine wood, featuring integrated compartments for business cards and executive writing instruments.",
    materials: ["Natural Hardwood", "Matte Lacquer Finish"],
    customisationOptions: [
      "Corporate Logo Laser Engraving",
      "Name Personalisation",
      "Custom Sizing",
    ],
    bestFor: "Desk accessories, employee welcome gifts, client desks",
    image: sourceImage21.url,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA1",
    flipkartUrl: "https://www.flipkart.com/kriora-house-shaped-pen-card-holder/p/itmkriora01",
    meeshoUrl: "https://www.meesho.com/kriora-artisan-wooden-pen-stand/p/mshkriora01",
  },
  {
    id: "multifunction-desk-organiser",
    name: "Multifunction Desk Organiser",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "All-in-one desktop arrangement station with dedicated slots for smartphone, stationery, sticky notes, paper clips, and business cards.",
    materials: ["Crafted Wood", "Graphite Accents"],
    customisationOptions: ["UV Colour Logo Printing", "Laser Etched Brand Slogan"],
    bestFor: "Executive work desks, management gifting, new office setups",
    image: sourceImage28.url,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA2",
    flipkartUrl: "https://www.flipkart.com/kriora-multifunction-desk-organiser/p/itmkriora02",
  },
  {
    id: "laptop-stands",
    name: "Laptop Stands",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "Ergonomic desktop elevating stand engineered for optimal screen posture, heat ventilation, and clean cable alignment.",
    materials: ["Bent Ply / Hardwood", "Anti-Slip Grips"],
    customisationOptions: ["Subtle Brand Logo Engraving", "Custom Wood Stains"],
    bestFor: "Work-from-home kits, ergonomics kits, executive staff gifting",
    image: sourceImage23.url,
  },
  {
    id: "business-card-holder",
    name: "Business-card Holder",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "Minimalist desktop card cradle designed to present business visiting cards with quiet executive confidence and tactile polish.",
    materials: ["Solid Natural Wood", "Metallic Accent Trim"],
    customisationOptions: ["Corporate Monogram Engraving", "Metallic Inlay Plate"],
    bestFor: "Conference desks, VIP client tokens, executive desk sets",
    image: sourceImage4.url,
  },
  {
    id: "ganesha-pen-stand",
    name: "Ganesha Pen Stand",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "An auspicious desktop piece uniting reverent Ganesha imagery with a precision-drilled instrument well for daily pens and styluses.",
    materials: ["Fine Grain Wood", "Brass Highlight Details"],
    customisationOptions: ["Organisation Logo Base Engraving", "Festive Greeting Plate"],
    bestFor: "New office opening, Diwali corporate tokens, auspicious beginnings",
    image: sourceImage16.url,
  },
  {
    id: "coaster-set-with-holder",
    name: "Coaster Set with Holder",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "Set of six protective beverage coasters seated neatly in a matching geometric holder, shielding conference tables with refinement.",
    materials: ["Wood & Resin Hybrid", "Non-Scratch Base Pads"],
    customisationOptions: ["Laser Engraved Company Insignia", "Custom Shape Variations"],
    bestFor: "Boardroom hospitality, client hampers, employee desk kits",
    image: sourceImage35.url,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA3",
    meeshoUrl: "https://www.meesho.com/kriora-wooden-coaster-set-with-holder/p/mshkriora03",
  },
  {
    id: "phone-charging-station",
    name: "Phone Charging Station",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "Ergonomic angled phone cradle with integrated cable-management channel for clean charging and hands-free video conferences.",
    materials: ["Engineered Hardwood", "Protective Felt Lining"],
    customisationOptions: ["Company Logo Debossing", "Personalised Employee Name"],
    bestFor: "Modern tech teams, hybrid workforce gifts, annual giveaways",
    image: sourceImage30.url,
    featured: true,
  },
  {
    id: "calendar-clock-organiser",
    name: "Calendar & Clock Organiser",
    category: "desk-office-essentials",
    categoryLabel: "Desk & Office Essentials",
    description:
      "Executive desk suite combining perpetual date markers, an analog desktop timepiece, and integrated pen grooves.",
    materials: ["Solid Wood Housing", "Quartz Time Movement"],
    customisationOptions: ["Metallic Brand Plaque", "Yearly Milestone Message"],
    bestFor: "Milestone awards, year-end executive gifting, leadership recognition",
    image: sourceImage5.url,
  },

  // ==============================================================
  // 2. Festive & Celebration
  // ==============================================================
  {
    id: "ganesha-lakshmi-om-decor",
    name: "Ganesha, Lakshmi & Om Decor",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Sculpted devotional tabletop silhouettes celebrating prosperity, wisdom, and festive auspiciousness with fine filigree details.",
    materials: ["Polished Brass & Wood Base"],
    customisationOptions: ["Custom Festive Message Plate", "Branded Gift Packaging Box"],
    bestFor: "Diwali corporate hampers, milestone pujas, premier client gifting",
    image: sourceImage15.url,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA5",
    flipkartUrl: "https://www.flipkart.com/kriora-ganesha-lakshmi-om-decor/p/itmkriora05",
  },
  {
    id: "rangoli-templates",
    name: "Rangoli Templates",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Precision-cut reusable geometric stencil templates allowing teams and homes to render traditional floor art with ease.",
    materials: ["Durable Lightweight Acrylic / Wood Composite"],
    customisationOptions: ["Corporate Branding Card", "Festive Multi-Template Bundles"],
    bestFor: "Diwali employee activity kits, festive mailers, community gifting",
    image: sourceImage31.url,
  },
  {
    id: "lotus-spiral-tealight-holders",
    name: "Lotus & Spiral Tealight Holders",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Sculpted metallic and wooden diya bases inspired by blooming lotus petals and sacred spirals, radiating gentle warm light.",
    materials: ["Spun Brass / Etched Wood", "Glass Votive Liner"],
    customisationOptions: ["Base Logo Inscription", "Handmade Scented Tealights Included"],
    bestFor: "Festive party favors, hotel banquets, partner tokens",
    image: sourceImage26.url,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA6",
    flipkartUrl: "https://www.flipkart.com/kriora-lotus-tealight-holder/p/itmkriora06",
    meeshoUrl: "https://www.meesho.com/kriora-lotus-spiral-tealight-diya/p/mshkriora06",
  },
  {
    id: "ganesha-shadow-candle-holder",
    name: "Ganesha Shadow Candle Holder",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Ornate cylindrical tealight holder that projects an inspiring, auspicious Ganesha silhouette onto adjoining walls in candlelight.",
    materials: ["Antique Gold Finished Metal", "Tealight Rest Plate"],
    customisationOptions: ["Custom Sleeve Packaging", "Corporate Greeting Tag"],
    bestFor: "Diwali client presents, cultural gifting, evening celebratory tokens",
    image: sourceImage17.url,
    featured: true,
  },
  {
    id: "angel-shadow-candle-holder",
    name: "Angel Shadow Candle Holder",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Ethereal shadow projection candle holder casting delicate winged angel silhouettes in warm ambient light.",
    materials: ["Fine Pierced Metal", "Gold Rim Plating"],
    customisationOptions: ["Custom Appreciation Note", "Festive Rigid Gift Box"],
    bestFor: "Christmas & Year-End appreciation, peaceful wellness gifts",
    image: sourceImage1.url,
  },
  {
    id: "glass-jar-with-gift-bag",
    name: "Glass Jar with Gift Bag",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Food-safe clarity glass preserve jar with air-tight lid, packaged in a handcrafted golden embroidered celebration pouch.",
    materials: ["Borosilicate Glass", "Textured Jute / Brocade Drawstring Bag"],
    customisationOptions: ["Engraved Wooden Lid", "Custom Ribbon & Gift Tag"],
    bestFor: "Dry fruit hampers, gourmet chocolate packaging, festive tokens",
    image: sourceImage18.url,
  },
  {
    id: "diwali-dry-fruit-gift-box",
    name: "Diwali Dry-fruit Gift Box",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Luxury rigid presentation box featuring gold-embossed celebratory motifs, lined interior partitions, and satin ribbon closure.",
    materials: ["Heavyweight Black & Gold Rigid Board", "Gold Leaf Inlay"],
    customisationOptions: ["Full Corporate Brand Lid Customisation", "Custom Partition Sizes"],
    bestFor: "Premium corporate Diwali hampers, executive board gifts, VIP clients",
    image: sourceImage10.url,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA7",
    flipkartUrl: "https://www.flipkart.com/kriora-diwali-dry-fruit-gift-box/p/itmkriora07",
    meeshoUrl: "https://www.meesho.com/kriora-festive-dry-fruit-rigid-box/p/mshkriora07",
  },
  {
    id: "compartment-dry-fruit-box",
    name: "Compartment Dry-fruit Box",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Multi-cavity wooden and matte finish festive presentation box designed for assortments of almonds, cashews, raisins, and confections.",
    materials: ["Polished Seasoned Wood", "Clear Viewing Lid Insert"],
    customisationOptions: ["Laser Engraved Company Insignia", "Custom Section Divider Layout"],
    bestFor: "Staff festival celebration gifts, vendor appreciation, seasonal hampers",
    image: sourceImage8.url,
  },
  {
    id: "oval-dry-fruit-box",
    name: "Oval Dry-fruit Box",
    category: "festive-celebration",
    categoryLabel: "Festive & Celebration",
    description:
      "Artisan curvilinear keepsake box with an ornate lid handle, designed to serve sweet treats during festivities and remain a keepsake.",
    materials: ["Metallic Coated Craft Wood", "Gold Hardware Detailing"],
    customisationOptions: ["Metal Nameplate Attachment", "Festive Motif Etching"],
    bestFor: "Festive giveaways, client return gifts, domestic celebrations",
    image: sourceImage29.url,
  },

  // ==============================================================
  // 3. Lifestyle & Keepsakes
  // ==============================================================
  {
    id: "message-cover-diary",
    name: "Message Cover Diary",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Premium hardbound journal with bespoke cover text, inspiring messaging, and high-opacity archival writing leaves.",
    materials: ["Luxury Textured Leatherette / Board", "Ribbon Bookmark"],
    customisationOptions: ["Gold/Silver Foil Stamping", "Custom Printed Introduction Inserts"],
    bestFor: "Employee onboarding, annual strategy conferences, note-taking kits",
    image: sourceImage27.url,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA4",
    flipkartUrl: "https://www.flipkart.com/kriora-message-cover-diary/p/itmkriora04",
    meeshoUrl: "https://www.meesho.com/kriora-luxury-hardbound-journal/p/mshkriora04",
  },
  {
    id: "chrono-calendar-stand",
    name: "Chrono Calendar Stand",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Interactive perpetual desk calendar featuring rotating wooden date rings and brass pointers, offering years of daily tactile engagement.",
    materials: ["Hardwood Rings", "Machined Brass Stand Support"],
    customisationOptions: ["Brand Logo Base Print", "Milestone Year Inscription"],
    bestFor: "Long-service recognition, new year executive gifts, desk showpieces",
    image: sourceImage6.url,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA8",
    flipkartUrl: "https://www.flipkart.com/kriora-chrono-perpetual-calendar-stand/p/itmkriora08",
  },
  {
    id: "display-stand",
    name: "Display Stand",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Minimalist slanted wooden easel and plaque pedestal crafted to exhibit awards, photographs, certificates, or commemorative tokens.",
    materials: ["Solid Dark Walnut Wood", "Beveled Edges"],
    customisationOptions: ["Custom Angle Specifications", "Company Name Base Branding"],
    bestFor: "Corporate awards ceremonies, art showcase, executive desk displays",
    image: sourceImage36.url,
  },
  {
    id: "classic-envelope-clutch",
    name: "Classic Envelope Clutch",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Structured formal envelope clutch purse tailored with clean lines, magnetic closure, and high-tensile metallic fittings.",
    materials: ["Textured Faux Leather / Brocade", "Gold Finish Clasp"],
    customisationOptions: ["Debossed Monogram", "Custom Interior Lining Print"],
    bestFor: "Women’s Day corporate gifting, gala dinner favours, luxury guest gifts",
    image: sourceImage7.url,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA9",
    meeshoUrl: "https://www.meesho.com/kriora-classic-envelope-formal-clutch/p/mshkriora09",
  },
  {
    id: "lattice-luxe-clutch",
    name: "Lattice Luxe Clutch",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Intricately textured lattice-weave occasion clutch bag with detachable chain strap and refined dark bronze sheen.",
    materials: ["Woven Metallic Fabric", "Brass Edge Binding"],
    customisationOptions: ["Personalised Gift Card Insertion", "Custom Dust Bag Packaging"],
    bestFor: "Annual corporate galas, women leadership gifts, premium hospitality",
    image: sourceImage24.url,
  },
  {
    id: "grace-curve-clutch",
    name: "Grace Curve Clutch",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Gracefully contoured formal handheld clutch featuring smooth ergonomic curvature and minimalist luxury hardware.",
    materials: ["Fine Grain Vegan Leather", "Gold Tone Frame"],
    customisationOptions: ["Personalized Initials Embossing", "Exclusive Color Tones"],
    bestFor: "VIP delegates, international conference guest gifts, celebratory dinners",
    image: sourceImage19.url,
  },
  {
    id: "resin-essentials",
    name: "Resin Essentials",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Hand-poured crystal resin keepsake decor incorporating real preserved botanicals, gold leaf flakes, and polished solid wood bases.",
    materials: ["Ultra-Clear Cast Resin", "Preserved Botanicals", "Natural Walnut Base"],
    customisationOptions: [
      "Embedded Corporate Monogram",
      "Custom Floral / Color Palette",
      "Laser Engraved Wood Plaque",
    ],
    bestFor: "Bespoke corporate milestones, retirement gifts, creative desk mementos",
    image: BRAND_INFO.resinImage,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA11",
    flipkartUrl: "https://www.flipkart.com/kriora-crystal-botanical-resin-keepsake/p/itmkriora11",
  },
  {
    id: "scented-candles",
    name: "Scented Candles",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Slow-burning artisanal soy wax candle infused with calming natural botanical oils, poured into thick amber glass vessels with wood lids.",
    materials: ["100% Soy Wax", "Pure Essential Oil Blends", "Amber Glass Jar", "Natural Wood Lid"],
    customisationOptions: [
      "Custom Scent Selection",
      "Personalised Brand Label & Box",
      "Company Name Silk Screen",
    ],
    bestFor: "Wellness gifting kits, year-end stress relief gifts, welcome hampers",
    image: BRAND_INFO.candleImage,
    featured: true,
    amazonUrl: "https://www.amazon.in/dp/B0D1KRIORA10",
    flipkartUrl: "https://www.flipkart.com/kriora-scented-soy-wax-candle-amber-glass/p/itmkriora10",
    meeshoUrl: "https://www.meesho.com/kriora-aromatherapy-botanical-candle/p/mshkriora10",
  },
  {
    id: "signature-fragrances",
    name: "Signature Fragrances",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Refined ambient diffuser and aromatic oils crafted to create welcoming, memorable workplace and personal sanctuary atmospheres.",
    materials: [
      "Frosted Glass Aroma Diffuser Vessel",
      "Natural Rattan Reeds",
      "Premium Fragrance Oil Concentrate",
    ],
    customisationOptions: [
      "Custom Scent Blending",
      "Branded Glass Bottle Printing",
      "Luxury Monogram Rigid Box",
    ],
    bestFor: "Client office experience gifts, luxury hampers, boutique hospitality",
    image: BRAND_INFO.fragranceImage,
    featured: true,
  },
  {
    id: "bespoke-gifts",
    name: "Bespoke Gifts",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Custom-commissioned artisan gifting suites engineered from scratch according to brand identity and unique celebration narratives.",
    materials: [
      "Solid Oak Gift Casket",
      "Laser Engraved Brass Plaque",
      "Artisan Hardbound Journal & Candle",
    ],
    customisationOptions: [
      "Full Collaborative Design",
      "Custom Mold & Shape Fabrication",
      "Bespoke Satin Ribbon & Wax Seal",
    ],
    bestFor: "Founder recognition, landmark business anniversaries, high-value contracts",
    image: BRAND_INFO.bespokeImage,
    featured: true,
  },
  {
    id: "botanical-resin-coasters",
    name: "Botanical Resin Coasters",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Set of four handmade translucent resin coasters embedding real pressed florals and gold shimmer on walnut rims.",
    materials: ["Jewelry-Grade Epoxy Resin", "Dried Botanicals", "Walnut Rim"],
    customisationOptions: ["Custom Flower Colours", "Logo UV Print", "Gift Box Packaging"],
    bestFor: "Executive boardroom hospitality, festive tokens, wedding favours",
    image: sourceImage3.url,
  },
  {
    id: "aromatherapy-amber-candle-duo",
    name: "Aromatherapy Amber Candle Duo",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Curated duo of therapeutic lavender & cedar and cinnamon clove soy candles in apothecary amber jars.",
    materials: ["Organic Soy Wax", "Lead-Free Cotton Wick", "Amber Glass Vessel"],
    customisationOptions: ["Dual-Fragrance Selection", "Corporate Brand Gift Sleeve"],
    bestFor: "Diwali employee relaxation sets, winter holiday hampers",
    image: sourceImage0.url,
  },
  {
    id: "executive-reed-diffuser",
    name: "Executive Reed Diffuser Set",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Minimalist ambient fragrance set featuring Bergamot & Oud essential oil concentrate, dropper vial, and natural reeds.",
    materials: ["Borosilicate Glass Bottle", "Dark Natural Rattan Reeds", "Pure Essential Oil"],
    customisationOptions: ["Custom Corporate Scent Identity", "Gold Foil Gift Packaging"],
    bestFor: "VIP suite gifts, high-value client hampers, executive desk aroma",
    image: sourceImage12.url,
  },
  {
    id: "handcrafted-keepsake-box",
    name: "Handcrafted Executive Keepsake Box",
    category: "lifestyle-keepsakes",
    categoryLabel: "Lifestyle & Keepsakes",
    description:
      "Heirloom-grade solid timber memory box with brass latch and velvet interior lining, personalized for milestone corporate honours.",
    materials: ["Solid Seasoned Teak", "Polished Brass Hardware", "Velvet Bedding"],
    customisationOptions: ["Deep Laser Relief Engraving", "Internal Silk Plaque"],
    bestFor: "Leadership awards, tenure milestones, commemorative client gifts",
    image: sourceImage22.url,
  },
];

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    id: "corporate-client-gifting",
    title: "Corporate & Client Gifting",
    subtitle: "Executive Relationships",
    description:
      "High-touch executive keepsakes and desk suites to convey genuine appreciation for clients and partners.",
    typicalItems: ["Multifunction Desk Organiser", "Message Cover Diary", "Scented Amber Candle"],
    suitableFor: "Key account appreciation, deal closures, board members, vendor partnerships",
    image: BRAND_INFO.heroImage,
  },
  {
    id: "employee-joining-kits",
    title: "Employee Joining Kits",
    subtitle: "Day-One Onboarding",
    description:
      "Curated welcome hampers with practical branded accessories creating an immediate sense of belonging.",
    typicalItems: ["Hardbound Journal", "Executive Pen", "Phone Charging Dock"],
    suitableFor:
      "Campus recruitment intakes, lateral hires, executive welcome boxes, remote workforce kits",
    image: BRAND_INFO.employeeKitImage,
  },
  {
    id: "festive-seasonal-gifting",
    title: "Festive & Seasonal Gifting",
    subtitle: "Diwali & Celebrations",
    description:
      "Auspicious dry-fruit keepsake boxes and handcrafted shadow tealight holders for festive warmth.",
    typicalItems: ["Ganesha Shadow Holder", "Diwali Dry-Fruit Box", "Lotus Tealight Base"],
    suitableFor: "Diwali company-wide gifting, New Year client tokens, holiday hampers",
    image: BRAND_INFO.festiveImage,
  },
  {
    id: "return-gifts-appreciation",
    title: "Return Gifts & Appreciation",
    subtitle: "Corporate Milestones",
    description:
      "Artful, durable tokens of gratitude for conference delegates, speakers, and milestone celebrations.",
    typicalItems: ["Chrono Calendar Stand", "Classic Envelope Clutch", "Resin Botanical Keepsake"],
    suitableFor:
      "Annual town halls, leadership summits, retirement celebrations, Women’s Day events",
    image: BRAND_INFO.lifestyleImage,
  },
  {
    id: "diy-creative-kits-workshops",
    title: "DIY & Creative Experience Kits",
    subtitle: "Hands-on Team Engagement",
    description:
      "Interactive craft kits and wellness workshop hampers designed for offsites, retreats, and family days.",
    typicalItems: ["Rangoli Stencil Set", "Resin Art Material Kit", "Wooden Assembly Craft"],
    suitableFor:
      "Employee engagement drives, team wellness offsites, festive family days, HR engagement initiatives",
    image: BRAND_INFO.deskImage,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Discuss your quantity, budget, preferred product categories, occasion, brand guidelines, and key deadlines directly with our team.",
    deliverable: "Tailored gifting recommendations & initial proposal",
  },
  {
    step: "02",
    title: "Curation & Mockup",
    description:
      "We explore suitable product combinations, packaging formats, and propose visual mockups featuring your brand placement.",
    deliverable: "Customized gift concept & digital mockups",
  },
  {
    step: "03",
    title: "Branding & Production",
    description:
      "Upon confirmation, our craft artisans handle laser engraving, UV printing, customized packaging, and rigorous quality inspection.",
    deliverable: "Precision manufacturing & curated assembly",
  },
  {
    step: "04",
    title: "On-Time Delivery",
    description:
      "We coordinate seamless batch dispatch directly to your head office hub, regional branches, or individual recipient doorsteps as agreed.",
    deliverable: "Tracked dispatch & safe corporate delivery",
  },
];

export const WHY_CHOOSE_KRIORA = [
  {
    title: "Thoughtful Personalisation",
    description:
      "Every gift is tailored to reflect your organization’s identity, values, and occasion. We accommodate logo engraving, personal messages, and bespoke combinations.",
    icon: "Sparkles",
  },
  {
    title: "Reliable Fulfilment",
    description:
      "Dependable timelines and hands-on coordination from initial consultation to final delivery, ensuring smooth corporate procurement without surprises.",
    icon: "ShieldCheck",
  },
  {
    title: "Distinct Aesthetic",
    description:
      "Rooted in our philosophy of Wit • Whimsy • Wonder, our products steer clear of generic corporate swag, pairing functional utility with handcrafted charm.",
    icon: "Palette",
  },
];

export const CUSTOMISATION_SERVICES = [
  {
    title: "Corporate Logo Placement",
    description:
      "Precision laser engraving, metallic foil debossing, and high-definition UV printing on wood, leatherette, metal, and glass surfaces.",
  },
  {
    title: "Personalised Messages",
    description:
      "Inscribe executive welcome notes, founder quotations, employee names, or celebratory wishes directly on product covers and inner inserts.",
  },
  {
    title: "Engraving & Printing",
    description:
      "Tactile laser etching into natural hardwoods and metallic surfaces that never peels, fades, or loses crisp definition.",
  },
  {
    title: "Custom Product Combinations",
    description:
      "Mix and match desk organisers, journals, fragrance candles, and dry fruit keepsakes to create unique tiered hamper suites.",
  },
  {
    title: "Branding & Packaging",
    description:
      "Custom rigid presentation boxes, magnetic closures, branded satin ribbons, bespoke gift sleeves, and personalized greeting tags.",
  },
  {
    title: "Employee Joining & Welcome Kits",
    description:
      "End-to-end designed day-one welcome kits that incorporate company values, stationary essentials, and desk showpieces.",
  },
  {
    title: "Festive Gifting Customisation",
    description:
      "Bespoke Diwali and New Year packaging with traditional motifs, customized dry-fruit partitions, and company greeting plates.",
  },
  {
    title: "Personalised Keepsakes & Appreciation Gifts",
    description:
      "Tailored commemorative awards, long-service mementos, and Women’s Day designer clutches customized for VIP recipients.",
  },
];
