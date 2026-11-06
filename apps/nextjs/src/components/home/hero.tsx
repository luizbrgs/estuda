import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate m-auto mb-10 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:mb-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:py-14 lg:px-14">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image src="/logo.svg" alt="Estuda" width={42} height={42} priority />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
              Estuda
            </span>
          </div>
          <h1 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Aprenda no seu ritmo. Memorize de verdade.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Organize seus estudos em conjuntos de cartões, revise os conceitos
            importantes e acompanhe sua evolução em um só lugar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/latest"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Explorar estudos
            </Link>
            <Link
              href="/create-set"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Criar conjunto
            </Link>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-sm items-center justify-center rounded-2xl border border-indigo-100 bg-white/80 p-6 shadow-sm">
          <div className="w-full space-y-3">
            <div className="rounded-xl bg-indigo-600 p-5 text-white shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-100">
                Frente do cartão
              </p>
              <p className="mt-4 text-center text-2xl font-bold">
                O que você quer aprender hoje?
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Verso do cartão
              </p>
              <p className="mt-4 text-center text-lg font-semibold text-slate-800">
                Um conceito por vez. Uma revisão de cada vez.
              </p>
            </div>
            <p className="text-center text-xs text-slate-500">
              Crie, revise e pratique com seus próprios cartões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
