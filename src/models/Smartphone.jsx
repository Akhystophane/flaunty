/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef,useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations, useAspect } from '@react-three/drei'
import SmartphoneModel from '../assets/3d/smartphone.glb'
import * as THREE from 'three';


export function Smartphone({progress,domRef,windowWidth,windowHeight, ...props}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(SmartphoneModel)
  const { actions } = useAnimations(animations, group)
  const { size, camera } = useThree();
  const [objectProps, setObjectProps] = useState({});
  const [widthDifference, setWidthDifference] = useState(0);
  const [previousWidth, setPreviousWidth] = useState(0);

  // Utilisation de ResizeObserver pour suivre les changements de taille
  useEffect(() => {
    if (domRef.current) {
      const handleResize = entries => {
        for (let entry of entries) {
          const newWidth = entry.contentRect.width;
          const diff = newWidth - previousWidth;
          setWidthDifference(diff);
          setPreviousWidth(newWidth);
        }
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(domRef.current);

      return () => resizeObserver.disconnect();
    }
  }, [domRef, previousWidth]);


  useFrame(({ clock }) => {
    if (group.current) { 
        if (domRef.current) {
            const rect = domRef.current.getBoundingClientRect();
            

            
            
            const aspectRatio = windowWidth / windowHeight;
            
            // Calculer l'échelle en fonction de la taille de la div
            const baseScale = Math.min(rect.width, rect.height) / 500; // Ajustez 500 selon vos besoins
            const scale = windowWidth >= 1280 ? baseScale * 1.2 : baseScale;

            const vector = new THREE.Vector3(
                (rect.left + rect.width / 2) / windowWidth * 2 - 1,
                -(rect.top + rect.height / 2) / windowHeight * 2 + 1,
                0
              );

              vector.unproject(camera);

            const dir = vector.sub(camera.position).normalize();
            const distance = -camera.position.z / dir.z;
            const position = camera.position.clone().add(dir.multiplyScalar(distance));

            //group.current.position.copy(vector);
            // test
            let sc = 5;
            let posY = -3.75;
            let posZ;
            if (50000>windowWidth &&  windowWidth >= 1600 ) {
                sc = 4;
                posZ = -4
                posY = -2.5;
                group.current.position.z = posZ;
                group.current.position.x = 3;
                let rot = {x: 0, y:-1.75, z:0}
                group.current.rotation.x = rot.x ;
                group.current.rotation.y = rot.y;
                group.current.rotation.z = rot.z;
            } else if (windowWidth >= 1280) {
                sc = 3.5;
                posZ = -3
                posY = -2.5;
                group.current.position.z = posZ;
                group.current.position.x = 3;
                let rot = {x: 0, y:-1.75, z:0}
                group.current.rotation.x = rot.x ;
                group.current.rotation.y = rot.y;
                group.current.rotation.z = rot.z;

            }else if (windowWidth >= 1536) {
                sc = 3;
                posZ = -4
                posY = -2.5;
                group.current.position.z = posZ;
                group.current.position.x = 3;
                let rot = {x: 0, y:-1.75, z:0}
                group.current.rotation.x = rot.x ;
                group.current.rotation.y = rot.y;
                group.current.rotation.z = rot.z;

            }


            if (windowWidth <= 360){
                sc = 3.5
            } else if (windowWidth <= 550){
                sc = 4
            } else if (windowWidth <= 768){
                sc = 5
            }
            if (aspectRatio > 1.7  && windowWidth < 800){
                posY = -4
                sc = 3
            } else if (aspectRatio > 1.7  && windowWidth < 1280){
                posY = -4
            }
            
            group.current.scale.x = sc;
            group.current.scale.y = sc;
            group.current.scale.z = sc;
            group.current.position.y = posY;
/*             group.current.position.copy(camera.position);
            group.current.quaternion.copy(camera.quaternion);
        
            // Apply offset
            group.current.translateZ(-10); */
        
        
        }  


            
            

            //

    }
  });




  useFrame(() => {
    if (domRef.current) {
      const rect = domRef.current.getBoundingClientRect();
      //console.log([group.current.position.x, group.current.position.y, group.current.position.z]);
      const { width, height } = size;
      const x = (rect.left / window.innerWidth) * 2 - 1;
      const y = -(rect.top / window.innerHeight) * 2 + 1;
      //group.current.position.z += x ;
      //group.current.position.y = y * height/2;

    }
  });
  

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
            if (actionNames.length > 0) {
            const action = actions[actionNames[1]];
            const levitation = actions[actionNames[0]];
            
                if (progress < 100 && progress >= 35 ) {
                action.paused = false;  
                const duration = action.getClip().duration;
                const time = (progress / 100) * duration;
                
                action.time = time;
                action.play();
                action.paused = true;
                }
                else {
                  levitation.play()
                }
        }
        }
    },[progress, actions] );
  return (
    
    <group ref={group} {...props} scale={3} rotation={[0,-1.5,0]} position={[0,-2,0]}>
      <group name="Scene">
        <group name="iphone" position={[0, 2.381, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={7.476}>
        <group name="USDRoot" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="tracking_node_placeholder">
              <group name="PinkGkyfWkwvZoW">
                <group name="CZdojDQNgDREeKv">
                  <group name="fkgonDdxriZpnWK">
                    <mesh
                      name="AbxQOpRbGREHXRG"
                      castShadow
                      receiveShadow
                      geometry={nodes.AbxQOpRbGREHXRG.geometry}
                      material={materials['IDdMwJVCyuFpUnA.002']}
                    />
                    <mesh
                      name="alSOKOYgFKIcUtR"
                      castShadow
                      receiveShadow
                      geometry={nodes.alSOKOYgFKIcUtR.geometry}
                      material={materials['sWxYOtHGWTcXRMx.002']}
                    />
                    <mesh
                      name="FjhETOCBEeiBmch"
                      castShadow
                      receiveShadow
                      geometry={nodes.FjhETOCBEeiBmch.geometry}
                      material={materials['KtvhjlxyToKjYkE.002']}
                    />
                    <mesh
                      name="lxsKwuOPNvmzBKg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.lxsKwuOPNvmzBKg_0.geometry}
                      material={materials['KhJiSWFcsscOusf.002']}
                    />
                    <mesh
                      name="tWfjYtMZCfucxRt"
                      castShadow
                      receiveShadow
                      geometry={nodes.tWfjYtMZCfucxRt.geometry}
                      material={materials['fdfRsQCrfvPBPfQ.002']}
                    />
                  </group>
                </group>
                <group name="MgzlnvdhvdPmvVz">
                  <mesh
                    name="aYjPeBrpBRopJbp"
                    castShadow
                    receiveShadow
                    geometry={nodes.aYjPeBrpBRopJbp.geometry}
                    material={materials['xHgtbqndQshkTKG.002']}
                  />
                  <mesh
                    name="BeQtuLXtpSTrzAH"
                    castShadow
                    receiveShadow
                    geometry={nodes.BeQtuLXtpSTrzAH.geometry}
                    material={materials['initialShadingGroup.002']}
                  />
                  <group name="jfrkeZkELiVCUCj">
                    <mesh
                      name="BDLCJBydsNjizog_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BDLCJBydsNjizog_0.geometry}
                      material={materials['fGwijctGaiRaYJC.002']}
                    />
                    <mesh
                      name="GWEiavWnRxbogtw_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.GWEiavWnRxbogtw_0.geometry}
                      material={materials['FsunUcGyajFpQmW.002']}
                    />
                    <mesh
                      name="JUTNJcWwqyxbGDZ_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.JUTNJcWwqyxbGDZ_0.geometry}
                      material={materials['LJBezuBxKRoHnAp.002']}
                    />
                    <mesh
                      name="PLFTnNQeqVAxicS"
                      castShadow
                      receiveShadow
                      geometry={nodes.PLFTnNQeqVAxicS.geometry}
                      material={materials['BLpVAsLWNICZYGG.002']}
                    />
                    <mesh
                      name="RFqaqXLpuCDBIGV_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.RFqaqXLpuCDBIGV_0.geometry}
                      material={materials['nJRBoEsOhzMSqCz.002']}
                    />
                    <mesh
                      name="tWBbDznHihIxXam"
                      castShadow
                      receiveShadow
                      geometry={nodes.tWBbDznHihIxXam.geometry}
                      material={materials['OStzgRHtVBLWwiD.002']}
                    />
                  </group>
                  <mesh
                    name="KUDomTaVduCyevu"
                    castShadow
                    receiveShadow
                    geometry={nodes.KUDomTaVduCyevu.geometry}
                    material={materials['KtvhjlxyToKjYkE.002']}
                  />
                  <mesh
                    name="QaGkMzxNzKPcqRy"
                    castShadow
                    receiveShadow
                    geometry={nodes.QaGkMzxNzKPcqRy.geometry}
                    material={materials['iEhZxWeNLTDdgxm.002']}
                  />
                  <mesh
                    name="QOfJIBEXOvXfSUh"
                    castShadow
                    receiveShadow
                    geometry={nodes.QOfJIBEXOvXfSUh.geometry}
                    material={materials['vsSJQngPxBJTVZb.002']}
                  />
                  <group name="VKOyrvtwIfmqQxa">
                    <mesh
                      name="aVmapfDgqkPkjUf"
                      castShadow
                      receiveShadow
                      geometry={nodes.aVmapfDgqkPkjUf.geometry}
                      material={materials['WqbAhnIPgrrhfXS.002']}
                    />
                    <mesh
                      name="CAQeTxdpUcbxQyT"
                      castShadow
                      receiveShadow
                      geometry={nodes.CAQeTxdpUcbxQyT.geometry}
                      material={materials['KtvhjlxyToKjYkE.002']}
                    />
                    <mesh
                      name="qsTxqfACkdoWeLQ"
                      castShadow
                      receiveShadow
                      geometry={nodes.qsTxqfACkdoWeLQ.geometry}
                      material={materials['IBtgGxCVyZhjKZM.002']}
                    />
                    <mesh
                      name="tQCDizUpBYNcvFA"
                      castShadow
                      receiveShadow
                      geometry={nodes.tQCDizUpBYNcvFA.geometry}
                      material={materials['LtesZnUOMbBEAoi.002']}
                    />
                  </group>
                  <group name="WdanqYwxRyUXWJc">
                    <mesh
                      name="zPPSOvNamLQVyvv"
                      castShadow
                      receiveShadow
                      geometry={nodes.zPPSOvNamLQVyvv.geometry}
                      material={materials['qEGySvwsouNnVcn.002']}
                    />
                  </group>
                  <group name="xjCPRgbYHLDauvS">
                    <mesh
                      name="MoTJNOoMxqdxNvQ"
                      castShadow
                      receiveShadow
                      geometry={nodes.MoTJNOoMxqdxNvQ.geometry}
                      material={materials['IBtgGxCVyZhjKZM.002']}
                    />
                    <group name="mZxrNiCtMrMjOMv">
                      <mesh
                        name="mZxrNiCtMrMjOMv002"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002.geometry}
                        material={materials['WqbAhnIPgrrhfXS.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_1.geometry}
                        material={materials['CSNzlRnZuvCyxNL.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_2.geometry}
                        material={materials['GFNYbWjyDVGUwJd.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_3.geometry}
                        material={materials['tfbCjiZQaZkmtHx.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_4.geometry}
                        material={materials['jFPFAvCbiqflbQV.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_5.geometry}
                        material={materials['rNCplyWedyfORFh.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_6.geometry}
                        material={materials['YiceMpFVTpnmoaq.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_7.geometry}
                        material={materials['LtesZnUOMbBEAoi.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_8.geometry}
                        material={materials['EJpkIDZfhPDUzel.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_9.geometry}
                        material={materials['LUbRMhkIhuekQRK.002']}
                      />
                      <mesh
                        name="mZxrNiCtMrMjOMv002_10"
                        castShadow
                        receiveShadow
                        geometry={nodes.mZxrNiCtMrMjOMv002_10.geometry}
                        material={materials['LJBezuBxKRoHnAp.002']}
                      />
                    </group>
                    <mesh
                      name="YPGjoywokSeoQFr"
                      castShadow
                      receiveShadow
                      geometry={nodes.YPGjoywokSeoQFr.geometry}
                      material={materials['KtvhjlxyToKjYkE.002']}
                    />
                  </group>
                </group>
                <group name="QBOwHSPSxgSiwBJ">
                  <group name="DmsxnfPLBxzvUzb">
                    <mesh
                      name="IuMgFUHIyRWENxG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.IuMgFUHIyRWENxG_0.geometry}
                      material={materials['LcWBQfBvCzxThpp.002']}
                    />
                    <mesh
                      name="nJYGEbPQybRBbiN"
                      castShadow
                      receiveShadow
                      geometry={nodes.nJYGEbPQybRBbiN.geometry}
                      material={materials['tDZQoaroJfCIQtF.002']}
                    />
                    <mesh
                      name="RGbIswEcCTzqNsn_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.RGbIswEcCTzqNsn_0.geometry}
                      material={materials['FlDKBWPodPcEeGy.002']}
                    />
                    <mesh
                      name="XeFHhVBtRZWPGxR"
                      castShadow
                      receiveShadow
                      geometry={nodes.XeFHhVBtRZWPGxR.geometry}
                      material={materials['tfbCjiZQaZkmtHx.002']}
                    />
                  </group>
                  <group name="hvHkgOsBqZjfnRJ">
                    <mesh
                      name="JyAbjubWrOdfygC_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.JyAbjubWrOdfygC_0.geometry}
                      material={materials['jFPFAvCbiqflbQV.002']}
                    />
                    <mesh
                      name="nxFoHsySvfcSLvp"
                      castShadow
                      receiveShadow
                      geometry={nodes.nxFoHsySvfcSLvp.geometry}
                      material={materials['KtvhjlxyToKjYkE.002']}
                    />
                    <mesh
                      name="oCklTGvTZoDWJrC_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.oCklTGvTZoDWJrC_0.geometry}
                      material={materials['tfbCjiZQaZkmtHx.002']}
                    />
                  </group>
                  <group name="PBOTXpSeOPsBhmZ">
                    <mesh
                      name="DLfIUIalXuQjJsL"
                      castShadow
                      receiveShadow
                      geometry={nodes.DLfIUIalXuQjJsL.geometry}
                      material={materials['pBMikDFQfUOsKkr.002']}
                    />
                    <mesh
                      name="FaUtifOQSMTXiZM"
                      castShadow
                      receiveShadow
                      geometry={nodes.FaUtifOQSMTXiZM.geometry}
                      material={materials['KtvhjlxyToKjYkE.002']}
                    />
                    <mesh
                      name="FGDSbHbILfUmiaH"
                      castShadow
                      receiveShadow
                      geometry={nodes.FGDSbHbILfUmiaH.geometry}
                      material={materials['tfbCjiZQaZkmtHx.002']}
                    />
                    <mesh
                      name="jQXfQpudiYObSGp"
                      castShadow
                      receiveShadow
                      geometry={nodes.jQXfQpudiYObSGp.geometry}
                      material={materials['sWxYOtHGWTcXRMx.002']}
                    />
                    <mesh
                      name="KABLQLZRuEbcLWk"
                      castShadow
                      receiveShadow
                      geometry={nodes.KABLQLZRuEbcLWk.geometry}
                      material={materials['fdfRsQCrfvPBPfQ.002']}
                    />
                    <mesh
                      name="knexoFNknstHgiO"
                      castShadow
                      receiveShadow
                      geometry={nodes.knexoFNknstHgiO.geometry}
                      material={materials['KtvhjlxyToKjYkE.002']}
                    />
                    <mesh
                      name="OMkeKbwVHRBkBwM"
                      castShadow
                      receiveShadow
                      geometry={nodes.OMkeKbwVHRBkBwM.geometry}
                      material={materials['IkWzRHNnDaKQXIi.002']}
                    />
                    <mesh
                      name="qjXEDwnnBYwWcJn"
                      castShadow
                      receiveShadow
                      geometry={nodes.qjXEDwnnBYwWcJn.geometry}
                      material={materials['tfbCjiZQaZkmtHx.002']}
                    />
                  </group>
                  <mesh
                    name="vauUojKrKkLLDtY"
                    castShadow
                    receiveShadow
                    geometry={nodes.vauUojKrKkLLDtY.geometry}
                    material={materials['HvAGJeQTAiWbceX.002']}
                  />
                  <mesh
                    name="wjSYkRykuFHJNPw"
                    castShadow
                    receiveShadow
                    geometry={nodes.wjSYkRykuFHJNPw.geometry}
                    material={materials['KxzouvBYEgdZhMo.002']}
                  />
                  <mesh
                    name="yqmgDmvGsmuPwXx_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.yqmgDmvGsmuPwXx_0.geometry}
                    material={materials['bmOZLlCkCKhIIVe.002']}
                  />
                </group>
                <mesh
                  name="UCttAeyROPsgmix"
                  castShadow
                  receiveShadow
                  geometry={nodes.UCttAeyROPsgmix.geometry}
                  material={materials['KtvhjlxyToKjYkE.002']}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="disapointed_emoji"
          castShadow
          receiveShadow
          geometry={nodes.disapointed_emoji.geometry}
          material={materials['M_Emoticon_56.002']}
          position={[-0.401, 0.372, -0.187]}
          rotation={[-1.262, 0.052, 3.138]}
          scale={0.03}
        />
        <group
          name="glasses_emoji"
          position={[-0.293, 0.669, -0.229]}
          rotation={[-1.556, 0.005, -3.039]}
          scale={1.428}>
          <group name="Orange_Manfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="Orange">
                <mesh
                  name="Orange_Atlas_Orange_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Orange_Atlas_Orange_0.geometry}
                  material={materials['Atlas_Orange.002']}
                  position={[-0.293, 0.669, -0.229]}
                  scale={1.428}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="angry_emoji" rotation={[-Math.PI / 2, 0, 0]} scale={0.12}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere_Sphere001_0" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.003']}
                  position={[3.969, -0.141, -2.104]}
                  rotation={[-0.116, -0.013, -3.05]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="rolling_eyes_emoji" rotation={[-Math.PI / 2, 0, 2.841]} scale={0.055}>
          <group
            name="7b8c617c9295447196e2ce465da0169afbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode001">
              <group name="Emoticon_48" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Emoticon_48_M_Emoticon_48_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Emoticon_48_M_Emoticon_48_0.geometry}
                  material={materials['M_Emoticon_48.002']}
                  position={[-10.072, -0.883, 11.015]}
                  rotation={[0.275, 0.107, 0.291]}
                  scale={0.5}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="no_emotion_emoji" rotation={[-Math.PI / 2, 0, -3.103]} scale={0.064}>
          <group
            name="2292d0505b39477ea1165952371d5cf6fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode002">
              <group name="Emoticon_40" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="no_emotion_emoji_"
                  castShadow
                  receiveShadow
                  geometry={nodes.no_emotion_emoji_.geometry}
                  material={materials['M_Emoticon_40.002']}
                  position={[7.647, -1.661, 12.319]}
                  rotation={[-0.073, -0.038, 0.257]}
                  scale={0.38}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="poo_emoji" rotation={[-Math.PI / 2, 0, 0]} scale={0.134}>
          <group name="USDRoot001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Root">
              <group name="poo_emoji_1" position={[0, 93.04, 0]}>
                <mesh
                  name="poo_emoji001"
                  castShadow
                  receiveShadow
                  geometry={nodes.poo_emoji001.geometry}
                  material={materials['material.002']}
                  position={[388.684, 722.654, 326.026]}
                  rotation={[3.1, -0.113, 3.092]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Smartphone
