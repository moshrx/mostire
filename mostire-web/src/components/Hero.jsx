import { useRef, Suspense, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Stars, MeshReflectorMaterial, OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import TireGraphic from './TireGraphic'
import { useTheme } from '../hooks/useTheme'
import tireModelUrl from '../assets/tire-model/free_-_tire_001_r17.glb'

// Scene backdrop colour per theme (light gets a soft neutral so the tire reads)
const SCENE_BG = { light: '#e9edf3', dark: '#0a0d12' }

const seededNoise = (seed) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

const canCreateWebgl = () => {
  const canvas = document.createElement('canvas')
  return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
}

// Reactively track whether we should use the heavy 3D experience.
// On phones / coarse pointers / reduced-motion we fall back to a light CSS hero
// for performance, battery, and readability.
function useEnable3D() {
  const query = '(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
  const [enabled, setEnabled] = useState(() =>
    typeof window !== 'undefined' && 'matchMedia' in window ? window.matchMedia(query).matches : false
  )
  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return
    const mql = window.matchMedia(query)
    const onChange = () => setEnabled(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return enabled
}

const TARGET_SIZE = 3.4 // desired largest dimension of the tire in world units

function TireModel({ idle = true }) {
  const spinRef = useRef()
  const { scene } = useGLTF(tireModelUrl)

  // Clone so the cached GLTF scene isn't mutated, then center + normalize its size.
  const { model, fitScale } = useMemo(() => {
    const clone = scene.clone(true)
    const box = new THREE.Box3().setFromObject(clone)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    // Recenter geometry around the origin
    clone.position.sub(center)
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    return { model: clone, fitScale: TARGET_SIZE / maxDim }
  }, [scene])

  // Slow turntable spin around the vertical axis; pauses while the user drags
  useFrame((_, delta) => {
    if (spinRef.current && idle) {
      spinRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    // Outer group: turntable spin around world Y (display-stand look).
    // Inner group: stand the tire upright (axle horizontal) + slight tilt + scale.
    <group ref={spinRef}>
      <group rotation={[Math.PI / 2, 0, 0.08]} scale={fitScale}>
        <primitive object={model} />
      </group>
    </group>
  )
}

// Preload so the model is ready as soon as the canvas mounts
useGLTF.preload(tireModelUrl)

function Particles() {
  const count = 180
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (seededNoise(i + 1) - 0.5) * 22
      arr[i * 3 + 1] = (seededNoise(i + 401) - 0.5) * 14
      arr[i * 3 + 2] = (seededNoise(i + 809) - 0.5) * 10
    }
    return arr
  }, [])

  const ref = useRef()
  useFrame(() => { if (ref.current) ref.current.rotation.y += 0.0003 })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#e4322b" transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

function Scene({ interactive = true, theme = 'light' }) {
  const [dragging, setDragging] = useState(false)
  const isLight = theme === 'light'
  const bg = SCENE_BG[theme] || SCENE_BG.light

  // Mobile (non-interactive) places the tire centered-right and a touch smaller
  // so it never sits on top of the headline.
  const tirePos = interactive ? [4.2, -0.3, 0.5] : [1.9, 1.2, 0]
  const tireScale = interactive ? 1 : 0.8
  const spinning = interactive ? !dragging : true

  return (
    <>
      <color attach="background" args={[bg]} />
      <fog attach="fog" args={[bg, 12, 34]} />

      {/* Lighting — brighter ambient on light bg so the dark tire keeps contrast */}
      <ambientLight intensity={isLight ? 1.1 : 0.7} />
      <directionalLight position={[5, 8, 6]} intensity={3} color="#ffffff" />
      <directionalLight position={[-6, 4, 4]} intensity={1.5} color="#dce6ff" />
      <pointLight position={[0, 4, 5]}  intensity={4}   color="#ffffff" />
      <pointLight position={[-4, 3, 2]} intensity={2.5} color="#5b8dff" />
      <pointLight position={[4, 2, 3]}  intensity={1.5} color="#ffffff" />
      <pointLight position={[0, -2, 4]} intensity={1.5} color="#e4322b" />

      <Particles />
      <Stars radius={60} depth={50} count={interactive ? 900 : 350} factor={2} fade speed={0.5} />

      {/* Featured tire model — interactive (drag) on desktop, auto-spin on mobile */}
      <group position={tirePos} scale={tireScale}>
        {/* Dedicated key + rim lights so the dark tire reads against the bg */}
        <pointLight position={[1.5, 2, 4]} intensity={45} distance={18} decay={2} color="#ffffff" />
        <pointLight position={[-2.5, 0.5, 2]} intensity={22} distance={16} decay={2} color="#7aa2ff" />
        <pointLight position={[3, -1, 2]} intensity={18} distance={14} decay={2} color="#ffffff" />
        <Float speed={1.2} rotationIntensity={0} floatIntensity={0.25} enabled={spinning}>
          <Suspense fallback={null}>
            <TireModel idle={spinning} />
          </Suspense>
        </Float>
      </group>

      {/* Reflective floor only on the heavier interactive (desktop) scene */}
      {interactive && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]}>
          <planeGeometry args={[40, 40]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={512}
            mixBlur={0.8}
            mixStrength={20}
            roughness={1}
            depthScale={1.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color={isLight ? '#d4dae3' : '#080808'}
            metalness={0.7}
            mirror={0}
          />
        </mesh>
      )}

      {/* Drag to rotate — desktop only. Zoom/pan disabled so the page still scrolls. */}
      {interactive && (
        <OrbitControls
          makeDefault
          target={tirePos}
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
          minPolarAngle={Math.PI * 0.18}
          maxPolarAngle={Math.PI * 0.82}
          onStart={() => setDragging(true)}
          onEnd={() => setDragging(false)}
        />
      )}

      <Environment preset="warehouse" />
    </>
  )
}

function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-page">
      {/* Primary tire — top-right, sized fluidly so it never crowds the headline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-20 top-[6%] sm:-right-10 sm:top-[14%]"
        style={{ width: 'clamp(210px, 56vw, 420px)' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          <TireGraphic size={420} rimColor="#c2ccd8" accent="#e4322b" />
        </motion.div>
      </motion.div>

      {/* Small accent tire, hidden on the smallest screens to reduce clutter */}
      <div className="absolute right-[10%] bottom-[14%] hidden opacity-30 sm:block">
        <TireGraphic size={150} rimColor="#8b97a7" accent="#e4322b" />
      </div>

      {/* Brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_28%,rgba(230,48,34,0.18),transparent_45%)]" />
    </div>
  )
}

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const itemVariants = {
  hidden:  { y: 40, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [webglReady] = useState(() => typeof document !== 'undefined' && canCreateWebgl())
  // interactive = full desktop experience (drag, reflections). Otherwise the same
  // 3D model renders but auto-spins, drag-free, at a lighter resolution (mobile).
  const interactive = useEnable3D()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <section id="hero" className="relative w-full min-h-[640px] h-[100svh] overflow-hidden bg-page">

      {/* 3D Canvas — shows the GLB tire on every WebGL-capable device.
          Mobile gets a static (auto-spin, no drag) lighter render; desktop is interactive.
          Only devices without WebGL at all fall back to the CSS hero. */}
      <div className="absolute inset-0">
        {webglReady ? (
          <Canvas
            camera={{ position: [0, 1.2, 8], fov: 58 }}
            shadows={interactive}
            gl={{ antialias: interactive, alpha: false, powerPreference: 'high-performance' }}
            dpr={interactive ? [1, 1.5] : [1, 1.25]}
            frameloop="always"
          >
            <Suspense fallback={null}>
              <Scene interactive={interactive} theme={theme} />
            </Suspense>
          </Canvas>
        ) : (
          <HeroFallback />
        )}
      </div>

      {/* Overlays — left-heavy gradient so tires show on the right.
          pointer-events-none so drags pass through to the 3D tire underneath.
          Colour tracks the theme so the headline stays readable in both modes. */}
      {isLight ? (
        <>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#f6f8fb] via-[#f6f8fb]/85 to-transparent" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#f6f8fb]/40 via-transparent to-[#f6f8fb]" />
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#f6f8fb] to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0a0d12] via-[#0a0d12]/80 to-transparent" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0a0d12]/55 via-transparent to-[#0a0d12]" />
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#0a0d12] to-transparent" />
        </>
      )}

      {/* "Drag to rotate" hint — only when the interactive 3D tire is shown */}
      {interactive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="pointer-events-none absolute right-4 top-1/2 z-10 hidden -translate-y-24 flex-col items-center gap-1 text-center sm:flex"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink-mute" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] uppercase tracking-[0.25em] text-ink-mute">Drag to rotate</span>
        </motion.div>
      )}

      {/* Hero content — anchored left.
          pointer-events-none on the wrapper; interactive children re-enable it,
          so empty areas let pointer drags reach the 3D canvas. */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none relative z-10 flex flex-col justify-center h-full max-w-7xl pt-20"
        style={{ marginInline: 'auto', paddingInline: 'clamp(1.25rem, 5vw, 2.5rem)' }}
      >
        <div className="max-w-2xl pointer-events-auto">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#e4322b]" />
            <span
              className="text-[#e4322b] text-xs font-semibold tracking-[0.15em] uppercase"
            >
              Charlottetown, PEI
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3rem,7.5vw,5.5rem)] font-extrabold text-ink leading-[1.02] tracking-tight mb-5"
            style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
          >
            Premium Tires.<br />
            <span className="text-[#e4322b]">Wholesale Prices.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-semibold text-ink-soft tracking-[0.04em] mb-3"
            style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
          >
            Island fast, delivered to your door.
          </motion.p>

          <div className="flex flex-wrap gap-3 mb-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-md bg-[#e4322b] hover:bg-[#ff5a4d] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 transition-all duration-200 glow-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4322b]"
            >
              Get a free quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#how-to-order')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-md border border-line hover:border-ink-mute hover:bg-panel-2 text-ink font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 transition-all duration-200 backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              How it works
            </motion.button>
            <a
              href="tel:9029922664"
              className="hidden sm:inline-flex items-center justify-center text-ink-mute hover:text-ink font-medium text-sm px-3 py-3.5 transition-colors"
            >
              or call 902-992-2664
            </a>
          </div>

          <motion.p
            variants={itemVariants}
            className="hidden sm:block text-base sm:text-lg text-ink-soft mb-7 max-w-lg leading-relaxed"
          >
            Direct importer, no middleman. The best tire prices on Prince Edward Island, with free delivery when you order 4 or more.
          </motion.p>

          <div className="hidden sm:flex flex-wrap items-center gap-2.5 mb-7">
            {['Free delivery on 4+', 'Fast quotes', 'Wholesale prices'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-panel-2 px-4 py-1.5 text-sm font-medium text-ink-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar — bottom left */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 sm:bottom-10 left-0 right-0 grid grid-cols-2 sm:flex gap-x-6 gap-y-4 sm:gap-10 lg:gap-14"
          style={{ paddingInline: 'clamp(1.25rem, 5vw, 2.5rem)' }}
        >
          {[
            { value: '500+',   label: 'Tire Models' },
            { value: 'Free',   label: 'Delivery on 4+' },
            { value: '60km',   label: 'Delivery Radius' },
            { value: '24hr',   label: 'Avg. Response' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-2xl sm:text-3xl font-black text-[#e4322b] leading-none"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] text-ink-mute uppercase tracking-widest mt-0.5">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#e4322b] to-transparent" />
        <span className="text-[10px] text-ink-mute tracking-[0.18em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
