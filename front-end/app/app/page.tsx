import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Velas artesanais para iluminar e perfumar seu ambiente</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Peças únicas feitas à mão, com aromas aconchegantes e acabamento cuidadoso. Ideal para presentes, decoração e momentos especiais.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#produtos" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background hover:opacity-90">
                Ver catálogo
              </a>
              <a href="#contato" className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-6 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
                Falar com a gente
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-56 w-56 md:h-72 md:w-72">
              <Image src="/globe.svg" alt="Ilustração de vela" fill className="object-contain dark:invert" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-2xl font-semibold">Destaques</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Vela de Lavanda", img: "/file.svg", desc: "Aroma relaxante para noites tranquilas" },
            { title: "Vela de Baunilha", img: "/window.svg", desc: "Doce e acolhedora para a casa" },
            { title: "Vela Cítrica", img: "/globe.svg", desc: "Frescor para energizar o ambiente" },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-black/10 p-4 dark:border-white/15">
              <div className="relative mb-4 h-40 w-full">
                <Image src={p.img} alt={p.title} fill className="object-contain dark:invert" />
              </div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-black/5 p-6 dark:bg-white/10">
          <h2 className="mb-3 text-2xl font-semibold">Sobre</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Criamos velas com materiais selecionados e fragrâncias de alta qualidade. Nossa missão é levar aconchego e beleza para o seu dia a dia, com produtos feitos em pequenos lotes e atenção aos detalhes.
          </p>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold">Entre em contato</h2>
          <p className="max-w-xl text-zinc-700 dark:text-zinc-300">
            Tire dúvidas, peças personalizadas ou pedidos pelo WhatsApp ou Instagram.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background hover:opacity-90">
              WhatsApp
            </a>
            <a href="#" className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-6 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
