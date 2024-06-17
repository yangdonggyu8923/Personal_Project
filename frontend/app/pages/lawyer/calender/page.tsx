"use client"
import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getOneLawyer } from '@/app/components/lawyer/service/lawyer-slice';

const localizer = momentLocalizer(moment);

const LawyerCalendar = ({ id }: { id: number }) => {
  const [events, setEvents] = useState<{ start: Date; end: Date; title: string; }[]>([]);

  useEffect(() => {
    const loadConsultationTimes = async () => {
      const times = await getOneLawyer(id);
      const formattedEvents = times.map((time: { date: any; startTime: any; endTime: any; }) => ({
        start: new Date(`${time.date}T${time.startTime}`),
        end: new Date(`${time.date}T${time.endTime}`),
        title: 'Available',
      }));
      setEvents(formattedEvents);
    };

    loadConsultationTimes();
  }, [id]);

  const handleSelectSlot = async ({ start, end }: { start: Date; end: Date }) => {
    const newTime = {
      id,
      date: moment(start).format('YYYY-MM-DD'),
      startTime: moment(start).format('HH:mm'),
      endTime: moment(end).format('HH:mm'),
    };
    
    const savedTime = await (newTime);
    setEvents([
      ...events,
      {
        start: new Date(`${savedTime.date}T${savedTime.startTime}`),
        end: new Date(`${savedTime.date}T${savedTime.endTime}`),
        title: '상담 가능',
      },
    ]);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default LawyerCalendar;