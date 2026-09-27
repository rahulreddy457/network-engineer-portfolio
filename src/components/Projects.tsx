import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const githubBase =
  'https://github.com/rahulreddy457/enterprise-network-engineering-labs/tree/main'

type Project = {
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  folder: string
  topology: 'isp' | 'switching' | 'hsrp' | 'vpn' | 'failover'
}

const projects: Project[] = [
  {
    number: '01',
    title: 'ISP Routing',
    category: 'OSPF + BGP',
    description:
      'Multi-router ISP-style network implementing multi-area OSPF, eBGP, route redistribution, DHCP, end-to-end verification, and troubleshooting.',
    technologies: ['OSPF', 'BGP', 'DHCP', 'Cisco IOS'],
    folder: '01-isp-routing-bgp-ospf',
    topology: 'isp',
  },
  {
    number: '02',
    title: 'Enterprise Switching',
    category: 'VLAN + Rapid-PVST+',
    description:
      'Enterprise Layer 2 topology implementing VLAN segmentation, Rapid-PVST+, root bridge control, PortFast, BPDU Guard, failover testing, and troubleshooting.',
    technologies: ['VLAN', 'RSTP', 'PortFast', 'BPDU Guard'],
    folder: '02-enterprise-switching-stp',
    topology: 'switching',
  },
  {
    number: '03',
    title: 'First-Hop Redundancy',
    category: 'EIGRP + HSRP',
    description:
      'Redundant gateway lab using EIGRP and HSRP to provide gateway availability, active and standby router roles, preemption, and failover verification.',
    technologies: ['EIGRP', 'HSRP', 'Failover', 'Cisco IOS'],
    folder: '03-hsrp-first-hop-redundancy',
    topology: 'hsrp',
  },
  {
    number: '04',
    title: 'Site-to-Site IPsec VPN',
    category: 'Secure WAN',
    description:
      'Policy-based site-to-site IPsec VPN lab implementing IKE and IPsec configuration with encrypted traffic verification across two network sites.',
    technologies: ['IPsec', 'IKE', 'VPN', 'Security'],
    folder: '04-site-to-site-ipsec-vpn',
    topology: 'vpn',
  },
  {
    number: '05',
    title: 'WAN Failover',
    category: 'IP SLA + Object Tracking',
    description:
      'Dual-path WAN design using IP SLA, object tracking, and floating static routes to provide automatic path failover and failback with connectivity verification.',
    technologies: ['IP SLA', 'Tracking', 'Static Routing', 'DHCP'],
    folder: '05-static-routing-ip-sla-failover',
    topology: 'failover',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-heading',
        {
          opacity: 0,
          y: 35,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
        },
      )

      gsap.fromTo(
        '.project-card',
        {
          opacity: 0,
          y: 45,
        },
        {
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 82%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
        },
      )

      gsap.to('.project-flow-line', {
        strokeDashoffset: -28,
        duration: 2,
        repeat: -1,
        ease: 'none',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white md:px-12 lg:px-20"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.02] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <div className="projects-heading mb-8 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            03
          </span>

          <div className="h-px w-12 bg-cyan-400/50" />

          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Featured Network Labs
          </span>
        </div>

        {/* Heading */}
        <div className="projects-heading mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400">
              Hands-On Network Portfolio
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Designed. Configured.
              <br />

              <span className="text-cyan-400">
                Tested. Verified.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-7 text-zinc-500">
              Hands-on network labs covering dynamic routing, enterprise
              switching, gateway redundancy, secure connectivity, and
              automated WAN failover.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-emerald-400">
                5 Labs Verified
              </span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="projects-grid grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>

        {/* GitHub footer */}
        <div className="projects-heading mt-10 flex flex-col justify-between gap-6 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-500">
              Network lab repository online
            </span>
          </div>

          <a
            href="https://github.com/rahulreddy457/enterprise-network-engineering-labs"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400 transition duration-300 hover:text-cyan-400"
          >
            View Complete Repository

            <span className="transition duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project
  featured: boolean
}) {
  const projectUrl =
    `${githubBase}/${project.folder}`

  return (
    <article
      className={`project-card group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#080808] transition duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)] ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Top status */}
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-25" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.45)]" />
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-400">
            Lab Operational
          </span>
        </div>

        <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-zinc-700">
          LAB_{project.number}
        </span>
      </div>

      <div
        className={
          featured
            ? 'grid lg:grid-cols-[1fr_1fr]'
            : ''
        }
      >
        {/* Topology */}
        <div
          className={`relative overflow-hidden border-b border-white/[0.06] ${
            featured
              ? 'min-h-[330px] lg:border-b-0 lg:border-r'
              : 'min-h-[260px]'
          }`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />

          <MiniTopology
            type={project.topology}
          />

          <div className="absolute bottom-4 left-4 rounded-full border border-white/[0.07] bg-black/50 px-3 py-2 backdrop-blur-sm">
            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-cyan-400">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 md:p-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-400">
                / PROJECT {project.number}
              </span>

              <div className="h-px w-8 bg-cyan-400/25" />
            </div>

            <h3
              className={`mt-6 font-semibold tracking-tight text-white ${
                featured
                  ? 'text-3xl md:text-4xl'
                  : 'text-2xl'
              }`}
            >
              {project.title}
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.13em] text-zinc-500 transition duration-300 group-hover:border-cyan-400/15"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="mt-auto pt-8">
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border-b border-cyan-400/25 pb-2 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Open Lab on GitHub

              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------ */
/* MINI TOPOLOGIES                                  */
/* ------------------------------------------------ */

function MiniTopology({
  type,
}: {
  type: Project['topology']
}) {
  if (type === 'isp') {
    const path =
      'M70 150 L190 150 L315 85 L440 150 L570 150'

    return (
      <TopologySVG>
        <TopologyPath path={path} />

        <TopologyPacket
          path={path}
          duration={4}
          delay={0}
        />

        <TopologyPacket
          path={path}
          duration={4}
          delay={2}
        />

        <TopologyNode
          x={70}
          y={150}
          label="LAN"
          sublabel="DHCP"
        />

        <TopologyNode
          x={190}
          y={150}
          label="EDGE"
          sublabel="OSPF"
        />

        <TopologyNode
          x={315}
          y={85}
          label="ISP"
          sublabel="BGP"
          green
        />

        <TopologyNode
          x={440}
          y={150}
          label="CORE"
          sublabel="OSPF"
        />

        <TopologyNode
          x={570}
          y={150}
          label="INET"
          sublabel="UP"
          green
        />
      </TopologySVG>
    )
  }

  if (type === 'switching') {
    const pathOne =
      'M320 70 L180 185 L320 220'

    const pathTwo =
      'M320 70 L460 185 L320 220'

    const crossPath =
      'M180 185 L460 185'

    return (
      <TopologySVG>
        <TopologyPath path={pathOne} />

        <TopologyPath path={pathTwo} />

        <TopologyPath
          path={crossPath}
          standby
        />

        <TopologyPacket
          path={pathOne}
          duration={3}
          delay={0}
        />

        <TopologyPacket
          path={pathTwo}
          duration={3}
          delay={1.4}
        />

        <TopologyNode
          x={320}
          y={70}
          label="SW1"
          sublabel="ROOT"
          green
        />

        <TopologyNode
          x={180}
          y={185}
          label="SW2"
          sublabel="FWD"
        />

        <TopologyNode
          x={460}
          y={185}
          label="SW3"
          sublabel="FWD"
        />

        <TopologyNode
          x={320}
          y={220}
          label="VLAN"
          sublabel="10"
        />
      </TopologySVG>
    )
  }

  if (type === 'hsrp') {
    const activePath =
      'M90 150 L250 85 L500 150'

    const standbyPath =
      'M90 150 L250 215 L500 150'

    return (
      <TopologySVG>
        <TopologyPath path={activePath} />

        <TopologyPath
          path={standbyPath}
          standby
        />

        <TopologyPacket
          path={activePath}
          duration={3.5}
          delay={0}
        />

        <TopologyPacket
          path={activePath}
          duration={3.5}
          delay={1.7}
        />

        <TopologyNode
          x={90}
          y={150}
          label="LAN"
          sublabel="VIP"
        />

        <TopologyNode
          x={250}
          y={85}
          label="R1"
          sublabel="ACTIVE"
          green
        />

        <TopologyNode
          x={250}
          y={215}
          label="R2"
          sublabel="STANDBY"
          amber
        />

        <TopologyNode
          x={500}
          y={150}
          label="WAN"
          sublabel="UP"
          green
        />
      </TopologySVG>
    )
  }

  if (type === 'vpn') {
    const path =
      'M100 150 L235 150 L405 150 L540 150'

    return (
      <TopologySVG>
        <TopologyPath path={path} />

        <TopologyPacket
          path={path}
          duration={4}
          delay={0}
        />

        <TopologyPacket
          path={path}
          duration={4}
          delay={2}
        />

        <TopologyNode
          x={100}
          y={150}
          label="SITE-A"
          sublabel="LAN"
        />

        <TopologyNode
          x={235}
          y={150}
          label="VPN"
          sublabel="IKE"
          green
        />

        <g>
          <rect
            x="300"
            y="127"
            width="40"
            height="46"
            rx="8"
            fill="#071012"
            stroke="#34d399"
            strokeOpacity="0.45"
          />

          <rect
            x="310"
            y="140"
            width="20"
            height="17"
            rx="3"
            fill="none"
            stroke="#34d399"
            strokeOpacity="0.8"
          />

          <path
            d="M314 140 V135 C314 127 326 127 326 135 V140"
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
          />

          <circle
            cx="320"
            cy="149"
            r="2"
            fill="#34d399"
          />

          <text
            x="320"
            y="167"
            textAnchor="middle"
            fill="#34d399"
            fontSize="5"
          >
            IPSEC
          </text>
        </g>

        <TopologyNode
          x={405}
          y={150}
          label="VPN"
          sublabel="ESP"
          green
        />

        <TopologyNode
          x={540}
          y={150}
          label="SITE-B"
          sublabel="LAN"
        />
      </TopologySVG>
    )
  }

  const primaryPath =
    'M90 150 L250 80 L500 150'

  const backupPath =
    'M90 150 L250 220 L500 150'

  return (
    <TopologySVG>
      <TopologyPath path={primaryPath} />

      <TopologyPath
        path={backupPath}
        standby
      />

      <TopologyPacket
        path={primaryPath}
        duration={3.5}
        delay={0}
      />

      <TopologyPacket
        path={primaryPath}
        duration={3.5}
        delay={1.7}
      />

      <TopologyNode
        x={90}
        y={150}
        label="EDGE"
        sublabel="IP SLA"
      />

      <TopologyNode
        x={250}
        y={80}
        label="ISP-1"
        sublabel="PRIMARY"
        green
      />

      <TopologyNode
        x={250}
        y={220}
        label="ISP-2"
        sublabel="BACKUP"
        amber
      />

      <TopologyNode
        x={500}
        y={150}
        label="INET"
        sublabel="UP"
        green
      />
    </TopologySVG>
  )
}

function TopologySVG({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <svg
      viewBox="0 0 640 300"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="projectPacketGlow"
          x="-300%"
          y="-300%"
          width="600%"
          height="600%"
        >
          <feGaussianBlur
            stdDeviation="3"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {children}
    </svg>
  )
}

function TopologyPath({
  path,
  standby = false,
}: {
  path: string
  standby?: boolean
}) {
  return (
    <>
      <path
        d={path}
        fill="none"
        stroke={standby ? '#fbbf24' : '#22d3ee'}
        strokeWidth="1"
        strokeOpacity={standby ? 0.18 : 0.2}
      />

      <path
        d={path}
        fill="none"
        stroke={standby ? '#fbbf24' : '#22d3ee'}
        strokeWidth="1"
        strokeOpacity={standby ? 0.25 : 0.45}
        strokeDasharray="4 9"
        className="project-flow-line"
      />
    </>
  )
}

function TopologyPacket({
  path,
  duration,
  delay,
}: {
  path: string
  duration: number
  delay: number
}) {
  return (
    <g>
      <circle
        r="8"
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
        r="3"
        fill="#22d3ee"
        filter="url(#projectPacketGlow)"
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

function TopologyNode({
  x,
  y,
  label,
  sublabel,
  green = false,
  amber = false,
}: {
  x: number
  y: number
  label: string
  sublabel: string
  green?: boolean
  amber?: boolean
}) {
  const color = green
    ? '#34d399'
    : amber
      ? '#fbbf24'
      : '#22d3ee'

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="34"
        fill="#071012"
        stroke={color}
        strokeOpacity="0.5"
      />

      <circle
        cx={x + 23}
        cy={y - 23}
        r="3.5"
        fill={color}
      />

      <text
        x={x}
        y={y - 3}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="8"
        fontWeight="700"
      >
        {label}
      </text>

      <text
        x={x}
        y={y + 12}
        textAnchor="middle"
        fill={color}
        fontSize="5.5"
        fontWeight="600"
      >
        {sublabel}
      </text>
    </g>
  )
}