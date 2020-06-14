import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    getByText(/Checkout Form/i)
  });
test("form shows success message on submit with form details", () => {
    const{getByLabelText, getByTestId} = render(<CheckoutForm/>);

    const firstName= getByLabelText(/First Name/i);
    const lastName= getByLabelText(/Last Name/i);
    const address= getByLabelText(/address/i);
    const city= getByLabelText(/city/i);
    const state= getByLabelText(/state/i);
    const zip= getByLabelText(/zip/i);
    const checkoutButton = getByTestId(/checkoutButton/i);
    
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();

    fireEvent.change(firstName, {
        target: {name: 'firstName', value: 'Charlene'}
    });

    fireEvent.change(lastName, {
        target: {name: 'lastName', value: 'Johnson'}
    });

    fireEvent.change(address, {
        target: {name: 'address', value: '123 ABC Street'}
    });

    fireEvent.change(city, {
        target: {name: 'city', value: 'SomeCity'}
    });

    fireEvent.change(state, {
        target: {name: 'state', value: 'SomeState'}
    });

    fireEvent.change(zip, {
        target: {name: 'zip', value: '12345'}
    });

    fireEvent.click(checkoutButton);

    const successMessage = getByTestId(/successMessage/i);
    
    expect(successMessage).toHaveTextContent(/You have ordered some plants! Woo-hoo!/i);
   
});
