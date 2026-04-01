import Image from "next/image";
import Navbar from "./components/Navbar";
import RevealOnScroll from "./components/RevealOnScroll";
import WhatsAppButton from "./components/WhatsAppButton";

const WA = "542614725689";
const waLink = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const practiceCards = [
  {
    icon: "🌅",
    tag: "Personalizada",
    title: "Mysore",
    desc: "Autopráctica guiada donde cada alumno avanza a su propio ritmo, con asistencia individual. La forma más tradicional y transformadora de practicar Ashtanga.",
  },
  {
    icon: "🕊️",
    tag: "Grupal",
    title: "Clase Guiada",
    desc: "Secuencia completa de la serie, acompañada paso a paso con indicaciones de respiración y alineación. Ideal para profundizar tu práctica en comunidad.",
  },
  {
    icon: "🌱",
    tag: "Desde cero",
    title: "Iniciación",
    desc: "Para quienes dan sus primeros pasos. Un espacio cuidado y amable donde aprender las bases de la respiración, las posturas y el movimiento consciente.",
  },
];

const experiences = [
  { icon: "✦", title: "Encuentros Especiales", desc: "Jornadas de práctica intensiva y talleres temáticos para profundizar en aspectos específicos del Yoga." },
  { icon: "🌙", title: "Rituales & Ceremonias", desc: "Cacao, equinoccios, solsticios y celebraciones estacionales que nos reconectan con los ciclos naturales." },
  { icon: "🌬️", title: "Prácticas de Respiración", desc: "Pranayama y técnicas de respiración consciente para calmar la mente y expandir la energía vital." },
  { icon: "🔥", title: "Tantra", desc: "Exploración del cuerpo energético, la conciencia y la presencia a través de prácticas ancestrales de expansión." },
  { icon: "🎨", title: "Arteterapia", desc: "Espacios donde el arte se convierte en herramienta de expresión, sanación y autoconocimiento profundo." },
  { icon: "🤝", title: "Comunidad", desc: "Un espacio de conexión genuina donde compartir el camino con otros buscadores." },
];

const testimonials = [
  { quote: "Llegué sin saber nada de Yoga… y encontré un camino que transformó mi forma de vivir.", author: "Mariana Di Leo" },
  { quote: "No es solo yoga. Es un espacio donde puedo ser, sin juicios, sin exigencias. Simplemente estar.", author: "Verónica Baglini" },
  { quote: "Inicié por dolores de espalda. Apenas comencé, desaparecieron. Descubrí que ordenar mi mundo interno ordena el externo.", author: "Juan Cruz Castella" },
];

const plans = [
  { title: "Clase Suelta", desc: "Probá una clase sin compromiso. Ideal para conocer la Shala y sentir la práctica por primera vez.", msg: "Hola Pato! Quiero consultar por una clase suelta", featured: false },
  { title: "Mensualidad", desc: "Acceso regular a clases guiadas e iniciación. La mejor forma de sostener tu práctica con constancia.", msg: "Hola Pato! Quiero consultar por la mensualidad", featured: true },
  { title: "Mysore Ilimitada", desc: "Autopráctica sin límites. Para quienes quieren sumergirse en la disciplina diaria del Ashtanga.", msg: "Hola Pato! Quiero consultar por Mysore ilimitada", featured: false },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/yoga-Grande-1.jpg"
            alt="Shala Ashtanga Mendoza Templo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,25,18,0.45)] to-[rgba(30,25,18,0.55)]" />
        <RevealOnScroll className="relative z-10 max-w-[700px] px-8">
          <p className="text-[0.78rem] tracking-[0.25em] uppercase text-gold-light font-normal mb-6">
            Ashtanga Mendoza Templo
          </p>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,4.2rem)] text-white font-light italic mb-5 leading-tight">
            Practicar es volver a casa
          </h1>
          <p className="text-[1.05rem] text-white/85 max-w-[520px] mx-auto mb-10 font-light leading-relaxed">
            Un espacio de presencia, respiración y transformación. La primera Shala de Ashtanga Yoga en Mendoza.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-gold text-white px-10 py-4 text-[0.82rem] tracking-[0.15em] uppercase font-semibold no-underline hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Comenzar mi práctica
          </a>
        </RevealOnScroll>
        <a
          href="#sobre"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[0.7rem] tracking-[0.2em] uppercase flex flex-col items-center gap-2 no-underline"
        >
          Descubrir
          <span className="block w-px h-10 bg-white/30 animate-[scrollLine_2s_ease-in-out_infinite]" />
        </a>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="sobre" className="bg-sand-light py-24 px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll className="rounded overflow-hidden aspect-[3/4]">
            <Image
              src="/yoga-Grande-109.jpg"
              alt="Práctica en la Shala — Ashtanga Mendoza Templo"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="text-[0.72rem] tracking-[0.25em] uppercase text-gold font-semibold mb-4">
              Sobre Pato
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-charcoal mb-6 leading-tight">
              Una buscadora desde siempre
            </h2>
            <div className="space-y-5 text-warm-gray text-[0.95rem] leading-relaxed">
              <p>
                Soy Patricia Alejandra Bordas. Desde muy joven, el cuerpo fue mi puerta de entrada:
                la danza, el movimiento, la energía. Comencé a estudiar danzas a los 10 años y me
                recibí de Profesora de Educación Física.
              </p>
              <p>
                Viviendo en Brasil conocí el Ashtanga Yoga, y algo en mí se ordenó. Desde entonces,
                viajo regularmente a India — a la fuente del Yoga — para estudiar y profundizar.
              </p>
              <p>
                Con los años, la práctica se convirtió en camino. Fundé la primera Shala de Ashtanga
                en Mendoza y, con dedicación y amor, fui creando este espacio que hoy también es
                templo.
              </p>
              <p>
                Acompaño procesos desde lo somático, la respiración y la escucha profunda. Creo en
                el cuerpo como territorio de verdad y en la práctica como un regreso a lo esencial.
              </p>
            </div>
            <p className="font-heading text-[1.4rem] italic text-earth mt-8 pl-6 border-l-2 border-gold">
              Practicar no es exigirse… es recordarse.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== PRACTICE ===== */}
      <section id="practica" className="bg-cream py-24 px-8">
        <div className="max-w-[1100px] mx-auto">
          <RevealOnScroll className="text-center max-w-[650px] mx-auto mb-14">
            <p className="text-[0.72rem] tracking-[0.25em] uppercase text-gold font-semibold mb-4">
              La Práctica
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-charcoal mb-6 leading-tight">
              Movimiento, respiración, silencio
            </h2>
            <p className="text-warm-gray text-[1.05rem]">
              El Ashtanga Yoga es una práctica tradicional, dinámica y meditativa. A través de la
              respiración, el cuerpo se ordena y se abre. La mente se aquieta. Y algo más profundo
              comienza a revelarse.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practiceCards.map((card, i) => (
              <RevealOnScroll
                key={card.title}
                delay={i * 0.1}
                className="bg-white p-10 px-8 rounded border border-black/[0.04] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all"
              >
                <div className="text-[1.8rem] mb-5">{card.icon}</div>
                <span className="inline-block text-[0.68rem] tracking-[0.12em] uppercase text-gold font-semibold mb-3">
                  {card.tag}
                </span>
                <h3 className="font-heading text-[1.4rem] mb-2">{card.title}</h3>
                <p className="text-warm-gray text-[0.9rem]">{card.desc}</p>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="text-center mt-12">
            <p className="font-heading text-[1.3rem] italic text-earth">
              No necesitás experiencia previa. Solo el deseo de habitarte.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SPACE (parallax) ===== */}
      <section id="espacio" className="relative h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="parallax-bg absolute inset-[-20%] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/yoga-Grande-55.jpg)" }}
        />
        <div className="absolute inset-0 bg-[rgba(30,25,18,0.5)]" />
        <RevealOnScroll className="relative z-10 text-center px-8">
          <p className="text-[0.72rem] tracking-[0.25em] uppercase text-gold-light font-semibold mb-4">
            El Espacio
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-tight">
            Un templo cotidiano
          </h2>
          <p className="text-[1.1rem] text-white/85 max-w-[550px] mx-auto">
            La Shala es un espacio íntimo, cálido y vivo, donde el cuerpo respira, se expresa y
            encuentra quietud. Un lugar diseñado para la práctica y la conexión.
          </p>
          <p className="mt-8 text-[0.82rem] tracking-[0.15em] uppercase text-gold-light font-semibold">
            Mendoza, Argentina
          </p>
        </RevealOnScroll>
      </section>

      {/* ===== EXPERIENCES ===== */}
      <section id="experiencias" className="bg-sand-light py-24 px-8">
        <div className="max-w-[1100px] mx-auto">
          <RevealOnScroll className="text-center">
            <p className="text-[0.72rem] tracking-[0.25em] uppercase text-gold font-semibold mb-4">
              Experiencias
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-charcoal mb-6 leading-tight">
              La práctica se expande a la vida
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {experiences.map((exp, i) => (
              <RevealOnScroll
                key={exp.title}
                delay={i * 0.1}
                className="text-center p-8 px-6 bg-white rounded hover:-translate-y-1 transition-transform"
              >
                <div className="text-[2rem] mb-4">{exp.icon}</div>
                <h4 className="font-heading text-[1.2rem] mb-2">{exp.title}</h4>
                <p className="text-[0.85rem] text-warm-gray">{exp.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonios" className="bg-cream py-24 px-8">
        <div className="max-w-[1100px] mx-auto">
          <RevealOnScroll className="text-center">
            <p className="text-[0.72rem] tracking-[0.25em] uppercase text-gold font-semibold mb-4">
              Testimonios
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-charcoal mb-6 leading-tight">
              Voces de quienes practican
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t, i) => (
              <RevealOnScroll
                key={t.author}
                delay={i * 0.1}
                className="p-10 px-8 bg-white rounded border-t-[3px] border-gold"
              >
                <p className="font-heading text-[1.15rem] italic text-charcoal leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[0.82rem] tracking-[0.08em] uppercase text-earth font-semibold">
                  {t.author}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section id="planes" className="bg-sand-light py-24 px-8">
        <div className="max-w-[1100px] mx-auto">
          <RevealOnScroll className="text-center">
            <p className="text-[0.72rem] tracking-[0.25em] uppercase text-gold font-semibold mb-4">
              Planes
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-charcoal mb-6 leading-tight">
              Elegí tu forma de practicar
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {plans.map((plan, i) => (
              <RevealOnScroll
                key={plan.title}
                delay={i * 0.1}
                className={`relative bg-white p-10 px-8 rounded text-center hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all ${
                  plan.featured ? "border-2 border-gold" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[0.68rem] tracking-[0.12em] uppercase px-4 py-1 font-semibold">
                    Más elegido
                  </span>
                )}
                <h3 className="font-heading text-[1.6rem] mb-2">{plan.title}</h3>
                <p className="text-warm-gray text-[0.88rem] mb-6">{plan.desc}</p>
                <a
                  href={waLink(plan.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-8 py-3 text-[0.82rem] tracking-[0.15em] uppercase font-semibold no-underline transition-all ${
                    plan.featured
                      ? "bg-gold text-white hover:bg-gold-light"
                      : "bg-charcoal text-white hover:bg-[#3d3d3d]"
                  }`}
                >
                  Consultar
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="contacto" className="relative py-32 px-8 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/yoga-Grande-109.jpg"
            alt="Práctica Ashtanga"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(30,25,18,0.6)]" />
        <RevealOnScroll className="relative z-10">
          <h2 className="font-heading text-[clamp(2rem,5vw,3.2rem)] text-white italic mb-4 leading-tight">
            El momento es ahora
          </h2>
          <p className="text-white/85 text-[1.1rem] mb-10">
            No necesitás estar lista. Solo necesitás sentir el llamado.
          </p>
          <a
            href={waLink("Hola Pato! Quiero comenzar a practicar")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white px-10 py-4 text-[0.82rem] tracking-[0.15em] uppercase font-semibold no-underline hover:bg-gold-light transition-all"
          >
            Reservar por WhatsApp
          </a>
        </RevealOnScroll>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-charcoal text-white/50 py-12 px-8 text-center text-[0.82rem] tracking-wider">
        <p className="font-heading text-[1.2rem] text-white font-normal mb-2">
          Ashtanga Mendoza Templo
        </p>
        <div className="flex justify-center gap-6 my-6">
          <a
            href="https://www.instagram.com/ashtangamzatemplo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 text-[0.78rem] tracking-[0.12em] uppercase no-underline hover:text-gold-light transition-colors"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 text-[0.78rem] tracking-[0.12em] uppercase no-underline hover:text-gold-light transition-colors"
          >
            WhatsApp
          </a>
        </div>
        <p>Mendoza, Argentina</p>
        <p className="mt-4 text-[0.72rem] opacity-50">
          &copy; {new Date().getFullYear()} Ashtanga Mendoza Templo
        </p>
      </footer>
    </>
  );
}
