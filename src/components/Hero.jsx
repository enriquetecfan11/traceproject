import {useState} from "react";
import {motion} from "framer-motion";

import {InvitationModal} from "./InvitationModal";
import TraceProjetLogo from "../assets/images/logotraceprojectnofondo.png";

export const Hero = () => {
    return (
        <section
            className="w-screen flex justify-center items-center bg-bgDark1"
            id="home"
        >
            <div
                className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center md:pt-16 lg:pt-20 text-center mt-20">
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h1 className="hidden md:block text-3xl text-white font-bold">
                        BIENVENIDO A
                    </h1>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.05}}
                >
                    <div className="mx-auto sm:border-none sm:m-560 rounded-xl main-border-gray mt-10 sm:mt-20">
                        <img
                            src={TraceProjetLogo.src}
                            alt="Feature image 1"
                            aria-label="Feature image 1"
                        />
                    </div>
                    <h1 className="hidden md:block text-3xl text-white font-bold mt-4">
                        PARA LOS QUE BUSCAN UN CAMBIO REAL
                    </h1>
                    <div className="hidden md:block text-white mt-4">
                        Desliza para abajo ver más
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.15}}
                >
                    <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center pb-5">
                        <a
                            href="https://wa.me/34651407403"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contactar por WhatsApp"
                        >
                            <button
                                className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 border-b-primaryColor"
                            >
                                Hablamos
                            </button>
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};