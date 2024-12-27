
import LightBox from '../models/LightBox'
import { DirectionalLightHelper } from "three";
import { Grid, OrbitControls, TransformControls, useHelper } from '@react-three/drei';

import { TextureLoader } from 'three';
import {Suspense, useState, useEffect, useRef, forwardRef} from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';

const InnerWorld = forwardRef(({ pineappleRef, lightBoxRef }, ref) => {
    //const texture = useLoader(TextureLoader, textureImage);
  
    //texture.repeat.set(1, 1); 
    const lightRef = useRef();
    const lightRef2 = useRef();
    const [target, setTarget] = useState();
    const [lightBoxTarget, setLightBoxTarget] = useState();
    const [pineappleChar, setPineappleChar] = useState();
/*     useHelper(lightRef, DirectionalLightHelper, 1, 'red');
    useHelper(lightRef2, DirectionalLightHelper, 1, 'blue'); */
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    
  }, [])
  
    
    useFrame(() => {
      if (pineappleRef.current) {
        setPineappleChar(pineappleRef.current.position);
      };
    });
    
  
  
    useEffect(() => {
      if (pineappleRef.current) {
        setTarget(pineappleRef.current);
      }
    }, [pineappleRef]);
    useEffect(() => {
      if (lightBoxRef.current) {
        setLightBoxTarget(lightBoxRef.current);
      }
    }, [lightBoxRef]);
    
    return (
      <Suspense fallback={null}>
        
{/*         <OrbitControls></OrbitControls>{} */}
        <ambientLight intensity={0} />
        <directionalLight
          castShadow
          
          intensity={10}
          target={target}
          position={[3, -1, -0.9]}
        />
        <directionalLight
          castShadow
          ref={lightRef}
          intensity={10}
          target={target}
          position={[-3, -1, -1]}
        />


        <directionalLight
          
          castShadow
          ref={lightRef2}
          intensity={10}
          target={lightBoxTarget}
          position={[-2, 1, 1]}
        />
        <rectAreaLight ref={lightBoxRef} position={[-1, 0, 1]} intensity={10} width={1} height={1}/>

        {(dimensions.width > 500) ?
                <>
                <LightBox position={[-4, -6, 2]} scale={[1*2, 1*2, 1*2]} rotation={[-1.6, 0, 1.5]} ref={lightBoxRef} dynamic={pineappleChar}/>

                <LightBox position={[4, -6, 2]} scale={[1*2, 1*2, 1*2]} rotation={[-1.6, 0, -1.5]} ref={lightBoxRef} dynamic={pineappleChar}/>
                </>
                :  
                <>
                <LightBox position={[-2.5, -5.8, 2]} scale={[1*1.8, 1*1.8, 1*1.8]} rotation={[-1.57, 0, 1.5]} ref={lightBoxRef} dynamic={pineappleChar}/>

                <LightBox position={[2.5, -5.8, 2]} scale={[1*1.8, 1*1.8, 1*1.8]} rotation={[-1.57, 0, -1.5]} ref={lightBoxRef} dynamic={pineappleChar}/>
                </>
        }




  
  {/*       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial map={texture} repeat />
        </mesh> */}
  
      </Suspense>
    );
  });

  export default InnerWorld