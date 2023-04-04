// src/other/Navigation.test.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';

test('renders navigation links', () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );

  const homeLink = screen.getByText(/home/i);
  const reservationLink = screen.getByText(/reservation/i);
  const menuLink = screen.getByText(/menu/i);

  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute('href')).toBe('/');
  expect(reservationLink).toBeInTheDocument();
  expect(reservationLink.getAttribute('href')).toBe('/reservation');
  expect(menuLink).toBeInTheDocument();
  expect(menuLink.getAttribute('href')).toBe('/menu');
});
