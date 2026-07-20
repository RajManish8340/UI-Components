"use client"
import { motion, useAnimate } from "motion/react"

export default function AnimatedSequences() {
  const [scope, animate] = useAnimate()

  const startAnimating = async () => {
    animate('.text', { display: 'none' }, { duration: 0 })
    await animate(".loader", { opacity: 1, rotate: 360 * 4 }, { duration: 2 })
    await animate("button", { opacity: 0, width: "0rem", filter: "blur(30px)" }, { duration: 0.3 })
    animate(".checkid", { opacity: 1, filter: "blur(0px)" }, { duration: 0.4 })
    animate(".path", { pathLength: 1 }, { duration: 0.4 })
    animate(".tick", { opacity: 1, scale: [1, 1.2, 0.8, 1] }, { duration: 0.7 })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div ref={scope} className="relative w-[30rem] h-20 flex items-center justify-center">

        <motion.button
          initial={{
            filter: "blur(0px)"
          }}
          style={{
            width: '25rem'
          }}
          onClick={startAnimating}
          className="flex items-center justify-center h-20 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500  text-white font-medium"
        >
          <motion.svg
            style={{
              opacity: 0,
            }}
            className="loader icon icon-tabler icons-tabler-outline icon-tabler-loader-2 mr-3"
            xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>
          <motion.span
            className="text">Purchase Now ($69)</motion.span>
        </motion.button>

        <motion.div
          initial={{
            opacity: 0,
          }}
          className="tick absolute pointer-events-none w-20 h-20 rounded-full bg-green-500"
        >
        </motion.div>

        <motion.svg
          initial={{
            opacity: 0,
            filter: "blur(7px)"
          }}
          className="checkid icon icon-tabler icons-tabler-outline icon-tabler-check z-10"
          xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" >
          <motion.path
            className="path"
            initial={{
              pathLength: 0,
            }}
            d="M5 12l5 5l10 -10" />
        </motion.svg>

      </div>
    </div>
  )
}
