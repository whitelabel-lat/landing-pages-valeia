"use client";

import Image from "next/image";
import FacebookLoginButton from "../../components/shared/buttons/FacebookLoginButton";

const AboutUsSection = () => {
  const appId = process.env.NEXT_PUBLIC_APP_ID; // Asegúrate de definir esto en tu archivo .env
  const apiVersion = process.env.NEXT_PUBLIC_GRAPH_API_VERSION; // También defínelo en tu .env
  const configurationId = process.env.NEXT_PUBLIC_CONFIGURATION_ID; // Agrega esto en tu .env

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:w-1/2">
          <Image
            src="/images/about-us-image.jpg"
            alt="About Us Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-10 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 mb-6">
            Nuestra misión es empoderar a estudiantes de todas las edades y niveles a través de
            una educación personalizada y de alta calidad.
          </p>
          <div className="mt-8">
            <h3 className="font-bold text-gray-700 mb-2">WhatsApp Embedded Signup:</h3>
            <FacebookLoginButton
              appId={appId}
              apiVersion={apiVersion}
              configurationId={configurationId}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
