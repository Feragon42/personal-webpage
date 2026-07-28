import { Link } from 'react-router-dom'

const entries = [
  {
    title: 'On Building in Public',
    type: 'Article',
    status: 'Published',
  },
  {
    title: 'Small Notes on Craft',
    type: 'Essay',
    status: 'Draft',
  },
  {
    title: 'Fiction Fragments',
    type: 'Collection',
    status: 'In Progress',
  },
]

function Writer() {
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#7fb6aa]">profile://writer</p>
          <h1 className="mt-3 text-3xl text-[#defff3]">Writer</h1>
          <p className="mt-2 text-sm text-[#93beb5]">
            A workspace for essays, articles, and narrative experiments.
          </p>

          <div className="mt-8 space-y-3">
            {entries.map((entry) => (
              <article
                key={entry.title}
                className="rounded-xl border border-[#2f5f55] bg-[#0a1715] p-4"
              >
                <p className="text-lg text-[#d7fff0]">{entry.title}</p>
                <p className="mt-1 text-sm text-[#8cb6ad]">
                  {entry.type} | {entry.status}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Writer
