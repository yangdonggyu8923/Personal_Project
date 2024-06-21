'use client'
import React, { useEffect, useState } from 'react';

interface Notification {
  id: string;
  userId: string;
  lawyerId: string;
  message: string;
  status: string;
}

const LawyerClient: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/notifications/lawyer/lawyer1');
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data: Notification[] = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();

    const eventSource = new EventSource('http://localhost:8081/api/notifications/lawyer');

    eventSource.onmessage = (event) => {
      const data: Notification = JSON.parse(event.data);
      console.log("Received notification:", data);
      setNotifications((prevNotifications) => [...prevNotifications, data]);
    };

    // eventSource.onerror = (error) => {
    //   console.error("EventSource failed:", error);
    // };

    return () => {
      eventSource.close();
    };
  }, []);

  const respondToNotification = (id: string, status: string) => {
    fetch(`http://localhost:8081/api/notifications/${id}/respond?status=${status}`, {
      method: 'POST'
    });
  };

  const deleteNotification = (id: string) => {
    fetch(`http://localhost:8081/api/notifications/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setNotifications((prevNotifications) => prevNotifications.filter(n => n.id !== id));
    })
    .catch((error) => {
      console.error("Error deleting notification:", error);
    });
  };

  return (
    <div>
      <h1>Lawyer Client</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
            <button
              style={{ marginLeft: '1rem', backgroundColor: 'lightgreen', border: 'none', padding: '0.5rem' }}
              onClick={() => respondToNotification(notification.id, 'accepted')}
            >
              Accept
            </button>
            <button
              style={{ marginLeft: '0.5rem', backgroundColor: 'lightcoral', border: 'none', padding: '0.5rem' }}
              onClick={() => respondToNotification(notification.id, 'rejected')}
            >
              Reject
            </button>
            <button
              style={{ marginLeft: '0.5rem', backgroundColor: 'lightgray', border: 'none', padding: '0.5rem' }}
              onClick={() => deleteNotification(notification.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerClient;