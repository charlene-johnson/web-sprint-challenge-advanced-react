import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	const { getByText } = render(<CheckoutForm />);
	const headerText = getByText(/react plants/i);
	expect(headerText).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const{getByLabelText} = render(<CheckoutForm/>);

    const firstName= getByLabelText(/First Name/i);
    const lastName= getByLabelText(/Last Name/i);
    const address= getByLabelText(/address/i);
    const city= getByLabelText(/city/i);
    const state= getByLabelText(/state/i)
    const zip= getByLabelText(/zip/i);

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();

});
