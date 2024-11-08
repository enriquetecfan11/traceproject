import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features4 = () => (
    <section className="w-full bg-bgDark1">
      <div className="text-center text-white space-y-6  py-16">
        <h1 className="text-3xl font-bold mb-8">MENTALIDAD, SEGUIMIENTO Y RESULTADOS</h1>

        <div className="bg-gray-800 rounded-md p-4 shadow-lg max-w-md mx-auto">
          <p className="text-lg">MEJORA DE TU ENFOQUE Y COMPROMISO</p>
        </div>

        <div className="bg-gray-800 rounded-md p-4 shadow-lg max-w-md mx-auto">
          <p className="text-lg">SEGUIMIENTO PERSONALIZADO Y SOPORTE CONTINUO</p>
        </div>

        <div className="bg-gray-800 rounded-md p-4 shadow-lg max-w-md mx-auto">
          <p className="text-lg">ADAPTACIÓN CONSTANTE Y FLEXIBLE</p>
        </div>

        <div className="bg-gray-800 rounded-md p-4 shadow-lg max-w-md mx-auto">
          <p className="text-lg">RESULTADOS A CORTO PLAZO Y DURADEROS</p>
        </div>
      </div>
    </section>
);
