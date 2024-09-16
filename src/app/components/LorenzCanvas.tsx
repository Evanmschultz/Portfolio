'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function LorenzCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        mixer: THREE.AnimationMixer,
        light: THREE.PointLight,
        group: THREE.Group,
        pointCloud: THREE.Points,
        geometry: THREE.BufferGeometry,
        pointCloudMaterial: THREE.PointsMaterial
    
    const clock = new THREE.Clock()
    const animationSpeed = 0.5
    let animationFrameId: number

    function init() {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(100, canvasRef.current!.clientWidth / canvasRef.current!.clientHeight, 0.1, 50)
      camera.position.z = 34

      renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current! })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(canvasRef.current!.clientWidth, canvasRef.current!.clientHeight)
      renderer.setClearColor(0x111111, 1)
      scene.background = new THREE.Color('#000')

      light = new THREE.PointLight('#9BC995', 1, 10000)
      light.position.set(0, 0, 0)
      scene.add(light)

      group = new THREE.Group()

      const arrayCurve = lorenz()
      const curve = new THREE.CatmullRomCurve3(arrayCurve)
      geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(100000))

      pointCloudMaterial = new THREE.PointsMaterial({
        color: new THREE.Color(0x999ccc),
        transparent: true,
        size: 0.05,
        blending: THREE.AdditiveBlending
      })

      pointCloud = new THREE.Points(geometry, pointCloudMaterial)
      group.add(pointCloud)
      scene.add(group)

      setupAnimation()
    }

    function setupAnimation() {
      mixer = new THREE.AnimationMixer(group)
      const rotationKF = new THREE.KeyframeTrack(
        '.rotation[y]',
        [0, 10],
        [0, Math.PI * 2]
      )
      const clip = new THREE.AnimationClip('rotate', 10, [rotationKF])
      const action = mixer.clipAction(clip)
      action.setLoop(THREE.LoopRepeat, Infinity)
      action.play()
    }

    function updatePointCloud() {
      const positions = pointCloud.geometry.attributes.position.array as Float32Array
      const a = 0.9 + Math.random() * 6
      const b = 3.4 + Math.random() * 7
      const f = 9.9 + Math.random() * 8
      const g = 1 + Math.random()
      const step = 0.001 * animationSpeed

      for (let i = 0; i < positions.length; i += 3) {
        let x = positions[i]
        let y = positions[i + 1]
        let z = positions[i + 2]
        
        positions[i] = x - step * a * x + step * y * y - step * z * z + step * a * f
        positions[i + 1] = y - step * y + step * x * y - step * b * x * z + step * g
        positions[i + 2] = z - step * z + step * b * x * y + step * x * z
      }
      pointCloud.geometry.attributes.position.needsUpdate = true
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      
      if (mixer) {
        mixer.update(delta * animationSpeed)
      }

      updatePointCloud()

      group.rotation.x += 0.001 * (Math.random() - 0.5) * animationSpeed
      group.rotation.z += 0.001 * (Math.random() - 0.5) * animationSpeed

      renderer.render(scene, camera)
    }

    function lorenz() {
      const arrayCurve = []
      let x = 0.1, y = 0.1, z = 0.1
      const a = 0.2, b = 3.4, f = 9.9, g = 1, t = 0.001
      for (let i = 0; i < 100000; i++) {
        x = x - t * a * x + t * y * y - t * z * z + t * a * f
        y = y - t * y + t * x * y - t * b * x * z + t * g
        z = z - t * z + t * b * x * y + t * x * z
        arrayCurve.push(new THREE.Vector3(x, y, z).multiplyScalar(1))
      }
      return arrayCurve
    }

    function handleResize() {
      if (!canvasRef.current) return
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    init()
    animate()
    setIsVisible(true)

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (renderer) {
        renderer.dispose()
      }
      if (geometry) {
        geometry.dispose()
      }
      if (pointCloudMaterial) {
        pointCloudMaterial.dispose()
      }
      // Dispose of any other Three.js objects if necessary
    }
  }, [])

  return <canvas ref={canvasRef} id="myCanvas" className={`canvas ${isVisible ? 'visible' : ''}`} />
}