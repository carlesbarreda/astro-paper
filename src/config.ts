import type { SocialObjects } from "./types";
import type { VitePWAOptions } from "vite-plugin-pwa";

export const ARGS: {
  [name: string]: string | undefined;
  mode?: "development" | "production";
  site?: string;
  base?: string;
} = {
  mode: import.meta.env.PROD ? "production" : "development",
  site: import.meta.env.SITE ?? "https://astro-paper.pages.dev",
  base: import.meta.env.BASE_URL ?? "/",
};

// Parse Argo CLI flags
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === "--site") ARGS.site = process.argv[++i];
  if (process.argv[i] === "--base") ARGS.base = process.argv[++i];
}

// Add trailing slash if nedded
ARGS.base += !ARGS.base?.endsWith("/") ? "/" : "";

console.log("ARGS");
console.log(ARGS);
console.log("import,meta.env");
console.log(import.meta.env);

export const SITE = {
  //website: "https://astro-paper.pages.dev/",
  website: `${ARGS.site}${ARGS.base}`,
  author: "Sat Naing",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "AstroPaper",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const PWA: Partial<VitePWAOptions> = {
  disable: false,
  mode: ARGS.mode,
  base: ARGS.base,
  scope: ARGS.base,
  outDir: "dist",
  registerType: "prompt",
  strategies: "generateSW",
  includeAssets: ["favicon.svg"],
  buildBase: ARGS.base,
  manifest: {
    id: `${ARGS.base}?astropaper`,
    start_url: `${ARGS.base}?standalone=true`,
    name: "AstroPaper",
    short_name: "AstroPaper",
    description: "A minimal, responsive and SEO-friendly Astro blog theme.",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "standalone",
    orientation: "natural",
    dir: "ltr",
    icons: [
      {
        src: `${ARGS.base}pwa/manifest-icon-192.maskable.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${ARGS.base}pwa/manifest-icon-192.maskable.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `${ARGS.base}pwa/manifest-icon-512.maskable.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${ARGS.base}pwa/manifest-icon-512.maskable.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `${ARGS.base}favicon.ico`,
        sizes: "36x36",
        type: "image/vnd.microsoft.icon",
        purpose: "any",
      },
    ],
  },
  workbox: {
    /*
    additionalManifestEntries: [
      {
        url: "https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf",
        revision: null,
      },
      {
        url: "https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf",
        revision: null,
      },
      {
        url: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap",
        revision: null,
      },
    ],
    */
    navigationPreload: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/www\.1001fonts\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "1001-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "gstatic-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "jsdelivr-images-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
    globDirectory: "dist",
    globPatterns: [
      "**/*.{js,html,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,txt}",
    ],
    navigateFallback: `${ARGS.base}404`,
  },
  devOptions: {
    //enabled: import.meta.env.DEV,
    enabled: true,
    type: "classic",
    navigateFallback: `${ARGS.base}404`,
  },
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
