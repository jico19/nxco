import { Briefcase } from "lucide-react"



const About = () => {
    return (
        <div className='bg-gray-900 text-white p-8 md:px-16'>

            <div className="flex items-center text-2xl font-bold">
                <Briefcase className="w-7 h-7 mr-2" />
                <span>About</span>
            </div>

            {/* about contents */}
            <div className="flex flex-col space-y-5 mt-5">
                <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    I am a 3rd-year BSIT student at Dalubhasaan ng Lungsod ng Lucena, passionate about building modern, user-centered websites and IT solutions. Currently, I am in my 2nd semester of my 3rd year, focusing on Web Development.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    I enjoy exploring new technologies and learning continuously. I love developing systems that can help communities and individuals, turning ideas into functional web applications. I am committed to upskilling, and someday I aspire to become an IT Instructor a role I occasionally practice by teaching others.
                </p>
            </div>

        </div>
    )
}

export default About