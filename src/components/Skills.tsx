import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillDomains = [
  {
    id: 'routing',
    number: '01',
    title: 'Routing',
    subtitle: 'Layer 3',
    skills: [
      'IPv4 / IPv6',
      'Subnetting',
      'Static Routing',
      'OSPF',
      'EIGRP',
      'BGP',
      'HSRP',
      'VRRP',
    ],
  },
  {
    id: 'switching',
    number: '02',
    title: 'Switching',
    subtitle: 'Layer 2',
    skills: [
      'Cisco IOS',
      'VLANs',
      '802.1Q',
      'Inter-VLAN Routing',
      'STP / RSTP',
      'EtherChannel / LACP',
      'Port Security',
    ],
  },
  {
    id: 'services',
    number: '03',
    title: 'Network Services',
    subtitle: 'Infrastructure',
    skills: [
      'DHCP',
      'DNS',
      'NTP',
      'SNMP',
      'Syslog',
      'SSH',
      'NAT / PAT',
      'ACLs',
    ],
  },
  {
    id: 'security',
    number: '04',
    title: 'Network Security',
    subtitle: 'Secure Connectivity',
    skills: [
      'IPsec VPN',
      'Firewall',
      'ACLs',
      'Port Security',
      'Palo Alto NGFW',
      'SSH',
    ],
  },
  {
    id: 'troubleshooting',
    number: '05',
    title: 'Troubleshooting',
    subtitle: 'Operations',
    skills: [
      'Wireshark',
      'Ping',
      'Traceroute',
      'MTR',
      'Packet Analysis',
      'Routing Tables',
      'MAC / ARP Tables',
      'Log Analysis',
      'Fault Isolation',
      'RCA',
    ],
  },
  {
    id: 'automation',
    number: '06',
    title: 'Automation',
    subtitle: 'Network Automation',
    skills: [
      'Python',
      'Netmiko',
      'Ansible',
      'REST APIs',
      'JSON / YAML',
      'Git / GitHub',
      'Linux',
    ],
  },
  {
    id: 'platforms',
    number: '07',
    title: 'Platforms & Tools',
    subtitle: 'Lab Environment',
    skills: [
      'Cisco IOS',
      'GNS3',
      'Packet Tracer',
      'EVE-NG',
      'Linux',
      'AWS Networking',
      'Junos',
      'Aruba',
      'Palo Alto NGFW',
      'MobaXterm',
      'PuTTY',
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-heading',
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
        '.skill-domain',
        {
          opacity: 0,
          y: 35,
        },
        {
          scrollTrigger: {
            trigger: '.skills-domain-grid',
            start: 'top 82%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
        },
      )

      gsap.to('.skills-core-ring-one', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.skills-core-ring-two', {
        rotate: -360,
        transformOrigin: '50% 50%',
        duration: 28,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.skills-flow-line', {
        strokeDashoffset: -30,
        duration: 2,
        repeat: -1,
        ease: 'none',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white md:px-12 lg:px-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <div className="skills-heading mb-8 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            02
          </span>

          <div className="h-px w-12 bg-cyan-400/50" />

          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Technical Skills
          </span>
        </div>

        {/* Heading */}
        <div className="skills-heading mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400">
              Network Engineer Stack
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Built around the
              <br />

              <span className="text-cyan-400">
                network lifecycle.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-zinc-500">
            Routing, switching, network services, security,
            troubleshooting, automation, and platforms used across
            hands-on network labs and technical projects.
          </p>
        </div>

        {/* Architecture map */}
        <div className="skills-heading relative mb-8 hidden min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#050505] lg:block">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.11]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '35px 35px',
            }}
          />

          <svg
            viewBox="0 0 1100 360"
            className="absolute inset-0 h-full w-full"
            aria-label="Network Engineer technical skill architecture"
          >
            <defs>
              <filter
                id="skillsPacketGlow"
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

            {/* Connections */}
            <SkillConnection
              path="M550 180 L270 80"
              delay={0}
            />

            <SkillConnection
              path="M550 180 L270 180"
              delay={0.8}
            />

            <SkillConnection
              path="M550 180 L270 280"
              delay={1.6}
            />

            <SkillConnection
              path="M550 180 L830 80"
              delay={0.4}
            />

            <SkillConnection
              path="M550 180 L830 180"
              delay={1.2}
            />

            <SkillConnection
              path="M550 180 L830 280"
              delay={2}
            />

            {/* Central node */}
            <circle
              cx="550"
              cy="180"
              r="82"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.06"
            />

            <circle
              cx="550"
              cy="180"
              r="70"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.14"
              strokeDasharray="4 10"
              className="skills-core-ring-one"
            />

            <circle
              cx="550"
              cy="180"
              r="58"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.22"
              strokeDasharray="8 8"
              className="skills-core-ring-two"
            />

            <circle
              cx="550"
              cy="180"
              r="47"
              fill="#071012"
              stroke="#22d3ee"
              strokeOpacity="0.6"
            />

            <circle
              cx="583"
              cy="147"
              r="4"
              fill="#34d399"
            />

            <text
              x="550"
              y="173"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="700"
            >
              NETWORK
            </text>

            <text
              x="550"
              y="188"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="700"
            >
              ENGINEER
            </text>

            <text
              x="550"
              y="204"
              textAnchor="middle"
              fill="#22d3ee"
              fontSize="6"
              fontWeight="600"
            >
              CCNA CERTIFIED
            </text>

            {/* Domain nodes */}
            <ArchitectureNode
              x={270}
              y={80}
              title="ROUTING"
              code="L3"
            />

            <ArchitectureNode
              x={270}
              y={180}
              title="SWITCHING"
              code="L2"
            />

            <ArchitectureNode
              x={270}
              y={280}
              title="SERVICES"
              code="INFRA"
            />

            <ArchitectureNode
              x={830}
              y={80}
              title="SECURITY"
              code="SEC"
            />

            <ArchitectureNode
              x={830}
              y={180}
              title="TROUBLESHOOTING"
              code="OPS"
            />

            <ArchitectureNode
              x={830}
              y={280}
              title="AUTOMATION"
              code="AUTO"
            />
          </svg>
        </div>

        {/* Skill domains */}
        <div className="skills-domain-grid grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillDomains.map((domain, index) => (
            <SkillDomain
              key={domain.id}
              number={domain.number}
              title={domain.title}
              subtitle={domain.subtitle}
              skills={domain.skills}
              wide={index === skillDomains.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ */
/* DOMAIN CARD                                      */
/* ------------------------------------------------ */

function SkillDomain({
  number,
  title,
  subtitle,
  skills,
  wide = false,
}: {
  number: string
  title: string
  subtitle: string
  skills: string[]
  wide?: boolean
}) {
  return (
    <article
      className={`skill-domain group relative overflow-hidden rounded-[1.35rem] border border-white/[0.1] bg-[#090909] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-[#0a0d0e] ${
        wide ? 'xl:col-span-3' : ''
      }`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[230px] w-[230px] rounded-full bg-cyan-400/0 blur-[80px] transition duration-500 group-hover:bg-cyan-400/[0.035]" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-cyan-400">
              DOMAIN_{number}
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              {title}
            </h3>
          </div>

          <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-500">
            {subtitle}
          </span>
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-cyan-400/25 via-white/[0.06] to-transparent" />

        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/[0.11] bg-white/[0.025] px-3 py-2 font-mono text-[9px] font-medium tracking-[0.02em] text-zinc-400 transition duration-300 hover:border-cyan-400/35 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_7px_rgba(34,211,238,0.45)]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-500">
            Technical Domain
          </span>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------ */
/* ARCHITECTURE NODE                                */
/* ------------------------------------------------ */

function ArchitectureNode({
  x,
  y,
  title,
  code,
}: {
  x: number
  y: number
  title: string
  code: string
}) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="42"
        fill="#071012"
        stroke="#22d3ee"
        strokeOpacity="0.35"
      />

      <circle
        cx={x + 29}
        cy={y - 29}
        r="3.5"
        fill="#22d3ee"
      />

      <text
        x={x}
        y={y - 3}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={
          title === 'TROUBLESHOOTING' ? '6' : '7'
        }
        fontWeight="700"
      >
        {title}
      </text>

      <text
        x={x}
        y={y + 12}
        textAnchor="middle"
        fill="#22d3ee"
        fontSize="5.5"
        fontWeight="600"
      >
        {code}
      </text>
    </g>
  )
}

/* ------------------------------------------------ */
/* CONNECTION + PACKET                              */
/* ------------------------------------------------ */

function SkillConnection({
  path,
  delay,
}: {
  path: string
  delay: number
}) {
  return (
    <>
      <path
        d={path}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeOpacity="0.13"
      />

      <path
        d={path}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeOpacity="0.38"
        strokeDasharray="4 10"
        className="skills-flow-line"
      />

      <circle
        r="3"
        fill="#22d3ee"
        filter="url(#skillsPacketGlow)"
      >
        <animateMotion
          dur="3.5s"
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={path}
        />
      </circle>
    </>
  )
}