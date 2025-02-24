import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("render Reddit App as header", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getAllByText("Reddit App");
    expect(title).toExist;
  });

  it("On click navigate to home page", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /Reddit App/ });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
