import WpsPageLayout from "@/components/WpsPageLayout"
import { BarChart3 } from "lucide-react"

export default function Reports() {
  return (
    <WpsPageLayout
      title="Reports"
      subtitle="Generate and review WPS-related reports and statistics."
    >
      <div className="flex flex-col items-center justify-center py-10 text-center text-gray-600">
        <BarChart3 size={42} className="text-[#2E3092] mb-3" />
        <p className="text-sm mb-3">
          View summaries and detailed reports for salary payments, employees, and companies.
        </p>
        <button className="px-6 py-2 bg-[#2E3092] hover:bg-[#23246e] text-white rounded-lg text-sm font-medium">
          Generate Report
        </button>
      </div>
    </WpsPageLayout>
  )
}
