"use client"
import { IconChevronDown, IconGift, IconHeadset, IconMessage, IconPhotoAlt, IconX } from '@tabler/icons-react';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react"
import { useState } from 'react';

export default function AnimatedCard() {

  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)"
            }}
            animate={{
              opacity: 1,
              scale: 1.05,
              filter: "blur(0px)"
            }}

            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)"
            }}

            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className={cn("text-neutral-900 w-72 min-h-[28rem] h-[28rem] bg-white rounded-xl",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-4 flex flex-col"
            )}>
            <div className='flex items-center justify-between '>
              <h2 className="mt-1 font-bold text-sm tracking-tight text-gray-950">Saundarya UI Component</h2>
              <button >
                <IconX
                  onClick={() => setOpen(false)}
                  className="cursor-pointer "
                  height={15}
                  width={15}
                />
              </button>
            </div>
            <p className="mt-2 text-sm/5 text-neutral-600 ">A collection of beautiful UI components , <br /> get on with it</p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[15px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-1 py-1.5 cursor-pointer">
                <Image
                  width={30}
                  height={30}
                  alt="logo"
                  src="/s.svg" />
                SaundArya
                <IconX
                  className="cursor-pointer "
                  height={15}
                  width={15} />
              </button>
            </div>
            <div className='relative bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200'>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)"
                }}

                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)"
                }}

                transition={{
                  duration: 0.3,
                  ease: 'easeIn'
                }}
                className='absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200'>
                <div className='p-4 text-sm flex gap-2 p-4'>
                  <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                    <IconMessage className='h-4 w-4 text-neutral-600' />
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-[10px] font-bold text-neutral-600'> Saundarya UI Components</p>
                    <p className='text-[10px] text-neutral-600 mt-1'> A collection of UI components</p>
                  </div>
                </div>
                <div className='p-4 text-sm flex gap-2 p-4'>
                  <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                    <IconPhotoAlt className='h-4 w-4 text-neutral-600' />
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-[10px] font-bold text-neutral-600'> Beautiful Sceneries</p>
                    <p className='text-[10px] text-neutral-600 mt-1'> Best Sceneries of all time</p>
                  </div>
                </div>
                <div className='p-4 text-sm flex gap-2 p-4'>
                  <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                    <IconHeadset className='h-4 w-4 text-neutral-600' />
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-[10px] font-bold text-neutral-600'> Music</p>
                    <p className='text-[10px] text-neutral-600 mt-1'> Listen to music while we  create your components</p>
                  </div>
                </div>
                <div className='p-4 text-sm flex gap-2 p-4'>
                  <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                    <IconGift className='h-4 w-4 text-neutral-600' />
                  </div>
                  <div className='flex flex-col '>
                    <p className='text-[10px] font-bold text-neutral-600'> Gift</p>
                    <p className='text-[10px] text-neutral-600 mt-1'> The best gift you will ever recieve</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>

        )}
      </AnimatePresence>
    </div >
  )
}
