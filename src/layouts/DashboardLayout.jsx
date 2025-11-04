import { useState } from "react"
import {
  Home,
  Users,
  Building2,
  FileSpreadsheet,
  CreditCard,
  RefreshCw,
  BarChart3,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { Link, Outlet } from "react-router-dom"

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Profile", icon: Users, path: "/dashboard/profile" },
    { name: "Register / Deregister", icon: Building2, path: "/dashboard/register" },
    { name: "Companies", icon: FileSpreadsheet, path: "/dashboard/companies" },
    { name: "Employees", icon: Users, path: "/dashboard/employees" },
    { name: "Salary Payment", icon: CreditCard, path: "/dashboard/salary" },
    { name: "Refund Request", icon: RefreshCw, path: "/dashboard/refund" },
    { name: "Reports", icon: BarChart3, path: "/dashboard/reports" },
  ]

  return (
    <div className="flex min-h-screen bg-[#f2f4ff]">
      {/* SIDEBAR */}
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-[#2E3092] text-white w-64 p-5 transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold tracking-wide">MyBank WPS</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/15 transition"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-[#2E3092]"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-[#2E3092]">
              WPS Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-700">Welcome, <span className="font-semibold">Noura</span></p>
            <button className="flex items-center text-[#2E3092] hover:text-[#1c1e6b] transition">
              <LogOut className="w-5 h-5 mr-1" />
              Logout
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="flex-1 p-6">
          <Outlet /> {/* 👈 محل نمایش محتوای صفحات داخلی */}
        </main>
      </div>
    </div>
  )
}
