import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow, mount } from "enzyme";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

it("renders without crashing", () => {
  shallow(<App />);
});

test('render logo', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/logo/i);
  expect(linkElement).toBeInTheDocument();
});


it("renders header elements", () => {
  const wrapper = shallow(<App />);
  const header = <Header/>;
  expect(wrapper.contains(header)).toEqual(true);
});

it("renders footer elements", () => {
  const wrapper = shallow(<App />);
  const footer = <Footer/>;
  expect(wrapper.contains(footer)).toEqual(true);
});