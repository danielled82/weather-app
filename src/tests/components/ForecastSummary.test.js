import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description 1",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    it("render correct values for props", () => {
      const { getByText, getByTestId } = render(
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
        />
      );
    });
    expect(getByText("1111111")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(getByText("stubIcon")).toHaveAttribute(
      "class",
      "forecast-summary__icon"
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
  });
});
