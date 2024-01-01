import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(planeScene);

    return (
        <mesh>
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane;
