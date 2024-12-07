"use client";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

export function useGetStaticProps() {
  const slug = usePathname();

  const [data, setData] = useState({ seoTitle: "Loading...",   pageName: "", internalName: "", slug: "", topSections: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        });

        const entryAll = await client.getEntries({
          content_type: 'page', // Cambia si es un entryId o un tipo de contenido
          include: 4, // Niveles de profundidad anidados
          "fields.slug": slug, 
        });

        const entry = entryAll?.items?.[0]?.fields || [];
  
        const sectionData = {
          seoTitle: entry.seo.fields.seoTitle || "Vale.ia asistencia artificial para vender mas",
          pageName: entry.pageName || "",
          slug: entry.slug || "",
          topSections: entry.topSection.map((section) => { 
            return {fields: section.fields,
              sys: section.sys,
            }
          }
          ), // Si no existe, devuelve un array vacío
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
