import { cleanup, render, screen } from "utils/test-utils";
import Table from "./Table";

describe("Table", () => {
  afterEach(cleanup);

  it("Renders correctly", async () => {
    render(<Table />);

    const header = screen.getByRole("columnheader", { name: /Name/i });
    const header2 = screen.getByRole("columnheader", {
      name: /Add to favorites/i,
    });
    expect(header).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
  });
});
