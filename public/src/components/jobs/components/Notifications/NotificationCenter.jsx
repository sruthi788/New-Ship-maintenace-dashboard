import { useState, useEffect } from 'react';

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const storedNotifications = localStorage.getItem('notifications');
            if (storedNotifications) setNotifications(JSON.parse(storedNotifications));
              }, []);

                const dismissNotification = (id) => {
                    const updated = notifications.filter(n => n.id !== id);
                        setNotifications(updated);
                            localStorage.setItem('notifications', JSON.stringify(updated));
                              };

                                return (
                                    <div className="fixed top-4 right-4">
                                          {notifications.map(notification => (
                                                  <div key={notification.id} className="bg-yellow-100 p-3 mb-2 rounded">
                                                            {notification.message}
                                                                      <button 
                                                                                  onClick={() => dismissNotification(notification.id)}
                                                                                              className="ml-2"
                                                                                                        >
                                                                                                                    ×
                                                                                                                              </button>
                                                                                                                                      </div>
                                                                                                                                            ))}
                                                                                                                                                </div>
                                                                                                                                                  );
                                                                                                                                                  }