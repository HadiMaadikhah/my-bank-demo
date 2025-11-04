import { Bell, LogOut } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm border-b border-gray-200 px-5 py-3 rounded-lg">
      {/* Left side - Title */}
      <h1 className="text-lg font-semibold text-[#2E3092] tracking-wide">
        Dashboard
      </h1>

      {/* Right side - Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button className="relative p-2 text-[#2E3092] hover:bg-[#2E3092]/10 rounded-full transition">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=68"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-[#2E3092]/30"
          />
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            Noor A.
          </span>
        </div>

        {/* Logout Button */}
        <button
          className="flex items-center gap-1 bg-[#2E3092] hover:bg-[#23246e] text-white px-3 py-1.5 rounded-md text-sm font-medium transition"
          onClick={() => alert('You have been logged out!')}
        >
          <LogOut size={16} />
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </header>
  )
}
