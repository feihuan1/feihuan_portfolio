import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)


  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
 

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
    } else {
      screenScale = [1, 1, 1];
    }
    
    return [screenScale, screenPosition];
  };


  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition ;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition=[0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition=[0, -4, -4]
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <div className="w-full h-screen relative ">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center '>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        // object nearer than 0.1 or further than 1000 wont be rendered
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* directional light similate a light from distance source like the sun */}
          <directionalLight position={[1.5,1,1]} intensity={2} />


          {/* ambient light lights up all object in scene without casting shadows */}
          <ambientLight intensity={0.5} />


          {/* hemesphere light illumilate the scene with gradient */}
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition} 
            scale={islandScale} 
            isRotating={isRotating} 
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            rotation={[0.1, 4.71, 0]}
          />
          <Plane 
            isRotating={isRotating}
            planeScale={planeScale} 
            planePosition={planePosition} 
            rotation={[0, 20.2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
