import { LayoutPanelLeft } from "lucide-react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const projects = [
    {
        name: "Portfolio Website",
        description: "My personal portfolio showcasing my skills and projects.",
        tech: ["React", "Tailwind", "Framer Motion", "Vite"],
        github: "https://github.com/username/portfolio",
        demo: "https://portfolio-demo.com",
    },
    {
        name: "LCBNB",
        description:
            "A management information system for boarding house owner, tracking leases, payments, and tenants.",
        tech: ["React", "Django (DRF)", "Tailwind",],
        github: "https://github.com/username/store-rentals",
        demo: "https://lcbnb.netlify.app/",
    },
];

const Works = () => {
    return (
        <section className="py-16 px-8 md:px-16 bg-gray-50 dark:bg-gray-900">

            <div className="flex items-center text-2xl font-bold text-white">
                <LayoutPanelLeft className="w-7 h-7 mr-2" />
                <span>Tech Stack</span>
            </div>

            <div className="grid grid-cols-1  mt-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {project.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, tidx) => (
                                <span
                                    key={tidx}
                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
                            >
                                <FiExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
