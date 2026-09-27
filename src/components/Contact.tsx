import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactLinks = [
  {
    label: 'Email',
    value: 'rahulreddykesari@gmail.com',
    href: 'mailto:rahulreddykesari@gmail.com',
    code: 'SMTP',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahul-reddy-kesari-a6150a227',
    href: 'https://www.linkedin.com/in/rahul-reddy-kesari-a6150a227',
    code: 'LINK',
  },
  {
    label: 'GitHub',
    value: 'github.com/rahulreddy457',
    href: 'https://github.com/rahulreddy457',
    code: 'GIT',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
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
        '.contact-link-card',
        {
          opacity: 0,
          x: 25,
        },
        {
          scrollTrigger: {
            trigger: '.contact-links',
            start: 'top 85%',
            once: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        },
      )

      gsap.to('.contact-ring-one', {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.contact-ring-two', {
        rotate: -360,
        transformOrigin: '50% 50%',
        duration: 28,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.contact-flow-line', {
        strokeDashoffset: -30,
        duration: 1.8,
        repeat: -1,
        ease: 'none',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] px-6 pb-10 pt-28 text-white md:px-12 lg:px-20"
    >
      {/* Background */}
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

      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <div className="contact-reveal mb-8 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            08
          </span>

          <div className="h-px w-12 bg-cyan-400/50" />

          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </span>
        </div>

        {/* Heading */}
        <div className="contact-reveal mb-16">
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400">
            Connection Request
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-7xl">
            Ready to connect.
            <br />

            <span className="text-cyan-400">
              Let&apos;s establish the link.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500">
            Open to Network Engineer, NOC, Network Support, and
            Infrastructure opportunities where I can contribute to
            reliable network operations, troubleshooting, and
            connectivity.
          </p>
        </div>

        {/* Main console */}
        <div className="contact-reveal overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#050505]">
          {/* Console header */}
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] px-6 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-zinc-600">
                connection-manager
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400">
                Available
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Network handshake */}
            <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden border-b border-white/[0.07] lg:border-b-0 lg:border-r">
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

              <svg
                viewBox="0 0 600 420"
                className="relative h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="contactPacketGlow"
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

                {/* Rotating rings */}
                <circle
                  cx="300"
                  cy="210"
                  r="132"
                  fill="none"
                  stroke="#22d3ee"
                  strokeOpacity="0.05"
                />

                <circle
                  cx="300"
                  cy="210"
                  r="115"
                  fill="none"
                  stroke="#22d3ee"
                  strokeOpacity="0.12"
                  strokeDasharray="5 13"
                  className="contact-ring-one"
                />

                <circle
                  cx="300"
                  cy="210"
                  r="96"
                  fill="none"
                  stroke="#22d3ee"
                  strokeOpacity="0.18"
                  strokeDasharray="10 9"
                  className="contact-ring-two"
                />

                {/* Connection */}
                <path
                  d="M120 210 L240 210"
                  fill="none"
                  stroke="#22d3ee"
                  strokeOpacity="0.15"
                />

                <path
                  d="M360 210 L480 210"
                  fill="none"
                  stroke="#22d3ee"
                  strokeOpacity="0.15"
                />

                <path
                  d="M120 210 L240 210"
                  fill="none"
                  stroke="#22d3ee"
                  strokeOpacity="0.5"
                  strokeDasharray="4 10"
                  className="contact-flow-line"
                />

                <path
                  d="M360 210 L480 210"
                  fill="none"
                  stroke="#22d3ee"
                  strokeOpacity="0.5"
                  strokeDasharray="4 10"
                  className="contact-flow-line"
                />

                {/* Incoming packet */}
                <circle
                  r="4"
                  fill="#22d3ee"
                  filter="url(#contactPacketGlow)"
                >
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    path="M120 210 L240 210"
                  />
                </circle>

                {/* Outgoing packet */}
                <circle
                  r="4"
                  fill="#34d399"
                  filter="url(#contactPacketGlow)"
                >
                  <animateMotion
                    dur="2.5s"
                    begin="1.2s"
                    repeatCount="indefinite"
                    path="M360 210 L480 210"
                  />
                </circle>

                {/* Recruiter */}
                <circle
                  cx="105"
                  cy="210"
                  r="42"
                  fill="#071012"
                  stroke="#22d3ee"
                  strokeOpacity="0.45"
                />

                <circle
                  cx="135"
                  cy="180"
                  r="4"
                  fill="#22d3ee"
                />

                <text
                  x="105"
                  y="207"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="8"
                  fontWeight="700"
                >
                  RECRUITER
                </text>

                <text
                  x="105"
                  y="222"
                  textAnchor="middle"
                  fill="#22d3ee"
                  fontSize="5.5"
                  fontWeight="600"
                >
                  REQUEST
                </text>

                {/* Center */}
                <circle
                  cx="300"
                  cy="210"
                  r="60"
                  fill="#071012"
                  stroke="#34d399"
                  strokeOpacity="0.55"
                />

                <circle
                  cx="343"
                  cy="167"
                  r="5"
                  fill="#34d399"
                />

                <text
                  x="300"
                  y="201"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="10"
                  fontWeight="700"
                >
                  NETWORK
                </text>

                <text
                  x="300"
                  y="217"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="10"
                  fontWeight="700"
                >
                  ENGINEER
                </text>

                <text
                  x="300"
                  y="235"
                  textAnchor="middle"
                  fill="#34d399"
                  fontSize="6"
                  fontWeight="600"
                >
                  AVAILABLE
                </text>

                {/* Opportunity */}
                <circle
                  cx="495"
                  cy="210"
                  r="42"
                  fill="#071012"
                  stroke="#34d399"
                  strokeOpacity="0.45"
                />

                <circle
                  cx="525"
                  cy="180"
                  r="4"
                  fill="#34d399"
                />

                <text
                  x="495"
                  y="207"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="8"
                  fontWeight="700"
                >
                  CONNECT
                </text>

                <text
                  x="495"
                  y="222"
                  textAnchor="middle"
                  fill="#34d399"
                  fontSize="5.5"
                  fontWeight="600"
                >
                  ESTABLISHED
                </text>
              </svg>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-400/15 bg-black/60 px-4 py-2 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400">
                    Connection Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Contact information */}
            <div className="flex flex-col p-7 md:p-9">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-400">
                  Contact Endpoints
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  Start a conversation.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                  For Network Engineer opportunities, technical discussions,
                  or professional networking, connect through any of the
                  channels below.
                </p>
              </div>

              <div className="contact-links mt-8 space-y-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === 'Email'
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      item.label === 'Email'
                        ? undefined
                        : 'noreferrer'
                    }
                    className="contact-link-card group flex items-center justify-between gap-5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.025]"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-cyan-400">
                          {item.code}
                        </span>

                        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600">
                          {item.label}
                        </span>
                      </div>

                      <p className="mt-2 truncate text-sm text-zinc-300">
                        {item.value}
                      </p>
                    </div>

                    <span className="shrink-0 text-zinc-600 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              {/* Main CTA */}
              <div className="mt-8">
                <a
                  href="mailto:rahulreddykesari@gmail.com?subject=Network%20Engineer%20Opportunity"
                  className="group flex min-h-14 w-full items-center justify-between rounded-xl border border-cyan-400/25 bg-cyan-400/[0.07] px-6 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.11]"
                >
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-300">
                      Establish Connection
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Send an email
                    </p>
                  </div>

                  <span className="text-lg text-cyan-400 transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="mt-auto pt-8">
                <div className="flex items-center gap-2 border-t border-white/[0.06] pt-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-25" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-600">
                    Open to Network Engineer opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="contact-reveal mt-20 border-t border-white/[0.07] py-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-tight text-white">
                Rahul Reddy Kesari
              </p>

              <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600">
                CCNA-Certified Network Engineer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#"
                className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600 transition hover:text-cyan-400"
              >
                Back to Top ↑
              </a>

              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-700">
                © {new Date().getFullYear()} Rahul Reddy Kesari
              </span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}