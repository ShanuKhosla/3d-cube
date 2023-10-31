import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Cube from './Cube'

const Cubecontainer = () => {

  return (
    <>
    <Canvas>
        <Cube />
    </Canvas>
    </>
  )
}

export default Cubecontainer