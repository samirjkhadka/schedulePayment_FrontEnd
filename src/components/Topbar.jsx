// components/Topbar.jsx
import { Bell, Search, User } from 'lucide-react';
import { Button } from './ui/button';

export default function Topbar() {
  return (
    <div className="flex h-14 items-center justify-between border-b bg-white px-4">
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-full rounded-md border border-input bg-white pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <div className="text-sm">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
