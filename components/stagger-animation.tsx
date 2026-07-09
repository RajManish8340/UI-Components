"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"

export default function StaggerAnimation() {

  let links = [
    {
      label: "Dashboard",
      href: "/"
    },
    {
      label: "Profile",
      href: "/"
    },
    {
      label: "Settings",
      href: "/"
    },
    {
      label: "Logout",
      href: "/"
    },
  ]

  const [open, setOpen] = useState(false)

  const navVariants = {
    closed: {
      y: -10,
      filter: "blur(10px)",
      opacity: 0
    },
    open: {
      y: 0,
      filter: "blur(0px)",
      opacity: 1
    }
  }

  const dropdownVariants = {
    closed: {
      y: 20,
      filter: "blur(4px)",
      opacity: 0
    },
    open: {
      y: 0,
      filter: "blur(0px)",
      opacity: 1
    }
  }

  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.1, delayChildren: 0.1
      }
    },

    closed: {
      transition: {
        staggerChildren: 0.1, delayChildren: 0.1, staggerDirection: -1
      }
    }
  }

  const linkVariants = {
    closed: {
      y: 8,
      opacity: 0
    },

    open: {
      y: 0,
      opacity: 1
    }
  }

  const TRANSITION = {
    type: "spring" as const,
    visualDuration: 0.3,
    bounce: 0.1
  }

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <motion.nav
        variants={navVariants}
        initial="closed"
        animate="open"
        transition={TRANSITION}
        className="flex bg-white h-[8vh] w-[95vw] rounded-full mt-[5vh] justify-end items-center px-[2vw] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center gap-4 text-neutral-500">
          <p>click here - - - &gt;</p>
          <button onClick={() => setOpen(!open)} className="cursor-pointer rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-black shrink-0">
              <Image
                fill
                alt="logo"
                src="/s.svg" />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {
          open && (
            <motion.div
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="self-end w-60 h-30px bg-white rounded-2xl mt-[1vh] mx-[3vw] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <motion.ul
                variants={listVariants}
                className="flex flex-col gap-4 p-4 my-auto">
                {links.map((link) => (
                  <motion.li
                    variants={linkVariants}
                    key={link.label} className="text-neutral-500">
                    <a href={link.href}>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div >
  )
}



