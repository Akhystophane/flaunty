import React, { Suspense, useEffect, useRef, useState } from 'react'
import {Screen} from '../models/screen.jsx'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useProgress } from '@react-three/drei'
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Smartphone from '../models/Smartphone.jsx';
import { Html } from '@react-three/drei';
import tourbillon from '../assets/svg/tourbillon.svg'
import particles from '../assets/svg/particles.svg'
import blur_particles from '../assets/svg/blur_particles.svg'
import ScreenLoader from './ScreenLoader.jsx';





const Section1 = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setwindowHeight] = useState(window.innerHeight);
    const [isHorizontal, setIsHorizontal] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setIsHorizontal(window.innerWidth > window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


  useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setwindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [background, setBackground] = useState(0);
    const [progress, setProgress] = useState(100)
    const mainDivRef_ = useRef();
    const divRef = useRef();
    const titleRef = useRef();


    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const buttonRef = useRef();

    useGSAP (() => {
        let tl = gsap.timeline({
        });
        //gsap.set('body', {overflow: "auto"})

        tl.to(mainDivRef_.current, {
            scrollTrigger: {
                trigger:mainDivRef_.current,
                 start:"-100% top",
                end:"bottom bottom",
                snap:true,
                scrub: true,
                markers: false,
                onUpdate: (self) => {
                    setProgress(Math.ceil(self.progress * 100));
                    setBackground(Math.ceil(self.progress * 100 ));
                },
                

            },

        },);
        tl.from(titleRef.current, {
          x: '-100%',
          opacity: 0,
          duration: 1,
        });
        tl.from(divRef.current, {
          rotate:'-500',
          duration:2,
          ease: "power2.out",
        });




    },)



/*     useEffect(() => {
        const handleScroll = () => {
          // Calculate background change based on scroll position
          const scrollPosition = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = (scrollPosition / maxScroll) * 100;
          
          setBackground(scrollPercent);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); */

  return (
    <div   className='w-full min-h-[100vh] z[2] relative' style={{background:`linear-gradient(0deg, rgba(26,12,56,1) ${background}%, rgba(40,42,87,1) 100%)`}} >
        <div className='h-[100vh] w-full' ref={mainDivRef_}>
        <Suspense >
        <Canvas className='relative z-[0] w-full min-h-[100vh] '
        style={{
        overflow:'visible'}}
         camera={{ position: [12, 0, 0], fov: 50 }}
         
         >
        <Html fullscreen className='z-[-2]  min-h-[100vh]' occlude="blending" 
        style={{background: `linear-gradient(270deg, rgba(98,3,103,1) 0%, rgba(40,42,87,0.6) ${background}%)`,
        overflow:'visible'}}>
        <div className="relative w-full h-full" >
        <div className="absolute opacity-20 w-full h-full ">
            <img src={blur_particles} alt="blur_particles" className="absolute w-full h-screen " />
        </div>
        
        <div className="relative flex w-full min-h-[100vh] h-full">
            <div className={`relative flex flex-col  sm:mt-[10rem] xs:mt-[6rem] mt-[6rem] ${windowWidth >= 1280 ? 'w-1/2' : 'w-full'}`}>
            <h1 ref={titleRef} className={`h1 px-5 leading-relaxed text-center  min-h-[6rem]  -mt-[2.75rem]
             xl:mt-[3.15rem] 2xl:mt-[5rem] lg:ml-[1rem] lg:mt-[0.75rem]  xl:text-left md:ml-[0rem]
            ${isHorizontal && windowWidth < 1280 ? 'text-[2rem]': ''}`}>Are you tired of boring 2D websites?</h1>
            {windowWidth < 1280 && (
                    <div ref={divRef} className="relative  flex justify-center items-center min-w-[100vw] min-h-[90%] overflow-hidden">
                      <img src={tourbillon} alt="tourbillon" className={` z-0 w-full h-full ${isHorizontal ? 'object-contain' : 'object-cover'}`} />
                      <img src={particles} alt="particles" className="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
            )}
            {windowWidth >= 1280 && (
            <div className="flex flex-col  
                            sm:mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-[3rem] 
                            lg:ml-[1rem] 
                            px-4 sm:px-6 md:px-8 lg:px-10">
              <h3 className={`h3 leading-relaxed 
                              text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.5rem]
                              mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-[3.25rem] 2xl:mt-[4rem] 
                              ${isHorizontal && windowWidth < 1280 ? 'text-[0.75rem]': ''}
                              lg_max:text-justify`}>
                You want your work to stand out but building your own website seems overwhelming 😩.
              </h3>
              <p className="body-1 
                            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[1.5rem]
                            mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-[4.75rem] 2xl:mt-[6rem] 
                            text-n-2 
                            lg:leading-relaxed 
                            lg_max:text-justify">
                We've got your back! Flaunty is a no-code, 3D object-oriented website builder that empowers you to create stunning websites. Focus on crafting amazing 3D models, and we'll help you showcase them to the world!
              </p>
            </div>
            )}
            </div>
            
            {windowWidth >= 1280 && (
              <div 
                ref={divRef} 
                className="flex relative overflow-hidden -z-[2] w-1/2 h-auto mt-[9rem] 2xl:mt-[5rem]"
                style={{ height: 'calc(100vh - 9rem)' }} // Ajuste la hauteur en fonction de la marge supérieure
              >
                <img 
                  src={tourbillon} 
                  alt="tourbillon" 
                  className="absolute z-0 w-full h-full object-cover radial-gradient-white"
                />
                <img 
                  src={particles} 
                  alt="particles" 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            )}

        </div>
        </div>

        </Html>
        
        {/* <OrbitControls></OrbitControls> */}
       {/*  <CameraControls/> */}
        {/* <gridHelper/> */}
        <ambientLight intensity={1.5} />
        {/* <Screen progress={progress}/> */}
        <Smartphone progress={progress} domRef={divRef} windowWidth={windowWidth} windowHeight={windowHeight} />
        </Canvas>  
        </Suspense>
           
        </div>  
        <div>
        {windowWidth < 1280 && (
            <div className="flex flex-col pb-5
                            sm:mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-[3rem] 
                            lg:ml-[1rem] 
                            px-4 sm:px-6 md:px-8 lg:px-10">
              <h3 className={`h3 leading-relaxed 
                              text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.5rem]
                              mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-[3.25rem] 2xl:mt-[4rem] 
                              ${isHorizontal && windowWidth < 1280 ? 'text-[0.75rem]': ''}
                              lg_max:text-justify`}>
                You want your work to stand out but building your own website seems overwhelming 😩.
              </h3>
              <p className="body-1 
                            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[1.5rem]
                            mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-[4.75rem] 2xl:mt-[6rem] 
                            text-n-2 
                            lg:leading-relaxed 
                            lg_max:text-justify">
                We've got your back! Flaunty is a no-code, 3D object-oriented website builder that empowers you to create stunning websites. Focus on crafting amazing 3D models, and we'll help you showcase them to the world!
              </p>
            </div>
            )}
           
        </div>  
    </div>
  )
}

const CameraControls = () => {
    const { camera, gl } = useThree();
    const controls = useRef();
  
    useEffect(() => {
      const handlePositionChange = () => {
        const { x, y, z } = controls.current.target;
        const { x: camX, y: camY, z: camZ } = camera.position;
        console.log('Camera Position:', { x: camX, y: camY, z: camZ });
        console.log('Controls Target:', { x, y, z });
      };
  
      controls.current.addEventListener('change', handlePositionChange);
      return () => controls.current.removeEventListener('change', handlePositionChange);
    }, [camera]);
  
    return <OrbitControls ref={controls} args={[camera, gl.domElement]} />;
  };

export default Section1