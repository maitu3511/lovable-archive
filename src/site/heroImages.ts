import about from "@/assets/hero_about.jpg";
import b2b from "@/assets/hero_b2b.jpg";
import contact from "@/assets/hero_contact.jpg";
import corporate from "@/assets/hero_corporate.jpg";
import customisation from "@/assets/hero_customisation.jpg";
import howItWorks from "@/assets/hero_how_it_works.jpg";
import products from "@/assets/hero_products.jpg";
import homePoster from "@/assets/desk_essentials_suite_1791806073821.jpg";

/** All page-hero photos, warmed into the browser cache so heroes appear instantly. */
export const HERO_IMAGES = [
  homePoster,
  about,
  products,
  corporate,
  customisation,
  howItWorks,
  contact,
  b2b,
];

export function preloadHeroImages() {
  HERO_IMAGES.forEach((src) => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  });
}
