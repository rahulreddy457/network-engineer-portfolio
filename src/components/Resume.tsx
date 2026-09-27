import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    label: 'Certification',
    value: 'CCNA',
    status: 'ACTIVE',
    green: true,
  },
  {
    label: 'Role',
    value: 'Network Engineer',
    status: 'READY',
    green: false,
  },
  {
    label: 'Labs',
    value: 'Enterprise Network Labs',
    status: 'VERIFIED',
    green: false,
  },
  {
    label: 'Education',
    value: 'M.S. Computer & Information Sciences',
    status: '2026',
    green: false,
  },
]

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null)

  const resumePath =
    `${import.meta.env.BASE_URL}Rahul_Reddy_Kesari_Network_Engineer_Resume.pdf`

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.resume-reveal',
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
        '.resume-terminal-line',
        {
          opacity: 0,
          x: -15,
        },
        {
          scrollTrigger: {
            trigger: '.resume-terminal',
            start: 'top 82%',
            once: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'power2.out',
        },
      )

      gsap.to('.resume-pulse', {
        scale: 1.7,
        opacity: 0,
        duration: 1.7,
        repeat: -1,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="resume"
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

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <div className="resume-reveal mb-8 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            07
          </span>

          <div className="h-px w-12 bg-cyan-400/50" />

          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Resume
          </span>
        </div>

        {/* Heading */}
        <div className="resume-reveal mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400">
              Professional Profile
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Network Engineer
              <br />

              <span className="text-cyan-400">
                resume.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-7 text-zinc-500">
              CCNA-certified Network Engineer with hands-on experience
              configuring, monitoring, troubleshooting, and validating
              enterprise network environments.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="resume-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-emerald-400">
                Resume Available
              </span>
            </div>
          </div>
        </div>

        {/* Main resume console */}
        <div className="resume-reveal overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#080808]">
          {/* Window header */}
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] px-6 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-zinc-600">
                rahul@network-engineer:~/resume
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400">
                Profile Online
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Terminal */}
            <div className="resume-terminal relative overflow-hidden border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r lg:p-9">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.1]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="relative">
                <p className="resume-terminal-line font-mono text-[9px] text-zinc-600">
                  <span className="text-emerald-400">$</span>{' '}
                  show candidate profile
                </p>

                <div className="resume-terminal-line mt-7">
                  <TerminalRow
                    label="NAME"
                    value="Rahul Reddy Kesari"
                  />
                </div>

                <div className="resume-terminal-line">
                  <TerminalRow
                    label="ROLE"
                    value="Network Engineer"
                    cyan
                  />
                </div>

                <div className="resume-terminal-line">
                  <TerminalRow
                    label="CERTIFICATION"
                    value="CCNA"
                    green
                  />
                </div>

                <div className="resume-terminal-line">
                  <TerminalRow
                    label="ROUTING"
                    value="OSPF | EIGRP | BGP"
                  />
                </div>

                <div className="resume-terminal-line">
                  <TerminalRow
                    label="SWITCHING"
                    value="VLAN | STP/RSTP | EtherChannel"
                  />
                </div>

                <div className="resume-terminal-line">
                  <TerminalRow
                    label="SECURITY"
                    value="ACL | NAT/PAT | IPsec VPN"
                  />
                </div>

                <div className="resume-terminal-line">
                  <TerminalRow
                    label="AUTOMATION"
                    value="Python | Netmiko | Ansible"
                  />
                </div>

                <div className="resume-terminal-line">
                  <TerminalRow
                    label="TOOLS"
                    value="Wireshark | GNS3 | Linux"
                  />
                </div>

                <div className="resume-terminal-line mt-7 font-mono text-[9px]">
                  <span className="text-emerald-400">
                    ✓ PROFILE LOADED
                  </span>

                  <span className="ml-2 inline-block h-3 w-[5px] animate-pulse bg-cyan-400 align-middle" />
                </div>
              </div>
            </div>

            {/* Resume profile */}
            <div className="flex flex-col p-7 lg:p-9">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-400">
                  Candidate File
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  Rahul Reddy Kesari
                </h3>

                <p className="mt-2 text-lg text-zinc-500">
                  CCNA-Certified Network Engineer
                </p>
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-cyan-400/25 via-white/[0.06] to-transparent" />

              {/* Highlights */}
              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 hover:border-cyan-400/20"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-600">
                        {item.label}
                      </span>

                      <span
                        className={`font-mono text-[6px] uppercase tracking-[0.13em] ${
                          item.green
                            ? 'text-emerald-400'
                            : 'text-cyan-400'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-medium leading-6 text-zinc-300">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-cyan-400/25 bg-cyan-400/[0.06] px-6 font-mono text-[8px] uppercase tracking-[0.17em] text-cyan-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.1]"
                >
                  View Resume

                  <span className="transition duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href={resumePath}
                  download="Rahul_Reddy_Kesari_Network_Engineer_Resume.pdf"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/[0.1] bg-white/[0.025] px-6 font-mono text-[8px] uppercase tracking-[0.17em] text-zinc-400 transition duration-300 hover:border-white/20 hover:text-white"
                >
                  Download PDF

                  <span className="transition duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
              </div>

              <div className="mt-auto pt-8">
                <div className="flex items-center gap-2 border-t border-white/[0.06] pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.45)]" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-600">
                    PDF ready for recruiter review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom status */}
        <div className="resume-reveal mt-6 flex flex-col justify-between gap-4 rounded-xl border border-white/[0.07] bg-[#080808] px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="resume-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-emerald-400">
              Network Engineer Profile Active
            </span>
          </div>

          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-600">
            CCNA · Cisco · Routing · Switching · Troubleshooting
          </span>
        </div>
      </div>
    </section>
  )
}

function TerminalRow({
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
    <div className="grid grid-cols-[105px_1fr] gap-4 border-b border-white/[0.04] py-3 font-mono text-[8px]">
      <span className="text-zinc-700">
        {label}
      </span>

      <span
        className={
          green
            ? 'text-emerald-400'
            : cyan
              ? 'text-cyan-400'
              : 'text-zinc-400'
        }
      >
        {value}
      </span>
    </div>
  )
}