import WpsPageLayout from "@/components/WpsPageLayout"
import { Users } from "lucide-react"

export default function Employees() {
  return (
    <WpsPageLayout
      title="Employees"
      subtitle="Manage your employee details and salary records."
    >
      <div className="flex flex-col items-center justify-center py-10 text-center text-gray-600">
        <Users size={40} className="text-[#2E3092] mb-3" />
        <p className="text-sm mb-3">
          Add or update employee details, link salary accounts, and manage status.
        </p>
        <button className="px-6 py-2 bg-[#2E3092] hover:bg-[#23246e] text-white rounded-lg text-sm font-medium">
          Add Employee
        </button>
      </div>
    </WpsPageLayout>
  )
}
