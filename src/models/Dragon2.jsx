// License: Prof.v7x - https://sketchfab.com/3d-models/dragon-white-low-poly-7b89c3d4718e4131b1ecf169fd05d2ba 

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/dragon2.glb";

const Dragon2 = ({ setCurrentAnimation, currentAnimation, ...props }) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        //console.log(actions);
        Object.values(actions).forEach((action) => action.stop());

        if (currentAnimation.length === 0) return;

        const animationName = currentAnimation[0];
        const action = actions[animationName];

        if (!action) return;

        if (animationName === "stand") {
            action.setLoop(THREE.LoopRepeat);
            action.timeScale = 0.2;
        } else {
            action.setLoop(THREE.LoopOnce);
        }

        action.clampWhenFinished = true; // Prevent the animation from resetting after it's finished
        action.play();

        const mixer = action.getMixer();
        const onFinished = (event) => {
            if (event.action === action) {
                // Remove the first animation from the array and set the state
                const remainingAnimations = currentAnimation.slice(1);
                setCurrentAnimation(remainingAnimations);

                // Remove the event listener
                mixer.removeEventListener("finished", onFinished);
            }
        };

        // Add an event listener to the mixer
        mixer.addEventListener("finished", onFinished);
    }, [actions, currentAnimation]);

    return (
        <group ref={group} {...props} dispose={null}>
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

export default Dragon2;
