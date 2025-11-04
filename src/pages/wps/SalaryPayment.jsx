import WpsPageLayout from "@/components/WpsPageLayout"
import { CreditCard } from "lucide-react"

export default function SalaryPayment() {
  return (
    <WpsPageLayout
      title="Salary Payment"
      subtitle="Manage and process employee salary payments."
    >
      <div className="flex flex-col items-center justify-center py-10 text-center text-gray-600">
        <CreditCard size={42} className="text-[#2E3092] mb-3" />
        <p className="text-sm mb-3">
          Initiate, review, and confirm payroll transactions for your employees.
        </p>
        <button className="px-6 py-2 bg-[#2E3092] hover:bg-[#23246e] text-white rounded-lg text-sm font-medium">
          Process Salary Batch
        </button>
      </div>
    </WpsPageLayout>
  )
}
