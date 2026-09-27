import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type ProjectTopologyProps = {
  type: 'bgp' | 'stp' | 'hsrp' | 'ipsec' | 'ipsla'
}

type NodeProps = {
  x: number
  y: number
  label: string
  sublabel?: string
  active?: boolean
}

function Node({
  x,
  y,
  label,
  sublabel,
  active = false,
}: NodeProps) {
  return (
    <g className="topology-node">
      <circle
        cx={x}
        cy={y}
        r="24"
        fill="#080d0e"
        stroke="#22d3ee"
        strokeOpacity={active ? '0.7' : '0.28'}
      />

      {active && (
        <circle
          className="node-pulse"
          cx={x}
          cy={y}
          r="31"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.16"
        />
      )}

      <text
        x={x}
        y={sublabel ? y - 2 : y + 3}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="7"
        fontWeight="600"
        letterSpacing="0.6"
      >
        {label}
      </text>

      {sublabel && (
        <text
          x={x}
          y={y + 10}
          textAnchor="middle"
          fill="#22d3ee"
          fillOpacity="0.7"
          fontSize="5"
          letterSpacing="0.7"
        >
          {sublabel}
        </text>
      )}
    </g>
  )
}

function Packet({
  path,
  duration = 2.8,
  delay = 0,
  className = '',
}: {
  path: string
  duration?: number
  delay?: number
  className?: string
}) {
  return (
    <g className={className}>
      <circle
        r="8"
        fill="#22d3ee"
        opacity="0.08"
      >
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={path}
        />
      </circle>

      <circle
        r="3"
        fill="#22d3ee"
        className="packet-dot"
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

function BgpTopology() {
  return (
    <>
      <g className="network-links">
        <path d="M70 180 L145 95" />
        <path d="M145 95 L240 180" />
        <path d="M70 180 L145 265" />
        <path d="M145 265 L240 180" />
        <path d="M240 180 L355 180" />
        <path d="M355 180 L445 105" />
        <path d="M355 180 L445 255" />
      </g>

      <g
        className="route-path"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        opacity="0.5"
      >
        <path d="M70 180 L145 95 L240 180 L355 180 L445 105" />
      </g>

      <Node x={70} y={180} label="LAN" sublabel="DHCP" />
      <Node x={145} y={95} label="R2" sublabel="OSPF" />
      <Node x={145} y={265} label="R3" sublabel="OSPF" />
      <Node x={240} y={180} label="EDGE" sublabel="OSPF" active />
      <Node x={355} y={180} label="ISP" sublabel="eBGP" active />
      <Node x={445} y={105} label="8.8.8.8" sublabel="WAN" />
      <Node x={445} y={255} label="1.1.1.1" sublabel="WAN" />

      <Packet
        path="M70 180 L145 95 L240 180 L355 180 L445 105"
        duration={3.8}
      />

      <Packet
        path="M445 105 L355 180 L240 180 L145 95 L70 180"
        duration={3.8}
        delay={1.9}
      />

      <text
        x="255"
        y="40"
        textAnchor="middle"
        className="topology-heading"
      >
        OSPF → eBGP → WAN
      </text>
    </>
  )
}

function StpTopology() {
  return (
    <>
      <g className="network-links">
        <path d="M255 85 L125 220" />
        <path d="M255 85 L385 220" />

        <path
          d="M125 220 L385 220"
          className="blocked-link"
        />

        <path d="M125 220 L125 295" />
        <path d="M385 220 L385 295" />
      </g>

      <Node
        x={255}
        y={85}
        label="SW1"
        sublabel="ROOT"
        active
      />

      <Node
        x={125}
        y={220}
        label="SW2"
        sublabel="FORWARD"
      />

      <Node
        x={385}
        y={220}
        label="SW3"
        sublabel="FORWARD"
      />

      <Node
        x={125}
        y={295}
        label="PC-A"
        sublabel="VLAN10"
      />

      <Node
        x={385}
        y={295}
        label="PC-B"
        sublabel="VLAN10"
      />

      <Packet
        path="M125 295 L125 220 L255 85 L385 220 L385 295"
        duration={4}
      />

      <g transform="translate(255 220)">
        <rect
          x="-35"
          y="-12"
          width="70"
          height="24"
          rx="12"
          fill="#0b0b0b"
          stroke="#22d3ee"
          strokeOpacity="0.18"
        />

        <text
          textAnchor="middle"
          y="3"
          fill="#71717a"
          fontSize="6"
          letterSpacing="1"
        >
          ALT PATH
        </text>
      </g>

      <text
        x="255"
        y="40"
        textAnchor="middle"
        className="topology-heading"
      >
        RAPID-PVST+ / LOOP PREVENTION
      </text>
    </>
  )
}

function HsrpTopology() {
  return (
    <>
      <g className="network-links">
        <path d="M255 285 L150 180" />
        <path d="M255 285 L360 180" />
        <path d="M150 180 L255 80" />
        <path d="M360 180 L255 80" />

        <path
          d="M150 180 L360 180"
          strokeDasharray="5 8"
          opacity="0.18"
        />
      </g>

      <Node
        x={255}
        y={285}
        label="LAN"
        sublabel="CLIENT"
      />

      <Node
        x={150}
        y={180}
        label="R1"
        sublabel="ACTIVE"
        active
      />

      <Node
        x={360}
        y={180}
        label="R2"
        sublabel="STANDBY"
      />

      <Node
        x={255}
        y={80}
        label="WAN"
        sublabel="UPSTREAM"
      />

      <Packet
        path="M255 285 L150 180 L255 80"
        duration={3}
      />

      <Packet
        path="M255 80 L150 180 L255 285"
        duration={3}
        delay={1.5}
      />

      <g transform="translate(255 180)">
        <rect
          x="-38"
          y="-14"
          width="76"
          height="28"
          rx="14"
          fill="#071012"
          stroke="#22d3ee"
          strokeOpacity="0.35"
        />

        <text
          y="-1"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6"
          letterSpacing="0.7"
        >
          VIRTUAL IP
        </text>

        <text
          y="8"
          textAnchor="middle"
          fill="#22d3ee"
          fontSize="5"
        >
          HSRP
        </text>
      </g>

      <text
        x="255"
        y="40"
        textAnchor="middle"
        className="topology-heading"
      >
        FIRST-HOP REDUNDANCY
      </text>
    </>
  )
}

function IpsecTopology() {
  return (
    <>
      <g className="network-links">
        <path d="M65 180 L150 180" />
        <path d="M360 180 L445 180" />
      </g>

      <path
        d="M150 180 L360 180"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="8"
        strokeOpacity="0.035"
      />

      <path
        d="M150 180 L360 180"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeDasharray="5 8"
        strokeOpacity="0.55"
        className="tunnel-line"
      />

      <Node
        x={65}
        y={180}
        label="LAN-A"
        sublabel="SITE-A"
      />

      <Node
        x={150}
        y={180}
        label="R1"
        sublabel="VPN"
        active
      />

      <Node
        x={360}
        y={180}
        label="R2"
        sublabel="VPN"
        active
      />

      <Node
        x={445}
        y={180}
        label="LAN-B"
        sublabel="SITE-B"
      />

      <Packet
        path="M65 180 L150 180 L360 180 L445 180"
        duration={3.8}
      />

      <Packet
        path="M445 180 L360 180 L150 180 L65 180"
        duration={3.8}
        delay={1.9}
      />

      <g transform="translate(255 135)">
        <rect
          x="-53"
          y="-15"
          width="106"
          height="30"
          rx="15"
          fill="#071012"
          stroke="#22d3ee"
          strokeOpacity="0.35"
        />

        <text
          y="-2"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6"
          letterSpacing="1"
        >
          IPSEC TUNNEL
        </text>

        <text
          y="8"
          textAnchor="middle"
          fill="#22d3ee"
          fontSize="5"
          letterSpacing="0.7"
        >
          IKE / ESP
        </text>
      </g>

      <text
        x="255"
        y="40"
        textAnchor="middle"
        className="topology-heading"
      >
        SITE-TO-SITE ENCRYPTED TRAFFIC
      </text>
    </>
  )
}

function IpSlaTopology() {
  return (
    <>
      <g className="network-links">
        <path d="M65 180 L145 180" />

        <path
          d="M145 180 L300 105 L445 180"
          className="primary-link"
        />

        <path
          d="M145 180 L300 260 L445 180"
          className="backup-link"
        />
      </g>

      <Node
        x={65}
        y={180}
        label="LAN"
        sublabel="CLIENT"
      />

      <Node
        x={145}
        y={180}
        label="EDGE"
        sublabel="IP SLA"
        active
      />

      <Node
        x={300}
        y={105}
        label="ISP-1"
        sublabel="PRIMARY"
        active
      />

      <Node
        x={300}
        y={260}
        label="ISP-2"
        sublabel="BACKUP"
      />

      <Node
        x={445}
        y={180}
        label="WAN"
        sublabel="TARGET"
      />

      <g className="primary-packets">
        <Packet
          path="M65 180 L145 180 L300 105 L445 180"
          duration={3.2}
        />
      </g>

      <g className="backup-packets">
        <Packet
          path="M65 180 L145 180 L300 260 L445 180"
          duration={3.2}
        />
      </g>

      <g
        className="failover-label"
        transform="translate(255 180)"
      >
        <rect
          x="-42"
          y="-13"
          width="84"
          height="26"
          rx="13"
          fill="#071012"
          stroke="#22d3ee"
          strokeOpacity="0.3"
        />

        <text
          textAnchor="middle"
          y="3"
          fill="#22d3ee"
          fontSize="5.5"
          letterSpacing="0.8"
        >
          TRACK OBJECT
        </text>
      </g>

      <text
        x="255"
        y="40"
        textAnchor="middle"
        className="topology-heading"
      >
        AUTOMATIC WAN FAILOVER
      </text>
    </>
  )
}

export default function ProjectTopology({
  type,
}: ProjectTopologyProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.node-pulse', {
        scale: 1.2,
        opacity: 0.05,
        transformOrigin: 'center',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.route-path', {
        strokeDashoffset: -24,
        duration: 2,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.tunnel-line', {
        strokeDashoffset: -26,
        duration: 1.8,
        repeat: -1,
        ease: 'none',
      })

      if (type === 'ipsla') {
        const timeline = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })

        timeline
          .set('.backup-packets', {
            opacity: 0,
          })
          .set('.primary-link', {
            stroke: '#22d3ee',
            strokeOpacity: 0.55,
            strokeWidth: 1.5,
          })
          .set('.backup-link', {
            stroke: '#22d3ee',
            strokeOpacity: 0.12,
            strokeWidth: 1,
            strokeDasharray: '5 8',
          })
          .to(
            {},
            {
              duration: 3,
            },
          )
          .to('.primary-link', {
            strokeOpacity: 0.08,
            duration: 0.4,
          })
          .to(
            '.primary-packets',
            {
              opacity: 0,
              duration: 0.3,
            },
            '<',
          )
          .to('.backup-link', {
            strokeOpacity: 0.7,
            duration: 0.5,
          })
          .to(
            '.backup-packets',
            {
              opacity: 1,
              duration: 0.4,
            },
            '<',
          )
          .to('.failover-label', {
            scale: 1.08,
            transformOrigin: 'center',
            duration: 0.25,
            yoyo: true,
            repeat: 1,
          })
          .to(
            {},
            {
              duration: 3,
            },
          )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [type])

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[260px] w-full overflow-hidden bg-[#070707]"
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-[60px]" />

      <svg
        viewBox="0 0 510 350"
        className="relative z-10 h-full min-h-[260px] w-full"
        aria-hidden="true"
      >
        <style>
          {`
            .network-links path {
              fill: none;
              stroke: #22d3ee;
              stroke-width: 1;
              stroke-opacity: 0.22;
            }

            .network-links .blocked-link {
              stroke-dasharray: 5 8;
              stroke-opacity: 0.10;
            }

            .topology-heading {
              fill: #52525b;
              font-size: 6px;
              font-family: monospace;
              letter-spacing: 1.5px;
            }

            .packet-dot {
              filter: drop-shadow(0 0 5px rgba(34, 211, 238, 0.9));
            }
          `}
        </style>

        {type === 'bgp' && <BgpTopology />}
        {type === 'stp' && <StpTopology />}
        {type === 'hsrp' && <HsrpTopology />}
        {type === 'ipsec' && <IpsecTopology />}
        {type === 'ipsla' && <IpSlaTopology />}
      </svg>

      <div className="pointer-events-none absolute bottom-3 left-4 z-20 flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </span>

        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-600">
          Live topology
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-3 right-4 z-20 font-mono text-[7px] uppercase tracking-[0.18em] text-cyan-400/50">
        Packet Flow →
      </div>
    </div>
  )
}