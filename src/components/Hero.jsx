import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "src/assets/images/7.jpg",
  "src/assets/images/5.jpg",
  "src/assets/images/2.jpg",
];

const heroContent = [
  {
    title: "Welcome to Elim Pentecostal Church of Kenya (EPCK)",
    subtitle:
      "Rooted in the rich heritage of the global Elim movement, we are a Christ-centered, Spirit-filled church committed to transforming lives and communities holistically.",
    buttons: [
      { text: "Join Us", link: "/join" },
      { text: "Our Ministries", link: "/ministries" },
    ],
  },
  {
    title: "Transforming Lives and Communities",
    subtitle:
      "Join us as we raise healthy churches, nurture strong families, and extend the love of Christ through service, compassion, and impact-driven programs across Kenya and beyond.",
    buttons: [
      { text: "Learn More", link: "/about" },
      { text: "Contact Us", link: "/contact" },
    ],
  },
];

function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  // rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // rotate text content (optional: match images or independent)
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % heroContent.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[32rem] md:h-[36rem] px-4 mt-[6rem] mb-5">
      <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
        {/* Background carousel */}
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={heroImages[imgIndex]}
            alt="Hero Slide"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content (with animations) */}
        <div className="relative z-10 flex items-center h-full max-w-2xl p-6 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={contentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {heroContent[contentIndex].title}
              </h1>
              <p className="text-base md:text-lg mb-6 opacity-90">
                {heroContent[contentIndex].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {heroContent[contentIndex].buttons.map((button, i) => (
                  <a
                    key={i}
                    href={button.link}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-sm transition"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Hero;
