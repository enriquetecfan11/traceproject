import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import {TailcastLogo} from "../assets/logos/TailcastLogo";
import {GithubIcon} from "../assets/icons/GithubIcon";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl lg:hidden"
            aria-label="Main navigation"
        >
            <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-center items-center relative">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3}}
                    exit={{opacity: 0}}
                >
                    <a href="/#home" aria-label="Home">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="text-white font-['Inter'] font-bold text-3xl lg:text-2xl">
                                TRACE PROJECT
                            </div>
                            <div className="text-white font-['Inter'] font-medium text-base lg:text-lg mt-1">
                                PARA LOS QUE BUSCAN UN CAMBIO REAL
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </nav>
    )
        ;
};
