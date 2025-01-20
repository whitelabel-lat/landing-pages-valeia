"use client";
import { Hind, Inter } from "next/font/google";
import "@/assets/css/popup.css";
import "@/assets/css/video-modal.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./globals.css";
import FixedShadow from "@/components/shared/others/FixedShadow";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";
import { Suspense } from "react";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind",
});

function MainLayout({ children }) {
  const {
    seoTitle,
    seoDescription,
    canonicalUrl,
    featuredImage,
    hideFromSearchEngines,
    excludeLinksFromRankings,
  } = useGetStaticProps();

  return (
    <html lang="es" className={`${hind.variable}`}>
      <head>
        <title>
          {seoTitle || "Vale.ia – Tu Asistente de Inteligencia Artificial 24/7"}
        </title>
        <meta
          name="description"
          content={
            seoDescription ||
            "Automatiza y gestiona grandes volúmenes de mensajes con Vale.ia. Ahorra tiempo, potencia tus ventas y ofrece una mejor experiencia al cliente, 24/7."
          }
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {featuredImage && (
          <>
            <meta property="og:image" content={featuredImage} />
            <meta name="twitter:image" content={featuredImage} />
          </>
        )}
        {hideFromSearchEngines && <meta name="robots" content="noindex" />}
        {excludeLinksFromRankings && <meta name="robots" content="nofollow" />}
      </head>
      <body
        className={`relative leading-[1.8] bg-bodyBg dark:bg-bodyBg-dark z-0 ${inter.className}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <div>
            <FixedShadow />
            <FixedShadow align={"right"} />
          </div>
        </Suspense>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
