import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Lex Fortis Honduras",
  tagline: "Lex Fortis: Su aliado legal en La Ceiba, Honduras",
  description: "En Lex Fortis, nos preocupamos por nuestros clientes y nos esforzamos por obtener los mejores resultados posibles. Le invitamos a contactarnos hoy mismo para programar una consulta gratuita",
  description_short: "Lex Fortis: Asistencia legal completa en La Ceiba, Honduras Contacte a nuestros abogados hoy mismo para una consulta.",
  url: "https://lex-fortis.hn",
  author: "Carlos Enrique Castillo",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Su aliado legal en La Ceiba, Honduras`,
  description: "En Lex Fortis, nos preocupamos por nuestros clientes y nos esforzamos por obtener los mejores resultados posibles. Le invitamos a contactarnos hoy mismo para programar una consulta gratuita",
  image: ogImageSrc,
};
