import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const profileImage =
  `${import.meta.env.BASE_URL}rahul-profile.png`

const focusAreas = [
  'Routing & Switching',
  'Network Security',
  'High Availability',
  'Troubleshooting',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-animate',
        {
          y: 45,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
        },
      )

      gsap.fromTo(
        '.profile-image',
        {
          scale: 1.06,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: '.profile-image',
            start: 'top 85%',
            once: true,
          },
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          clearProps: 'transform',
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white md:px-12 lg:px-20"
    >
      <div className="absolute left-[-250px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

      <div className="absolute right-[-200px] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.025] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="about-animate mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            01
          </span>

          <div className="h-px w-12 bg-cyan-400/50" />

          <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            About
          </span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

          {/* Profile Image */}
          <div className="about-animate relative mx-auto w-full max-w-[430px] lg:mx-0">

            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/[0.035] blur-3xl" />

            <div className="absolute -left-4 -top-4 h-16 w-16 border-l border-t border-cyan-400/50" />

            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b border-r border-cyan-400/50" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[#090909]">

                <img
                  src={profileImage}
                  alt="Rahul Reddy Kesari"
                  className="profile-image h-full w-full object-cover object-top"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-md">

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-300">
                      Network Engineer
                    </span>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-cyan-400">
                    CCNA
                  </span>

                </div>
              </div>
            </div>

            <div className="absolute -right-5 top-[18%] hidden items-center gap-2 lg:flex">
              <div className="h-px w-10 bg-cyan-400/40" />

              <span className="h-2 w-2 rounded-full border border-cyan-400 bg-[#080808]" />
            </div>

          </div>

          {/* About Content */}
          <div>

            <div className="about-animate">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                CCNA Certified · Network Engineer
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Building networks
                <br />
                for
                <span className="text-cyan-400"> reliability.</span>
              </h2>
            </div>

            <div className="about-animate mt-8 max-w-2xl">

              <p className="text-lg leading-8 text-zinc-400">
                I&apos;m Rahul Reddy Kesari, a CCNA-certified Network
                Engineer with a Master&apos;s degree in Computer and
                Information Sciences and a Bachelor&apos;s degree in
                Electronics and Communication Engineering.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                My technical focus includes Cisco routing and switching,
                dynamic routing protocols, VLANs, network services,
                redundancy, security, packet analysis, fault isolation,
                and infrastructure troubleshooting.
              </p>

            </div>

            <div className="about-animate mt-10 grid gap-x-8 gap-y-1 sm:grid-cols-2">

              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="group flex items-center gap-3 border-b border-white/[0.08] py-4"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 transition duration-300 group-hover:text-cyan-400">
                    {area}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="about-animate mt-20 grid border-y border-white/10 sm:grid-cols-3">

          <div className="py-8 sm:border-r sm:border-white/10">
            <p className="text-3xl font-semibold tracking-tight text-white">
              CCNA
            </p>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              Cisco Certified
            </p>
          </div>

          <div className="py-8 sm:border-r sm:border-white/10 sm:px-8">
            <p className="text-3xl font-semibold tracking-tight text-white">
              M.S.
            </p>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              Computer & Information Sciences
            </p>
          </div>

          <div className="py-8 sm:pl-8">
            <p className="text-3xl font-semibold tracking-tight text-white">
              5
            </p>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              Featured Network Labs
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}