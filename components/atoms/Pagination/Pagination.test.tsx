import userEvent from "@testing-library/user-event";
import { cleanup, render, screen } from "utils/test-utils";
import Pagination from "./Pagination";

describe("Pagination", () => {
  afterEach(cleanup);

  it("displays correct amount of pages", async () => {
    render(
      <Pagination
        pages={20}
        currentPage={1}
        setCurrentPage={() => {}}
        pageLimit={5}
        minPages={0}
        maxPages={20}
      />
    );

    const page = screen.getByRole("button", { name: /20/i });
    expect(page).toBeInTheDocument();
  });

  it("checks that prev btn is disabled if no more pages are available", async () => {
    render(
      <Pagination
        pages={20}
        currentPage={1}
        setCurrentPage={() => {}}
        pageLimit={5}
        minPages={0}
        maxPages={20}
      />
    );

    const button = screen.getByRole("button", { name: /20/i });
    const prevBtn = screen.getByRole("button", { name: /Prev/i });
    await userEvent.click(button);
    expect(prevBtn).toHaveAttribute("disabled");
  });
  it("checks that next btn is disabled if no more pages are available", async () => {
    render(
      <Pagination
        pages={20}
        currentPage={20}
        setCurrentPage={() => {}}
        pageLimit={5}
        minPages={0}
        maxPages={20}
      />
    );

    const button = screen.getByRole("button", { name: /20/i });
    const nextBtn = screen.getByRole("button", { name: /Next/i });
    await userEvent.click(button);
    expect(nextBtn).toHaveAttribute("disabled");
  });
});
