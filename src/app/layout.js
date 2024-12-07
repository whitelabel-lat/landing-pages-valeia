"use client";
import { Hind, Inter } from "next/font/google";
import "@/assets/css/icofont.min.css";
import "@/assets/css/popup.css";
import "@/assets/css/video-modal.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./globals.css";

import PreloaderPrimary from "@/components/shared/others/PreloaderPrimary";
import FixedShadow from "@/components/shared/others/FixedShadow";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";


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

export default function RootLayout({ children }) {

  const {
    pageName,
    seoTitle,
    canonicalUrl,
    featuredImage,
    hideFromSearchEngines,
    excludeLinksFromRankings,
  } = useGetStaticProps();



  return (
    <html lang="es" className={`${hind.variable}`}>
      <head>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content={` ${pageName || "Vale.ia asistencia artificial para vender más"}`}
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  appId      : '1721201065327660',
                  xfbml      : true,
                  version    : 'v21.0'
                });
                FB.AppEvents.logPageView();
              };

              (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "https://connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
               }(document, 'script', 'facebook-jssdk'));
            `,
          }}
        />
        <PreloaderPrimary />
        {children}

        {/* theme fixed shadow */}
        <div>
          <FixedShadow />
          <FixedShadow align={"right"} />
          <div
            className="fb-like"
            data-share="true"
            data-width="450"
            data-show-faces="true"
          ></div>
        </div>
      </body>
    </html>
  );
}
