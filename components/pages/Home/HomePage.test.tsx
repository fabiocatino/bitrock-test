import userEvent from "@testing-library/user-event";
import { cleanup, render, screen } from "utils/test-utils";
import HomePage from "./HomePage";

describe("HomePage", () => {
  afterEach(cleanup);

  it("renders header and list correctly", async () => {
    render(<HomePage />);

    const header = screen.getByRole("heading", { name: /Rick and Morty/i });
    const character = await screen.findByText(/Rick Sanchez/i);

    expect(header).toBeInTheDocument();
    expect(character).toBeInTheDocument();
  });
});

describe("Table tests with data", () => {
  afterEach(cleanup);
  test("that search works", async () => {
    render(<HomePage />);

    const searchInput = screen.getByRole("searchbox");
    const rick = await screen.findByText(/Rick Sanchez/i);
    const morty = await screen.findByText(/Morty Smith/i);

    // Since Morty should be visible by default, we first check if it's present, and then check again after searching for Rick.
    // After Searching, Rick should be visible, while Morty shouldn't.
    expect(morty).toBeInTheDocument();
    await userEvent.click(searchInput);
    await userEvent.type(searchInput, "Rick Sanchez");

    expect(rick).toBeInTheDocument();
    expect(morty).not.toBeInTheDocument();
  });

  it("displays modal on click", async () => {
    render(<HomePage />);

    //Clicks on the rick row and checks whether the modal is open by checking the close button and some text
    const rick = await screen.findByText(/Rick Sanchez/i);

    userEvent.click(rick);

    const closeModalBtn = await screen.findByRole("graphics-document");
    const episodeText = await screen.findByRole("heading", { level: 3 });

    expect(closeModalBtn).toBeInTheDocument();
    expect(episodeText).toBeInTheDocument();
  });
});
