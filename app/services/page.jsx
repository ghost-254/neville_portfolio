"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I provide comprehensive web development services, including the creation of dynamic, responsive, and user-friendly websites tailored to meet your specific business needs. By leveraging the latest technologies and frameworks, I ensure that your website is not only visually appealing but also highly functional, secure, and optimized for performance. From front-end development, focusing on interactive and intuitive interfaces, to back-end development, ensuring robust and scalable server-side logic, I handle all aspects of the development process. Whether it's a simple landing page, an e-commerce platform, or a complex web application, I work closely with clients to deliver solutions that drive engagement and achieve business goals.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "My UI/UX design services are centered on creating intuitive, aesthetically pleasing, and user-centric interfaces that enhance the overall user experience. By conducting thorough user research and usability testing, I gain insights into user behavior and preferences, which inform the design process. I craft wireframes, prototypes, and high-fidelity designs that align with your brand identity and ensure seamless navigation. My goal is to create designs that not only look great but also function flawlessly, providing users with a smooth and enjoyable interaction with your product. Whether it's a mobile app, a website, or any digital platform, I focus on delivering designs that are both visually stunning and highly functional.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I offer professional logo design services that help businesses establish a strong brand identity. Understanding the importance of a logo as the visual cornerstone of your brand, I create distinctive and memorable logos that encapsulate your brand's values, vision, and mission. By combining creativity with strategic thinking, I ensure that your logo stands out and leaves a lasting impression on your audience. I take into account various factors such as color psychology, typography, and market trends to design logos that are not only visually appealing but also versatile and timeless. My goal is to provide you with a logo that effectively communicates your brand's essence and resonates with your target audience.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      " My SEO services are designed to enhance your online visibility and drive organic traffic to your website. By employing a comprehensive approach that includes keyword research, on-page optimization, technical SEO, and link building, I help improve your website's search engine rankings. I also focus on creating high-quality, relevant content that attracts and engages your target audience. By staying updated with the latest SEO trends and algorithm changes, I ensure that your website remains competitive and achieves sustainable growth in search engine results. Whether you're looking to improve your local SEO, optimize for specific search terms, or boost your overall online presence, I provide tailored strategies that deliver measurable results.",
    href: "",
  },
  {
    num: "05",
    title: "Freelance Academic Work & Research Work",
    description:
      "I offer specialized freelance academic work and research services, tailored to meet the unique needs of students, researchers, and professionals. My services encompass a wide range of academic tasks, including writing, editing, and proofreading essays, research papers, theses, and dissertations. I also provide comprehensive research assistance, from literature reviews and data analysis to developing research methodologies and presenting findings. With a strong background in various academic disciplines, I ensure that all work adheres to the highest standards of academic integrity and rigor. My goal is to deliver well-researched, thoroughly analyzed, and meticulously crafted academic content that supports your academic and professional goals, ensuring clarity, coherence, and scholarly excellence.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
