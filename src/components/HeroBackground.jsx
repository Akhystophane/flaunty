import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import  Sun  from '../assets/sun.svg';
import Stars  from '../assets/stars.svg';
import Mountain1  from '../assets/mountain-1.svg';
import Mountain2 from '../assets/mountain-2.svg';
import Mountain3  from '../assets/mountain-3.svg';
import CloudBottom  from '../assets/cloud-bottom.svg';
import CloudsBottom  from '../assets/clouds-bottom.svg';
import CloudsLeft  from '../assets/clouds-left.svg';
import CloudsRight  from '../assets/clouds-right.svg';
import { ScrollTrigger } from "gsap/all";
import getAnimationSettings from "./HeroBgSettings";


const HeroBackground = () => {
    const breakpoints = {
        'sm': 640,   // Small devices
        'md': 768,   // Medium devices, typically tablets
        'lg': 1024,  // Large devices, typically desktops
        'xl': 1280,  // Extra large devices, large desktops
        '2xl': 1536  // Extra extra large devices, larger desktops
      };
    const [background, setBackground] = useState(20);

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const sun = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);

    const settings = getAnimationSettings();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                    snap:true,
                },
            });
            tl.to(
                mountain3.current,
                {
                   y: settings.mountain3Y,
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: settings.mountain2Y,
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: settings.mountain1Y,
                },
                0
            );
            tl.to(
                stars.current,
                {
                    top: settings.starsY,
                },
                0.5
            );
            tl.to(
                cloudsBottom.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                cloudsLeft.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cloudsRight.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
/*             tl.to(
                sun.current,
                {
                    y: settings.sunY,
                },
                0
            ); */
        });
        return () => ctx.revert();
    }, []);

const parallaxRef2 = useRef(null);
const sun2 = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef2.current,
                    start: "top top",
                    end: "bottom bottom",
                    id:'3',
                    scrub: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                sun.current,
                {
                    y: settings.sunY,
                },
                0
            );
        });
        return () => ctx.revert();
    }, []);



  return (
    <>
    <div className="w-full h-[100vh] absolute z-[0] " ref={parallaxRef}>
       <img src={Sun} className="absolute  -translate-x-1/2 -translate-y-1/2 z-[0] w-[40%] top-[70%] left-1/2 2xl_max:-translate-y-1/2
    lg_max:-translate-y-[2rem] lg_max:w-[45%] md_max:-translate-y-[6rem] sm_max:-translate-y-[2rem] xs_max:translate-y-[2rem]" ref={sun}></img>
       <img src={Mountain1} className="absolute z-[1] bottom-0 w-full h-auto  md_max:py-12 sm_max:py-16 xs_max:-bottom-5" ref={mountain1}></img>
        <img src={Mountain2} className="absolute z-[3] bottom-0 w-full h-auto  md_max:py-5 sm_max:py-7 xs_max:py-5" ref={mountain2}></img>
        <img src={Mountain3} className=" absolute z-[3] bottom-0 w-full h-auto " ref={mountain3}></img>


        <img src={CloudsLeft} className="absolute left-0 w-[20%] z-[1]" ref={cloudsLeft}></img>
        <img src={CloudsRight} className="absolute right-0 w-[20%] z-[1]" ref={cloudsRight}></img>
        <img src={CloudBottom} className="absolute w-full bottom-0 z-[1] md_max:py-[4rem] sm_max:py-[4rem] xs_max:py-[2.5rem]" ref={cloudsBottom}></img>
        <img src={Stars} className="absolute -top-[550px] left-0 w-full z-[1]" ref={stars}></img>
    </div>

{/*     <div className="w-full h-[100vh] absolute z-[0]" ref={parallaxRef2}>
    <img src={Sun} className="absolute  -translate-x-1/2 -translate-y-1/2 z-[0] w-[40%] top-[70%] left-1/2 2xl:-translate-y-1/2
    lg:-translate-y-[2rem] lg:w-[45%] md:-translate-y-[6rem] sm:-translate-y-[2rem] " ref={sun2}></img>
    </div> */}

    </>
  )
}

export default HeroBackground