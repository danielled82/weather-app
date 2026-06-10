import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and country props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />,
    );
    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });

  it("renders correctly", () => {
    const { asFragment } = render(
      <LocationDetails city="Manchester" country="UK" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a different city and country", () => {
    const { getByText } = render(
      <LocationDetails city="London" country="UK" />,
    );
    expect(getByText("London, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
