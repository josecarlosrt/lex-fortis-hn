// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Acerca", url: "/products" },
  { name: "Servicio", url: "/services" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Acerca de Nosotros",
    links: [
      { name: "Acerca", url: "/welcome-to-docs/" },
      { name: "Servicios", url: "/products" },
    ],
  },
  {
    section: "Contacto",
    links: [
      { name: "Correo", url: "#" },
      { name: "Llamanos", url: "/blog" },
      { name: "Facebook", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};