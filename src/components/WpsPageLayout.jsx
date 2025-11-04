export default function WpsPageLayout({ title, subtitle, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold text-[#2E3092]">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div>{children}</div>
    </div>
  )
}
