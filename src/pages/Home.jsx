import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import Island3 from "../models/Island3";
import Dragon from "../models/Dragon";

// TODO:
// Tweak Navigation - smooth, intuitive
// Add helptet - drag to explore
// Add dark mode switching
// Add credit page for sketchfab 3D artists
// there is a small dot outside of the island
const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const [currentStage, setCurrentStage] = useState(null);
    const [isRotating, setIsRotating] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -4, -43.4];
        let rotation = [0.2, 4.37, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.013, 0.013, 0.013];
        } else {
            screenScale = [0.0197, 0.0197, 0.0197];
        }

        return [screenScale, screenPosition, rotation];
    };

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -5, -4];
        }

        return [screenScale, screenPosition];
    };

    const [islandScale, islandPosition, islandRotation] =
        adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${
                    isRotating ? "cursor-grabbing" : "cursor-grab"
                }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={3} />
                    <ambientLight intensity={1} />
                    <hemisphereLight
                        skyColor="#b1e1ff"
                        groundColor="#000000"
                        intensity={2}
                    />
                    <Dragon />
                    <Sky isRotating={isRotating} />
                    <Island3
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-2 right-2">
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt="sound"
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className="w-10 h-10 cursor-pointer object-contain"
                />
            </div>
        </section>
    );
};

export default Home;
