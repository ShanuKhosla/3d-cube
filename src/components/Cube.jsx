import { OrbitControls } from '@react-three/drei'
import React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const cubeRef = useRef();
    useFrame((state, delta) => {
        cubeRef.current.rotation.y +=0.02;
    });
  return (
    <>
        <OrbitControls />
        <ambientLight />
        <mesh ref={cubeRef}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={"mediumpurple"} />
        </mesh>
    </>
  )
}

export default Cube