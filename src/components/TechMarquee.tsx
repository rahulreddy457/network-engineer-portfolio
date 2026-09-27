import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const technologies = [
  'CISCO IOS',
  'OSPF',
  'BGP',
  'EIGRP',
  'VLAN',
  '802.1Q',
  'STP',
  'RSTP',
  'HSRP',
  'DHCP',
  'NAT / PAT',
  'ACL',
  'IPSEC VPN',
  'IP SLA',
  'WIRESHARK',
  'GNS3',
  'LINUX',
  'PYTHON',
  'NETMIKO',
]

function TechnologySet() {
  return (
    <div className="flex shrink-0 items-center">
      {technologies.map((technology) => (
        <div
          key={technology}
          className="flex shrink-0 items-center"
        >
          <span className="whitespace-nowrap px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 transition duration-300 hover:text-cyan-400 md:px-8">
            {technology}
          </span>

          <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400/60" />
        </div>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const marquee = marqueeRef.current

    if (!marquee) return

    const firstSet = marquee.children[0] as HTMLElement

    if (!firstSet) return

    const createAnimation = () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }

      gsap.set(marquee, {
        x: 0,
      })

      const distance = firstSet.offsetWidth

      animationRef.current = gsap.to(marquee, {
        x: -distance,
        duration: 35,
        ease: 'none',
        repeat: -1,
      })
    }

    createAnimation()

    const handleMouseEnter = () => {
      animationRef.current?.pause()
    }

    const handleMouseLeave = () => {
      animationRef.current?.resume()
    }

    const handleResize = () => {
      createAnimation()
    }

    marquee.addEventListener('mouseenter', handleMouseEnter)
    marquee.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter)
      marquee.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)

      animationRef.current?.kill()
    }
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden border-y border-white/[0.06] bg-[#070707] py-5"
      aria-label="Networking technologies"
    >
      {/* Left Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#070707] to-transparent md:w-40" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#070707] to-transparent md:w-40" />

      {/* Moving Track */}
      <div
        ref={marqueeRef}
        className="flex w-max items-center"
      >
        <TechnologySet />

        <TechnologySet />
      </div>
    </section>
  )
}