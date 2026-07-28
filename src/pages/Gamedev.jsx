import { Link } from 'react-router-dom'

const prototypes = [
  {
    name: 'Echo Runner',
    engine: 'Godot',
    focus: 'Movement and level rhythm',
  },
  {
    name: 'Signal Tactics',
    engine: 'Unity',
    focus: 'Turn-based systems and AI behavior',
  },
  {
    name: 'Neon Drift',
    engine: 'Unreal',
    focus: 'Combat feel and VFX timing',
  },
]

function Gamedev() {
  return (
    <main className="min-h-screen bg-[#05070a] text-[#d1f5de] [font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace]">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <Link
          to="/"
          className="inline-block rounded-lg border border-[#2f5f55] bg-[#091614] px-4 py-2 text-sm text-[#b5ebde] transition hover:border-[#7be8d1]"
        >
          {'<- back'}
        </Link>

        <section className="mt-8 rounded-2xl border border-[#2e4440] bg-[#07110f] p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7fb6aa]">profile://gamedev</p>
          <h1 className="mt-3 text-3xl text-[#defff3]">Gamedev</h1>
          <p className="mt-2 text-sm text-[#93beb5]">
            Prototypes, mechanics exploration, and gameplay iteration logs.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {prototypes.map((prototype) => (
              <article
                key={prototype.name}
                className="rounded-xl border border-[#2f5f55] bg-[#0a1715] p-4"
              >
                <p className="text-lg text-[#d7fff0]">{prototype.name}</p>
                <p className="mt-1 text-sm text-[#8cb6ad]">Engine: {prototype.engine}</p>
                <p className="mt-2 text-sm text-[#9cc8be]">{prototype.focus}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Gamedev
