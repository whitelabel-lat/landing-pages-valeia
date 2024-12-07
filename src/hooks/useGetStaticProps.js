"use client";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

export function useGetStaticProps() {
  const [data, setData] = useState({ seoTitle: "Loading...",   pageName: "", internalName: "", slug: "", topSections: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        });

        const entryAll = await client.getEntries({
          // content_type: process.env.NEXT_PUBLIC_ENTRY_ID, // Cambia si es un entryId o un tipo de contenido
          include: 4, // Niveles de profundidad anidados
          "sys.id": process.env.NEXT_PUBLIC_ENTRY_ID, // Filtra por la ID específica
        });

        const entry = entryAll?.items?.[0]?.fields || {};
        console.log(entry)
        const sectionData = {
          seoTitle: entry.seo.fields.seoTitle || "Default SEO Title",
          pageName: entry.pageName || "",
           internalName: entry.internalName || "",
          slug: entry.slug || "",
          topSections: entryAll?.includes?.Entry?.map((section) => ({
            ...section.fields,
          })) || [], // Si no existe, devuelve un array vacío
        };

        setData(sectionData);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    }

    fetchData();
  }, []);

  return data;
}
