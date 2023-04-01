import React from 'react';
import { Link } from 'react-router-dom';
import BookingCalendar from './booking.js';

function AboutPage() {
  return (
    <div>
      <BookingCalendar />
      <h1>About Us</h1>
      <p>We are a restaurant dedicated to serving delicious food.</p>
      <Link to="/booking">Book Now</Link>
    </div>
  );
}

export default AboutPage;
