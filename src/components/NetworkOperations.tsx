import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type NetworkState = 'primary' | 'failover' | 'recovery'

const interfaces = [
  {
    name: 'Gi0/0',
    description: 'CORE-UPLINK',
    ip: '10.10.0.1/30',
    status: 'UP',
  },
  {
    name: 'Gi0/1',
    description: 'DIST-SW01',
    ip: '10.20.0.1/30',
    status: 'UP',
  },
  {
    name: 'Gi0/2',
    description: 'WAN-PRIMARY',
    ip: '192.168.12.1/24',
    status: 'UP',
  },
  {
    name: 'Gi0/3',
    description: 'WAN-BACKUP',
    ip: '192.168.13.1/24',
    status: 'STANDBY',
  },
]

const neighbors = [
  {
    protocol: 'OSPF',
    neighbor: '2.2.2.2',
    state: 'FULL',
    interface: 'Gi0/0',
  },
  {
    protocol: 'OSPF',
    neighbor: '3.3.3.3',
    state: 'FULL',
    interface: 'Gi0/1',
  },
  {
    protocol: 'BGP',
    neighbor: '192.168.18.8',
    state: 'ESTABLISHED',
    interface: 'WAN',
  },
]

export default function NetworkOperations() {
  const sectionRef = useRef<HTMLElement>(null)
  const [networkState, setNetworkState] =
    useState<NetworkState>('primary')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.operations-heading',
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
        '.noc-panel',
        {
          opacity: 0,
          y: 35,
        },
        {
          scrollTrigger: {
            trigger: '.noc-dashboard',
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

      gsap.to('.noc-dashed-link', {
        strokeDashoffset: -28,
        duration: 2,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.terminal-cursor-ops', {
        opacity: 0,
        duration: 0.55,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const runCycle = () => {
      setNetworkState('primary')

      timeout = setTimeout(() => {
        setNetworkState('failover')

        timeout = setTimeout(() => {
          setNetworkState('recovery')

          timeout = setTimeout(() => {
            runCycle()
          }, 3000)
        }, 4500)
      }, 5500)
    }

    runCycle()

    return () => clearTimeout(timeout)
  }, [])

  const usingBackup = networkState === 'failover'

  const primaryHealthy = networkState !== 'failover'

  return (
    <section
      id="operations"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white md:px-12 lg:px-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.02] blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="operations-heading mb-8 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            04
          </span>

          <div className="h-px w-12 bg-cyan-400/50" />

          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Network Operations
          </span>
        </div>

        <div className="operations-heading mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400">
              Network Operations Console
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Monitor. Detect.
              <br />

              <span className="text-cyan-400">
                Troubleshoot. Recover.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-7 text-zinc-500">
              A visual representation of the operational workflow used to
              verify connectivity, inspect routing state, isolate faults,
              and restore network availability.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.45)]" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-400">
                Monitoring Active
              </span>
            </div>
          </div>
        </div>

        {/* NOC Dashboard */}
        <div className="noc-dashboard overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#050505]">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 md:px-7">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-emerald-400">
                NOC Console Online
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-700">
                CORE-RTR-01
              </span>

              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-cyan-400/60">
                Monitoring
              </span>
            </div>
          </div>

          {/* Animated topology */}
          <div className="noc-panel relative min-h-[380px] overflow-hidden border-b border-white/[0.07]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
                `,
                backgroundSize: '35px 35px',
              }}
            />

            <svg
              viewBox="0 0 1000 380"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full"
              aria-label="IP SLA WAN failover simulation"
            >
              <defs>
                <filter
                  id="nocPacketGlow"
                  x="-200%"
                  y="-200%"
                  width="400%"
                  height="400%"
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
              </defs>

              {/* LAN → EDGE */}
              <path
                d="M105 190 L300 190"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeOpacity="0.38"
              />

              {/* PRIMARY */}
              <path
                d="M300 190 L500 105 L700 190"
                fill="none"
                stroke={
                  primaryHealthy
                    ? '#34d399'
                    : '#f87171'
                }
                strokeWidth={primaryHealthy ? 1.7 : 1.2}
                strokeOpacity={primaryHealthy ? 0.65 : 0.25}
                strokeDasharray={
                  primaryHealthy ? undefined : '5 9'
                }
                className={
                  primaryHealthy ? '' : 'noc-dashed-link'
                }
              />

              {/* BACKUP */}
              <path
                d="M300 190 L500 275 L700 190"
                fill="none"
                stroke={
                  usingBackup
                    ? '#34d399'
                    : '#fbbf24'
                }
                strokeWidth={usingBackup ? 1.7 : 1}
                strokeOpacity={usingBackup ? 0.65 : 0.22}
                strokeDasharray={
                  usingBackup ? undefined : '5 9'
                }
                className={
                  usingBackup ? '' : 'noc-dashed-link'
                }
              />

              {/* WAN → INTERNET */}
              <path
                d="M700 190 L895 190"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeOpacity="0.38"
              />

              {/* PACKET PATH */}

              {usingBackup ? (
                <>
                  <Packet
                    path="M105 190 L300 190 L500 275 L700 190 L895 190"
                    duration={4}
                    delay={0}
                  />

                  <Packet
                    path="M105 190 L300 190 L500 275 L700 190 L895 190"
                    duration={4}
                    delay={1.35}
                  />

                  <Packet
                    path="M105 190 L300 190 L500 275 L700 190 L895 190"
                    duration={4}
                    delay={2.7}
                  />
                </>
              ) : (
                <>
                  <Packet
                    path="M105 190 L300 190 L500 105 L700 190 L895 190"
                    duration={4}
                    delay={0}
                  />

                  <Packet
                    path="M105 190 L300 190 L500 105 L700 190 L895 190"
                    duration={4}
                    delay={1.35}
                  />

                  <Packet
                    path="M105 190 L300 190 L500 105 L700 190 L895 190"
                    duration={4}
                    delay={2.7}
                  />
                </>
              )}

              {/* LAN */}
              <NetworkNode
                x={105}
                y={190}
                label="LAN"
                sublabel="VLAN 10"
                color="cyan"
              />

              {/* EDGE */}
              <NetworkNode
                x={300}
                y={190}
                label="EDGE"
                sublabel="IP SLA"
                color="cyan"
                large
              />

              {/* ISP-1 */}
              <NetworkNode
                x={500}
                y={105}
                label="ISP-1"
                sublabel={
                  primaryHealthy ? 'PRIMARY' : 'DOWN'
                }
                color={
                  primaryHealthy ? 'green' : 'red'
                }
              />

              {/* ISP-2 */}
              <NetworkNode
                x={500}
                y={275}
                label="ISP-2"
                sublabel={
                  usingBackup ? 'ACTIVE' : 'STANDBY'
                }
                color={
                  usingBackup ? 'green' : 'amber'
                }
              />

              {/* WAN */}
              <NetworkNode
                x={700}
                y={190}
                label="WAN"
                sublabel="UPSTREAM"
                color="cyan"
              />

              {/* INTERNET */}
              <NetworkNode
                x={895}
                y={190}
                label="INTERNET"
                sublabel="REACHABLE"
                color="green"
              />
            </svg>

            {/* State message */}
            <div className="absolute bottom-5 left-5">
              {networkState === 'primary' && (
                <div className="rounded-md border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2.5">
                  <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-emerald-400">
                    NORMAL // TRAFFIC USING PRIMARY PATH
                  </p>
                </div>
              )}

              {networkState === 'failover' && (
                <div className="rounded-md border border-red-400/20 bg-red-400/[0.05] px-4 py-2.5">
                  <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-red-400">
                    ALERT // PRIMARY UNREACHABLE — BACKUP ACTIVE
                  </p>
                </div>
              )}

              {networkState === 'recovery' && (
                <div className="rounded-md border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2.5">
                  <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-emerald-400">
                    RECOVERY // PRIMARY RESTORED — FAILBACK COMPLETE
                  </p>
                </div>
              )}
            </div>

            {/* Tracking badge */}
            <div className="absolute bottom-5 right-5 rounded-full border border-white/[0.07] bg-black/50 px-4 py-2 backdrop-blur-sm">
              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-600">
                IP SLA / OBJECT TRACKING
              </span>
            </div>
          </div>

          {/* Status cards */}
          <div className="grid border-b border-white/[0.07] sm:grid-cols-4">
            <StatusCard
              label="Primary WAN"
              value={
                primaryHealthy ? 'UP' : 'DOWN'
              }
              status={
                primaryHealthy ? 'green' : 'red'
              }
            />

            <StatusCard
              label="Backup WAN"
              value={
                usingBackup ? 'ACTIVE' : 'STANDBY'
              }
              status={
                usingBackup ? 'green' : 'amber'
              }
            />

            <StatusCard
              label="IP SLA"
              value={
                primaryHealthy
                  ? 'REACHABLE'
                  : 'FAILED'
              }
              status={
                primaryHealthy ? 'green' : 'red'
              }
            />

            <StatusCard
              label="Internet"
              value="REACHABLE"
              status="green"
              last
            />
          </div>

          {/* Operational data */}
          <div className="grid lg:grid-cols-2">
            {/* Interfaces */}
            <div className="noc-panel border-b border-white/[0.07] lg:border-b-0 lg:border-r">
              <PanelHeader
                title="Interface Status"
                code="show ip interface brief"
              />

              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="px-5 py-3 font-mono text-[7px] font-normal uppercase tracking-[0.15em] text-zinc-700">
                        Interface
                      </th>

                      <th className="px-5 py-3 font-mono text-[7px] font-normal uppercase tracking-[0.15em] text-zinc-700">
                        Description
                      </th>

                      <th className="px-5 py-3 font-mono text-[7px] font-normal uppercase tracking-[0.15em] text-zinc-700">
                        IP Address
                      </th>

                      <th className="px-5 py-3 font-mono text-[7px] font-normal uppercase tracking-[0.15em] text-zinc-700">
                        State
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {interfaces.map((item) => {
                      let status = item.status

                      if (
                        item.description === 'WAN-PRIMARY' &&
                        !primaryHealthy
                      ) {
                        status = 'DOWN'
                      }

                      if (
                        item.description === 'WAN-BACKUP' &&
                        usingBackup
                      ) {
                        status = 'UP'
                      }

                      return (
                        <tr
                          key={item.name}
                          className="border-b border-white/[0.04] last:border-b-0"
                        >
                          <td className="px-5 py-4 font-mono text-[9px] text-zinc-300">
                            {item.name}
                          </td>

                          <td className="px-5 py-4 font-mono text-[8px] text-zinc-600">
                            {item.description}
                          </td>

                          <td className="px-5 py-4 font-mono text-[8px] text-zinc-500">
                            {item.ip}
                          </td>

                          <td className="px-5 py-4">
                            <TableStatus status={status} />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Routing neighbors */}
            <div className="noc-panel">
              <PanelHeader
                title="Routing Neighbors"
                code="protocol adjacency"
              />

              <div>
                {neighbors.map((neighbor) => (
                  <div
                    key={`${neighbor.protocol}-${neighbor.neighbor}`}
                    className="grid grid-cols-[0.65fr_1fr_1fr_0.7fr] items-center gap-3 border-b border-white/[0.05] px-5 py-5 last:border-b-0"
                  >
                    <span className="font-mono text-[8px] text-cyan-400">
                      {neighbor.protocol}
                    </span>

                    <span className="font-mono text-[8px] text-zinc-400">
                      {neighbor.neighbor}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.45)]" />

                      <span className="font-mono text-[8px] text-emerald-400">
                        {neighbor.state}
                      </span>
                    </div>

                    <span className="text-right font-mono text-[7px] text-zinc-700">
                      {neighbor.interface}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CLI + event stream */}
          <div className="grid border-t border-white/[0.07] lg:grid-cols-[1.1fr_0.9fr]">
            {/* CLI */}
            <div className="noc-panel border-b border-white/[0.07] lg:border-b-0 lg:border-r">
              <PanelHeader
                title="Network CLI"
                code="CORE-RTR-01"
              />

              <div className="min-h-[270px] bg-[#030303] p-5 font-mono text-[9px] leading-6">
                <p className="text-zinc-600">
                  <span className="text-cyan-400">
                    CORE-RTR-01#
                  </span>{' '}
                  show ip route
                </p>

                <p className="text-zinc-700">
                  Gateway of last resort is{' '}
                  {usingBackup
                    ? '192.168.13.3'
                    : '192.168.12.2'}
                </p>

                <p className="mt-2 text-zinc-500">
                  <span className="text-cyan-400/70">
                    O
                  </span>{' '}
                  10.10.0.0/16 via 192.168.12.2
                </p>

                <p className="text-zinc-500">
                  <span className="text-cyan-400/70">
                    B
                  </span>{' '}
                  8.8.8.8/32 via 192.168.18.8
                </p>

                <p className="text-zinc-500">
                  <span className="text-cyan-400/70">
                    C
                  </span>{' '}
                  192.168.1.0/24 is directly connected
                </p>

                <p className="mt-4 text-zinc-600">
                  <span className="text-cyan-400">
                    CORE-RTR-01#
                  </span>{' '}
                  show track
                </p>

                {usingBackup ? (
                  <>
                    <p className="text-red-400/80">
                      Track 1 IP SLA 1 reachability: DOWN
                    </p>

                    <p className="text-emerald-400/80">
                      Floating static route installed
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-emerald-400/80">
                      Track 1 IP SLA 1 reachability: UP
                    </p>

                    <p className="text-zinc-600">
                      Primary static route installed
                    </p>
                  </>
                )}

                <p className="mt-4 text-cyan-400">
                  CORE-RTR-01#
                  <span className="terminal-cursor-ops ml-1 inline-block h-3 w-[5px] translate-y-[2px] bg-cyan-400" />
                </p>
              </div>
            </div>

            {/* Events */}
            <div className="noc-panel">
              <PanelHeader
                title="Event Stream"
                code="SYSLOG"
              />

              <div>
                <LogRow
                  time="22:14:03"
                  type="INFO"
                  color="cyan"
                  message="OSPF adjacency established with 2.2.2.2"
                />

                <LogRow
                  time="22:14:08"
                  type="UP"
                  color="green"
                  message="BGP neighbor 192.168.18.8 established"
                />

                {usingBackup ? (
                  <>
                    <LogRow
                      time="22:14:16"
                      type="DOWN"
                      color="red"
                      message="IP SLA primary target unreachable"
                    />

                    <LogRow
                      time="22:14:17"
                      type="FAILOVER"
                      color="amber"
                      message="Backup route installed through ISP-2"
                    />

                    <LogRow
                      time="22:14:18"
                      type="UP"
                      color="green"
                      message="Connectivity restored through backup path"
                    />
                  </>
                ) : (
                  <>
                    <LogRow
                      time="22:14:16"
                      type="UP"
                      color="green"
                      message="IP SLA primary target reachable"
                    />

                    <LogRow
                      time="22:14:21"
                      type="PASS"
                      color="green"
                      message="End-to-end connectivity verified"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div className="operations-heading mt-10 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-4">
          {[
            ['01', 'Configure', 'Implement network services'],
            ['02', 'Verify', 'Validate operational state'],
            ['03', 'Troubleshoot', 'Isolate network faults'],
            ['04', 'Recover', 'Restore connectivity'],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="bg-[#080808] p-5"
            >
              <span className="font-mono text-[7px] text-cyan-400">
                {number}
              </span>

              <p className="mt-4 text-sm font-medium text-white">
                {title}
              </p>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="operations-heading mt-7 flex flex-wrap gap-x-7 gap-y-4">
          <StatusLegend
            color="green"
            label="Up / Operational"
          />

          <StatusLegend
            color="amber"
            label="Standby / Backup"
          />

          <StatusLegend
            color="red"
            label="Down / Fault"
          />

          <StatusLegend
            color="cyan"
            label="Packet Traffic"
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ */
/* PACKET                                           */
/* ------------------------------------------------ */

function Packet({
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
      {/* Glow */}
      <circle
        r="10"
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

      {/* Packet */}
      <circle
        r="4"
        fill="#22d3ee"
        filter="url(#nocPacketGlow)"
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

/* ------------------------------------------------ */
/* NETWORK NODE                                     */
/* ------------------------------------------------ */

function NetworkNode({
  x,
  y,
  label,
  sublabel,
  color,
  large = false,
}: {
  x: number
  y: number
  label: string
  sublabel: string
  color: 'green' | 'amber' | 'red' | 'cyan'
  large?: boolean
}) {
  const colors = {
    green: '#34d399',
    amber: '#fbbf24',
    red: '#f87171',
    cyan: '#22d3ee',
  }

  const activeColor = colors[color]

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={large ? 47 : 39}
        fill="#080d0e"
        stroke={activeColor}
        strokeOpacity="0.55"
      />

      <circle
        cx={x + (large ? 31 : 26)}
        cy={y - (large ? 31 : 26)}
        r="4"
        fill={activeColor}
      />

      <text
        x={x}
        y={y - 3}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={large ? '10' : '8'}
        fontWeight="700"
      >
        {label}
      </text>

      <text
        x={x}
        y={y + 14}
        textAnchor="middle"
        fill={activeColor}
        fontSize="6"
        fontWeight="600"
      >
        {sublabel}
      </text>
    </g>
  )
}

/* ------------------------------------------------ */
/* STATUS CARD                                      */
/* ------------------------------------------------ */

function StatusCard({
  label,
  value,
  status,
  last = false,
}: {
  label: string
  value: string
  status: 'green' | 'amber' | 'red'
  last?: boolean
}) {
  const colors = {
    green: {
      dot: 'bg-emerald-400',
      text: 'text-emerald-400',
    },
    amber: {
      dot: 'bg-amber-400',
      text: 'text-amber-400',
    },
    red: {
      dot: 'bg-red-400',
      text: 'text-red-400',
    },
  }

  return (
    <div
      className={`bg-[#070707] p-4 ${
        !last
          ? 'border-b border-white/[0.06] sm:border-b-0 sm:border-r'
          : ''
      }`}
    >
      <p className="font-mono text-[7px] uppercase tracking-[0.17em] text-zinc-700">
        {label}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${colors[status].dot}`}
        />

        <span
          className={`font-mono text-[8px] uppercase tracking-[0.1em] ${colors[status].text}`}
        >
          {value}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------ */
/* PANEL HEADER                                     */
/* ------------------------------------------------ */

function PanelHeader({
  title,
  code,
}: {
  title: string
  code: string
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] bg-[#070707] px-5 py-3.5">
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
          {title}
        </span>
      </div>

      <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-700">
        {code}
      </span>
    </div>
  )
}

/* ------------------------------------------------ */
/* TABLE STATUS                                     */
/* ------------------------------------------------ */

function TableStatus({
  status,
}: {
  status: string
}) {
  let dot = 'bg-emerald-400'
  let text = 'text-emerald-400'

  if (status === 'STANDBY') {
    dot = 'bg-amber-400'
    text = 'text-amber-400'
  }

  if (status === 'DOWN') {
    dot = 'bg-red-400'
    text = 'text-red-400'
  }

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-1.5 w-1.5 rounded-full ${dot}`}
      />

      <span
        className={`font-mono text-[8px] ${text}`}
      >
        {status}
      </span>
    </div>
  )
}

/* ------------------------------------------------ */
/* LOG ROW                                          */
/* ------------------------------------------------ */

function LogRow({
  time,
  type,
  color,
  message,
}: {
  time: string
  type: string
  color: 'green' | 'cyan' | 'red' | 'amber'
  message: string
}) {
  const colors = {
    green: {
      dot: 'bg-emerald-400',
      text: 'text-emerald-400',
    },
    cyan: {
      dot: 'bg-cyan-400',
      text: 'text-cyan-400',
    },
    red: {
      dot: 'bg-red-400',
      text: 'text-red-400',
    },
    amber: {
      dot: 'bg-amber-400',
      text: 'text-amber-400',
    },
  }

  return (
    <div className="grid grid-cols-[60px_65px_1fr] gap-3 border-b border-white/[0.05] px-5 py-4 last:border-b-0">
      <span className="font-mono text-[7px] text-zinc-700">
        {time}
      </span>

      <div className="flex items-center gap-2">
        <span
          className={`h-1 w-1 rounded-full ${colors[color].dot}`}
        />

        <span
          className={`font-mono text-[7px] ${colors[color].text}`}
        >
          {type}
        </span>
      </div>

      <span className="font-mono text-[8px] leading-5 text-zinc-500">
        {message}
      </span>
    </div>
  )
}

/* ------------------------------------------------ */
/* LEGEND                                           */
/* ------------------------------------------------ */

function StatusLegend({
  color,
  label,
}: {
  color: 'green' | 'amber' | 'red' | 'cyan'
  label: string
}) {
  const colors = {
    green: 'bg-emerald-400',
    amber: 'bg-amber-400',
    red: 'bg-red-400',
    cyan: 'bg-cyan-400',
  }

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-1.5 w-1.5 rounded-full ${colors[color]}`}
      />

      <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600">
        {label}
      </span>
    </div>
  )
}