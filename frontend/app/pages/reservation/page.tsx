'use client';
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8081/api/res')
          .then(response => {
              const events = response.data.map((reservation: { id: any; status: string; date: any; time: any; }) => ({
                  id: reservation.id,
                  title: reservation.status,
                  start: `${reservation.date}T${reservation.time}`,
                  color: reservation.status === '예약됨' ? 'red' : 'green'
              }));
              setEvents(events);
          })
          .catch(error => console.error(error));
  }, []);

  const handleDateClick = (arg:any) => {
      // 날짜 클릭 이벤트 처리
  };

  const handleEventClick = (arg:any) => {
      // 이벤트 클릭 이벤트 처리
  };

  return (
      <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
      />
  );
};

export default Calendar;