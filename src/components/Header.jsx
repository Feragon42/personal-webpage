import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/data-engineer', label: 'Data Engineer' },
    { to: '/writer', label: 'Write' },
    { to: '/gamedev', label: 'Gamedev' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed left-3 top-1/2 z-50 -translate-y-1/2 [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace] md:left-5" aria-label="Main navigation">
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-controls="side-menu"
                    className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#4ea794] bg-[#07110f]/85 text-sm font-bold text-[#9cfbe6] shadow-[0_0_0_1px_rgba(85,145,133,0.25),0_10px_30px_rgba(0,0,0,0.45)] transition hover:border-[#7de5d2]"
                >
                    <span className="relative z-10">FG</span>
                    <span className="pointer-events-none absolute -inset-1 rounded-full border border-[#66d6be] opacity-50 animate-pulse" />
                </button>

                <div
                    id="side-menu"
                    className={`absolute left-full top-1/2 ml-3 -translate-y-1/2 transition-all duration-300 ${
                        isOpen
                            ? 'pointer-events-auto translate-x-0 opacity-100'
                            : 'pointer-events-none -translate-x-6 opacity-0'
                    }`}
                >
                    <div className="flex min-w-44 flex-col gap-2 rounded-xl border border-[#2a463f]/75 bg-[#05070a]/90 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.55)] backdrop-blur">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-lg border px-3 py-2 text-xs uppercase tracking-[0.14em] transition md:text-sm ${
                                        isActive
                                            ? 'border-[#7de5d2] bg-[#0d1f1b] text-[#c5ffef]'
                                            : 'border-[#2f5f55] bg-[#091614] text-[#9dcfc4] hover:border-[#7be8d1] hover:text-[#d8fff0]'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header