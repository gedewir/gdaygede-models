/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 TV-Set.gltf --output TV-Set.js 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TV-Set.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.polygon0199.geometry} material={materials.Material1368} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.polygon1196.geometry} material={materials['Material1322.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.polygon2168.geometry} material={materials.Material1318} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.polygon3130.geometry} material={materials.Material1321} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.polygon4110.geometry} material={materials['Material1319.001']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/TV-Set.gltf')
