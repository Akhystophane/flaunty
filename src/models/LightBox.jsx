/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AleixoAlonso (https://sketchfab.com/AleixoAlonso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/simple-studio-light-771d351d2329444fab348909ebfd160b
Title: Simple Studio Light
*/

import React, { useRef, useEffect, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import LightBoxModel from '../assets/3d/lightbox.glb'
import {a} from '@react-spring/three'
const LightBox = forwardRef(({scale, position, rotation, dynamic, ...props }, ref) => {
    const breakpoints = {
        'sm': 640,   // Small devices
        'md': 768,   // Medium devices, typically tablets
        'lg': 1024,  // Large devices, typically desktops
        'xl': 1280,  // Extra large devices, large desktops
        '2xl': 1536  // Extra extra large devices, larger desktops
      };
      
      
/*         useEffect(() => {
          function handleResize() {
            const width = window.innerWidth;
            let scale;
      
            if (width < breakpoints['sm']) {
              scale = 0.5; // Smaller than the smallest breakpoint
            } else if (width < breakpoints['md']) {
              scale = 0.75; // Small devices
            } else if (width < breakpoints['lg']) {
              scale = 1; // Medium devices
            } else if (width < breakpoints['xl']) {
              scale = 1.25; // Large devices
            } else if (width < breakpoints['2xl']) {
              scale = 1.5; // Extra large devices
            } else {
              scale = 2; // Extra extra large devices
            }
      
            if (ref.current) {
              ref.current.scale.set(scale, scale, scale);
            }
          }
      
          handleResize();
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []); */

    const lightboxRef = useRef();
  const { nodes, materials } = useGLTF(LightBoxModel)

    useFrame(()=> {
        if (dynamic) {
            lightboxRef.current.rotation.x = -dynamic.y-2.15;
        }
        
  }) 

  return (
        <a.group ref={ref} position={position} scale={scale} {...props}>
        <group rotation={rotation} scale={0.398}>
            <group scale={2.514} >
{/*             <mesh
                castShadow
                receiveShadow
                geometry={nodes['#LMP0001_Bottom_#LMP0001_Textures_0'].geometry}
                material={materials.LMP0001_Textures}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['#LMP0001_Middle_#LMP0001_Textures_0'].geometry}
                material={materials.LMP0001_Textures}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['#LMP0001_Top_#LMP0001_Textures_0'].geometry}
                material={materials.LMP0001_Textures}
            /> */}
            <group position={[0, 0, 1.664]} rotation={[-0.60,0,0]} ref={lightboxRef}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes['Stand001_#LMP0001_Textures_0'].geometry}
                material={materials.LMP0001_Textures}
                />
                <group position={[0, 0.001, 0.048]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['#LMP0001_Lightbox_#LMP0001_Textures_0'].geometry}
                    material={materials.LMP0001_Textures}
                />
                </group>
            </group>
            </group>
        </group>
        </a.group>
    )

})

export default LightBox
