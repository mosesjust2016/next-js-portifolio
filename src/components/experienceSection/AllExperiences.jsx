import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer",
    company: "Netone Payment System",
    date: "2019 - 2022",
    responsibilities: [
      "Integrated to SMPP platform to send SMS",
      "Ensuring cross-platform optimization for mobile phones",
      "Designing and developing API’s",
      "Documented software development and technical manuals",
    ],
  },
  {
    job: "Chief Technology Officer",
    company: "Sampay Limited",
    date: "2023 - 2025",
    responsibilities: [
      "Lead technology strategy and innovation initiatives",
      "Implement robust security measures and compliance standards.",
      "Systems Integration ( Mobile Money, Visa/MasterCard , Bank API’s & other 3rd Party Systems)",
    ],
  },
  {
    job: "Product Engineer",
    company: "Link Pharmacy",
    date: "2025 - Present",
    responsibilities: [
      "Odoo ERP Integration Sync of products, inventory, sales, and accounting",
      "Yango API Integration – Automated delivery with live tracking & a custom dashboard",
      "Prescription Management System",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
