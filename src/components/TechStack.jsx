import { motion } from "framer-motion";
import {  FlaskConical, LayoutPanelLeft } from "lucide-react";
import {
    FaReact,
    FaNodeJs,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiTypescript, SiVite } from "react-icons/si";


const techStack = [
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "Node.js", icon: FaNodeJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Django", icon: SiDjango },
    { name: "Vite", icon: SiVite },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
];

const TechMarquee = () => {
    return (
        <div className="overflow-hidden bg-gray-900 p-8 md:p-16">

            <div className="flex items-center text-2xl font-bold text-white">
                <FlaskConical className="w-7 h-7 mr-2" />
                <span>Tech Stack</span>
            </div>

            <motion.div
                className="inline-flex mt-5"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
                }}
            >
                {[...techStack, ...techStack].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                        <span
                            key={idx}
                            className="inline-flex items-center px-4 py-2 mx-2 text-white font-semibold text-sm md:text-sm space-x-2"
                        >
                            <Icon className="w-5 h-5" />
                            <span>{tech.name}</span>
                        </span>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
