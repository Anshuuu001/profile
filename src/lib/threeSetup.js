import * as THREE from "three";

/**
 * Basic Three.js Scene Setup (for Hero 3D or background effects)
 */

export function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

export function createCamera(width, height) {
  const camera = new THREE.PerspectiveCamera(
    75,
    width / height,
    0.1,
    1000
  );

  camera.position.z = 5;
  return camera;
}

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  return renderer;
}

/**
 * Simple rotating cube (starter 3D object)
 */
export function createCube() {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({
    color: "#00e5ff",
  });

  const cube = new THREE.Mesh(geometry, material);
  return cube;
}

/**
 * Light setup
 */
export function createLights(scene) {
  const light = new THREE.PointLight("#00e5ff", 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const ambient = new THREE.AmbientLight("#ffffff", 0.5);
  scene.add(ambient);
}