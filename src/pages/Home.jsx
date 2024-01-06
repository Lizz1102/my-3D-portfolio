import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Plane2 from "../models/Plane2";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon, dragHandIcon } from "../assets/icons";
import Island2 from "../models/Island2";
import Dragon from "../models/Dragon";

// TODO:
// Tweak Navigation - smooth, intuitive
// Add helptet - drag to explore
// Add credit page for sketchfab 3D artists
// Replace nicer loader
// Nicer message sent alert
const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.2;
    audioRef.current.loop = true;
    const [currentStage, setCurrentStage] = useState(null);
    const [isRotating, setIsRotating] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    const [showHint, setShowHint] = useState(true);

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
        let screenPosition = [0, -13, -43.4];
        let rotation = [0.2, 5.6, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.18, 0.18, 0.18];
        } else {
            screenScale = [0.23, 0.2, 0.3];
        }

        return [screenScale, screenPosition, rotation];
    };

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.5, 0.4, 0.4];
            screenPosition = [0, -2.5, 0];
        } else {
            screenScale = [1, 0.8, 0.8];
            screenPosition = [0, -4.8, -4];
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

            {showHint && (
                <>
                    <div className="hint-text">
                        Drag To Explore
                    </div>
                    <div className="hand-icon-outer-container">
                        <div className="hand-icon-container">
                            <img
                                src={dragHandIcon}
                                alt="Drag to explore"
                                className="hand-icon"
                            />
                            <div className="circle"></div>
                        </div>
                    </div>
                </>
            )}

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
                    <Dragon
                        currentAnimation={"run"}
                        position={[-5, 2, 1]}
                        scale={[3, 3, 3]}
                        rotation={[0, Math.PI, 1.5]}
                    />
                    <Sky isRotating={isRotating} />
                    <Island2
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        setShowHint={setShowHint}
                    />
                    <Plane2
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 0, 0]}
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
