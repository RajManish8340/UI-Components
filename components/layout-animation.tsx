"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

export default function LayoutAnimation() {
  type Card = {
    singer: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => React.ReactNode
  }

  const cards: Card[] = [
    {
      singer: "modern cover: Mirza Bayan ",
      title: "Unko Bhi humse Mohabbat Ho Zaroori Toh Nahi",
      src: "https://i.scdn.co/image/ab67616d0000e1a3d2bbc2ca865a9a0b35f83a0d",
      ctaText: "play",
      ctaLink: "https://i.scdn.co/image/ab67616d0000e1a3d2bbc2ca865a9a0b35f83a0d",
      content: () => {
        return (
          <p >
            This soulful ghazal is based on the poetry of the legendary Nida Fazli and has been notably rendered by singers like Sadhna Sargam. The poignant lyrics capture the bittersweet reality of unrequited or one-sided affection. <br /> <br />It philosophically accepts that loving someone deeply does not guarantee they will feel the exact same way. It remains a timeless, heart-touching piece that continues to be reimagined by modern indie artists today.
          </p>
        )
      }
    },
    {
      singer: "Banjaare",
      title: "Bairan",
      src: "https://i.scdn.co/image/ab67616d0000e1a3cdce9a38222807fa703b4396",
      ctaText: "play",
      ctaLink: "https://i.scdn.co/image/ab67616d0000e1a3cdce9a38222807fa703b4396",
      content: () => {
        return (
          <p >
            This is a viral 2026 Haryanvi heartbreak song created by the artist Banjaare, which gained massive popularity across social media platforms. The track explores themes of lost love and lingering memories through a very catchy, modern sound. A popular duet version featuring Simiran Kaur Dhadli adds a raw female perspective to the emotional narrative. <br /> <br />It stands out in the Haryanvi music scene particularly for its beautifully animated music video that enhances the storytelling .</p>
        )
      }
    },
    {
      singer: "Kabir Cafe",
      title: "Mat Kar Maya Ko Ahankar",
      src: "https://i.scdn.co/image/ab67616d0000e1a377fe0f87007c6df460fc4c38",
      ctaText: "play",
      ctaLink: "https://i.scdn.co/image/ab67616d0000e1a377fe0f87007c6df460fc4c38",
      content: () => {
        return (
          <p >
            Rooted in ancient philosophy, this is a traditional Kabir bhajan that warns humanity against false pride in material wealth and physical beauty, reminding us that both eventually turn to dust. <br /> <br /> The song was brought into the modern pop-culture spotlight by the band Neeraj Arya’s Kabir Cafe. Their energetic, folk-fusion rendition became immensely popular after being featured as a thematic track in the acclaimed web series Scam 1992.</p>
        )
      }
    },
    {
      singer: "Panther , Prinyanka Mehar",
      title: "Parinda",
      src: "https://i.scdn.co/image/ab67616d0000e1a3320379223edcc95e42f9f162",
      ctaText: "play",
      ctaLink: "https://i.scdn.co/image/ab67616d0000e1a3320379223edcc95e42f9f162",
      content: () => {
        return (
          <p >
            Released in 2024, this deep, introspective hip-hop track by Indian rapper Panther features vocal support from Priyanka Meher. The lyrics portray the artist as a broken, wandering bird (toota parinda) trying to navigate a harsh and superficial world. Panther touches on themes of lost humanity, the struggles of staying authentic, and the heavy emotional toll placed on artists. The song successfully combines raw, hard-hitting rap verses with a hauntingly melodic chorus.</p>
        )
      }
    },
    {
      singer: "Aparshakti Khurana",
      title: "Zarror",
      src: "https://i.scdn.co/image/ab67616d0000e1a3237d1d1fd586f53a9f6b20aa",
      ctaText: "play",
      ctaLink: "https://i.scdn.co/image/ab67616d0000e1a3237d1d1fd586f53a9f6b20aa",
      content: () => {
        return (
          <p >
            This 2024 viral Indian pop track is a successful musical collaboration between actor-singer Aparshakti Khurana and Savi Kahlon. It is a soulful Punjabi love song that speaks directly to the pain of distance and shared helplessness in a relationship. <br /> <br /> The poetic lyrics beautifully convey the feeling of longing for a partner who feels as far away as the clouds, yet is likely experiencing the exact same compulsion and pain.  </p>
        )
      }
    },

  ]

  const [current, setCurrent] = useState<Card | null>(null)

  const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback()
        }
      }
      document.addEventListener("click", handleClick)
      return () => {
        document.removeEventListener("click", handleClick)
      }
    }, [callback])
    return ref
  }

  const ref = useOutsideClick(() => setCurrent(null))

  return (
    <div className="min-h-screen w-full bg-gray-100 py-20 relative">
      {current && <div className="fixed z-10 w-full h-screen inset-0 bg-black/50 backdrop-blur-sm" ></div>}
      {current &&
        <motion.div
          initial={{
            filter: "blur(10px)",
            opacity: 0
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1
          }}
          transition={{
            delay: 0.1
          }}
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-150 w-90 fixed inset-0 z-20 m-auto rounded-2xl border bg-white p-4 flex flex-col overflow-hidden ">
          <motion.img
            layoutId={`card-image-${current.title}`}
            className="h-60 aspect-square rounded-xl m-2"
            src={current.src}
            alt={current.title} />
          <div >
            <div className="flex items-center justify-between">
              <div className="flex flex-col text-neutral-500 px-4">
                <motion.h2 layoutId={`card-title-${current.title}`} className="text-lg text-black font-bold tracking-tighter">{current.title}</motion.h2>
                <motion.p layoutId={`card-singer-${current.title}`}>{current.singer}</motion.p>
              </div>
              <motion.div layoutId={`card-ctaLink-${current.title}`}>
                <Link
                  className="text-neutral-700 bg-green-400 px-3 ml-10 rounded-xl"
                  href={current.ctaLink}>
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1
              }}
              transition={{
                delay: 0.4
              }}
              className="h-50 text-[12px] p-2 overflow-y-auto mt-5 text-neutral-500">
              {current.content()}
            </motion.div>
          </div>
        </motion.div>}

      <div className="flex flex-col max-w-lg mx-auto gap-5 ">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => {
              setCurrent(card)
            }}
            className="flex justify-between bg-white items-center p-3  rounded-lg cursor-pointer border border-neutral-200"
            key={card.title}
          >
            <div className="flex" >
              <motion.img
                layoutId={`card-image-${card.title}`}
                className="h-15 w-15 rounded-lg aspect-square"
                src={card.src}
                alt={card.title}
              />
            </div>
            <div className="flex flex-col text-neutral-500 px-4">
              <motion.h2 layoutId={`card-title-${card.title}`} className="text-lg text-black font-bold tracking-tighter">{card.title}</motion.h2>
              <motion.p layoutId={`card-singer-${card.title}`}>{card.singer}</motion.p>
            </div>
            <motion.div
              layoutId={`card-ctaLink-${card.title}`}
              className="text-neutral-700 bg-green-400 px-3 ml-10 rounded-xl">
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div >
  )

}
