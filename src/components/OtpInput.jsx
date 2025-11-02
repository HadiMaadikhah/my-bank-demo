import { useRef } from "react"

export default function OtpInput({ length = 6, onChange }) {
  const inputs = useRef([])

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "") // allow only digits
    e.target.value = value

    if (value && index < length - 1) {
      inputs.current[index + 1].focus()
    }

    const otp = inputs.current.map((input) => input.value).join("")
    onChange(otp)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus()
    }
  }

  return (
    <div className="flex justify-between">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-10 h-12 text-center border border-[#2e3092] rounded-md text-lg focus:ring-2 focus:ring-[#2e3092] outline-none transition-all"
        />
      ))}
    </div>
  )
}
