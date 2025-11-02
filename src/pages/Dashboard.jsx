import { useState } from "react"
import {
  LayoutDashboard,
  Send,
  CreditCard,
  Settings,
  Banknote,
  ArrowDownLeft,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Users,
  Bell,
  Moon,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState("personal")
  const [selectedAccount, setSelectedAccount] = useState(null)

  // 💠 پروفایل‌ها
  const profiles = {
    personal: {
      name: "Personal Profile",
      accounts: [
        {
          id: 1,
          name: "Main Account",
          number: "**** 1032",
          type: "Current",
          balance: "AED 12,450.75",
          salaryAccount: true,
          transactions: [
            { id: 1, title: "Starbucks", amount: "- AED 18.50", type: "out", date: "Nov 1, 10:32 AM" },
            { id: 2, title: "Salary Credit", amount: "+ AED 8,000.00", type: "in", date: "Oct 30, 08:00 AM" },
            { id: 3, title: "Netflix", amount: "- AED 55.00", type: "out", date: "Oct 28, 09:21 PM" },
            { id: 4, title: "Uber Ride", amount: "- AED 35.00", type: "out", date: "Oct 26, 05:15 PM" },
          ],
        },
        {
          id: 2,
          name: "Savings Account",
          number: "**** 8471",
          type: "Savings",
          balance: "AED 28,920.00",
          salaryAccount: false,
          transactions: [
            { id: 1, title: "Interest Credit", amount: "+ AED 52.00", type: "in", date: "Nov 1, 09:00 AM" },
            { id: 2, title: "Transfer to Main", amount: "- AED 1,000.00", type: "out", date: "Oct 27, 02:10 PM" },
            { id: 3, title: "Bonus Credit", amount: "+ AED 1,500.00", type: "in", date: "Oct 25, 10:20 AM" },
          ],
        },
      ],
    },
    business: {
      name: "Business Profile",
      accounts: [
        {
          id: 3,
          name: "Corporate Account",
          number: "**** 2211",
          type: "Business",
          balance: "AED 102,000.00",
          salaryAccount: true,
          transactions: [
            { id: 1, title: "Payroll Batch", amount: "- AED 40,000.00", type: "out", date: "Nov 1, 08:00 AM" },
            { id: 2, title: "Client Payment", amount: "+ AED 25,000.00", type: "in", date: "Oct 30" },
          ],
        },
      ],
    },
    joint: {
      name: "Joint Account Profile",
      accounts: [
        {
          id: 4,
          name: "Family Account",
          number: "**** 5678",
          type: "Joint",
          balance: "AED 18,350.50",
          salaryAccount: false,
          transactions: [
            { id: 1, title: "Electric Bill", amount: "- AED 600.00", type: "out", date: "Nov 2, 11:00 AM" },
            { id: 2, title: "Shared Deposit", amount: "+ AED 2,000.00", type: "in", date: "Oct 30" },
            { id: 3, title: "Supermarket", amount: "- AED 420.00", type: "out", date: "Oct 28" },
          ],
        },
      ],
    },
  }

  const activeProfile = profiles[selectedProfile]

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#f4f5ff] to-white text-gray-800 relative">
      {/* HEADER موبایل */}
      <header className="md:hidden flex items-center justify-between p-4 bg-[#2e3092] text-white shadow-md">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="font-semibold text-lg">MyBank</h1>
        <div className="w-6 h-6" />
      </header>

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static z-40 bg-[#2e3092] text-white w-64 md:w-64 h-full flex flex-col justify-between p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 md:hidden">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mb-8 mt-2">MyBank</h2>

          <nav className="flex flex-col gap-5 text-sm font-medium">
            <button className="flex items-center gap-2 hover:text-yellow-300 transition">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-300 transition">
              <Send size={18} />
              <span>Transfer</span>
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-300 transition">
              <CreditCard size={18} />
              <span>Pay Bills</span>
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-300 transition">
              <Settings size={18} />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        <div className="text-xs text-gray-300 mt-8 border-t border-white/20 pt-4">
          <p>© 2025 MyBank</p>
          <p>Secure. Fast. Reliable.</p>
        </div>
      </aside>

      {/* BACKDROP موبایل */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-0 md:p-8 mt-14 md:mt-0">
        {/* 💠 TOPBAR فقط در دسکتاپ */}
        <div className="hidden md:flex items-center justify-between bg-white shadow-sm rounded-xl px-6 py-3 mb-6 border border-gray-100">
          <h1 className="text-[#2e3092] font-semibold text-lg">Dashboard</h1>
          <div className="flex items-center gap-5">
            <div className="relative">
              <Bell className="w-6 h-6 text-[#2e3092] cursor-pointer hover:scale-110 transition" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-[5px] rounded-full">
                3
              </span>
            </div>
            <Moon className="w-5 h-5 text-[#2e3092] cursor-pointer hover:text-yellow-500 transition" />
            <div className="flex items-center gap-2 border-l pl-4 border-gray-200">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="avatar"
                className="w-8 h-8 rounded-full border border-[#2e3092]"
              />
              <span className="text-sm font-medium text-gray-700">Noura Khalid</span>
            </div>
          </div>
        </div>

        {/* Profile Selector */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 px-4 md:px-0">
          {Object.entries(profiles).map(([key, profile]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedProfile(key)
                setSelectedAccount(null)
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition whitespace-nowrap ${
                selectedProfile === key
                  ? "bg-[#2e3092] text-white border-[#2e3092]"
                  : "border-[#2e3092] text-[#2e3092] hover:bg-[#2e3092]/10"
              }`}
            >
              <Users className="w-4 h-4 inline mr-1" />
              {profile.name}
            </button>
          ))}
        </div>

        {/* Animated Profile Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProfile}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="px-4 md:px-0"
          >
            {/* Accounts List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {activeProfile.accounts.map((acc) => {
                const isSelected = selectedAccount?.id === acc.id
                return (
                  <div
                    key={acc.id}
                    onClick={() => setSelectedAccount(isSelected ? null : acc)}
                    className={`p-4 rounded-xl border cursor-pointer transition shadow-sm hover:shadow-md bg-white ${
                      isSelected ? "border-[#2e3092]" : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[#2e3092] font-semibold">{acc.name}</p>
                        <p className="text-sm text-gray-500">
                          {acc.type} • {acc.number}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        {acc.salaryAccount && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                            Salary Account
                          </span>
                        )}
                        <ChevronDown
                          className={`w-5 h-5 mt-1 text-[#2e3092] transform transition-transform duration-300 ${
                            isSelected ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    <p className="text-lg font-bold mt-2">{acc.balance}</p>

                    {/* Transactions (mobile) */}
                    <div
                      className={`md:hidden transition-all duration-500 overflow-hidden ${
                        isSelected ? "max-h-96 mt-3" : "max-h-0"
                      }`}
                    >
                      <h3 className="text-sm font-semibold mb-2 text-gray-600">Last Transactions</h3>
                      <div className="space-y-3">
                        {acc.transactions.map((t) => (
                          <div
                            key={t.id}
                            className="flex justify-between items-center border-b pb-2 border-gray-100"
                          >
                            <div>
                              <p className="font-medium">{t.title}</p>
                              <p className="text-xs text-gray-500">{t.date}</p>
                            </div>
                            <div
                              className={`flex items-center gap-1 font-semibold ${
                                t.type === "in" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {t.type === "in" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                              {t.amount}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Transactions (desktop) */}
            {selectedAccount && (
              <motion.div
                key={selectedAccount.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block bg-white rounded-xl shadow-md p-5"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-[#2e3092]">{selectedAccount.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Banknote size={16} />
                    <span>{selectedAccount.number}</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold mb-2 text-gray-600">Last Transactions</h3>
                <div className="space-y-3">
                  {selectedAccount.transactions.map((t) => (
                    <div
                      key={t.id}
                      className="flex justify-between items-center border-b pb-2 border-gray-100"
                    >
                      <div>
                        <p className="font-medium">{t.title}</p>
                        <p className="text-xs text-gray-500">{t.date}</p>
                      </div>
                      <div
                        className={`flex items-center gap-1 font-semibold ${
                          t.type === "in" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {t.type === "in" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                        {t.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
