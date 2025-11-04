import WpsPageLayout from "@/components/WpsPageLayout"
import { Building2 } from "lucide-react"

export default function Companies() {
  return (
    <WpsPageLayout
      title="Companies"
      subtitle="View and manage the list of registered companies."
    >
      <div className="flex flex-col items-center justify-center py-10 text-center text-gray-600">
        <Building2 size={42} className="text-[#2E3092] mb-3" />
        <p className="text-sm mb-3">
          Manage company profiles, update business details, or register new ones.
        </p>
        <button className="px-6 py-2 bg-[#2E3092] hover:bg-[#23246e] text-white rounded-lg text-sm font-medium">
          Add Company
        </button>
      </div>
    </WpsPageLayout>
  )
}
