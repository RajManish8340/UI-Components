"use client"
import { motion, useAnimate } from "motion/react"

export default function AnimatedSequences() {
  const [scope, animate] = useAnimate()

  const startAnimating = async () => {
    animate('.text', { display: 'none' }, { duration: 0.2 })
    animate("button", { opacity: 0 }, { duration: 0.2 })
    animate(".tick", { opacity: 1, scale: [1, 1.2, 0.8, 1] }, { duration: 0.8 })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div ref={scope} className="relative w-[30rem] h-20 flex items-center justify-center">

        <motion.button
          style={{
            width: '30rem'
          }}
          onClick={startAnimating}
          className="h-20 z-10 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500  text-white font-medium"
        >
          <motion.span className="text">Purchase Now ($69)</motion.span>
        </motion.button>

        <motion.div
          initial={{
            opacity: 0,
          }}
          className="tick absolute pointer-events-none w-20 h-20 rounded-full bg-green-500"
        />

      </div>
    </div>
  )
}
