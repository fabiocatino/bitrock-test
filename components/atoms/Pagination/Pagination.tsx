import { useState } from "react";
import { Button } from "./styles";

type PaginationProps = {
  pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({ pages, setCurrentPage }: PaginationProps) {
  const [activeIndex, setIsActiveIndex] = useState<number>();
  const pageHandler = (index: number) => {
    setCurrentPage(index);
    setIsActiveIndex(index);
  };
  return (
    <div>
      {pages &&
        [...Array(pages + 1)]?.map((_, index) =>
          index === 0 ? (
            ""
          ) : (
            <Button
              onClick={() => pageHandler(index)}
              active={activeIndex === index && true}
              key={index}
            >
              {index}
            </Button>
          )
        )}
    </div>
  );
}

export default Pagination;
