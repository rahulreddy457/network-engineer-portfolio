import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const mainPath =
  'M70 270 L205 270 L355 180 L515 270 L690 270'

const serverPath =
  'M355 180 L355 70'

const wanPath =
  'M355 180 L355 390'

export default function NetworkVisual() {
  const visualRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const visual = visualRef.current
    const scene = sceneRef.current

    if (!visual || !scene) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scene,
        {
          opacity: 0,
          scale: 0.96,
          rotateX: 3,
        },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
        },
      )

      gsap.to('.hero-core-ring-one', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 22,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.hero-core-ring-two', {
        rotate: -360,
        transformOrigin: '50% 50%',
        duration: 30,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.hero-pulse', {
        scale: 1.12,
        opacity: 0.04,
        transformOrigin: 'center',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-flow-line', {
        strokeDashoffset: -30,
        duration: 2,
        repeat: -1,
        ease: 'none',
      })
    }, visual)

    const rotateX = gsap.quickTo(scene, 'rotationX', {
      duration: 0.8,
      ease: 'power3.out',
    })

    const rotateY = gsap.quickTo(scene, 'rotationY', {
      duration: 0.8,
      ease: 'power3.out',
    })

    const moveX = gsap.quickTo(scene, 'x', {
      duration: 0.8,
      ease: 'power3.out',
    })

    const moveY = gsap.quickTo(scene, 'y', {
      duration: 0.8,
      ease: 'power3.out',
    })

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = visual.getBoundingClientRect()

      const x =
        (event.clientX - bounds.left) / bounds.width - 0.5

      const y =
        (event.clientY - bounds.top) / bounds.height - 0.5

      rotateY(x * 6)
      rotateX(y * -4)
      moveX(x * 6)
      moveY(y * 4)
    }

    const handleMouseLeave = () => {
      rotateY(0)
      rotateX(0)
      moveX(0)
      moveY(0)
    }

    visual.addEventListener('mousemove', handleMouseMove)
    visual.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      visual.removeEventListener('mousemove', handleMouseMove)
      visual.removeEventListener('mouseleave', handleMouseLeave)
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={visualRef}
      className="relative hidden h-[535px] w-full select-none xl:flex xl:items-start xl:justify-center"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[470px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.03] blur-[130px]" />

      {/* Scene */}
      <div
        ref={sceneRef}
        className="relative h-[535px] w-full max-w-[920px]"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Network status */}
        <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between rounded-full border border-white/[0.1] bg-black/65 px-6 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
            </span>

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-emerald-400">
              Network Operational
            </span>
          </div>

          <div className="flex items-center gap-6">
            <StatusText
              label="OSPF"
              value="FULL"
            />

            <StatusText
              label="BGP"
              value="ESTABLISHED"
            />
          </div>
        </div>

        {/* Topology */}
        <svg
          viewBox="0 0 760 460"
          className="absolute bottom-0 left-1/2 h-[465px] w-full max-w-[850px] -translate-x-1/2"
          aria-label="Animated enterprise network topology"
        >
          <defs>
            <filter
              id="heroPacketGlow"
              x="-300%"
              y="-300%"
              width="600%"
              height="600%"
            >
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient id="coreGradient">
              <stop
                offset="0%"
                stopColor="#0b1b1e"
              />

              <stop
                offset="100%"
                stopColor="#05090a"
              />
            </radialGradient>
          </defs>

          {/* Grid */}
          {Array.from({ length: 12 }).map((_, index) => (
            <line
              key={`v-${index}`}
              x1={40 + index * 60}
              y1="35"
              x2={40 + index * 60}
              y2="430"
              stroke="#22d3ee"
              strokeOpacity="0.04"
            />
          ))}

          {Array.from({ length: 7 }).map((_, index) => (
            <line
              key={`h-${index}`}
              x1="30"
              y1={70 + index * 55}
              x2="730"
              y2={70 + index * 55}
              stroke="#22d3ee"
              strokeOpacity="0.04"
            />
          ))}

          {/* Paths */}
          <NetworkPath path={mainPath} />
          <NetworkPath path={serverPath} />
          <NetworkPath path={wanPath} />

          {/* Packets */}
          <HeroPacket
            path={mainPath}
            duration={4.6}
            delay={0}
          />

          <HeroPacket
            path={mainPath}
            duration={4.6}
            delay={1.5}
          />

          <HeroPacket
            path={mainPath}
            duration={4.6}
            delay={3}
          />

          <HeroPacket
            path={serverPath}
            duration={2.5}
            delay={0.6}
            small
          />

          <HeroPacket
            path={wanPath}
            duration={2.8}
            delay={1.2}
            small
          />

          {/* Nodes */}
          <HeroNode
            x={70}
            y={270}
            radius={30}
            label="USER"
            sublabel="CLIENT"
            type="cyan"
          />

          <HeroNode
            x={205}
            y={270}
            radius={37}
            label="ACCESS"
            sublabel="SW-01"
            type="cyan"
          />

          {/* Core */}
          <g>
            <circle
              cx="355"
              cy="180"
              r="78"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.06"
              className="hero-pulse"
            />

            <circle
              cx="355"
              cy="180"
              r="68"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.13"
              strokeDasharray="3 10"
              className="hero-core-ring-one"
            />

            <circle
              cx="355"
              cy="180"
              r="57"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.22"
              strokeDasharray="8 7"
              className="hero-core-ring-two"
            />

            <circle
              cx="355"
              cy="180"
              r="45"
              fill="url(#coreGradient)"
              stroke="#22d3ee"
              strokeOpacity="0.85"
            />

            <circle
              cx="384"
              cy="151"
              r="4"
              fill="#34d399"
            />

            <text
              x="355"
              y="173"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="11"
              fontWeight="700"
            >
              CORE
            </text>

            <text
              x="355"
              y="191"
              textAnchor="middle"
              fill="#22d3ee"
              fontSize="7.5"
              fontWeight="700"
            >
              ROUTER
            </text>
          </g>

          <HeroNode
            x={515}
            y={270}
            radius={37}
            label="FIREWALL"
            sublabel="SECURE"
            type="green"
          />

          <HeroNode
            x={690}
            y={270}
            radius={31}
            label="INTERNET"
            sublabel="REACHABLE"
            type="green"
          />

          <HeroNode
            x={355}
            y={70}
            radius={28}
            label="SERVER"
            sublabel="LAN"
            type="cyan"
          />

          <HeroNode
            x={355}
            y={390}
            radius={28}
            label="WAN"
            sublabel="UPLINK"
            type="green"
          />

          {/* Protocols */}
          <ProtocolLabel
            x={127}
            y={250}
            label="802.1Q"
          />

          <ProtocolLabel
            x={263}
            y={210}
            label="OSPF"
          />

          <ProtocolLabel
            x={430}
            y={215}
            label="ACL"
          />

          <ProtocolLabel
            x={603}
            y={250}
            label="BGP"
          />
        </svg>

        {/* Routing card */}
        <div
          className="absolute right-0 top-[78px] z-20 w-[205px] rounded-xl border border-white/[0.1] bg-black/80 p-5 backdrop-blur-md"
          style={{
            transform: 'translateZ(35px)',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.55)]" />

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-400">
              Routing Stable
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <RoutingRow
              label="OSPF"
              value="FULL"
            />

            <RoutingRow
              label="BGP"
              value="ESTABLISHED"
            />

            <RoutingRow
              label="VLAN"
              value="ACTIVE"
            />

            <RoutingRow
              label="IPsec"
              value="TUNNEL ACTIVE"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function NetworkPath({
  path,
}: {
  path: string
}) {
  return (
    <>
      <path
        d={path}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.4"
        strokeOpacity="0.2"
      />

      <path
        d={path}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.3"
        strokeOpacity="0.62"
        strokeDasharray="4 10"
        className="hero-flow-line"
      />
    </>
  )
}

function HeroPacket({
  path,
  duration,
  delay,
  small = false,
}: {
  path: string
  duration: number
  delay: number
  small?: boolean
}) {
  return (
    <g>
      <circle
        r={small ? 7 : 9}
        fill="#22d3ee"
        opacity="0.06"
      >
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={path}
        />
      </circle>

      <circle
        r={small ? 2.5 : 3.5}
        fill="#22d3ee"
        filter="url(#heroPacketGlow)"
      >
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={path}
        />
      </circle>
    </g>
  )
}

function HeroNode({
  x,
  y,
  radius,
  label,
  sublabel,
  type,
}: {
  x: number
  y: number
  radius: number
  label: string
  sublabel: string
  type: 'cyan' | 'green'
}) {
  const color =
    type === 'green' ? '#34d399' : '#22d3ee'

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius + 7}
        fill="none"
        stroke={color}
        strokeOpacity="0.08"
      />

      <circle
        cx={x}
        cy={y}
        r={radius}
        fill="#071012"
        stroke={color}
        strokeOpacity="0.7"
      />

      <circle
        cx={x + radius * 0.7}
        cy={y - radius * 0.7}
        r="3.5"
        fill={color}
      />

      <text
        x={x}
        y={y - 4}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="9.5"
        fontWeight="700"
      >
        {label}
      </text>

      <text
        x={x}
        y={y + 13}
        textAnchor="middle"
        fill={color}
        fontSize="7"
        fontWeight="700"
      >
        {sublabel}
      </text>
    </g>
  )
}

function ProtocolLabel({
  x,
  y,
  label,
}: {
  x: number
  y: number
  label: string
}) {
  return (
    <g>
      <rect
        x={x - 25}
        y={y - 10}
        width="50"
        height="20"
        rx="10"
        fill="#050505"
        stroke="#22d3ee"
        strokeOpacity="0.3"
      />

      <text
        x={x}
        y={y + 3}
        textAnchor="middle"
        fill="#a1a1aa"
        fontSize="7"
        fontWeight="700"
      >
        {label}
      </text>
    </g>
  )
}

function StatusText({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <span className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-400">
      {label}

      <span className="ml-2 font-semibold text-emerald-400">
        {value}
      </span>
    </span>
  )
}

function RoutingRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-400">
        {label}
      </span>

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />

        <span className="whitespace-nowrap font-mono text-[9px] font-semibold uppercase text-emerald-400">
          {value}
        </span>
      </div>
    </div>
  )
}