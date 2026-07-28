function ContactInfo() {
    return (
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
            <a
                href="mailto:feragon42@gmail.com"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
                feragon42@gmail.com
            </a>
            <a
                href="https://linkedin.com/in/feragon/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/Feragon42"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
                GitHub
            </a>
            <a
                href="https://drive.google.com/file/d/1biUbyyWeHjM3urUjz1waZx5n3lij5L8y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
                Download Resume
            </a>
        </div>
    )
}

export default ContactInfo