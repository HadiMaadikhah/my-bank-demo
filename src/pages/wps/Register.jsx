import { useState } from "react"
import { toast } from "sonner"
import { Save, RotateCcw, Building2, PlusCircle } from "lucide-react"

export default function Register() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyId: "",
    accountNumber: "",
    contactPerson: "",
    contactEmail: "",
  })

  const [companies, setCompanies] = useState([
    {
      id: 1,
      companyName: "Emirates Tech Solutions LLC",
      companyId: "ET-2024-01",
      accountNumber: "123-456-7890",
      contactPerson: "Ahmed Ali",
      contactEmail: "ahmed@ets.ae",
    },
    {
      id: 2,
      companyName: "Future Vision Trading",
      companyId: "FV-2024-02",
      accountNumber: "987-654-3210",
      contactPerson: "Sara Khan",
      contactEmail: "sara@fvtrade.ae",
    },
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.companyName || !formData.companyId) {
      toast.error("Please fill in all required fields.")
      return
    }

    const newCompany = { ...formData, id: Date.now() }
    setCompanies([...companies, newCompany])
    toast.success("Company registered successfully.")
    setFormData({
      companyName: "",
      companyId: "",
      accountNumber: "",
      contactPerson: "",
      contactEmail: "",
    })
  }

  const handleReset = () => {
    setFormData({
      companyName: "",
      companyId: "",
      accountNumber: "",
      contactPerson: "",
      contactEmail: "",
    })
    toast.info("Form cleared.")
  }

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="text-[#2E3092]" size={24} />
          <h2 className="text-2xl font-semibold text-[#2E3092]">WPS Register</h2>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E3092]/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company ID *
            </label>
            <input
              type="text"
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              placeholder="e.g. EM-12345"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E3092]/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Enter account number"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E3092]/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Person
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E3092]/50"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E3092]/50"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 md:col-span-2 mt-2">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#2E3092] hover:bg-[#23246e] text-white text-sm font-medium px-4 py-2 rounded-md transition"
            >
              <Save size={16} />
              Save Company
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-md transition"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Registered Companies */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mt-8">
        <div className="flex items-center gap-3 mb-4">
          <PlusCircle className="text-[#2E3092]" size={20} />
          <h3 className="text-lg font-semibold text-[#2E3092]">Registered Companies</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-[#2E3092] text-white">
              <tr>
                <th className="py-2 px-3 text-left">Company Name</th>
                <th className="py-2 px-3 text-left">Company ID</th>
                <th className="py-2 px-3 text-left">Account Number</th>
                <th className="py-2 px-3 text-left">Contact Person</th>
                <th className="py-2 px-3 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c) => (
                <tr key={c.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-3">{c.companyName}</td>
                  <td className="py-2 px-3">{c.companyId}</td>
                  <td className="py-2 px-3">{c.accountNumber}</td>
                  <td className="py-2 px-3">{c.contactPerson}</td>
                  <td className="py-2 px-3">{c.contactEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
