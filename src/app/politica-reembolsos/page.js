"use client";
import { useEffect } from "react";
import Link from "next/link";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Política de Reembolso | Vale.ia";
  }, []);

  return (
    <>
      <HeroPrimary title="Política de Reembolso" />

      <main className="container mx-auto px-4 py-12 lg:py-20">
        {/* Índice de navegación */}
        <nav className="mb-12 p-6 bg-white dark:bg-whiteColor-dark rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-blackColor dark:text-blackColor-dark">
            Contenido
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <li key={i}>
                <a
                  href={`#section-${i + 1}`}
                  className="text-primaryColor hover:text-secondaryColor dark:text-primaryColor dark:hover:text-secondaryColor transition-colors"
                >
                  {i + 1}. {getSectionTitle(i + 1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenido principal */}
        <div className="prose max-w-none dark:prose-invert">
          {[...Array(9)].map((_, i) => (
            <section
              key={i}
              id={`section-${i + 1}`}
              className="mb-12 p-8 bg-white dark:bg-whiteColor-dark rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-blackColor dark:text-blackColor-dark">
                {i + 1}. {getSectionTitle(i + 1)}
              </h2>
              {renderSectionContent(i + 1)}
            </section>
          ))}
        </div>

        {/* Botón de regreso */}
        <footer className="mt-12 p-6 bg-white dark:bg-whiteColor-dark rounded-lg shadow-sm">
          <p className="text-sm text-contentColor dark:text-contentColor-dark text-center">
            Última actualización: 04 de enero de 2025
          </p>
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primaryColor text-white rounded-lg hover:bg-secondaryColor transition-colors"
            >
              <span className="mr-2">←</span> Volver al inicio
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

// Función auxiliar para obtener títulos de sección
function getSectionTitle(section) {
  const titles = {
    1: "Introducción",
    2: "Alcance",
    3: "Condiciones para solicitar un reembolso",
    4: "Plazos para solicitar un reembolso",
    5: "Proceso de solicitud de reembolso",
    6: "Tiempos y métodos de reembolso",
    7: "Excepciones",
    8: "Derecho de revisión",
    9: "Legislación aplicable y jurisdicción",
  };
  return titles[section];
}

function renderSectionContent(section) {
  const content = {
    1: `En Whitelabel SAS, buscamos garantizar la satisfacción de nuestros clientes al utilizar nuestros servicios. Reconocemos que pueden surgir situaciones donde sea necesario realizar un reembolso. Esta política establece los términos y condiciones aplicables a las solicitudes de reembolso relacionadas con la plataforma Vale.ia.`,
    2: `Esta política aplica a todos los clientes que hayan adquirido servicios de Vale.ia directamente a través de Whitelabel SAS. No aplica a servicios adquiridos a través de terceros o distribuidores.`,
    3: `<ul>
      <li><strong>Problemas técnicos no resueltos:</strong> Si la plataforma presenta fallas que impiden su correcto funcionamiento y no han sido solucionadas por el equipo técnico dentro de un plazo razonable.</li>
      <li><strong>Servicios no entregados:</strong> Si, por causas atribuibles a Whitelabel SAS, los servicios contratados no fueron implementados o no se habilitaron.</li>
      <li><strong>Cancelación antes del inicio del servicio:</strong> Si el cliente decide cancelar el servicio antes de que este haya comenzado.</li>
    </ul>`,
    4: `Las solicitudes de reembolso deben realizarse dentro de los 30 días calendario posteriores a la fecha de facturación o pago del servicio. No se aceptarán solicitudes realizadas fuera de este plazo.`,
    5: `<ul>
      <li>Enviar un correo electrónico a <strong>hola@whitelabel.lat</strong> con el asunto "Solicitud de Reembolso".</li>
      <li>Incluir en el correo:
        <ul>
          <li>Nombre completo del cliente.</li>
          <li>Detalles del servicio contratado.</li>
          <li>Razón específica para la solicitud de reembolso.</li>
          <li>Evidencia o documentación que respalde la solicitud (si aplica).</li>
        </ul>
      </li>
    </ul>
    Nuestro equipo responderá dentro de los 10 días hábiles siguientes, confirmando la recepción de la solicitud y proporcionando un veredicto o solicitando información adicional.`,
    6: `Una vez aprobada la solicitud de reembolso, este se procesará en un plazo máximo de 15 días hábiles. El reembolso se realizará mediante el mismo método de pago utilizado en la transacción original.`,
    7: `<ul>
      <li>Incumplimiento de las condiciones de uso establecidas en los términos y condiciones del servicio.</li>
      <li>Cancelación del servicio por parte del cliente después de haber sido completamente implementado.</li>
      <li>Problemas derivados de configuraciones o errores externos a la plataforma Vale.ia.</li>
    </ul>`,
    8: `Whitelabel SAS se reserva el derecho de evaluar cada solicitud de reembolso de manera individual y emitir un fallo basado en la información provista por el cliente y nuestros registros.`,
    9: `Esta política se rige por las leyes de Colombia. Cualquier controversia que surja en relación con su aplicación será resuelta ante los tribunales competentes de Bogotá, Colombia.`,
  };

  return (
    <div
      className="text-contentColor dark:text-contentColor-dark leading-relaxed"
      dangerouslySetInnerHTML={{ __html: content[section] }}
    />
  );
}

export default RefundPolicy;
