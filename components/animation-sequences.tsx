"use client"
import { motion, animate } from "motion/react"

export default function AnimatedSequences() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div>
        <motion.button
          style={{
            width: '30rem'
          }}
          onClick={startAnimating}
          className="h-20 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-white font-medium">
          Purchace Now ($69)
        </motion.button>
      </div>
    </div>
  )
}
