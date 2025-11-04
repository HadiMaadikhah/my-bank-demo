import { useState } from "react"
import { CreditCard, CheckCircle, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const profilesData = [
  {
    id: "personal",
    name: "Personal Profile",
    type: "Individual",
    accounts: [
      {
        id: 1,
        name: "Savings Account",
        number: "1234 5678 9012",
        type: "Savings",
        balance: "AED 24,580.00",
        salary: true,
        transactions: [
          { id: 1, date: "2025-11-01", type: "Salary Credit", amount: "+AED 7,200" },
          { id: 2, date: "2025-10-29", type: "Utility Bill", amount: "-AED 320" },
          { id: 3, date: "2025-10-27", type: "ATM Withdrawal", amount: "-AED 500" },
          { id: 4, date: "2025-10-25", type: "Transfer Sent", amount: "-AED 1,000" },
          { id: 5, date: "2025-10-22", type: "Transfer Received", amount: "+AED 2,300" },
        ],
      },
      {
        id: 2,
        name: "Credit Account",
        number: "3210 6543 9876",
        type: "Credit",
        balance: "AED 4,900.00",
        salary: false,
        transactions: [
          { id: 1, date: "2025-10-30", type: "Card Payment", amount: "-AED 300" },
          { id: 2, date: "2025-10-28", type: "Online Purchase", amount: "-AED 450" },
        ],
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate Profile",
    type: "Business",
    accounts: [
      {
        id: 3,
        name: "Corporate Current Account",
        number: "9876 5432 1001",
        type: "Current",
        balance: "AED 180,000.00",
        salary: false,
        transactions: [
          { id: 1, date: "2025-10-31", type: "Vendor Payment", amount: "-AED 12,000" },
          { id: 2, date: "2025-10-25", type: "Client Deposit", amount: "+AED 45,000" },
        ],
      },
    ],
  },
]

export default function DashboardHome() {
  const [selectedProfile, setSelectedProfile] = useState("personal")
  const [selectedAccount, setSelectedAccount] = useState(null)

  const profile = profilesData.find((p) => p.id === selectedProfile)

  return (
    <div className="space-y-6">
      {/* Profile Selector */}
      <div>
        <h2 className="text-lg font-semibold text-[#2E3092] mb-2">Profiles</h2>
        <div className="flex gap-3 flex-wrap">
          {profilesData.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProfile(p.id)
                setSelectedAccount(null)
              }}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                selectedProfile === p.id
                  ? "bg-[#2E3092] text-white border-[#2E3092]"
                  : "bg-white text-[#2E3092] border-[#2E3092]/40 hover:bg-[#2E3092]/10"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Accounts List */}
      <div>
        <h2 className="text-lg font-semibold text-[#2E3092] mb-3">
          {profile.name} Accounts
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {profile.accounts.map((acc) => (
            <motion.div
              key={acc.id}
              layout
              onClick={() => setSelectedAccount(acc.id === selectedAccount ? null : acc.id)}
              className={`cursor-pointer p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition relative ${
                acc.salary ? "border-green-500/70" : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-[#2E3092]">{acc.name}</p>
                  <p className="text-xs text-gray-600">{acc.number}</p>
                  <p className="text-sm font-medium text-gray-800 mt-1">{acc.balance}</p>
                </div>
                <CreditCard className="text-[#2E3092]" />
              </div>

              {acc.salary && (
                <span className="absolute top-2 right-3 text-green-600 text-xs flex items-center gap-1">
                  <CheckCircle size={12} /> Salary Account
                </span>
              )}

              <motion.div
                animate={{ rotate: acc.id === selectedAccount ? 180 : 0 }}
                className="absolute bottom-3 right-3 text-gray-500"
              >
                <ChevronDown size={18} />
              </motion.div>

              <AnimatePresence>
                {acc.id === selectedAccount && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 border-t pt-3 text-sm text-gray-700"
                  >
                    <p className="text-[#2E3092] font-medium mb-2">Last Transactions</p>
                    {acc.transactions.slice(0, 5).map((tx) => (
                      <div
                        key={tx.id}
                        className="flex justify-between py-1 border-b border-gray-100"
                      >
                        <span>{tx.type}</span>
                        <span
                          className={`${
                            tx.amount.startsWith("+")
                              ? "text-green-600"
                              : "text-red-500"
                          } font-medium`}
                        >
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
