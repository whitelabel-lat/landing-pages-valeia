import { useRouter } from "next/navigation"; // Importa el router para redirigir
import Image from "next/image";
import BlogsSidebar from "@/components/shared/blogs/BlogsSidebar";
//import BlogTagsAndSocila from "@/components/shared/blog-details/BlogTagsAndSocila";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../../utils/RenderOptions";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";

const BlogDetails = ({ blog }) => {
  const router = useRouter(); // Inicializa el router
  const { categories } = useGetStaticProps();

  if (!blog) {
    return <div>Loading...</div>;
  }

  // Manejar selección de categoría y redirigir
  const handleCategorySelect = (slug) => {
    router.push(`/blogs?category=${slug || ""}`);
  };

  return (
    <section>
      <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
          {/* Blog content */}
          <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
            {/* Blog thumbnail */}
            <div data-aos="fade-up">
              <div className="overflow-hidden relative mb-30px">
                {blog.headerImage && (
                  <Image
                    src={blog.headerImage}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                )}
              </div>
            </div>

            {/* Blog content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-contentColor">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Summary */}
              <p
                className="text-lg text-darkdeep4 mb-25px !leading-30px"
                data-aos="fade-up"
              >
                {blog.summary}
              </p>

              {/* Content */}
              <div
                className="prose max-w-none text-lg text-darkdeep4 mb-30px !leading-30px"
              />
               {documentToReactComponents(blog.content, renderOptions)}

            </div>
          </div>

          {/* Blog sidebar */}
          <div className="lg:col-start-9 lg:col-span-4">
            <BlogsSidebar
  categories={categories || []} // Proveer un arreglo vacío por defecto
  onCategorySelect={handleCategorySelect}
  selectedCategory={null} // O la categoría seleccionada si existe
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
