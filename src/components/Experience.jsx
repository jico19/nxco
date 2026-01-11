import { Briefcase } from "lucide-react"

const Experience = () => {

    const experience = [
        {
            date: "November 8, 2025",
            text: "Participated in my first Hackathon with OpenIT, where our team developed a web system that alerts civilians during earthquakes and guides them to the nearest evacuation centers."
        },
        {
            date: "January 2026 - Present",
            text: "Currently serving as a Capstone Developer, focusing on designing and implementing web applications while collaborating with team members to solve real-world IT problems."
        },
    ]

    return (
        <div className='bg-gray-900 text-white p-8 md:px-16'>

            <div className="flex items-center text-2xl font-bold">
                <Briefcase className="w-7 h-7 mr-2" />
                <span>Experience</span>
            </div>

            <div className="mt-5">
                <div className="flex w-full flex-col items-start">
                    {experience && experience.map((items, idx) => (
                        <div className="group flex gap-x-6" key={idx}>

                            {/* Timeline Indicator */}
                            <div className="relative">
                                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-300 dark:bg-slate-600"></div>
                                <span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-slate-300 dark:bg-slate-600 text-slate-800"></span>
                            </div>

                            {/* Content */}
                            <div className="-translate-y-1.5 pb-8 text-slate-600">
                                <p className="font-mono text-base font-bold text-slate-800 antialiased dark:text-white">
                                    {items.date}
                                </p>
                                <small className="mt-2 block font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300 antialiased">
                                    {items.text}
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Experience