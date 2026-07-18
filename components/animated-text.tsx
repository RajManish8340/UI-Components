"use client"
import { motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react"

export default function AnimatedText() {
  const [scope, animate] = useAnimate()

  const text = "Work with people you would..... generally 'like' and 'respect' and that you have known long enough to be sure about because there are a lot of people who are really good at 'seeming likable' for a while . Just... wait till your interests are opposed and then you’ll see."

  const startAnimating = () => {
    animate("span", { opacity: 1, filter: "blur(0px)", y: 0 }, { duration: 0.4, ease: "easeInOut", delay: stagger(0.05) })
  }

  useEffect(() => {
    startAnimating()
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center ">
      <div
        ref={scope}
        className="text-white max-w-4xl mx-auto font-bold text-4xl flex items-center flex-wrap">
        {text.split(" ").map((word, index) => (
          <motion.span
            className="inline-block"
            style={{
              opacity: 0,
              filter: "blur(10px)",
              y: 20
            }}
            key={word + index}
          >
            {word} &nbsp;
          </motion.span>
        ))}
      </div>
    </div>
  )
}
