import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    fetchBookedDates();
  }, []);

  const fetchBookedDates = async () => {
    try {
      const response = await fetch('http://localhost:5000/bookedDates');
      const data = await response.json();
      setBookedDates(data.map((item) => new Date(item.date)));
    } catch (error) {
      console.error('Error fetching booked dates:', error);
    }
  };

  const isDateBooked = (date) => {
    return bookedDates.some((bookedDate) => bookedDate.getTime() === date.getTime());
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const bookTable = async () => {
    try {
      const response = await fetch('http://localhost:5000/bookedDates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: selectedDate }),
      });

      if (response.ok) {
        toast.success('Table booked successfully!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        fetchBookedDates();
        setSelectedDate(null);
      } else {
        toast.error('Error booking table!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error booking table:', error);
    }
  };

  return (
    <div>
      <h2>Book a Table</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        inline
        excludeDates={bookedDates}
        highlightDates={bookedDates}
        isClearable
        placeholderText="Select a date"
      />
      <button
        className="book-table-btn"
        onClick={bookTable}
        disabled={!selectedDate || isDateBooked(selectedDate)}
      >
        Book Table
      </button>
      <ToastContainer />
    </div>
  );
};

export default BookingCalendar;
