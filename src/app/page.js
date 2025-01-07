import HomeValeia from "@/components/layout/main/HomeValeIa";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import "../assets/css/icofont.min.css";
import Script from "next/script";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <HomeValeia />
        <ThemeController />
        <Script src = "chat-whidget.es.js"></Script>
      </main>
    </PageWrapper>
  );
}
