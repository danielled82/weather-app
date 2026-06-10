import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });

  test("renders correctly", () => {
    const { asFragment } = render(
      <App location={forecast.location} forecasts={forecast.forecasts} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders the correct number of forecast summaries", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const summaries = screen.getAllByTestId("forecast-summary");
    expect(summaries).toHaveLength(forecast.forecasts.length);
  });

  test("renders the location heading", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
