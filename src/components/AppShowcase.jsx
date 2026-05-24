import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const features = [
  {
    id: 1,
    tag: "Dashboard",
    title: "Tu día, de un vistazo.",
    description: "Consulta tu racha, sesiones del día, comunidad y logros desde una sola pantalla diseñada para motivarte cada mañana.",
    highlights: ["Racha diaria", "Sesiones programadas", "Puntos XP", "Comunidad activa"],
    accent: "#ffa500",
    img: "/imagen-celular-2.webp",
    side: "right",
  },
  {
    id: 2,
    tag: "Entrenamiento",
    title: "Cada set, cada rep, en tiempo real.",
    description: "Sigue tu sesión con temporizadores de recuperación, progreso visual y recompensas XP al completar cada ejercicio.",
    highlights: ["Timer de recuperación", "Progreso de sesión", "Recompensas XP", "Técnica en video"],
    accent: "#22c55e",
    img: "/imagen-celular-5.webp",
    side: "left",
  },
  {
    id: 3,
    tag: "Nutrición",
    title: "Smart Fuel: come con inteligencia.",
    description: "Registra calorías, macros y agua. Recibe feedback instantáneo sobre tu nutrición para rendir al máximo.",
    highlights: ["Calorías & macros", "Hidratación diaria", "Meta calórica", "Feedback inteligente"],
    accent: "#10b981",
    img: "/imagen-celular-4.webp",
    side: "right",
  },
  {
    id: 4,
    tag: "Estadísticas",
    title: "Mide lo que importa.",
    description: "Visualiza tu nivel, puntos XP, volumen de entrenamiento, racha y tiempo activo en un dashboard limpio y motivador.",
    highlights: ["Nivel & XP", "Volumen movido", "Racha de días", "Tiempo activo"],
    accent: "#8b5cf6",
    img: "/imagene-celular-3.webp",
    side: "left",
  },
  {
    id: 5,
    tag: "Evolución",
    title: "Visualiza tu transformación.",
    description: "Sube fotos mensuales, compara tu progreso y analiza tu evolución física.",
    highlights: ["Fotos de progreso", "Comparativa mensual", "Análisis corporal", "Historial completo"],
    accent: "#f43f5e",
    img: "/imagen-celular-1.webp",
    side: "right",
  },
];

function PhoneMockup({ src, accent }) {
  return (
    <div className="relative flex-shrink-0 w-[200px] sm:w-[240px] md:w-[270px]">
      {/* Glow shadow */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl opacity-40"
        style={{ backgroundColor: accent }}
      />
      {/* Carcasa (Bordes adaptativos: 32px en móvil, 44px en escritorio) */}
      <div
        className="relative rounded-[32px] sm:rounded-[44px] p-[3px]"
        style={{
          background: "linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 50%, #2a2a2a 100%)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Pantalla (Aspect ratio 9:19 para que NUNCA se distorsione la imagen) */}
        <div className="relative rounded-[30px] sm:rounded-[42px] overflow-hidden bg-black aspect-[9/19]">
          <img
            src={src}
            alt="App screenshot"
            className="absolute inset-0 w-full h-full object-cover object-top block"
          />
          {/* Notch proporcionado */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl sm:rounded-b-3xl"
            style={{ width: "40%", height: "24px" }}
          />
          {/* Borde interior sutil */}
          <div className="absolute inset-0 rounded-[30px] sm:rounded-[42px] ring-1 ring-inset ring-white/5 pointer-events-none" />
        </div>
        {/* Botones físicos con posiciones responsivas */}
        <div className="absolute -right-[3px] top-20 sm:top-24 w-[3px] h-10 sm:h-12 bg-zinc-600 rounded-r-sm" />
        <div className="absolute -left-[3px] top-16 sm:top-20 w-[3px] h-6 sm:h-8 bg-zinc-600 rounded-l-sm" />
        <div className="absolute -left-[3px] top-28 sm:top-32 w-[3px] h-6 sm:h-8 bg-zinc-600 rounded-l-sm" />
        <div className="absolute -left-[3px] top-40 sm:top-44 w-[3px] h-6 sm:h-8 bg-zinc-600 rounded-l-sm" />
      </div>
    </div>
  );
}

function FeatureSection({ feature }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const isLeft = feature.side === "left";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 0.5"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const phoneScale   = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const phoneY       = useTransform(smoothProgress, [0, 1], [100, 0]);
  const phoneOpacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const phoneRotateX = useTransform(smoothProgress, [0, 1], [20, 0]);
  const phoneRotateY = useTransform(smoothProgress, [0, 1], [isLeft ? -20 : 20, 0]);

  return (
    <div
      ref={ref}
      className="flex items-center px-4 sm:px-6 lg:px-8"
      style={{ minHeight: "70vh", padding: "4rem 1.5rem" }}
    >
      <div
        className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-16 lg:gap-24"
      >
        <div
          className={`w-full flex flex-col ${
            isLeft ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-10 md:gap-16 lg:gap-24`}
        >
          {/* Teléfono */}
          <div className="flex justify-center md:flex-shrink-0" style={{ perspective: "1200px" }}>
            <motion.div
              style={{
                scale: phoneScale,
                y: phoneY,
                opacity: phoneOpacity,
                rotateX: phoneRotateX,
                rotateY: phoneRotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <PhoneMockup src={feature.img} accent={feature.accent} />
            </motion.div>
          </div>

          {/* Texto */}
          <div className="flex-1 min-w-0 text-center md:text-left max-w-md mx-auto md:mx-0">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 flex justify-center md:justify-start"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{
                  color: feature.accent,
                  backgroundColor: `${feature.accent}18`,
                  border: `1px solid ${feature.accent}35`,
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: feature.accent }}
                />
                {feature.tag}
              </span>
            </motion.div>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-black leading-tight mb-5"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "var(--text-main)",
              }}
            >
              {feature.title}
            </motion.h2>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-muted)", fontFamily: "Poppins, sans-serif" }}
            >
              {feature.description}
            </motion.p>

            {/* Highlights */}
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {feature.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.accent}20` }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke={feature.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-main)", fontFamily: "Poppins, sans-serif" }}
                  >
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section style={{ backgroundColor: "var(--bg-color)", width: "100%" }}>
      {/* Header */}
      <div className="text-center px-4 sm:px-6" style={{ padding: "6rem 1.5rem 3rem" }}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] mb-5"
          style={{
            color: "#ffa500",
            backgroundColor: "rgba(255,165,0,0.1)",
            border: "1px solid rgba(255,165,0,0.2)",
            fontFamily: "Rajdhani, sans-serif",
          }}
        >
          La App Completa
        </span>
        <h2
          className="font-heading font-black leading-tight mb-5"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            letterSpacing: "-0.03em",
            color: "var(--text-main)",
          }}
        >
          Todo lo que necesitas,
          <br />
          <span style={{ color: "#ffa500" }}>en un solo lugar.</span>
        </h2>
        <p
          className="text-base sm:text-lg max-w-md sm:max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--text-muted)", fontFamily: "Poppins, sans-serif" }}
        >
          Blaze combina entrenamiento, nutrición, estadísticas y comunidad en una experiencia diseñada para atletas serios.
        </p>
      </div>

      {features.map((feature) => (
        <FeatureSection key={feature.id} feature={feature} />
      ))}
    </section>
  );
}