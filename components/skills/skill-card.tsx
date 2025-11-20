"use client";

import { motion } from "motion/react";
import { CardBackground } from "../projects/card/card-background";
import { Badge } from "../ui/badge";
import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode; // Usamos ReactNode que es más flexible para iconos
  items: string[];
}

const SkillCard = ({ title, icon, items }: Props) => {
  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        bounce: 0.1,
        duration: 0.4,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, margin: "-50px" }}
      className="
        relative group flex flex-col h-full overflow-hidden
        /* FORMA: Muy redondeada estilo Android 16 */
        rounded-[32px] p-6
        /* GLASS: Fondo secundario translúcido + Blur fuerte */
        bg-secondary/20 dark:bg-secondary/30 
        backdrop-blur-2xl
        /* BORDE: Sutil o inexistente (confiamos en la sombra/luz) */
        border border-white/5
        /* SOMBRA: Elevación suave */
        shadow-lg shadow-black/5
        /* HOVER: Pequeña escala y aumento de luz */
        transition-all duration-500 hover:scale-[1.02] hover:bg-secondary/40
      "
    >
      {/* Fondo animado (Asumiendo que CardBackground maneja su propio posicionamiento absolute) */}
      <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <CardBackground />
      </div>

      {/* Encabezado de la Tarjeta */}
      <div className="relative z-10 mb-6 flex items-center gap-4">
        {/* ICONO ENCAPSULADO (Estilo Material You) */}
        <div
          className="
          flex items-center justify-center w-12 h-12 rounded-2xl
          bg-primary/10 text-primary
          group-hover:bg-primary group-hover:text-primary-foreground
          group-hover:shadow-[0_0_20px_-5px_rgba(var(--primary),0.4)]
          transition-all duration-300
        "
        >
          <span className="text-2xl">{icon}</span>
        </div>

        <h3 className="text-xl font-bold text-foreground/90 tracking-tight">
          {title}
        </h3>
      </div>

      {/* Lista de Badges */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Badge
            key={index}
            text={item}
            // Pasamos estilos extra al Badge para que sea 'Glass' también
            className="
              bg-white/40 dark:bg-white/5 
              hover:bg-primary/10 dark:hover:bg-primary/20
              text-secondary-foreground font-medium
              backdrop-blur-md border-0
              px-3 py-1.5 rounded-lg
            "
          />
        ))}
      </div>
    </motion.div>
  );
};

export { SkillCard };
