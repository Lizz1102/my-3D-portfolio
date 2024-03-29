// License: Sander Vander Meiren - https://sketchfab.com/3d-models/stylised-sky-player-home-dioroma-6597e6c9a5184f07a638ac33c08c2ad5

import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import { a } from "@react-spring/three";

import islandScene from "../assets/3d/island2.glb";

const Island2 = ({
    isRotating,
    setIsRotating,
    setCurrentStage,
    setShowHint,
    ...props
}) => {
    const islandRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        setShowHint(false);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;

            islandRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            if (!isRotating) setIsRotating(true);

            islandRef.current.rotation.y += 0.005 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (e.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true);

            islandRef.current.rotation.y -= 0.005 * Math.PI;
            rotationSpeed.current = -0.0125;
        }

        setShowHint((showHint) => {
            if (showHint) {
                return false;
            }
            return showHint;
        });
    };

    const handleKeyUp = (e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            setIsRotating(false);
        }
    };

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;

            /**
             * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
             * The goal is to ensure that the rotation value remains within a specific range to
             * prevent potential issues with very large or negative rotation values.
             *  Here's a step-by-step explanation of what this code does:
             *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
             *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
             *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
             *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
             *     This is done to ensure that the value remains positive and within the range of
             *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
             *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
             *     modulo operation to the value obtained in step 2. This step guarantees that the value
             *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
             *     circle in radians.
             */
            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 5.8 && normalizedRotation <= 6.9:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 3.0 && normalizedRotation <= 3.5:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.0 && normalizedRotation <= 4.6:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    });

    return (
        <a.group ref={islandRef} {...props} dispose={null}>
            <a.group
                position={[-44.516, 45.46, 10.285]}
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <a.group position={[0, 0, -34.814]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tower_base_wall_0.geometry}
                        material={materials.wall}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tower_base_planks_0.geometry}
                        material={materials.planks}
                    />
                </a.group>
            </a.group>
            <a.group
                position={[-22.341, 70.746, -26.347]}
                rotation={[0, 0.667, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.house_base_wall_0.geometry}
                    material={materials.wall}
                    position={[-4.244, 0, -22.805]}
                />
            </a.group>
            <a.group position={[-19.572, 3.067, 56.714]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roof_roof_0.geometry}
                    material={materials.roof}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roof_wooden_skel_no_op_0.geometry}
                    material={materials.wooden_skel_no_op}
                />
            </a.group>
            <a.group
                position={[-62.013, 69.642, 4.806]}
                rotation={[-2.987, -1.271, -2.962]}
                scale={0.557}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_details_wall_0.geometry}
                    material={materials.wall}
                    position={[0, 0, -9.758]}
                />
            </a.group>
            <a.group
                position={[-60.621, 71.68, -29.659]}
                rotation={[2.675, -0.9, 2.732]}
                scale={0.295}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={
                        nodes.wood_loose_planks_wooden_skel_no_op_0.geometry
                    }
                    material={materials.wooden_skel_no_op}
                    position={[167.603, 70.907, -5.194]}
                />
            </a.group>
            <a.group
                position={[65.223, 90.387, -43.067]}
                rotation={[-1.861, 0.588, 1.284]}
                scale={0.611}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.leaves_op_branches_0.geometry}
                    material={materials.op_branches}
                    position={[-2.491, -18.554, -1.982]}
                />
            </a.group>
            <a.group
                position={[45.452, 50.763, -23.448]}
                rotation={[2.684, 0.646, -2.739]}
                scale={0.233}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.grass_op_branches_0.geometry}
                    material={materials.op_branches}
                    position={[-0.562, 11.093, 0]}
                />
            </a.group>
            <a.group
                position={[36.662, 0.659, 17.226]}
                rotation={[0.107, 1.046, -0.139]}
                scale={[1.221, 1.208, 1]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["rocks_Material_#413_0"].geometry}
                    material={materials.Material_413}
                    position={[-100.304, -21.28, -15.81]}
                />
            </a.group>
            <a.group
                position={[46.878, 46.628, 8.397]}
                rotation={[-0.002, 0.334, -0.09]}
                scale={0.799}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["ferns_Material_#650_0"].geometry}
                    material={materials.Material_650}
                    position={[-13.284, 9.049, 0]}
                />
            </a.group>
            <a.group
                position={[-8.336, 32.703, -8.657]}
                rotation={[-0.04, -0.953, -0.058]}
                scale={0.736}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wood_structure_wooden_skel_no_op_0.geometry}
                    material={materials.wooden_skel_no_op}
                    position={[77.142, -2.511, -9.584]}
                />
            </a.group>
            <a.group
                position={[15.005, 38.223, -26.353]}
                rotation={[-Math.PI / 2, 0, 1.904]}
                scale={[0.049, 0.049, 0.159]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["barrels_door_+_barrels_0"].geometry}
                    material={materials.door__barrels}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.barrels_planks_0.geometry}
                    material={materials.planks}
                />
            </a.group>
            <a.group
                position={[-1.063, 56.917, -47.881]}
                rotation={[0, -1.281, 0]}
                scale={[0.398, 0.155, 0.603]}
            >
                <a.group position={[77.142, -2.511, -9.584]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.windows_wooden_skel_no_op_0.geometry}
                        material={materials.wooden_skel_no_op}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["windows_door_+_barrels_0"].geometry}
                        material={materials.door__barrels}
                    />
                </a.group>
            </a.group>
            <a.group
                position={[18.805, -42.02, 19.523]}
                rotation={[1.559, 0.008, -0.351]}
                scale={0.474}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wood_beams_wooden_skel_no_op_0.geometry}
                    material={materials.wooden_skel_no_op}
                    position={[-186.901, 79.687, -8.777]}
                />
            </a.group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.base_tower_wall_0.geometry}
                material={materials.wall}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tree_trunk_bark_0.geometry}
                material={materials.bark}
                position={[47.887, 83.803, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.grass_floor_grass_0.geometry}
                material={materials.grass}
                rotation={[-Math.PI / 2, 0, 1.328]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["door_door_+_barrels_0"].geometry}
                material={materials.door__barrels}
                position={[-11.427, 60.918, -3.194]}
                rotation={[0, 0.773, 0]}
                scale={[0.84, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["klimop_Material_#650_0"].geometry}
                material={materials.Material_650}
                position={[-54.458, 38.769, -13.438]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </a.group>
    );
};

export default Island2;
