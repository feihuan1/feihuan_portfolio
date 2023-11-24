import { meshBounds, useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";

// primitive 3D modle use only one mesh, cant interactive with parts
const Sky = () => {
  const sky = useGLTF(skyScene);

  return (
    <mesh>
        <primitive object={sky.scene} />
    </mesh>
  )
};

export default Sky;
