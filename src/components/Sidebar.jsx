import { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  UserPlus,
  Building2,
  Users,
  CreditCard,
  RotateCcw,
  FileBarChart,
  Menu,
  X,
} from "lucide-react"

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Register / Deregister", path: "/wps/register", icon: UserPlus },
    { name: "Companies", path: "/wps/companies", icon: Building2 },
    { name: "Employees", path: "/wps/employees", icon: Users },
    { name: "Salary Payment", path: "/wps/salary", icon: CreditCard },
    { name: "Refund Request", path: "/wps/refund", icon: RotateCcw },
    { name: "Reports", path: "/wps/reports", icon: FileBarChart },
  ]

  return (
    <>
      {/* 🔹 Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#2E3092] text-white min-h-screen fixed left-0 top-0 shadow-lg">
        <div className="p-6 text-center border-b border-white/20">
          <h2 className="text-lg font-semibold tracking-wide">MyBank WPS</h2>
          <p className="text-xs text-white/70">Payroll Management</p>
        </div>

        <nav className="flex-1 mt-4 space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-[#2E3092]"
                      : "hover:bg-white/10 text-white/90"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-auto p-4 border-t border-white/10 text-xs text-center text-white/60">
          © 2025 MyBank UAE
        </div>
      </aside>

      {/* 🔹 Mobile Header + Drawer */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#2E3092] text-white flex items-center justify-between p-4 z-50">
        <h2 className="text-base font-semibold">MyBank WPS</h2>
        <button onClick={() => setOpen(true)} className="p-2">
          <Menu size={24} />
        </button>
      </div>

      {/* Drawer Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 left-0 w-64 bg-[#2E3092] text-white h-full shadow-xl z-50 p-5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setOpen(false)} className="p-2">
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        isActive
                          ? "bg-white text-[#2E3092]"
                          : "hover:bg-white/10 text-white/90"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>
                )
              })}
            </nav>

            <div className="mt-auto text-xs text-center text-white/60 border-t border-white/10 pt-3">
              © 2025 MyBank UAE
            </div>
          </div>
        </>
      )}
    </>
  )
}
