"use client";

import ButtonPagination from "../buttons/ButtonPagination";

const Pagination = ({
  pages = [],
  skip,
  limit,
  totalItems,
  handlePagesnation,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div>
      <ul className="flex items-center justify-center gap-15px mt-60px mb-30px">
        {/* Botón "Anterior" */}
        <li>
          <ButtonPagination
            type={"prev"}
            skip={skip}
            limit={limit}
            handlePagesnation={handlePagesnation}
            idx={"prev"}
            disabled={currentPage <= 0}
            ariaLabel="Previous Page"
          />
        </li>

        {/* Páginas */}
        {pages?.map((_, idx) => (
          <li key={idx}>
            <ButtonPagination
              idx={idx}
              id={idx + 1}
              handlePagesnation={handlePagesnation}
              currentPage={currentPage}
              isActive={currentPage === idx}
              ariaLabel={`Go to page ${idx + 1}`}
            />
          </li>
        ))}

        {/* Botón "Siguiente" */}
        <li>
          <ButtonPagination
            type={"next"}
            skip={skip}
            limit={limit}
            totalItems={totalItems}
            handlePagesnation={handlePagesnation}
            idx={"next"}
            disabled={currentPage >= totalPages - 1}
            ariaLabel="Next Page"
          />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
