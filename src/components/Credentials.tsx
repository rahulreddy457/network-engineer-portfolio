import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    number: '01',
    degree: 'Master of Science',
    field: 'Computer and Information Sciences',
    institution: 'University of North Texas',
    period: 'Aug 2024 — May 2026',
    gpa: '3.9 / 4.0',
  },
  {
    number: '02',
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    institution: 'SRM Institute of Science and Technology',
    period: 'Sep 2020 — May 2024',
    gpa: '9.04 / 10.0',
  },
]

export default function Credentials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [certificateOpen, setCertificateOpen] = useState(false)

  const certificateImage =
    `${import.meta.env.BASE_URL}Cisco-Certified-Network-Associate.png`

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.credentials-heading',
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
        '.credential-card',
        {
          opacity: 0,
          y: 35,
        },
        {
          scrollTrigger: {
            trigger: '.credentials-grid',
            start: 'top 82%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
        },
      )

      gsap.to('.certificate-scan', {
        y: 290,
        opacity: 0,
        duration: 4,
        repeat: -1,
        ease: 'power1.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!certificateOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCertificateOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [certificateOpen])

  return (
    <>
      <section
        id="credentials"
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

        <div className="pointer-events-none absolute left-1/2 top-[25%] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.02] blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section label */}
          <div className="credentials-heading mb-8 flex items-center gap-4">
            <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
              06
            </span>

            <div className="h-px w-12 bg-cyan-400/50" />

            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Credentials
            </span>
          </div>

          {/* Heading */}
          <div className="credentials-heading mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400">
                Certification & Education
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Technical foundation.
                <br />

                <span className="text-cyan-400">
                  Verified credentials.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-lg text-base leading-7 text-zinc-500">
                Active Cisco certification supported by graduate study in
                Computer and Information Sciences and an undergraduate
                background in Electronics and Communication Engineering.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-emerald-400">
                  Active Certification
                </span>
              </div>
            </div>
          </div>

          <div className="credentials-grid grid gap-5">
            {/* CCNA CERTIFICATE */}
            <article className="credential-card overflow-hidden rounded-[1.6rem] border border-emerald-400/15 bg-[#050505]">
              {/* Status header */}
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] px-6 py-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-400">
                    Cisco Certification Active
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600">
                    CCNA
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400">
                    Valid Through Aug 04 2029
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
                {/* Actual certificate */}
                <div className="relative overflow-hidden border-b border-white/[0.07] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(52,211,153,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(52,211,153,0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px',
                    }}
                  />

                  <div className="relative mx-auto max-w-[900px]">
                    <button
                      type="button"
                      onClick={() => setCertificateOpen(true)}
                      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/[0.12] bg-white p-1 shadow-[0_30px_100px_rgba(0,0,0,0.45)] transition duration-500 hover:border-emerald-400/40"
                      aria-label="Enlarge CCNA certificate"
                    >
                      <img
                        src={certificateImage}
                        alt="Rahul Reddy Kesari Cisco Certified Network Associate certificate"
                        className="block h-auto w-full rounded-lg"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-1 flex items-center justify-center rounded-lg bg-black/0 transition duration-300 group-hover:bg-black/35">
                        <div className="translate-y-3 rounded-full border border-white/15 bg-black/70 px-5 py-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          Click to Enlarge
                        </div>
                      </div>
                    </button>

                    {/* Scanner effect outside certificate */}
                    <div className="certificate-scan pointer-events-none absolute -left-2 -right-2 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent shadow-[0_0_12px_rgba(52,211,153,0.45)]" />
                  </div>

                  <div className="relative mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />

                      <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400">
                        Certificate Displayed
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCertificateOpen(true)}
                      className="font-mono text-[8px] uppercase tracking-[0.17em] text-zinc-400 transition hover:text-cyan-400"
                    >
                      View Full Certificate ↗
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col p-7 md:p-9">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-400">
                      Cisco Certification
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white">
                      Cisco Certified
                      <br />
                      Network Associate
                    </h3>

                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                      CCNA
                    </p>
                  </div>

                  <div className="my-8 h-px bg-gradient-to-r from-emerald-400/25 via-white/[0.06] to-transparent" />

                  <CredentialRow
                    label="Certified"
                    value="August 4, 2026"
                  />

                  <CredentialRow
                    label="Valid Through"
                    value="August 4, 2029"
                    green
                  />

                  <CredentialRow
                    label="Status"
                    value="ACTIVE"
                    green
                  />

                  <CredentialRow
                    label="Cisco ID"
                    value="CSCO15220767"
                  />

                  <div className="mt-8 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-25" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>

                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-emerald-400">
                        Credential Active
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      Cisco Certified Network Associate certification
                      demonstrating validated networking knowledge and
                      technical skills.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* EDUCATION */}
            <div className="grid gap-5 lg:grid-cols-2">
              {education.map((item) => (
                <article
                  key={item.number}
                  className="credential-card group relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#090909] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/25 md:p-8"
                >
                  <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-cyan-400/0 blur-[90px] transition duration-500 group-hover:bg-cyan-400/[0.03]" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_7px_rgba(34,211,238,0.4)]" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-400">
                          Education
                        </span>
                      </div>

                      <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-zinc-700">
                        EDU_{item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-zinc-400">
                      {item.field}
                    </p>

                    <div className="my-6 h-px bg-gradient-to-r from-cyan-400/20 via-white/[0.06] to-transparent" />

                    <p className="text-sm font-medium text-zinc-300">
                      {item.institution}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-700">
                          Period
                        </p>

                        <p className="mt-2 font-mono text-[8px] leading-5 text-zinc-500">
                          {item.period}
                        </p>
                      </div>

                      <div>
                        <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-700">
                          GPA
                        </p>

                        <p className="mt-2 font-mono text-[9px] text-cyan-400">
                          {item.gpa}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Summary */}
            <div className="credential-card grid overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-3 sm:gap-px">
              <SummaryMetric
                value="CCNA"
                label="Active Certification"
                green
              />

              <SummaryMetric
                value="3.9 / 4.0"
                label="Master's GPA"
              />

              <SummaryMetric
                value="2"
                label="Degrees"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN CERTIFICATE VIEWER */}
      {certificateOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="CCNA certificate viewer"
          onClick={() => setCertificateOpen(false)}
        >
          <div
            className="relative max-h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-400">
                    Active Cisco Credential
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Cisco Certified Network Associate
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCertificateOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-zinc-400 transition hover:border-cyan-400/30 hover:text-white"
                aria-label="Close certificate"
              >
                ×
              </button>
            </div>

            {/* Certificate */}
            <div className="max-h-[82vh] overflow-auto rounded-xl border border-white/10 bg-white p-1 shadow-[0_40px_140px_rgba(0,0,0,0.7)]">
              <img
                src={certificateImage}
                alt="Rahul Reddy Kesari Cisco Certified Network Associate certificate"
                className="mx-auto block h-auto w-full"
              />
            </div>

            <p className="mt-4 text-center font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600">
              Press ESC or click outside the certificate to close
            </p>
          </div>
        </div>
      )}
    </>
  )
}

function CredentialRow({
  label,
  value,
  green = false,
}: {
  label: string
  value: string
  green?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-white/[0.05] py-3.5 last:border-b-0">
      <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-700">
        {label}
      </span>

      <span
        className={`text-right font-mono text-[8px] ${
          green ? 'text-emerald-400' : 'text-zinc-400'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

function SummaryMetric({
  value,
  label,
  green = false,
}: {
  value: string
  label: string
  green?: boolean
}) {
  return (
    <div className="bg-[#070707] px-6 py-5">
      <p
        className={`font-mono text-lg font-semibold ${
          green ? 'text-emerald-400' : 'text-cyan-400'
        }`}
      >
        {value}
      </p>

      <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600">
        {label}
      </p>
    </div>
  )
}