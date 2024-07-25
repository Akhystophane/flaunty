import brainwave from "../assets/flaunty.svg";
import {disablePageScroll, enablePageScroll} from 'scroll-lock'
import {navigation} from '../constants';
import {useLocation} from 'react-router-dom';
import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg.jsx';
import {HamburgerMenu} from './design/Header';
import {useEffect, useRef, useState} from 'react';

import { gsap, ScrollTrigger } from "gsap/all";

const Header = () => {
    const pathName = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [background, setBackground] = useState(0);

    const navbarDivRef = useRef();
/*     const logRef = useRef();
 */    const navSections = useRef([]);


gsap.registerPlugin(ScrollTrigger);
useEffect (() => {
    let tl = gsap.timeline({

        defaults: { duration: 1 },
        scrollTrigger: {
            target: navbarDivRef.current,
            start: "top top",
            end: "5000 bottom", 
            toggleActions:'play pause restart reverse',
            id:'1',
            markers: false,
            scrub:0.25
    }});
    tl.to(navbarDivRef.current, {
/*         x:'+100%', */
        backgroundColor:'rgb(14 12 21 / 0.6)',
    }),
    tl.to(navbarDivRef.current, {
                borderColor: 'rgb(37 33 52 / 1', 
                duration:2.5
            }),
    tl.to(navSections.current, {
        opacity:1,
        stagger:0.2

    })

})

        


    const toggleNavigation = () =>{
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();

        }
    };

    const handleClick = () => {
        if(!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    }
  return (
    <>
    <div ref={navbarDivRef} className={`fixed top-0 left-0 w-full z-50 border-b border-n-6/0
      lg:bg-n-8/0  lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8/0' : 'bg-n-8/0 backdrop-blur-sm'}`}>
    <div className="flex items-center px-5
     lg:px:7.5 xl:px-10 max-lg:py-4">
        
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="brainwave"/>
            </a>


        <nav  className={`${openNavigation ? 'flex' : 'hidden'} opacity-100  fixed top-[5rem] left-0 
        right-0 bottom-0 bg-n-8 lg:static lg:flex 
        lg:mx-auto lg:bg-transparent`} >
            <div className="relative z-2 flex flex-col
             items-center justify-center m-auto lg:flex-row
             ">
            {/* {navigation.map((item, index) => (
                <a ref={el => navSections.current[index] = el}
                key={item.id}
                 href={item.url}
                 onClick={handleClick}
                 className={`block relative font-code 
                 text-2xl uppercase text-n-1 opacity-0
                  transition-colors hover:text-color-1 
                  ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6
                  md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                  ${item.url === pathName.hash ? 'z-2 lg:text-n-1'
                : 'lg:text-n-1/50'}
                lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                 >
                    {item.title}
                </a>
            ))} */}
                    <a ref={navSections}
                 href={'#register'}
                 onClick={handleClick}
                 className={`block text-center relative font-code 
                 text-2xl uppercase text-n-1 opacity-0
                  transition-colors hover:text-color-1 
                   px-6 py-6
                  md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                  ${'#register' === pathName.hash ? 'z-2 lg:text-n-1'
                : 'lg:text-n-1/50'}
                lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                 >
                    Build Now
                </a>
             </div>
        
        </nav>



        <Button className='ml-auto lg:hidden px-3'
        onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
        </Button>

     </div>
    </div>
    </>
  )
}

export default Header