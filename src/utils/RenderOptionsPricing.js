"use client";

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

// Render Options for Rich Text
export const renderOptions = {
  renderNode: {
    // Blocks
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl font-bold mb-4 text-gray-100">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-200">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl font-medium mb-3 text-gray-300">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-lg text-gray-200 leading-relaxed mb-2">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-5 mb-4 text-gray-200">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-5 mb-4 text-gray-200">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-400 mb-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-4 border-t border-gray-600" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        alt={node.data.target.fields.title || ""}
        className="max-w-full h-auto rounded-lg shadow-md"
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
        className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
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
    [MARKS.BOLD]: (text) => <strong className="font-bold text-gray-100">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic text-gray-300">{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u className="underline text-gray-200">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-800 text-yellow-400 px-1 py-0.5 rounded">{text}</code>
    ),
  },
};
