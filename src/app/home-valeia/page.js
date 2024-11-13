
import HomeValeia from "@/components/layout/main/HomeValeIa";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 2 | Edurock - Education LMS Template",
  description: "Home 2 | Edurock - Education LMS Template",
};

const Home_Valeia = async () => {

  return (
    <PageWrapper>
      <main>
        <HomeValeia />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Home_Valeia;