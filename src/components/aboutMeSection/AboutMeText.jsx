import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Moses Jasi, a Software Engineer | Product Engineer | AI & Cloud
        Solutions Architect I am a highly skilled Software Engineer, Product
        Engineer, and DevOps Specialist with a strong background in full-stack
        development, AI integration, and cloud-native applications. My expertise
        lies in designing, building, and scaling high-performance software
        solutions that drive business growth. With extensive experience as a
        Chief Technology Officer (CTO) and Lead Software Engineer, I have
        successfully led cross-functional teams in developing AI-powered,
        microservices-driven, and cloud-hosted applications. My passion lies in
        leveraging AI, automation, and data-driven decision-making to enhance
        product efficiency and user experience.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
