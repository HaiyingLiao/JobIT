import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Navbar } from "../../../components";

const renderWithRouter = () => {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
};

describe("Navbar tests", () => {
  it("renders the navbar on the page", () => {
    renderWithRouter();
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  it("shows the nav menu items", () => {
    renderWithRouter();
    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveTextContent("Estimated Salaries");
    expect(navElement).toHaveTextContent("Overview");
    expect(navElement).toHaveTextContent("Job Search");
  });

  it("shows the nav menu items on mobile", () => {
    // Simulate just below a medium viewport size in MUI
    window.innerWidth = 899;
    renderWithRouter();
    // Click on the hamburger icon
    const hamburgerIcon = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburgerIcon);
    // Check if nav menu items show
    const navElement = screen.getByRole("dialog");
    expect(navElement).toHaveTextContent("Estimated Salaries");
    expect(navElement).toHaveTextContent("Overview");
    expect(navElement).toHaveTextContent("Job Search");
  });

  it("shows a hamburger icon on mobile", () => {
    // Simulate just below a medium viewport size in MUI
    window.innerWidth = 899;
    renderWithRouter();
    const hamburgerIcon = screen.getByTestId("hamburger-icon");
    expect(hamburgerIcon).toBeInTheDocument();
  });

  it("shows the logo in the navbar", () => {
    window.innerWidth = 901;
    renderWithRouter();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("opens the drawer when the hamburger icon is clicked in mobile view", () => {
    window.innerWidth = 899;
    renderWithRouter();
    // Check that the mobile drawer is closed
    const drawer = screen.queryByRole("dialog");
    expect(drawer).toBeNull();
    // Click on the hamburger icon
    const hamburgerIcon = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburgerIcon);
    // Check that the mobile drawer is now open
    const openDrawer = screen.getByRole("dialog");
    expect(openDrawer).toBeInTheDocument();
  });

  it("shows the close icon when drawer is open on mobile", () => {
    // Simulate just below a medium viewport size in MUI
    window.innerWidth = 899;
    renderWithRouter();
    // Click on the hamburger icon
    const hamburgerIcon = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburgerIcon);
    // Check that the close icon now shows
    const closeIcon = screen.getByTestId("close-icon");
    expect(closeIcon).toBeInTheDocument();
  });

  it("closes the drawer on mobile view when the close icon is clicked", () => {
    // Simulate just below a medium viewport size in MUI
    window.innerWidth = 899;
    renderWithRouter();
    // Click on the hamburger icon
    const hamburgerIcon = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburgerIcon);
    // Click on the close icon
    const closeIcon = screen.getByTestId("close-icon");
    fireEvent.click(closeIcon);
    // Check that the mobile drawer is closed
    const closedDrawer = screen.queryByRole("dialog");
    expect(closedDrawer).toBeNull();
  });
});
