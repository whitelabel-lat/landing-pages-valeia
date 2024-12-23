"use client";

const Terminos = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Términos y Condiciones de Vale.ia</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
          <p>Estos términos y condiciones regulan el uso de la plataforma Vale.ia, propiedad de Whitelabel SAS. Al utilizar nuestros servicios, el cliente acepta estas condiciones en su totalidad. Si no está de acuerdo, deberá abstenerse de utilizar la plataforma.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Definiciones</h2>
          <ul className="list-disc pl-5">
            <li><strong>Vale.ia:</strong> Plataforma de inteligencia artificial desarrollada por Whitelabel SAS para gestionar mensajes y llamadas inbound y outbound de manera automatizada.</li>
            <li><strong>Cliente:</strong> Usuario titular de una suscripción activa en la plataforma.</li>
            <li><strong>Créditos:</strong> Unidad de uso en Vale.ia que permite enviar mensajes o realizar llamadas. Cada interacción consume una cantidad específica de créditos, según lo indicado en la landing page de Vale.ia.</li>
            <li><strong>Torre de Control:</strong> Plataforma interna donde los clientes gestionan sus créditos, configuración y reportes.</li>
            <li><strong>Datos:</strong> Toda información generada a través de la plataforma, incluyendo mensajes, grabaciones y metadatos.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Propiedad, Custodia y Privacidad de los Datos</h2>
          <ol className="list-decimal pl-5">
            <li><strong>Propiedad:</strong> Los datos generados en Vale.ia son propiedad de Whitelabel SAS, que actúa como responsable del tratamiento de acuerdo con las leyes aplicables. Los clientes tienen acceso y uso limitado de los datos según las políticas de privacidad de Whitelabel SAS.</li>
            <li><strong>Consentimiento:</strong> Los clientes deberán aceptar las políticas de privacidad de Whitelabel SAS como parte del registro y uso de Vale.ia. Esto incluye garantizar que informan y obtienen el consentimiento de sus propios usuarios finales para el tratamiento de sus datos personales.</li>
            <li><strong>Privacidad y seguridad:</strong> Whitelabel SAS custodia los datos bajo estándares de seguridad reconocidos internacionalmente y cumple con las leyes colombianas (Ley 1581 de 2012) y el Reglamento General de Protección de Datos (GDPR).</li>
            <li><strong>Respaldo y eliminación:</strong> Los datos serán respaldados periódicamente y eliminados automáticamente 90 días después de la terminación del contrato, salvo requerimientos legales que indiquen lo contrario.</li>
          </ol>
        </section>
        {/* Aquí se repetirían las demás secciones con el formato descrito */}
        <footer className="mt-8">
          <p className="text-sm text-gray-600">
            Última actualización: 23 de noviembre de 2024.
          </p>
        </footer>
      </main>
      <style jsx>{`
        .container {
          max-width: 800px;
        }
      `}</style>
    </>
  );
}

export default Terminos;


