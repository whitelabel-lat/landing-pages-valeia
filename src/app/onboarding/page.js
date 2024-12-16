import Image from 'next/image';

const AboutUsSection = () => {
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
             Nuestra misión es empoderar a estudiantes de todas las edades y niveles a través de una educación personalizada y de alta calidad. Nos esforzamos por brindar un ambiente de aprendizaje estimulante y colaborativo, donde cada estudiante pueda alcanzar su máximo potencial.
          </p>
           <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Nuestra Visión</h2>
          <p className="text-gray-600">
            Aspiramos a ser líderes en el sector educativo, reconocidos por nuestra innovación, excelencia académica y compromiso con el éxito de nuestros estudiantes. Trabajamos para construir un futuro donde la educación sea accesible, efectiva y transformadora para todos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;