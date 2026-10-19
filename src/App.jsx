import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className='fixed top-0 left-0 right-0 h-[3px] origin-left z-30 bg-gradient-to-r from-[#915EFF] to-[#7dd3fc]'
    />
  );
};

const SectionFallback = () => <div className="w-full h-32" />;

const App = () => {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion='user'>
      <ScrollProgress />
      <div className='relative z-0 bg-primary'>
        <div className='relative overflow-hidden'>
          <video
            className='absolute inset-0 h-full w-full object-cover'
            src='/videos/feature-1.mp4'
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            aria-hidden='true'
          />
          <div className='relative z-10'>
            <Navbar />
            <Hero />
          </div>
        </div>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Works />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Feedbacks />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
