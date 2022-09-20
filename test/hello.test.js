/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import Hello  from "../src/components/hello";


describe("Hello Component", () => {
   it("should render Hello with some text", () => {
    render(<Hello/>)
    const element = screen.getByText(/Hello, How/i)
      expect(element).toBeInTheDocument();
    })
})