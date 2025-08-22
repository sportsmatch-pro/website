export interface RouteConfig {
  url: string;
  title: string;
  description: string;
}

export interface PageRoutes {
  [key: string]: RouteConfig;
}

export interface AppRoutes {
  [key: string]: PageRoutes;
}

// Configuració centralitzada de rutes, títols i descripcions
export const routes: AppRoutes = {
  legal: {
    "es-ES": {
      url: "/aviso-legal",
      title: "Aviso Legal",
      description: "Aviso legal de SportsMatch"
    },
    "ca-ES": {
      url: "/ca/avis-legal",
      title: "Avís Legal",
      description: "Avís legal de SportsMatch"
    },
    "en": {
      url: "/en/legal",
      title: "Legal Notice",
      description: "Legal notice of SportsMatch"
    }
  },
  privacy: {
    "es-ES": {
      url: "/politica-de-privacidad",
      title: "Política de Privacidad",
      description: "Política de privacidad de SportsMatch"
    },
    "ca-ES": {
      url: "/ca/politica-de-privacitat",
      title: "Política de Privacitat",
      description: "Política de privacitat de SportsMatch"
    },
    "en": {
      url: "/en/privacy-policy",
      title: "Privacy Policy",
      description: "Privacy policy of SportsMatch"
    }
  },
  cookies: {
    "es-ES": {
      url: "/cookies",
      title: "Política de Cookies",
      description: "Política de cookies de SportsMatch"
    },
    "ca-ES": {
      url: "/ca/cookies",
      title: "Política de Cookies",
      description: "Política de cookies de SportsMatch"
    },
    "en": {
      url: "/en/cookies",
      title: "Cookies Policy",
      description: "Cookies policy of SportsMatch"
    }
  },
  about: {
    "es-ES": {
      url: "/about",
      title: "Sobre Nosotros",
      description: "Sobre nosotros - SportsMatch"
    },
    "ca-ES": {
      url: "/ca/about",
      title: "Sobre Nosaltres",
      description: "Sobre nosaltres - SportsMatch"
    },
    "en": {
      url: "/en/about",
      title: "About Us",
      description: "About us - SportsMatch"
    }
  },
  contact: {
    "es-ES": {
      url: "/contact",
      title: "Contacto",
      description: "Contacto - SportsMatch"
    },
    "ca-ES": {
      url: "/ca/contact",
      title: "Contacte",
      description: "Contacte - SportsMatch"
    },
    "en": {
      url: "/en/contact",
      title: "Contact",
      description: "Contact - SportsMatch"
    }
  }
};

// Funció helper per obtenir les rutes d'una pàgina específica
export function getPageRoutes(pageKey: string): PageRoutes | undefined {
  return routes[pageKey];
}

// Funció helper per obtenir la configuració d'una pàgina en un idioma específic
export function getPageConfig(pageKey: string, language: string): RouteConfig | undefined {
  return routes[pageKey]?.[language];
}

// Funció helper per obtenir les rutes de traducció (només URLs) per al LanguageSelector
export function getTranslationRoutes(pageKey: string): { [key: string]: string } {
  const pageRoutes = routes[pageKey];
  if (!pageRoutes) return {};

  const translationRoutes: { [key: string]: string } = {};
  Object.entries(pageRoutes).forEach(([lang, config]) => {
    translationRoutes[lang] = config.url;
  });

  return translationRoutes;
}
