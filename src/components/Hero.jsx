import {Suspense, useState, useEffect, useRef, forwardRef} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import Pineapple from '../models/Pineapple'
import InnerWorld from '../containers/InnerWorld'
import HeroBackground from './HeroBackground'
import Button from "./Button";
import curve from '../assets/curve.png';
import { gsap, ScrollTrigger } from "gsap/all";
import { Loader, useProgress } from '@react-three/drei'
import ScreenLoader from './ScreenLoader'





const Hero = () => {
  const [background, setBackground] = useState(20);
  const beginScale = 0.53;
  const [scale, setScale] = useState(beginScale);
  const [pineapplePosition, setPineapplePosition] = useState([0, 0, 0]);
  const updatePineapplePosition = (position) => {
    setPineapplePosition(position); };



  const pineappleRef = useRef(null);
  const lightBoxRef = useRef(null);
  const mainDivRef = useRef(null);
  const logRef = useRef();
  const [animationStarted, setAnimationStarted] = useState(false);


  const { progress } = useProgress();
  

gsap.registerPlugin(ScrollTrigger);

useEffect (() => {

  let tl = gsap.timeline({
      
      defaults: { duration: 1 },
      scrollTrigger: {
          target: mainDivRef.current,
          start: "top top",
          end: "5000 bottom", 
          toggleActions:'play pause resume reverse',
          markers:false,
          id:'2',
          scrub:0.25,
          snap:false


          
  }});

  
  tl.to(logRef.current, {
      x:'100%',
      rotate: '0deg',
      opacity:1,
      duration:1
  }),
  ScrollTrigger.create({
    trigger: mainDivRef.current,
    start: "top top",
    end: "5001 bottom", // Se termine juste un pixel plus bas
    onEnter: () => {
      gsap.to(mainDivRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to(mainDivRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    onEnterBack: () => {
      gsap.to(mainDivRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(mainDivRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
    markers: false, // Pour le débogage, vous pouvez le désactiver plus tard
  });
})


  return (
    <>
    {/* <ScreenLoader progress={progress}/> */}
    

    <div  className='w-full h-[5000px] relative scroll-smooth' style={{background:`linear-gradient(#EDFC54, #A74A67, ${background}%, #673D7D, #0F2B9C)`}}>
    {/* <ScreenLoader progress={progress}/> */}
    
    <HeroBackground />

    <section ref={mainDivRef} className='w-full h-[100vh] fixed'>
    {/*     <div className='flex justify-center items-center
     absolute top-0 left-0 right-0 bottom-0 pointer-events-none'>
      <div id='text-behind' className='text-6xl absolute top-[20%] font-roboto
       text-uppercase font-extrabold tracking-widest
        leading-none z-[0] white'>BUILD YOUR 3D WEBSITE </div>
      <div id='text-behind-blur' className='text-6xl absolute top-[20%] font-roboto
       text-uppercase font-extrabold tracking-widest
        leading-none text-headline-color blur-7_5px z- '>BUILD YOUR 3D WEBSITE</div>
      <div id='text-front' className='text-6xl absolute top-[20%] font-roboto
       text-uppercase font-extrabold tracking-widest
        leading-none text-transparent text-stroke-2px z-[4] '>BUILD YOUR 3D WEBSITE</div>
    </div> */}
    <div className='relative z-1 max-w-[70rem] w-[95%] 
      mx-auto text-center mb-[0rem] pt-[3rem] lg:mb-[0rem] lg:pt-[5.5rem] xl:pt-[5.75rem] 2xl:pt-[6rem]'>
          <h1 className='h1 mb-6 pb-2'>Create a 3D website has never been easier with {` `} 
          <div className='inline-block relative overflow-hidden -mb-4 pb-0 -mt-2 '>
          <span className='block '>Flaunty  
          
            <img ref={logRef} className='absolute h-[10%] -mt-1 top-[100%] -left-[100%] w-full rotate-[-5deg] opacity-[0]
              sm:h-[12%] sm:-mt-2 lg:h-[8%] lg:-mt-[0.4rem]
              xl:-mt-[0.4rem] xl:-translate-x-5 xl:h-[7%]' src={curve} width={624} height={28} alt='Curve'></img>

            </span>
            </div>
          </h1>
          <p className='body-1 max-w-3xl mx-auto mb-6
          text-n-2 lg:mb-5'>
              Give your project the spotlight it deserves. 
              More than a 3D website builder, Flaunty allows
              you to create unfortgetable web experiences.

          </p>

      </div>

    <div className=' h-[40vh] w-full '>
    <Suspense fallback={<ScreenLoader progress={progress}/>}>
      <Canvas className='z-[2]' camera={{ position: [0, -1, 8], fov: 60 }} >

          
                  {/* <gridHelper /> */}

                  <Pineapple scale={scale} ref={pineappleRef} position={[0, -1.6, 0]} updatePineapplePosition={updatePineapplePosition}/>
                  <InnerWorld pineappleRef={pineappleRef} lightBoxRef={lightBoxRef}/>
                  
          
      </Canvas>
      </Suspense>

      
      <div className='flex justify-center pt-5'>
{/*       <Button href='/pricing' white>
                Get started
            </Button> */}

    </div>


    </div>




        
    </section>
{/*     <div className='  debug z-[3] flex flex-col relative w-full h-[100vh] top-[50rem] left-5 right-5'>
            <div className=" relative w-[40rem]">
                <h2 className=" p__opensans ">Lorem impsu</h2>
                <p className="p__opensans">jocnfievf jfecnncnoev jcnozdfneocjvnonv njofencvoin vfe onvojn vnkfdovneàn rvno</p>
            </div>
            <div className=" absolute right-[1.25rem] w-[40rem]">
                <h2 className=" p__opensans ">Lorem impsu</h2>
                <p className="p__opensans">jocnfievf jfecnncnoev jcnozdfneocjvnonv njofencvoin vfe onvojn vnkfdovneàn rvno</p>
            </div>
        </div> */}
    </div>
    </>

  )
}


export default Hero