import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three'; 

const Model = ({ modelRef, url }) => {
  const gltf = useGLTF(url);

  return <primitive ref={modelRef} object={gltf.scene} scale={[1.5, 1.5, 1.5]} />; 
};

const Scene = ({ url }) => {
  const controlsRef = useRef(); 
  const modelRef = useRef(null); 
  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());

      camera.position.set(center.x, center.y, size * 0.7 );  

      camera.near = size / 100;
      camera.far = size * 100;
      camera.updateProjectionMatrix();

      if (controlsRef.current) {
        controlsRef.current.target.set(center.x, center.y, center.z);
        controlsRef.current.enableDamping = true;
        controlsRef.current.dampingFactor = 0.1;
        controlsRef.current.update();
      }
    }
  }, [camera]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls ref={controlsRef} enableZoom={true} />
      <Model modelRef={modelRef} url={url} />
    </>
  );
};

const ModelDisplay = ({ url }) => {
  return (
    <Canvas style={{ height: '450px' }}>
      <Scene url={url} />
    </Canvas>
  );
};

export default ModelDisplay;