import { useEffect, useState } from 'react'

const resumePath =
  '/Rahul_Reddy_Kesari_Network_Engineer_Resume.pdf'

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Credentials', href: '#credentials', id: 'credentials' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(
          (section): section is HTMLElement =>
            section !== null,
        )

      const scrollPosition = window.scrollY + 180

      let currentSection = ''

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.08] bg-[#050505]/90 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl'
            : 'border-b border-transparent bg-[#050505]/50 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">

          <a
            href="#home"
            onClick={closeMenu}
            className="group relative z-50 flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 group-hover:border-cyan-400/50">
              <span className="text-sm font-bold text-white">
                R<span className="text-cyan-400">K</span>
              </span>
            </div>

            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-[0.16em] text-white">
                RAHUL KESARI
              </p>

              <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Network Engineer
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.id

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative py-2 text-xs font-medium transition duration-300 ${
                    active
                      ? 'text-cyan-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                      active
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-xs font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400 lg:inline-flex"
          >
            Resume

            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <button
            type="button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] lg:hidden"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-1 h-px w-5 bg-white transition-all duration-300 ${
                  menuOpen
                    ? 'translate-y-[3px] rotate-45'
                    : ''
                }`}
              />

              <span
                className={`absolute bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                  menuOpen
                    ? 'w-5 -translate-y-[3px] -rotate-45'
                    : 'w-3'
                }`}
              />
            </div>
          </button>

        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="absolute right-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="relative flex min-h-screen flex-col justify-center px-6 pt-20 md:px-12">

          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
            Navigation
          </p>

          <div className="border-t border-white/10">
            {navLinks.map((link, index) => {
              const active = activeSection === link.id

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-mono text-[10px] ${
                        active
                          ? 'text-cyan-400'
                          : 'text-zinc-700'
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`text-2xl font-medium transition duration-300 ${
                        active
                          ? 'text-cyan-400'
                          : 'text-zinc-300 group-hover:text-cyan-400'
                      }`}
                    >
                      {link.name}
                    </span>
                  </div>

                  <span
                    className={`transition duration-300 group-hover:translate-x-1 ${
                      active
                        ? 'text-cyan-400'
                        : 'text-zinc-700 group-hover:text-cyan-400'
                    }`}
                  >
                    →
                  </span>
                </a>
              )
            })}
          </div>

          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/[0.05] px-6 py-3 text-sm font-medium text-cyan-400"
          >
            View Resume
            <span>↗</span>
          </a>

          <div className="mt-12 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Network Portfolio
          </div>

        </div>
      </div>
    </>
  )
}