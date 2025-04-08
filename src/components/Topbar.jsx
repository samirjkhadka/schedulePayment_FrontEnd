// components/Topbar.jsx
import { useState } from 'react';
import { Bell, Search, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../context/AuthContext';

const notifications = [
  {
    id: 1,
    title: 'New User Registration',
    description: 'John Doe has registered as a new user',
    time: '2 minutes ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Payment Successful',
    description: 'Payment of $1,999 has been received',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    title: 'System Update',
    description: 'System maintenance scheduled for tomorrow',
    time: '2 hours ago',
    unread: false,
  },
];

export default function Topbar() {
  const { user, logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [unreadCount, setUnreadCount] = useState(2);

  const handleNotificationClick = (notificationId) => {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification && notification.unread) {
      setUnreadCount(prev => Math.max(0, prev - 1));
      notification.unread = false;
    }
  };

  const handleLogout = () => {
    setShowUserMenu(false);
    logout();
  };

  return (
    <div className="flex h-14 items-center justify-between border-b bg-white px-4 relative">
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-white pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
            )}
          </Button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-lg border bg-white py-2 shadow-lg z-50">
              <div className="px-4 py-2 border-b">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-[calc(100vh-200px)] overflow-auto">
                {notifications.map((notification) => (
                  <button
                    key={notification.id}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex flex-col items-start border-b last:border-0 relative"
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    {notification.unread && (
                      <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-blue-600" />
                    )}
                    <span className="font-medium text-sm">{notification.title}</span>
                    <span className="text-gray-600 text-sm">{notification.description}</span>
                    <span className="text-gray-400 text-xs mt-1">{notification.time}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center space-x-2 rounded-lg px-2 py-1.5 hover:bg-gray-100 transition-colors"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=6366f1&color=fff`}
              alt={user?.name || 'User'}
              className="h-8 w-8 rounded-full"
            />
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium">{user?.name || 'User'}</div>
              <div className="text-xs text-gray-500">{user?.role || 'Guest'}</div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {/* User Dropdown Menu */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-white py-2 shadow-lg z-50">
              <button
                className="flex w-full items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {/* Handle profile click */}}
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>
              <button
                className="flex w-full items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {/* Handle settings click */}}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </button>
              <div className="border-t my-1" />
              <button
                className="flex w-full items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(showNotifications || showUserMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowNotifications(false);
            setShowUserMenu(false);
          }}
        />
      )}
    </div>
  );
}
