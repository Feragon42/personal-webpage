import { GetSkills, GetExperience, GetProjects, GetAboutMe, GetCertifications } from '../features/curriculum/ContentData.jsx'
import ContactInfo from '../features/curriculum/ContactInfo.jsx'
import unitecLogo from '../assets/unitec_logo.png'

function DataEngineer() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.22),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.2),transparent_50%)]" />
                <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                        Fernando Gonzalez
                        <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                            Data Engineer
                        </span>
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                        Data Engineer specialized in <b>PL/SQL</b>, <b>Python</b>, <b>Azure</b> and <b>Google Cloud</b>. <br />
                        Currently building <b>Rift Oracle</b>, a <b className='text-red-400'>League of Legends</b> patch analytics platform.
                    </p>

                    <ContactInfo />
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_2fr]">
                <aside className="space-y-8">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-lg font-semibold text-cyan-200">Skills</h2>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {GetSkills().map((skill) => (
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
                        <h2 className="text-lg font-semibold text-cyan-200">About Me</h2>
                        <ul className="mt-3 text-sm text-slate-200 list-disc list-inside">
                            {GetAboutMe().map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-lg font-semibold text-cyan-200">Education</h2><br />
                        <div className="grid grid-cols-[3rem_1fr] items-start gap-3 rounded-lg border border-white/10 bg-slate-900/40 p-3">
                            <div>
                                <img src={unitecLogo} alt='UNITEC' className="h-12 w-12 rounded-md object-contain bg-white/5 p-1" />
                            </div>
                            <div>
                                <p> BSc in Computer Science </p>
                                <p className="mt-1 text-slate-400">UNITEC 2011-2016</p>
                            </div>
                        </div>
                        <hr className="border-white/10 my-4" />
                        <h2 className="mt-6 text-lg font-semibold text-cyan-200">Certifications</h2>
                        <ul className="mt-3 space-y-4 text-sm text-slate-200">
                            {GetCertifications().map((cert) => (
                                <li key={cert.name} className="grid grid-cols-[3rem_1fr] items-start gap-3 rounded-lg border border-white/10 bg-slate-900/40 p-3">
                                    <div>
                                        <img src={cert.logo} alt={cert.issuer} className="h-12 w-12 rounded-md object-contain bg-white/5 p-1" />
                                    </div>
                                    <div>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-300">
                                            {cert.name}
                                        </a>
                                        <p className="mt-1 text-slate-400">{cert.issuer} - {cert.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <div className="space-y-8">
                    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <h2 className="text-xl font-semibold text-emerald-200">Experience</h2>
                        <div className="mt-5 space-y-6">
                            {GetExperience().map((item) => (
                                <article key={`${item.company}-${item.role}`} className="rounded-lg border border-white/10 bg-slate-900/40 p-3">
                                    <div className="grid grid-cols-[3rem_1fr] items-start gap-3">
                                        <div>
                                            <img src={item.logo} alt={item.company} className="h-12 w-12 rounded-md object-contain bg-white/5 p-1" />
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                                <h3 className="text-base font-semibold text-slate-100">{item.role}</h3>
                                                <span className="text-xs uppercase tracking-wide text-slate-400">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p className="text-sm text-cyan-300">{item.company}</p>
                                        </div>
                                    </div>
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
                            {GetProjects().map((project) => (
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

export default DataEngineer