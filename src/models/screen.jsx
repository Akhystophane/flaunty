import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import screenModel from '../assets/3d/screen.glb'
import { useFrame } from '@react-three/fiber';

export function Screen({progress, ...props}) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(screenModel)
    const { actions } = useAnimations(animations, group)
    


    useEffect(() => {
        if (actions) {
          const actionNames = Object.keys(actions);
          if (actionNames.length > 0) {
            const action = actions[actionNames[0]];
/*             action.clampWhenFinished  = true; */
            //action.play();
          }
        }
      }, [progress, actions]);

      useEffect(() => {
        if (actions) {
            const actionNames = Object.keys(actions);
            console.log(progress)
            if (actionNames.length > 0) {
              const action = actions[actionNames[0]];
              
                if (progress <= 100) {
                action.paused = false;  
                const duration = action.getClip().duration;
                const time = (progress / 100) * duration;
                
                action.time = time-6;
                action.play();
                action.paused = true;
                //console.log("newtime:",time, Math.round(action.time), `duration: ${duration}`)
                //action.time = Math.round(time); 
/*                 action.paused = true
 */                //setProgress(progress + delta * 10); // Adjust the speed as needed
                }
/*                 else if (progress >= 100) {
                    action.paused = true;
                }; */
          }
        }
      },[progress, actions] );

      useFrame((delta) => {
        

      })
     
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Cube004"
            position={[0.38, -0.939, -29.5]}
            rotation={[-1.57, 0.246, -3.044]}
            scale={1.61}>
            <mesh
              name="Cube016"
              castShadow
              receiveShadow
              geometry={nodes.Cube016.geometry}
              material={materials['NonWrinkledGlove.005']}
            />
            <mesh
              name="Cube016_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube016_1.geometry}
              material={materials['BlackFabric.005']}
            />
            <mesh
              name="Cube016_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube016_2.geometry}
              material={materials['WrinkledGlove.009']}
            />
            <mesh
              name="Cube016_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube016_3.geometry}
              material={materials['WrinkledGlove.010']}
            />
            <mesh
              name="Cube016_4"
              castShadow
              receiveShadow
              geometry={nodes.Cube016_4.geometry}
              material={materials['EverlastPatch.004']}
            />
          </group>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.013']}
            position={[-0.008, 15.211, 0.314]}
            rotation={[-1.567, 0.002, -2.637]}>
            <mesh
              name="Cube001"
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials['Material.014']}
              position={[-0.055, -0.008, 0.016]}
              scale={[0.41, 1, 0.95]}
            />
            <mesh
              name="Cube002"
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials['Material.015']}
              position={[0.01, 1.426, 3.073]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube003"
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={materials['Material.016']}
              position={[0.01, 1.02, 3.073]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
          </mesh>
        </group>
      </group>
    )
  }

export default Screen
