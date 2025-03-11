import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Lusaka Sun",
    year: "January 2025",
    align: "right",
    image: "/images/lusakasun01.png",
    link: "https://reader.thezambiansun.news",
  },
  {
    name: "Link Pharmacy",
    year: "December 2024",
    align: "left",
    image: "/images/link01.png",
    link: "https://dev.d3gza3x8pz8tpy.amplifyapp.com",
  },
  {
    name: "Biometric",
    year: "Jan 2023",
    align: "right",
    image: "/images/flexpayroll.png",
    link: "https://flexpayroll.co.zm/hr/",
  },
  {
    name: "Biometric Desktop App",
    year: "Jan 2023",
    align: "left",
    image: "/images/biometricdesktop.png",
    link: "https://flexpayroll.co.zm/hr/",
  },
  {
    name: "Sampay",
    year: "May 2024",
    align: "right",
    image: "/images/sampay.png",
    link: "https://samafricaonline.com/v1/",
  },
  {
    name: "AI Media Generator",
    year: "March 2025",
    align: "left",
    image: "/images/mediagenerator.png",
    link: "#",
  },
  {
    name: "Odoo Implemantation",
    year: "June 2024",
    align: "right",
    image: "/images/odoo.png",
    link: "#",
  }

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-6">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
