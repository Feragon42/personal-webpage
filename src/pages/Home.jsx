const skills = [
    'React',
    'Vite',
    'TailwindCSS',
    'TypeScript',
    'Node.js',
    'Firebase',
    'REST APIs',
    'Git/GitHub',
]

const experience = [
    {
        role: 'Data Engineer',
        company: 'Studio Digital',
        period: '2024 - Present',
        points: [
            'Built reusable UI components with React and TailwindCSS.',
            'Improved load performance by optimizing bundles and images.',
            'Collaborated with design and backend teams to ship new features.',
        ],
    },
    {
        role: 'Web Developer',
        company: 'Freelance',
        period: '2022 - 2024',
        points: [
            'Created custom landing pages and portfolio websites for clients.',
            'Integrated Firebase auth, hosting, and simple cloud functions.',
            'Set up CI/CD workflows for deployments with GitHub Actions.',
        ],
    },
]

const projects = [
    {
        name: 'E-commerce UI',
        description: 'Modern storefront interface with cart, filters, and checkout flow.',
        stack: 'React, TailwindCSS, Firebase',
    },
    {
        name: 'Analytics Dashboard',
        description: 'Responsive data dashboard with charts, KPI cards, and reports.',
        stack: 'React, Vite, Chart.js',
    },
]

function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.22),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.2),transparent_50%)]" />
                <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
                    <p className="mb-5 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-cyan-200">
                        CURRICULUM TEMPLATE
                    </p>
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                        Fernando Gonzalez
                        <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                            Data Engineer
                        </span>
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                        Product focused frontend developer with experience building fast,
                        scalable web applications using React, Vite, and Firebase.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                        <a
                            href="mailto:alex@example.com"
                            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                        >
                            alex@example.com
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com"
                            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_2fr]">
                <aside className="space-y-8">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-lg font-semibold text-cyan-200">Profile</h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300">
                            I enjoy turning complex ideas into clean interfaces with strong UX,
                            accessibility, and performance best practices.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-lg font-semibold text-cyan-200">Skills</h2>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-md border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-200"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-lg font-semibold text-cyan-200">Education</h2>
                        <p className="mt-3 text-sm text-slate-200">BSc in Computer Science</p>
                        <p className="text-sm text-slate-400">University Name, 2018 - 2022</p>
                    </div>
                </aside>

                <div className="space-y-8">
                    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-xl font-semibold text-emerald-200">Experience</h2>
                        <div className="mt-5 space-y-6">
                            {experience.map((item) => (
                                <article key={`${item.company}-${item.role}`}>
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="text-base font-semibold text-slate-100">{item.role}</h3>
                                        <span className="text-xs uppercase tracking-wide text-slate-400">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-cyan-300">{item.company}</p>
                                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                                        {item.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-xl font-semibold text-emerald-200">Projects</h2>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            {projects.map((project) => (
                                <article
                                    key={project.name}
                                    className="rounded-xl border border-white/10 bg-slate-900/70 p-4"
                                >
                                    <h3 className="text-base font-semibold text-slate-100">{project.name}</h3>
                                    <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                                    <p className="mt-3 text-xs uppercase tracking-wide text-cyan-300">
                                        {project.stack}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Home