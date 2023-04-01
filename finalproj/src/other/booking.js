// src/components/BookingCalendar.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const bookTable = () => {
    toast.success('Table booked successfully!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div>
      <h2>Book a Table</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        inline
      />
      <button
        className="book-table-btn"
        onClick={bookTable}
        disabled={!selectedDate}
      >
        Book Table
      </button>
      <ToastContainer />
    </div>
  );
};

export default BookingCalendar;
