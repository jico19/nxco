import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    // Map scroll progress to height
    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Convert progress to percentage text
    const percentage = useTransform(scrollYProgress, (value) =>
        `${Math.round(value * 100)}%`
    );

    return (
        <div className="fixed top-4 right-4 flex items-center flex-col gap-2 z-50">
            {/* Progress bar container */}
            <div className="h-60 w-3.5 bg-gray-700 overflow-hidden">
                <motion.div
                    className="w-full bg-blue-400 origin-top"
                    style={{ height }}
                />
            </div>

            {/* Percentage label */}
            <motion.span className="text-xx font-mono text-gray-300">
                {percentage}
            </motion.span>
        </div>
    );
}
