import useMobile from "hooks/useMobile";
import { useEffect, useState } from "react";
import { Button } from "./styles";

type PaginationProps = {
  pages: number;
  currentPage: number;
  pageLimit: number;
  minPages: number;
  maxPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({
  pages,
  currentPage,
  setCurrentPage,
  pageLimit,
  minPages,
  maxPages,
}: PaginationProps) {
  const [activeIndex, setIsActiveIndex] = useState<number>();
  const pageHandler = (index: number) => {
    setCurrentPage(index);
    setIsActiveIndex(index);
  };
  const { isMobile } = useMobile(false);
  const [maxPageLimit, setMaxPageLimit] = useState(maxPages);
  const [minPageLimit, setMinPageLimit] = useState(minPages);

  const pagesLength = [];
  for (let i = 0; i <= pages; i++) {
    pagesLength.push(i);
  }
  let pageIncrementEllipses = null;
  if (pagesLength.length > maxPageLimit) {
    pageIncrementEllipses = (
      <Button onClick={() => handleNextClick()}>&hellip;</Button>
    );
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <Button onClick={() => handlePrevClick()}>&hellip;</Button>
    );
  }

  const pageNumbers = pagesLength.map((page) => {
    if (page === 0) return;
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <Button
          key={page}
          onClick={() => pageHandler(page)}
          active={activeIndex === page && true}
        >
          {page}
        </Button>
      );
    }
  });

  const handlePrevClick = () => {
    if ((currentPage - 1) % pageLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageLimit);
      setMinPageLimit(minPageLimit - pageLimit);
    }
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageLimit);
      setMinPageLimit(minPageLimit + pageLimit);
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    setIsActiveIndex(currentPage);
  }, [currentPage]);

  //Checks if the browser width is within 780px, and if it is, setMaxPageLimit is set to 5
  useEffect(() => {
    isMobile ? setMaxPageLimit(5) : setMaxPageLimit(maxPages);
  }, [isMobile, maxPages]);

  return (
    <div>
      <Button onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </Button>

      {pageDecremenEllipses}
      {pageNumbers}
      {pageIncrementEllipses}

      <Button onClick={handleNextClick} disabled={currentPage === pages}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
