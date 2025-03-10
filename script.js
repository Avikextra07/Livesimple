import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function PersonalWebsite() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between items-center p-5 shadow-md">
        <h1 className="text-2xl font-bold">Avik's Portfolio</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </header>

      <motion.section
        className="h-screen flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold">Hi, I'm Avik!</h2>
        <p className="text-lg mt-2">A passionate developer exploring technology.</p>
      </motion.section>

      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {[
            { name: "Web Development", desc: "A responsive website using React and Tailwind CSS." },
            { name: "Machine Learning", desc: "A Python-based ML model for data analysis." }
          ].map((proj, index) => (
            <motion.div
              key={index}
              className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p className="text-sm">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="max-w-md mx-auto">
          {[{ skill: "React", level: "w-4/5" }, { skill: "Machine Learning", level: "w-3/5" }, { skill: "JavaScript", level: "w-5/5" }].map((s, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{s.skill}</p>
              <div className="bg-gray-300 dark:bg-gray-700 h-3 rounded-full">
                <motion.div className={`bg-blue-600 h-3 rounded-full ${s.level}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5 }}></motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <motion.form 
          className="flex flex-col max-w-md mx-auto mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input type="text" placeholder="Your Name" className="p-3 rounded-md mb-3 border border-gray-300" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-md mb-3 border border-gray-300" />
          <textarea placeholder="Your Message" className="p-3 rounded-md mb-3 border border-gray-300"></textarea>
          <Button className="bg-blue-600 text-white py-2 rounded-md">Send Message</Button>
        </motion.form>
      </section>
    </div>
  );
}
