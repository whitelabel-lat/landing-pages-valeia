"use client";

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

// Render Options for Rich Text
export const renderOptions = {
  renderNode: {
    // Blocks
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-semibold mb-4">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-medium mb-3">{children}</h3>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-lg text-gray-300 mb-2">{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400 mb-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-4 border-t border-gray-500" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        alt={node.data.target.fields.title || ""}
        className="max-w-full h-auto"
      />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => (
      <div className="embedded-entry">{/* Custom embedded entry content */}</div>
    ),

    // Inline nodes
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        {children}
      </a>
    ),
    [INLINES.EMBEDDED_ENTRY]: (node) => (
      <span className="inline-entry">{/* Custom inline entry */}</span>
    ),
  },

  renderMark: {
    // Marks
    [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">{text}</code>
    ),
  },
};
