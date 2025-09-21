import React from "react";
import introImg from "../../assets/intro sec/2.jpg";
import arrowimg from "../../assets/18.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { Coffee, ChefHat, ForkKnife, Wine } from "lucide-react"; // أيقونات صحيحة

export default function IntroSection() {
  return (
    <section className="about-style-two-area py-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 relative">
        
        {/* الصورة على اليسار */}
        <motion.div
          className="lg:w-1/2 relative"
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={introImg}
            alt="Intro"
            className="w-full h-auto rounded-xl shadow-lg"
          />

          {/* أيقونات الخدمات على الصورة */}
          <div className="absolute bottom-[-30px] left-0 w-full flex justify-between px-2" >
            {[Coffee, ChefHat, ForkKnife, Wine].map((Icon, idx) => (
              <div
                key={idx}
                  initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, delay: idx * 0.2 }}
                className="border-4 border-gray-800 bg-black shadow-2xl rounded-full p-6 cursor-pointer transition-transform  hover:shadow-2xl"
                
              >
                <Icon className="w-12 h-12 text-red-700" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* النص والزر وLunch/Dinner */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center gap-6 lg:ml-12 "
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
        >
          {/* العنوان والنص مع الصورة الصغيرة */}
          <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
            <div className="flex items-center mb-2">
              <h4 className="sub-heading text-red-600 text-xl font-bold uppercase">
                Welcome At
              </h4>
              <img src={arrowimg} alt="Arrow" className="ml-2" />
            </div>

            <h2 className="text-4xl font-bold mb-4">Foodu Restaurant</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
             The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in Paris in 1765. The sign above his door advertised restoratives, or restaurants, referring to the soups and broths available within. 
            </p>

            {/* زر الاستكشاف */}
            <a
              href="/food-menu"
              className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Explore menu
            </a>
          </motion.div>

          {/* Lunch & Dinner بجانب بعض */}
          <motion.div
            className="flex flex-row gap-6 mt-6"
            initial={{ y:10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
          >
            {/* Lunch */}
            <ul className="launch-time border border-gray-300 rounded-lg shadow-lg w-64 bg-gray-800 text-white p-6">
              <li className="mb-2">
                <h4 className="font-semibold text-lg mb-3">Lunch</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Saturday and Sunday</li>
                  <li>Reservations from 12pm to 1.30pm</li>
                </ul>
              </li>
            </ul>

            {/* Dinner */}
            <ul className="launch-time border border-gray-300 rounded-lg shadow-lg w-64 bg-gray-800 text-white p-6">
              <li className="mb-2">
                <h4 className="font-semibold text-lg mb-3">Dinner</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Thursday to Sunday</li>
                  <li>Reservations from 6pm to 8.45pm</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
