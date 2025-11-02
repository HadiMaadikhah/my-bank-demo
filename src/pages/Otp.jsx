import { useState, useEffect } from "react"
import { KeyRound, RefreshCw, Loader2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import OtpInput from "@/components/OtpInput"

export default function Otp() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const [timeLeft, setTimeLeft] = useState(45)
  const [resendActive, setResendActive] = useState(false)
  const [loading, setLoading] = useState(false)

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setResendActive(true)
      return
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft])

  const handleResend = () => {
    setTimeLeft(45)
    setResendActive(false)
    console.log("🔁 Resend OTP triggered")
  }

  const handleVerify = () => {
    if (otp.length === 6) {
      setLoading(true)
      console.log("✅ Verifying OTP:", otp)

      // Simulate verification delay (e.g. API call)
      setTimeout(() => {
        setLoading(false)
        navigate("/dashboard")
      }, 2500)
    } else {
      alert("Please enter a valid 6-digit code.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f2f4ff] to-white relative overflow-hidden">
      {/* LOADING OVERLAY */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50 transition-all">
          <Loader2 className="w-10 h-10 text-[#2e3092] animate-spin mb-3" />
          <p className="text-[#2e3092] font-medium text-sm tracking-wide">
            Verifying your code...
          </p>
        </div>
      )}

      {/* OTP CARD */}
      <div className="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 border border-[#2e3092]/20">
        <h2 className="text-center text-lg font-semibold text-[#2e3092] mb-4">
          Enter Verification Code
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <OtpInput length={6} onChange={setOtp} />

          {/* Countdown Timer */}
          <div className="text-center mt-2 text-sm text-gray-600">
            {resendActive ? (
              <button
                type="button"
                onClick={handleResend}
                className="flex items-center justify-center space-x-1 text-[#2e3092] font-medium hover:underline mx-auto mt-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Resend Code</span>
              </button>
            ) : (
              <p>
                Resend available in{" "}
                <span className="text-[#2e3092] font-semibold">
                  00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </span>
              </p>
            )}
          </div>

          {/* Verify button */}
          <button
            type="button"
            onClick={handleVerify}
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-[#2e3092] hover:bg-[#23246e]"
            } text-white mt-4 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center space-x-2`}
          >
            {!loading && <KeyRound className="w-4 h-4" />}
            <span>{loading ? "Please wait..." : "Verify & Login"}</span>
          </button>

          <p
            onClick={() => navigate("/")}
            className="text-center text-sm text-[#2e3092] hover:underline cursor-pointer mt-3"
          >
            Change mobile number
          </p>
        </form>
      </div>
    </div>
  )
}
