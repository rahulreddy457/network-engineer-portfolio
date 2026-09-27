import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const operations = [
  {
    number: '01',
    title: 'Network Operations',
    description:
      'Assisted with network operations involving switching, transmission systems, and network infrastructure.',
    status: 'OPERATIONAL',
  },
  {
    number: '02',
    title: 'Network Monitoring',
    description:
      'Gained exposure to wireline and wireless communication systems, signal transmission, and fault monitoring.',
    status: 'MONITORING',
  },
  {
    number: '03',
    title: 'Fault Identification',
    description:
      'Supported routine network monitoring, fault identification, maintenance, and operational workflows in a production network environment.',
    status: 'ANALYSIS',
  },
  {
    number: '04',
    title: 'Network Availability',
    description:
      'Observed troubleshooting and maintenance procedures used to support network availability and service continuity.',
    status: 'AVAILABLE',
  },
]

const technologies = [
  'Switching',
  'Network Monitoring',
  'Fault Isolation',
  'Troubleshooting',
  'Network Availability',
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-heading',
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
        '.experience-item',
        {
          opacity: 0,
          x: 35,
        },
        {
          scrollTrigger: {
            trigger: '.experience-timeline',
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
      )

      gsap.to('.experience-line-flow', {
        strokeDashoffset: -35,
        duration: 2.5,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.experience-core-ring', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 22,
        repeat: -1,
        ease: 'none',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white md:px-12 lg:px-20"
    >
      {/* Network grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '65px 65px',
        }}
      />

      <div className="pointer-events-none absolute right-[-250px] top-[20%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.025] blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="experience-heading mb-8 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            05
          </span>

          <div className="h-px w-12 bg-cyan-400/50" />

          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Experience
          </span>
        </div>

        <div className="experience-heading mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400">
              Network Operations Experience
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              From monitoring
              <br />

              <span className="text-cyan-400">
                to availability.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-zinc-500">
            Exposure to network operations, monitoring, fault identification,
            maintenance workflows, and troubleshooting procedures in a
            production network environment.
          </p>
        </div>

        {/* Main experience console */}
        <div className="experience-heading overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#080808]">
          {/* Console header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 md:px-7">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.5)]" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-emerald-400">
                Experience Record
              </span>
            </div>

            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-700">
              August 2022
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* Role information */}
            <div className="relative overflow-hidden border-b border-white/[0.07] p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.025] blur-[100px]" />

              <div className="relative z-10">
                <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-cyan-400">
                  / ROLE
                </p>

                <h3 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Network
                  <br />
                  Engineer
                </h3>

                <div className="mt-8 h-px w-16 bg-cyan-400/40" />

                <p className="mt-8 text-lg font-medium text-zinc-300">
                  Bharat Sanchar Nigam Limited
                </p>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  BSNL · India
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-500">
                    August 2022
                  </span>

                  <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.025] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.15em] text-cyan-400">
                    Network Operations
                  </span>
                </div>

                {/* Network node graphic */}
                <div className="relative mt-14 hidden h-[220px] lg:block">
                  <svg
                    viewBox="0 0 320 220"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <circle
                      cx="160"
                      cy="110"
                      r="65"
                      fill="none"
                      stroke="#22d3ee"
                      strokeOpacity="0.08"
                    />

                    <circle
                      cx="160"
                      cy="110"
                      r="52"
                      fill="none"
                      stroke="#22d3ee"
                      strokeOpacity="0.18"
                      strokeDasharray="4 9"
                      className="experience-core-ring"
                    />

                    <circle
                      cx="160"
                      cy="110"
                      r="39"
                      fill="#071012"
                      stroke="#22d3ee"
                      strokeOpacity="0.45"
                    />

                    <circle
                      cx="160"
                      cy="110"
                      r="4"
                      fill="#34d399"
                    />

                    <line
                      x1="160"
                      y1="45"
                      x2="160"
                      y2="15"
                      stroke="#22d3ee"
                      strokeOpacity="0.25"
                    />

                    <line
                      x1="225"
                      y1="110"
                      x2="270"
                      y2="110"
                      stroke="#22d3ee"
                      strokeOpacity="0.25"
                    />

                    <line
                      x1="160"
                      y1="175"
                      x2="160"
                      y2="205"
                      stroke="#22d3ee"
                      strokeOpacity="0.25"
                    />

                    <line
                      x1="95"
                      y1="110"
                      x2="50"
                      y2="110"
                      stroke="#22d3ee"
                      strokeOpacity="0.25"
                    />

                    <circle
                      cx="160"
                      cy="15"
                      r="4"
                      fill="#22d3ee"
                    />

                    <circle
                      cx="270"
                      cy="110"
                      r="4"
                      fill="#22d3ee"
                    />

                    <circle
                      cx="160"
                      cy="205"
                      r="4"
                      fill="#22d3ee"
                    />

                    <circle
                      cx="50"
                      cy="110"
                      r="4"
                      fill="#22d3ee"
                    />

                    <text
                      x="160"
                      y="104"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="8"
                      fontWeight="700"
                    >
                      NETWORK
                    </text>

                    <text
                      x="160"
                      y="119"
                      textAnchor="middle"
                      fill="#22d3ee"
                      fontSize="6"
                    >
                      OPERATIONS
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Operations timeline */}
            <div className="experience-timeline relative p-7 md:p-10 lg:p-12">
              <div className="mb-9 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    Operational Workflow
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    Network monitoring and support exposure
                  </p>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400">
                    Network Available
                  </span>
                </div>
              </div>

              <div className="relative">
                {/* Vertical network path */}
                <svg
                  viewBox="0 0 40 600"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute bottom-0 left-[15px] top-0 h-full w-10"
                  aria-hidden="true"
                >
                  <line
                    x1="15"
                    y1="0"
                    x2="15"
                    y2="600"
                    stroke="#22d3ee"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                  />

                  <line
                    x1="15"
                    y1="0"
                    x2="15"
                    y2="600"
                    stroke="#22d3ee"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                    strokeDasharray="4 10"
                    className="experience-line-flow"
                  />

                  {/* Moving packet */}
                  <circle
                    r="3.5"
                    fill="#22d3ee"
                    style={{
                      filter:
                        'drop-shadow(0 0 6px rgba(34,211,238,0.9))',
                    }}
                  >
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      path="M15 0 L15 600"
                    />
                  </circle>
                </svg>

                <div className="space-y-4">
                  {operations.map((operation) => (
                    <article
                      key={operation.number}
                      className="experience-item group relative pl-14"
                    >
                      {/* Timeline node */}
                      <div className="absolute left-[9px] top-7 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-cyan-400/50 bg-[#080808] transition duration-300 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 transition duration-300 group-hover:bg-emerald-400" />
                      </div>

                      <div className="rounded-xl border border-white/[0.07] bg-[#090909] p-5 transition duration-500 hover:border-cyan-400/20 hover:bg-[#0a0d0e] md:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-400">
                            STEP_{operation.number}
                          </span>

                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.4)]" />

                            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-emerald-400">
                              {operation.status}
                            </span>
                          </div>
                        </div>

                        <h4 className="mt-4 text-xl font-semibold tracking-tight text-white">
                          {operation.title}
                        </h4>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                          {operation.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technology strip */}
          <div className="border-t border-white/[0.07] bg-[#070707] px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-700">
                Operational Exposure
              </span>

              <span className="hidden h-4 w-px bg-white/[0.08] sm:block" />

              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-zinc-500">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}