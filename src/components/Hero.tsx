import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import NetworkVisual from './NetworkVisual.tsx'

const protocols = ['OSPF', 'BGP', 'EIGRP', 'HSRP', 'IPsec', 'VLAN']

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [packetCount, setPacketCount] = useState(3423)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      timeline
        .fromTo(
          '.hero-status',
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
        )
        .fromTo(
          '.hero-title-line',
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
          },
          '-=0.35',
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.45',
        )
        .fromTo(
          '.hero-protocol',
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
          },
          '-=0.35',
        )
        .fromTo(
          '.hero-action',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
          },
          '-=0.25',
        )
        .fromTo(
          '.hero-network-console',
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          '-=0.45',
        )

      gsap.to('.hero-traffic-bar', {
        scaleX: () => gsap.utils.random(0.45, 1),
        transformOrigin: 'left center',
        duration: () => gsap.utils.random(0.9, 1.5),
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: 'sine.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPacketCount(
        (current) =>
          current + Math.floor(Math.random() * 5) + 1,
      )
    }, 1400)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-20 pt-28 text-white md:px-12 lg:px-16 xl:px-20"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="pointer-events-none absolute right-[8%] top-[12%] h-[700px] w-[700px] rounded-full bg-cyan-400/[0.025] blur-[180px]" />

      <div className="pointer-events-none absolute left-[-200px] top-[25%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.015] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1800px]">
        <div className="grid gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:items-start xl:gap-12 2xl:grid-cols-[0.68fr_1.32fr]">
          {/* LEFT */}
          <div className="relative z-20 xl:pt-8">
            <p className="hero-title-line mb-7 text-xl font-semibold uppercase tracking-[0.22em] text-zinc-200 sm:text-2xl xl:text-[26px]">
              Rahul Reddy Kesari
            </p>

            <h1 className="hero-title-line text-6xl font-semibold leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[92px] xl:text-[82px] 2xl:text-[104px]">
              Network
              <br />
              <span className="text-cyan-400">
                Engineer.
              </span>
            </h1>

            <p className="hero-description mt-10 max-w-[650px] text-lg leading-9 text-zinc-400 xl:text-[18px]">
              Designing, configuring, monitoring, and troubleshooting
              enterprise network environments with a focus on routing,
              switching, high availability, network security, and
              infrastructure reliability.
            </p>

            {/* Technologies */}
            <div className="mt-10 grid max-w-[550px] grid-cols-2 gap-3 sm:grid-cols-3">
              {protocols.map((protocol) => (
                <div
                  key={protocol}
                  className="hero-protocol flex min-h-12 items-center gap-3 rounded-lg border border-white/[0.11] bg-white/[0.018] px-5 transition duration-300 hover:border-cyan-400/35 hover:bg-cyan-400/[0.04]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.55)]" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-zinc-300">
                    {protocol}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-12 flex max-w-[550px] flex-col gap-4">
              <a
                href="#projects"
                className="hero-action group flex min-h-16 items-center justify-between rounded-full bg-cyan-400 px-8 text-sm font-semibold text-black transition duration-300 hover:scale-[1.015] hover:bg-cyan-300"
              >
                <span>Explore Network Labs</span>

                <span className="text-xl transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="hero-action group flex min-h-16 items-center justify-between rounded-full border border-white/[0.13] bg-white/[0.015] px-8 text-sm font-semibold text-zinc-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025] hover:text-white"
              >
                <span>Establish Connection</span>

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-20" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              </a>
            </div>

            <div className="hero-status mt-10 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-25" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                CCNA Certified · Network Engineer
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-network-console min-w-0">
            <NetworkVisual />

            {/* CLI */}
            <div className="mt-3 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#070707]/95 shadow-[0_25px_100px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-zinc-500">
                  CORE-RTR-01 // CLI
                </span>
              </div>

              <div className="grid lg:grid-cols-[1fr_290px]">
                <div className="min-h-[205px] p-6 font-mono text-[10px] leading-7">
                  <p>
                    <span className="font-semibold text-cyan-400">
                      CORE-RTR-01#
                    </span>{' '}

                    <span className="text-zinc-400">
                      show ip route summary
                    </span>
                  </p>

                  <div className="mt-3 grid max-w-[310px] grid-cols-[130px_1fr] gap-y-1">
                    <span className="text-zinc-500">
                      OSPF routes
                    </span>
                    <span className="text-zinc-300">24</span>

                    <span className="text-zinc-500">
                      BGP routes
                    </span>
                    <span className="text-zinc-300">18</span>

                    <span className="text-zinc-500">
                      Gateway
                    </span>
                    <span className="text-cyan-400">
                      reachable
                    </span>
                  </div>

                  <p className="mt-4 text-cyan-400">
                    CORE-RTR-01#
                    <span className="ml-1 inline-block h-3 w-[5px] animate-pulse bg-cyan-400 align-middle" />
                  </p>
                </div>

                <div className="grid grid-cols-3 border-t border-white/[0.07] lg:grid-cols-1 lg:border-l lg:border-t-0">
                  <CliMetric
                    label="Packets"
                    value={packetCount.toLocaleString()}
                    cyan
                  />

                  <CliMetric
                    label="Latency"
                    value="12 ms"
                  />

                  <CliMetric
                    label="Links"
                    value="6 / 6 UP"
                    green
                  />
                </div>
              </div>
            </div>

            {/* Bottom dashboard */}
            <div className="mt-3 grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
              {/* Traffic */}
              <div className="rounded-2xl border border-white/[0.09] bg-[#070707]/95 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                    Traffic
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-25" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
                      Live
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  <TrafficBar width="82%" />
                  <TrafficBar width="61%" />
                  <TrafficBar width="74%" />
                </div>

                <div className="mt-5 flex items-center justify-between font-mono text-[9px]">
                  <span className="uppercase tracking-[0.12em] text-zinc-500">
                    RX
                  </span>

                  <span className="text-zinc-300">
                    842 Mbps
                  </span>
                </div>
              </div>

              {/* Health */}
              <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#070707]/95">
                <HealthMetric
                  label="Latency"
                  value="12 ms"
                />

                <HealthMetric
                  label="Packet Loss"
                  value="0.0%"
                />

                <HealthMetric
                  label="Network"
                  value="Healthy"
                  green
                />
              </div>
            </div>

            <p className="mt-3 text-right font-mono text-[8px] uppercase tracking-[0.13em] text-zinc-600">
              Live interface visualization
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CliMetric({
  label,
  value,
  cyan = false,
  green = false,
}: {
  label: string
  value: string
  cyan?: boolean
  green?: boolean
}) {
  return (
    <div className="flex min-h-[68px] flex-col justify-center border-r border-white/[0.07] px-6 last:border-r-0 lg:border-b lg:border-r-0 lg:last:border-b-0">
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
        {label}
      </span>

      <span
        className={`mt-2 font-mono text-sm font-semibold ${
          green
            ? 'text-emerald-400'
            : cyan
              ? 'text-cyan-400'
              : 'text-zinc-300'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

function TrafficBar({
  width,
}: {
  width: string
}) {
  return (
    <div className="h-[4px] overflow-hidden rounded-full bg-white/[0.07]">
      <div
        className="hero-traffic-bar h-full origin-left rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.25)]"
        style={{ width }}
      />
    </div>
  )
}

function HealthMetric({
  label,
  value,
  green = false,
}: {
  label: string
  value: string
  green?: boolean
}) {
  return (
    <div className="flex min-h-[145px] flex-col justify-center border-r border-white/[0.07] px-6 last:border-r-0">
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
        {label}
      </span>

      <span
        className={`mt-3 font-mono text-sm font-semibold ${
          green
            ? 'text-emerald-400'
            : 'text-zinc-200'
        }`}
      >
        {value}
      </span>
    </div>
  )
}