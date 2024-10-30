import HomeValeia from "@/components/layout/main/HomeValeIa";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";


export default function Home() {
  return (
    <PageWrapper>
      <main>
        <HomeValeia />
        <ThemeController />
      </main>
    </PageWrapper>
  );
}
