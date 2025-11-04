import { Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function PageLoader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm"
        >
          <Loader2 className="w-10 h-10 text-[#2E3092] animate-spin mb-3" />
          <p className="text-[#2E3092] font-medium text-sm">Loading...</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
