import HomeValeia from "@/components/layout/main/HomeValeIa";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Vale.ia – Tu Asistente de Inteligencia Artificial 24/7",
  description:
    "Automatiza y gestiona grandes volúmenes de mensajes con Vale.ia. Ahorra tiempo, potencia tus ventas y ofrece una mejor experiencia al cliente, 24/7.",
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
