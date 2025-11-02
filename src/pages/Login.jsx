import { Fingerprint, Phone } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f2f4ff] to-white">
      <div className="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 border border-[#2e3092]/20">
        {/* UAE PASS */}
        <button className="w-full border border-[#2e3092] rounded-xl py-3 text-sm font-medium flex items-center justify-center space-x-2 hover:bg-[#2e3092]/10 transition">
          <Fingerprint className="w-5 h-5 text-[#2e3092]" />
          <span className="font-semibold text-[#2e3092]">
            Login with UAE PASS
          </span>
        </button>

        <p className="text-center text-gray-600 text-sm mt-3">
          A single trusted digital identity for all citizens, residents and visitors.
        </p>

        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm font-medium">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-[#2e3092] w-5 h-5" />
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full pl-10 pr-3 py-2 border border-[#2e3092] rounded-lg focus:ring-2 focus:ring-[#2e3092] outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => navigate("/otp")}
            className="w-full bg-[#2e3092] text-white hover:bg-[#23246e] mt-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  )
}
