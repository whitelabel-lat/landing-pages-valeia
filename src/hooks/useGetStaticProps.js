"use client";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

export function useGetStaticProps() {
  const [data, setData] = useState({
    seoTitle: "",
    pageName: "",
    canonicalUrl: "",
    featuredImage: "",
    hideFromSearchEngines: false,
    excludeLinksFromRankings: false,
    topSections: [],
  });

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
          seoTitle: entry.seo?.fields.seoTitle || "Vale.ia asistencia artificial para vender más",
          pageName: entry.pageName || "Vale.ia",
          canonicalUrl: entry.seo?.fields.canonicalUrl || "",
          featuredImage: entry.seo?.featuredImage?.fields?.file?.url || "",
          hideFromSearchEngines: entry.seo?.hideFromSearchEngines || false,
          excludeLinksFromRankings: entry.seo?.excludeLinksFromRankings || false,
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
