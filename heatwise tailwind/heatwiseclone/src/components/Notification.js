import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const Notification = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [dailyNotifications, setDailyNotifications] = useState(false);
  const [notificationSoundEnabled, setNotificationSoundEnabled] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDailyNotifications = () => setDailyNotifications((prev) => !prev);
  const toggleNotificationSound = () => setNotificationSoundEnabled((prev) => !prev);

  const handleSaveSettings = () => {
    alert('Settings Saved', 'Notification settings saved successfully.');
  };

  return (
    <div className="flex flex-col p-8 bg-white h-screen">
      <h1 className="text-3xl font-bold mb-8">Notification Settings</h1>
      
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 py-4">
        <span className="text-xl">Enable Notifications</span>
        <Switch
          checked={notificationsEnabled}
          onChange={toggleNotifications}
          className={`${
            notificationsEnabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            className={`${
              notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
          />
        </Switch>
      </div>

      {notificationsEnabled && (
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 py-4">
          <span className="text-xl">Daily Notifications</span>
          <Switch
            checked={dailyNotifications}
            onChange={toggleDailyNotifications}
            className={`${
              dailyNotifications ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              className={`${
                dailyNotifications ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
            />
          </Switch>
        </div>
      )}

      <div className="flex justify-between items-center mb-4 border-b border-gray-300 py-4">
        <span className="text-xl">Notification Sound</span>
        <Switch
          checked={notificationSoundEnabled}
          onChange={toggleNotificationSound}
          className={`${
            notificationSoundEnabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            className={`${
              notificationSoundEnabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
          />
        </Switch>
      </div>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded mt-8 self-center"
        onClick={handleSaveSettings}
      >
        Save Settings
      </button>
    </div>
  );
};

export default Notification;
