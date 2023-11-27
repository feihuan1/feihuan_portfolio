import {useRef} from 'react'

import { useFrame } from '@react-three/fiber';
import { meshBounds, useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";

// primitive 3D modle use only one mesh, cant interactive with parts
const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef()

  useFrame((_,delta) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.07 * delta
    }
  })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
};

export default Sky;
