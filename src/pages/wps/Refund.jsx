import WpsPageLayout from "@/components/WpsPageLayout"
import { RotateCcw } from "lucide-react"

export default function Refund() {
  return (
    <WpsPageLayout
      title="Refund Request"
      subtitle="Submit and track refund requests related to salary or payment errors."
    >
      <div className="flex flex-col items-center justify-center py-10 text-center text-gray-600">
        <RotateCcw size={42} className="text-[#2E3092] mb-3" />
        <p className="text-sm mb-3">
          Request refunds for incorrect or duplicate salary transactions.
        </p>
        <button className="px-6 py-2 bg-[#2E3092] hover:bg-[#23246e] text-white rounded-lg text-sm font-medium">
          New Refund Request
        </button>
      </div>
    </WpsPageLayout>
  )
}
