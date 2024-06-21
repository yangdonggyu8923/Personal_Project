'use client'
import React, { useEffect, useState } from 'react';

interface Notification {
  id: string;
  userId: string;
  lawyerId: string;
  message: string;
  status: string;
}

const UserClient: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const userId = 'user1';
    const eventSource = new EventSource(`http://localhost:8081/api/notifications/user/${userId}`);

    eventSource.onmessage = (event) => {
      const data: Notification = JSON.parse(event.data);
      setNotifications((prevNotifications) => [...prevNotifications, data]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const sendSubscription = () => {
    fetch('http://localhost:8081/api/notifications/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 'user1',
        lawyerId: 'lawyer1',
        message: 'User1 has subscribed'
      })
    });
  };

  return (
    <div>
      <h1>User Client</h1>
      <button onClick={sendSubscription}>Subscribe</button>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message} - {notification.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserClient;