import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact details.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div className='bg-black-200 rounded-3xl p-8 sm:p-10 max-w-xl neon-card'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-start gap-4 group'>
              <a
                href='mailto:ravikiranpadalsagina@gmail.com'
                className='neon-icon neon-icon--link'
                aria-label='Email'
              >
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='neon-icon__svg'
                >
                  <path
                    d='M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.3l8 5.2 8-5.2V8H4Zm16 8v-5.4l-7.4 4.8a1 1 0 0 1-1.2 0L4 10.6V16h16Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
              <div>
                <p className='text-secondary text-[14px]'>Email</p>
                <a
                  href='mailto:ravikiranpadalsagina@gmail.com'
                  className='text-white text-[18px] font-medium hover:text-white'
                >
                  ravikiranpadalsagina@gmail.com
                </a>
              </div>
            </div>
            <div className='flex items-start gap-4 group'>
              <a
                href='tel:+19403046555'
                className='neon-icon neon-icon--link'
                aria-label='Phone'
              >
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='neon-icon__svg'
                >
                  <path
                    d='M6.6 3.5a2 2 0 0 1 2.1-.5l2.3.8a2 2 0 0 1 1.3 2.3l-.5 2a2 2 0 0 1-1.7 1.5l-1.2.1a12.4 12.4 0 0 0 5.4 5.4l.1-1.2a2 2 0 0 1 1.5-1.7l2-.5a2 2 0 0 1 2.3 1.3l.8 2.3a2 2 0 0 1-.5 2.1l-1.5 1.5a2 2 0 0 1-2 .5c-2.8-.6-5.5-2.2-7.9-4.6S4.1 8.6 3.5 5.8a2 2 0 0 1 .5-2l1.6-1.6Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
              <div>
                <p className='text-secondary text-[14px]'>Phone</p>
                <a
                  href='tel:+19403046555'
                  className='text-white text-[18px] font-medium hover:text-white'
                >
                  +1 940 304 6555
                </a>
              </div>
            </div>
            <div className='flex items-start gap-4 group'>
              <a
                href='https://www.linkedin.com/in/ravikiran-padal-sagina-0b9999253'
                target='_blank'
                rel='noreferrer'
                className='neon-icon neon-icon--link'
                aria-label='LinkedIn'
              >
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='neon-icon__svg'
                >
                  <path
                    d='M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm4.5 7H6v8h2.5v-8Zm-1.2-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM18 13.2c0-2.5-1.3-3.7-3.2-3.7a2.8 2.8 0 0 0-2.5 1.3V10H9.9v8h2.4v-4.2c0-1.1.2-2.2 1.6-2.2s1.4 1.3 1.4 2.3V18H18v-4.8Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
              <div>
                <p className='text-secondary text-[14px]'>LinkedIn</p>
                <a
                  href='https://www.linkedin.com/in/ravikiran-padal-sagina-0b9999253'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white text-[18px] font-medium hover:text-white'
                >
                  RAVIKIRAN PADAL SAGINA
                </a>
              </div>
            </div>
            <div className='flex items-start gap-4 group'>
              <div className='neon-icon' aria-hidden='true'>
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='neon-icon__svg'
                >
                  <path
                    d='M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div>
                <p className='text-secondary text-[14px]'>Location</p>
                <p className='text-white text-[18px] font-medium'>USX, TX</p>
              </div>
            </div>
            <div className='flex items-start gap-4 group'>
              <div className='neon-icon' aria-hidden='true'>
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='neon-icon__svg'
                >
                  <path
                    d='M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 5h-2v6l5 3 1-1.7-4-2.3V7Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div>
                <p className='text-secondary text-[14px]'>Working Hours</p>
                <p className='text-white text-[18px] font-medium'>
                  Mon–Fri, 9:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
