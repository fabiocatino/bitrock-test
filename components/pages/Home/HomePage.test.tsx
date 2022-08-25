import { cleanup, render, screen } from "utils/test-utils";
import userEvent from "@testing-library/user-event";
import HomePage from "./HomePage";

describe("HomePage", () => {
  afterEach(cleanup);

  it("renders correctly", async () => {
    render(<HomePage />);

    const header = screen.getByRole("heading", { name: /Rick and Morty/i });

    expect(header).toBeInTheDocument();
  });
});
