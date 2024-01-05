import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane2.glb";

const Plane2 = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions.Animation.timeScale = 4;
            actions.Animation.play();
        } else {
            actions.Animation.stop();
        }
    }, [isRotating, actions]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane2;
