import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Hero = () => {
  const nameTop = "RAVIKIRAN PADAL";
  const nameBottom = "SAGINA";
  const stepDelay = 0.18;
  const totalLetters = nameTop.length + 1 + nameBottom.length;
  const cycleDuration = totalLetters * stepDelay + 2.4;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-3xl'>
          <h1 className={`${styles.heroHeadText} text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]`}>
            Hi, I'm{" "}
            <span className='text-[#7dd3fc] neon-name'>
              <span className='block whitespace-nowrap'>
                {nameTop.split("").map((char, index) => (
                  <span
                    key={`${char}-${index}`}
                    className='reveal-letter'
                    style={{
                      "--delay": `${index * stepDelay}s`,
                      "--cycle": `${cycleDuration}s`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className='block'>
                {nameBottom.split("").map((char, index) => (
                  <span
                    key={`bottom-${char}-${index}`}
                    className='reveal-letter'
                    style={{
                      "--delay": `${
                        (nameTop.length + 1 + index) * stepDelay
                      }s`,
                      "--cycle": `${cycleDuration}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white/90 max-w-2xl`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-2 bottom-16 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
