import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";


describe ("ForecastSummary", () => {
    const validProps = {...};

    it("renders correctly", () => {
        const { asFragment } = render(
            <ForecastSummary
            date={validProps.date}
            description={validProps.descripton}
            icon={validProps.icon}
            temperature={validProps.temperature}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });