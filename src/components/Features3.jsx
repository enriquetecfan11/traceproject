import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features3 = () => (
  <section className="w-full bg-bgDark1">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-full max-w-screen-xl mx-auto py-20 my-20 px-10">
        <h2 className="text-center text-4xl lg:text-5xl mb-16 block-big-title">
          Herramientas Clave
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="card bg-dark text-primaryText p-6 rounded-lg shadow-md border border-white">
            <CheckArrowIcon />
            <h3 className="text-xl font-semibold mb-4 mt-4 capitalize">Tabla de hábitos</h3>
            <p className="capitalize">Ajustamos tus rutinas según el progreso semanal.</p>
          </div>
          <div className="card bg-dark text-primaryText p-6 rounded-lg shadow-md border border-white">
            <CheckArrowIcon />
            <h3 className="text-xl font-semibold mb-4 mt-4 capitalize">Blindaje de agenda mensual</h3>
            <p className="capitalize">Organiza tu tiempo con una planificación mensual, maximizando tu productividad.</p>
          </div>
          <div className="card bg-dark text-primaryText p-6 rounded-lg shadow-md border border-white">
            <CheckArrowIcon />
            <h3 className="text-xl font-semibold mb-4 mt-4 capitalize">Comunidad de WhatsApp</h3>
            <p className="capitalize">Comparte avances, resuelve dudas y recibe motivación por parte de otros tracers.</p>
          </div>
          <div className="card bg-dark text-primaryText p-6 rounded-lg shadow-md border border-white">
            <CheckArrowIcon />
            <h3 className="text-xl font-semibold mb-4 mt-4 capitalize">Entrenamiento presencial</h3>
            <p className="capitalize">Sesión de entrenamiento para perfeccionar técnica y optimizar tu rendimiento.</p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
