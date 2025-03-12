import React, { useState } from "react";
import { X } from "lucide-react"; 
import { motion,  AnimatePresence  } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Briefcase, Globe, Code } from "lucide-react";
// const CertificatesPage = () => {
const certificates = [
  {
    id: 1,
    title: "Certificate of Degree",
    institution: "Teachnook",
    description: "Completing a Data Science course with Teachnook to enhance my analytical and machine learning skills.",
    image: "/Teachnook.jpg", 
  },
  {
    id: 2,
    title: "Introduction to Managment",
    institution: "Great Learning",
    description: "I am completing the Introduction to Management course with Great Learning, gaining foundational insights into effective management principles",
    image: "/LEARNING.jpg",
  },
  {
    id: 3,
    title: "Cricket Achievement Certificate",
    institution: "GIT",
    description: "Recognized for outstanding performance and participation in cricket, showcasing teamwork and sportsmanship.",
    image: "/cricket.jpg",
  },
  {
    id: 4,
    title: "Project Manegment",
    institution: "Coursera ",
    description: "Completing a Project Management course on Coursera to enhance skills in planning, execution, and team coordination.",
    image: "/COURSERA.jpg",
  },
  {
    id: 5,
    title: "Chess Achievement Certificate",
    institution: "GIT",
    description: "Awarded a chess certification from my college, showcasing strategic thinking, problem-solving skills, and competitive excellence.",
    image: "/chess.jpg",
  },
  {
    id: 6,
    title: "Badminton Achievement Certificate",
    institution: "GIT",
    description: "Earned a certification in badminton, showcasing my skills and passion for the sport.",
    image: "/badminton.jpg",
  },
  {
    id: 7,
    title: "Carrom Achievement Certificate",
    institution: "GIT",
    description: "Earned a certification in carrom, showcasing strategic thinking, precision, and competitive skills.",
    image: "/carrom.jpg",
  },
  {
    id: 8,
    title: "Full Stack Internship Certificate",
    institution: "Infividhya Pvt Ltd",
    description: "Successfully completed a 2-week Full Stack Internship at Infividhya Pvt Ltd, gaining hands-on experience in web development and full-stack technologies.",
    image: "/infividhya.jpg",
  },
  {
    id: 9,
    title: "Programming Skills Bootcamp Certification",
    institution: " Vrunda Technologies",
    description: "Successfully completed a 17-day Programming Skills bootcamp at Vrunda Technologies, enhancing coding proficiency and problem-solving abilities.",
    image: "/Programming.jpg",
  },
  {
    id: 10,
    title: "Full Stack Web Development Internship Program",
    institution: "Edureka",
    description: "Attended a demo session on the Full Stack Web Development Internship Program organized by Edureka, gaining insights into industry practices.",
    image: "/Edureka.jpg",
  },
  {
    id: 11,
    title: "Mathematical Modelling and Applications in Engineering – MMAME 2022",
    institution: "Gandhinagar University",
    description: "Participated in the MMAME-2022 event at Gandhinagar University, exploring mathematical modelling and its applications in engineering",
    image: "/Maths.jpg",
  },
  {
    id: 12,
    title: "Entrepreneurship & Digital Innovation",
    institution: "Lingaya`s institute",
    description: "Participated in the MMAME-2022 event at Gandhinagar University, exploring mathematical modelling and its applications in engineering",
    image: "/inyerpriter.jpg",
  },
];

    const Header = () => {
      return (
        <nav className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-md p-4 w-full flex justify-between items-center fixed top-0 text-white z-50">
      <h1 className="text-2xl font-bold">Sujal </h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-blue-400 transition duration-300">
          Home
          </Link>
        </li>
        <li>
          <Link to="/certificates" className="hover:text-blue-400 transition duration-300">
            Certificates
          </Link>
        </li>
        <li>
          <Link to="/work-experience" className="hover:text-blue-400 transition duration-300">
            Work 
          </Link>
        </li>
        <li>
          <Link to="https://portfoliosj.vercel.app/#contact" target="_blank" className="hover:text-blue-400 transition duration-300">
            Contact 
          </Link>
        </li>
      </ul>
    </nav>

      );
    };


const NowPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Personal Portfolio Website Development",
      answer:
        "Designing and developing a personal portfolio website to showcase my skills, projects, and experiences. The website highlights my proficiency in frontend and backend technologies and serves as a professional digital presence.",
    },
    {
      question: "Real-Time Chat Application",
      answer:
        "Building a real-time chat application with a focus on backend development. Implementing WebSocket communication, user authentication, and database integration to enable seamless real-time messaging.",
    },
    {
      question: "Bookstore Website Enhancement",
      answer:
        "Enhancing the functionality of a bookstore website by integrating MongoDB for secure user authentication and efficient data management. Improving user experience by adding interactive features using HTML, CSS, JavaScript, and Bootstrap.",
    },
    {
      question: "Academic Report Preparation",
      answer:
        "Compiling a 7-week progress report for college submission, detailing the development, challenges, and accomplishments of my ongoing projects.",
    },
    {
      question: "Exploring AI/ML integration with Python",
      answer:
        "I'm exploring AI and Machine Learning integration with Python to build intelligent applications and automate complex tasks. By working with libraries like TensorFlow, PyTorch, and scikit-learn, I aim to understand machine learning algorithms, data preprocessing, and model deployment.",
    },
    {
      question: "Enhancing problem-solving skills through competitive coding",
      answer:
        "I'm actively improving my problem-solving skills through competitive coding by tackling algorithmic challenges and data structure problems. This helps me think critically, optimize code efficiency, and develop faster, more scalable solutions. By participating in coding competitions and solving problems on platforms like LeetCode and CodeChef, I'm sharpening my logical reasoning and coding abilities to become a more proficient developer.",
    },
    {
      question: "Contributing to open-source projects ",
      answer:
        "I'm contributing to open-source projects to collaborate with the developer community, improve my coding skills, and gain hands-on experience with real-world software development. By working on open-source repositories, I learn best practices, improve code quality, and help build impactful solutions. This also allows me to network with experienced developers, contribute to meaningful projects, and give back to the tech community.",
    },
    {
      question: "Planning to pursue further studies ",
      answer:
        "I plan to pursue an M.Tech to deepen my knowledge in Software Engineering. This will help me enhance my technical expertise, engage in research, and contribute to innovative projects in the field of technology.",
    },
  ];
  const certificates = [
    {
      id: 1,
      title: "Certificate of Degree",
      institution: "Teachnook",
      description: "Completing a Data Science course with Teachnook to enhance my analytical and machine learning skills.",
      image: "/Teachnook.jpg", 
    },
    {
      id: 2,
      title: "Introduction to Managment",
      institution: "Great Learning",
      description: "I am completing the Introduction to Management course with Great Learning, gaining foundational insights into effective management principles",
      image: "/LEARNING.jpg",
    },
    {
      id: 3,
      title: "Cricket Achievement Certificate",
      institution: "GIT",
      description: "Recognized for outstanding performance and participation in cricket, showcasing teamwork and sportsmanship.",
      image: "/cricket.jpg",
    },
    {
      id: 4,
      title: "Project Manegment",
      institution: "Coursera ",
      description: "Completing a Project Management course on Coursera to enhance skills in planning, execution, and team coordination.",
      image: "/COURSERA.jpg",
    },
    {
      id: 5,
      title: "Chess Achievement Certificate",
      institution: "GIT",
      description: "Awarded a chess certification from my college, showcasing strategic thinking, problem-solving skills, and competitive excellence.",
      image: "/chess.jpg",
    },
    {
      id: 6,
      title: "Badminton Achievement Certificate",
      institution: "GIT",
      description: "Earned a certification in badminton, showcasing my skills and passion for the sport.",
      image: "/badminton.jpg",
    },
    {
      id: 7,
      title: "Carrom Achievement Certificate",
      institution: "GIT",
      description: "Earned a certification in carrom, showcasing strategic thinking, precision, and competitive skills.",
      image: "/carrom.jpg",
    },
    {
      id: 8,
      title: "Full Stack Internship Certificate",
      institution: "Infividhya Pvt Ltd",
      description: "Successfully completed a 2-week Full Stack Internship at Infividhya Pvt Ltd, gaining hands-on experience in web development and full-stack technologies.",
      image: "/infividhya.jpg",
    },
    {
      id: 9,
      title: "Programming Skills Bootcamp Certification",
      institution: " Vrunda Technologies",
      description: "Successfully completed a 17-day Programming Skills bootcamp at Vrunda Technologies, enhancing coding proficiency and problem-solving abilities.",
      image: "/Programming.jpg",
    },
    {
      id: 10,
      title: "Full Stack Web Development Internship Program",
      institution: "Edureka",
      description: "Attended a demo session on the Full Stack Web Development Internship Program organized by Edureka, gaining insights into industry practices.",
      image: "/Edureka.jpg",
    },
    {
      id: 11,
      title: "Mathematical Modelling and Applications in Engineering – MMAME 2022",
      institution: "Gandhinagar University",
      description: "Participated in the MMAME-2022 event at Gandhinagar University, exploring mathematical modelling and its applications in engineering",
      image: "/Maths.jpg",
    },
    {
      id: 12,
      title: "Entrepreneurship & Digital Innovation",
      institution: "Lingaya`s institute",
      description: "Participated in the MMAME-2022 event at Gandhinagar University, exploring mathematical modelling and its applications in engineering",
      image: "/inyerpriter.jpg",
    },
  ];
  


  return (
    <div className="min-h-screen bg-[#0f1216] text-white flex flex-col items-center p-6 pt-20">
      <Header />
      <motion.section
        id="focus"
        className="backdrop-blur-lg bg-white/10 border border-white/20 text-white shadow-xl rounded-2xl p-8 w-full max-w-3xl mb-10 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-5 text-white text-center">📌 Current Focus</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-white/20 bg-gray-800/30 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <button
                className="w-full text-left  flex justify-between font-bold items-center text-white"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-white">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </motion.section>
      
    </div>
  );
};
const CertificatesPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f1216] text-white flex flex-col items-center p-6 pt-20">
      <Header />
    <motion.h2
      className="text-3xl font-bold mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      🏆 My Certificates
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          className="bg-white text-gray-900 shadow-2xl rounded-xl p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedCert(cert)}
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-72 h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
          <p className="text-sm text-center text-gray-700">{cert.institution}</p>
          <p className="text-xs text-center text-gray-500 mt-2">{cert.description}</p>
        </motion.div>
      ))}
    </div>

    {/* Full Image Modal */}
    <AnimatePresence>
      {selectedCert && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#0f1216] bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-4/5 md:w-2/3 lg:w-1/2">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-[#0f1216] text-white p-2 rounded-full hover:bg-gray-600 transition"
              onClick={() => setSelectedCert(null)}
            >
              <X size={24} />
            </button>

            {/* Full Image */}
            <motion.img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-xl shadow-xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
};

const WorkExperiencePage = () => {
  return (
    <div className="min-h-screen bg-[#0f1216] text-white flex flex-col items-center p-4 sm:p-6 pt-20">
      <Header />
      <motion.section
        id="work-experience"
        className="backdrop-blur-lg bg-[#0f1216] text-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-3xl mb-10 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-5 flex items-center gap-2">
          <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
          Work Experience
        </h2>
        <ul className="space-y-4">
          {[{
            title: "Full Stack Developer Intern",
            company: "Syndell Tech (Ongoing)",
            description: "Working with MERN Stack and Python to develop scalable web applications...",
            img: "https://tse3.mm.bing.net/th?id=OIP.Tba9Al38iLF2PqwawR5QvAAAAA&pid=Api&P=0&h=180"
          },{
            title: "Programming Skills Bootcamp ",
            company: "Vrunda Technologies (2021)",
            description: "Enhancing Coding Proficiency and Problem-Sloving Abilities in Data Science...",
            img: "https://tse3.mm.bing.net/th?id=OIP.hzzu2ILcH-JgQ3CcwF1z1gHaEy&pid=Api&P=0&h=180"
          }, {
            title: "Internship at InfiVidhya Pvt. Ltd.",
            company: "Full Stack Developer (Jan 2024 - Mar 2024)",
            description: "I successfully completed a 2-week internship at Infividhya Pvt Ltd...",
            img: "https://tse1.mm.bing.net/th?id=OIP.WX4txSWr1bxKBJHOSDiSiwHaE7&pid=Api&P=0&h=180"
          }, {
            title: "Freelance Web Developer",
            company: "Worked on various client projects (2023)",
            description: "Designed and developed custom websites and web applications for clients.",
            img: "https://tse2.mm.bing.net/th?id=OIP.0JpstI66DTqo6fsTyMHaQQHaFj&pid=Api&P=0&h=180"
          }, {
            title: "Research Assistant",
            company: "AI & Data Science (Aug 2023 - Dec 2023)",
            description: "Assisted in AI research projects, data analysis, and model development.",
            img: "https://tse3.mm.bing.net/th?id=OIP.9Tw8TgbyK3iI_4B-JjEnOgHaIW&pid=Api&P=0&h=180"
          }, {
            title: "Data Science Intern",
            company: "Technook (2 Months, Online) (2022)",
            description: "Gained hands-on experience in data preprocessing, machine learning...",
            img: "https://tse2.mm.bing.net/th?id=OIP.jn_vSNW8uY4o6qAGCkmzhwHaHa&pid=Api&P=0&h=180"
          }].map((job, index) => (
            <motion.li
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-gray-800/30 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <img src={job.img} alt={job.title} className="w-10 h-10 rounded-full" />
              <div className="text-center sm:text-left">
                <strong><b>{job.title}</b></strong> <b> - {job.company}</b>
                <p className="text-gray-300 text-sm mt-1">{job.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
    
  );
};

const Contact = () => {
  return(
    <div className="min-h-screen bg-[#0f1216] text-white flex flex-col items-center p-6 pt-20">
    <header className="text-3xl font-bold mb-10">Contact Me</header>
    <motion.section
      className="bg-white/10 backdrop-blur-lg text-white shadow-xl rounded-2xl p-8 w-full max-w-lg mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white text-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      {status && (
        <div className="mt-6 text-center text-green-400">
          <p>{status}</p>
        </div>
      )}
    </motion.section>
  </div>
  )
}


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NowPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
      </Routes>
    </Router>
  );
};

export default App;
