
import { Link } from 'react-router-dom'

const tracks = [
    {
        title: 'Data Engineer (CV)',
        path: '/data-engineer',
        code: '01',
        active: true,
        description: 'Professional experience, projects, and technical skills in data engineering.',
    },
    {
        title: 'Writer',
        path: '/writer',
        code: '02',
        active: true,
        description: 'Articles, essays, and storytelling work.',
    },
    {
        title: 'Gamedev',
        path: '/gamedev',
        code: '03',
        active: false,
        description: 'Game prototypes, mechanics, and development logs.',
    },
]

function Home() {
    return (
        <main className="min-h-screen bg-[#05070a] text-[#d1f5de] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace]">
            <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 py-14">
                <div className="w-full rounded-2xl border border-[#2e4440] bg-[#07110f] p-6 shadow-[0_0_0_1px_rgba(85,145,133,0.12),0_20px_80px_rgba(0,0,0,0.45)] md:p-10">

                    <div className="mb-10 flex flex-col items-center gap-5 text-center">
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#4ea794] text-3xl font-bold text-[#9cfbe6]">
                            <span className="relative z-10">FG</span>
                            <span className="absolute inset-0 rounded-full border border-[#66d6be] opacity-70 animate-ping" />
                            <span className="absolute -inset-2 rounded-full border border-[#2c6c60] opacity-70" />
                        </div>
                        <div>
                            <p className="mt-2 text-sm text-[#9ac9bf]">
                                Choose a profile to load the corresponding section.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {tracks.map((track) => (
                            <Link
                                key={track.path}
                                to={track.path}
                                className={`group block rounded-xl border border-[#2f5f55] bg-[#091614] px-5 py-4 transition hover:border-[#7be8d1] hover:bg-[#0d1f1b] ${!track.active ? 'opacity-50 pointer-events-none' : ''}`}
                            >
                                <p className="mt-1 text-lg text-[#d8fff0] group-hover:text-[#b4ffe9]">
                                    {track.title}
                                </p>
                                <p className="mt-1 text-sm text-[#90b4ac]">{track.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home