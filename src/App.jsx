import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const SectionFallback = () => <div className="w-full h-32" />;

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
