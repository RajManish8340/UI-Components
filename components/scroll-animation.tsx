"use client"
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

type Feature = {
  heading: string;
  description: string;
  url: string;
}

export default function ScrollAnimation() {
  const features: Feature[] = [
    {
      heading: "Badrinath (Uttarakhand) in the North",
      description: " Located in the Garhwal Himalayas along the Alaknanda River, this shrine is dedicated to Lord Vishnu (Badri Narayan).",
      url: "https://i.pinimg.com/1200x/83/65/f5/8365f5b97f3fcd923b5c9f667f8a38f5.jpg"
    },
    {
      heading: "Dwarka (Gujarat - West) ",
      description: "Situated on the Arabian Sea coast, this site features the majestic Dwarkadhish Temple (Jagat Mandir), dedicated to Lord Krishna.",
      url: "https://i.pinimg.com/1200x/e6/f3/a3/e6f3a3de9e134319002f1e395cf59c54.jpg"
    },
    {
      heading: "Puri (Odisha - East)",
      description: " Located on the Bay of Bengal coast, this is the abode of Lord Jagannath, a prominent incarnation of Lord Vishnu.",
      url: "https://i.pinimg.com/1200x/8f/68/50/8f685074a2f22558e91614e9b2c3c9ff.jpg"
    },
    {
      heading: "Rameswaram (Tamil Nadu - South)",
      description: " Located on an island off the southern coast, this site features the Ramanathaswamy Temple, one of India's twelve Jyotirlingas dedicated to Lord Shiva.",
      url: "https://i.pinimg.com/736x/3d/ab/45/3dab45d05749c708faa9aea7f548084a.jpg",
    },
  ]

  const Card = ({ feature }: { feature: Feature }) => {
    const descref = useRef<HTMLLIElement>(null)
    const { scrollYProgress } = useScroll({
      target: descref,
      offset: ["start end", "end start"]
    })
    const translateContent = useTransform(scrollYProgress, [0, 1], [100, -70])
    const translateOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const translateScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8])
    const translateBlur = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, 5])

    return (
      <li
        ref={descref}
        className="relative h-screen flex items-center justify-center"
      >
        <motion.div
          style={{
            y: translateContent,
            opacity: translateOpacity,
            scale: translateScale,
            filter: useMotionTemplate`blur(${translateBlur}px)`
          }}
          className="flex flex-col items-center justify-center text-center h-100 w-100 absolute right-5"
        >
          <div className="text-2xl mb-5 font-bold">
            {feature.heading} <br />
          </div>
          <div className="text-neutral-500">
            {feature.description}
          </div>
        </motion.div>
      </li>
    )
  }

  const ImageCard = ({ feature }: { feature: Feature }) => {
    const ref = useRef<HTMLLIElement>(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    })
    const translateOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const translatePhoto = useTransform(scrollYProgress, [0, 1], [300, -400])

    return (
      <li
        ref={ref}
        className=" h-screen flex items-center justify-center"
      >
        <motion.div
          style={{
            opacity: translateOpacity,
            y: translatePhoto,
          }}>
          <Image
            className=" h-90 w-90 rounded-lg"
            src={feature.url}
            alt="url"
            width={500}
            height={500}
          />
        </motion.div>
      </li>
    )
  }

  const screenref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: screenref,
    offset: ["start end", "end start"]
  })
  const backgrounds = ["#001a2c", "#220135", "#2f0e07", "#111111"]
  const [bg, setBg] = useState(backgrounds[0])
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setBg(backgrounds[Math.floor(latest * backgrounds.length)])
  })

  return (
    <motion.div
      ref={screenref}
      animate={{
        backgroundColor: bg
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className=" w-full flex items-center justify-center">
      <div className="w-1/3 flex-col">
        <ul>
          {features.map((feature) => (
            <Card key={feature.description} feature={feature} />
          ))}
        </ul>
      </div>
      <div className="w-1/3 flex-col">
        <ul>
          {features.map((feature) => (
            <ImageCard key={feature.url} feature={feature} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
