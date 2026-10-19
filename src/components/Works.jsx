import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.8)}>
      <Tilt
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1}
        transitionSpeed={450}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={`${name} screenshot`}
            loading='lazy'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <a
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${name}: ${
                source_code_link.includes("github.com")
                  ? "view source"
                  : "visit live site"
              } (opens in new tab)`}
              className='black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              {source_code_link.includes("github.com") ? (
                <img
                  src={github}
                  alt=''
                  className='w-1/2 h-1/2 object-contain'
                />
              ) : (
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M7 17 17 7M8 7h9v9' />
                </svg>
              )}
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A selection of production and personal work, from enterprise
          dashboards to booking platforms. Each card links to the live site or
          source code.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
