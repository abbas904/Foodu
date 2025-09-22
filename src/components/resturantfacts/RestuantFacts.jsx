import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShoppingCart, FaUtensils, FaStar, FaClock } from "react-icons/fa";
import foodimg from "../../assets/banners/17.png";
import { fadeIn, staggerContainer } from "../../utils/motion";

// صور الخدمات
import service1 from "../../assets/Our Service/6.png";
import service2 from "../../assets/Our Service/7.png";
import service3 from "../../assets/Our Service/8.png";
import service4 from "../../assets/Our Service/9.png";

// Counter
function Counter({ from, to, duration, format }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const value = Math.floor(progress * (to - from) + from);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{format ? format(count) : count}</span>;
}

export default function FunFacts() {
  // الكاونترات
  const stats = [
    {
      number: 98000,
      label: "Daily Orders",
      format: (n) => `${Math.floor(n / 1000)}K`,
      icon: <FaShoppingCart size={24} className="mx-auto mt-2 text-red-600" />,
    },
    {
      number: 5,
      label: "Menu & Dish",
      format: (n) => `${n}+`,
      icon: <FaUtensils size={24} className="mx-auto mt-2 text-red-600" />,
    },
    {
      number: 120,
      label: "Top Reviews",
      format: (n) => `${n}+`,
      icon: <FaStar size={24} className="mx-auto mt-2 text-red-600" />,
    },
    {
      number: 24,
      label: "Hours Service",
      format: (n) => `${n}h`,
      icon: <FaClock size={24} className="mx-auto mt-2 text-red-600" />,
    },
  ];

  // الكروت
  const features = [
    {
      title: "Best Quality Food",
      text: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      img: service1,
    },
    {
      title: "Home Delivery",
      text: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      img: service2,
    },
    {
      title: "Real Taste",
      text: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      img: service3,
    },
    {
      title: "Traditional Food",
      text: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      img: service4,
    },
  ];

  return (
    <>
      {/* ====== Fun Facts Section ====== */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 font-sans overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8"
        style={{ backgroundColor: "#ebe9e6" }}>
        {/* الخلفية المتحركة */}
        <motion.div
          className="absolute inset-y-0 right-0 w-1/4 bg-red-500"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          variants={staggerContainer(0.3, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-12"
        >
          {/* النصوص والإحصائيات */}
          <div>
            <motion.h1
              variants={fadeIn("down", "tween", 0.2, 1)}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 text-center lg:text-left leading-tight"
            >
              Experience of <span className="text-red-600">real recipes</span>{" "}
              taste
            </motion.h1>

            {/* خط تحت العنوان */}
            <motion.div
              className="h-1 bg-red-600 mb-6 sm:mb-8 md:mb-10 origin-left w-full"
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                show: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 2.5, ease: "easeOut" },
                },
              }}
            />

            {/* الكاونترات */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.4 + index * 0.3, 1)}
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600">
                    <Counter
                      from={0}
                      to={item.number}
                      duration={2}
                      format={item.format}
                    />
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">{item.label}</span>
                  <div className="mt-1">
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* الصورة */}
          <motion.div
            variants={fadeIn("down", "tween", 0.9, 1)}
            className="relative flex justify-center"
          >
            <img
              src={foodimg}
              alt="Fun facts illustration"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto z-10"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ====== Features Section (Timeline + Cards) ====== */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8">
        {/* الخط الأفقي تحت السكشن */}
       

        {/* الكروت */}
       {/* الكروت */}
<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-10">
  {features.map((item, i) => (
    <motion.div
      key={i}
      variants={fadeIn("up", "tween", 0.2 * i, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative flex flex-col items-center text-center ${
        i % 2 === 0 ? "mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16" : "-mt-4 sm:-mt-6 md:-mt-8 lg:-mt-12 xl:-mt-16"
      }`} 
    >
      {/* الخط العمودي */}
      <span className="hidden lg:block absolute -top-[150px] md:-top-[200px] lg:-top-[250px] xl:-top-[300px] h-[180px] md:h-[250px] lg:h-[300px] xl:h-[350px] w-1 bg-gray-300"></span>

      {/* الدائرة */}
      <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-black border-2 md:border-3 lg:border-4 border-red-100 relative top-4 sm:top-6 md:top-8 lg:top-10 z-10"></span>

      {/* الكارت */}
      <div
        className="mt-4 sm:mt-6 md:mt-8 shadow-md rounded-xl px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 max-w-xs w-full hover:shadow-xl transition duration-300"
        style={{ backgroundColor: "#ebe9e6" }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="mx-auto mb-2 sm:mb-3 md:mb-4 w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 xl:w-36 xl:h-20 object-contain"
        />
        <h4 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 text-gray-800">{item.title}</h4>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base font-sans text-center">{item.text}</p>
      </div>
    </motion.div>
  ))}
</div>

      </section>
    </>
  );
}
