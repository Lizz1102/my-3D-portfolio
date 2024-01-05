import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import dragonScene from "../assets/3d/dragon.glb";
import { useFrame } from "@react-three/fiber";

const Dragon = (props) => {
    const dragonRef = useRef();

    const { nodes, materials, animations } = useGLTF(dragonScene);
    const { actions } = useAnimations(animations, dragonRef);

    useEffect(() => {
        actions.run.play();
    }, [actions]);

    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if (dragonRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the dragon 270 degrees on the y-axis
            dragonRef.current.rotation.y = Math.PI * 1.5;
            dragonRef.current.rotation.x = 1.5;
            dragonRef.current.rotation.z = -0.1;
        } else if (dragonRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the dragon's rotation
            dragonRef.current.rotation.y = Math.PI;
            dragonRef.current.rotation.x = 0;
            dragonRef.current.rotation.z = 1.5;
        }

        // Update the X and Z positions based on the direction
        if (dragonRef.current.rotation.y === Math.PI) {
            // Moving forward
            dragonRef.current.position.x += 0.01;
            dragonRef.current.position.z -= 0.01;
        } else {
            // Moving backward
            dragonRef.current.position.x -= 0.01;
            dragonRef.current.position.z += 0.01;
        }
    });

    return (
        <group ref={dragonRef} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={20.612}
                >
                    <group
                        name="zq127_binglong_modefbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="zq127_binglong_mode" scale={1.5}>
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_8"
                                            geometry={nodes.Object_8.geometry}
                                            material={
                                                materials.zq127_binglong_1
                                            }
                                            skeleton={nodes.Object_8.skeleton}
                                        />
                                        <group
                                            name="Object_7"
                                            rotation={[-Math.PI / 2, 0, 0]}
                                            scale={1.5}
                                        />
                                        <group
                                            name="zq127_binglong"
                                            rotation={[-Math.PI / 2, 0, 0]}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

export default Dragon;
