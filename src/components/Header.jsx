import me from '../assets/ME.jpg'
import { Briefcase, Download, Github, MapPin } from 'lucide-react'

const Header = () => {
    return (
        <div className='bg-gray-900 text-white p-8 md:px-16'>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
                <img src={me} alt="me" className='w-48 h-48 rounded-sm shadow-lg' />

                <div className='flex- space-y-5'>
                    {/* info section */}
                    <div>
                        <h1 className='text-2xl font-semibold'>Jerwin Nico H. Quijano</h1>
                        <div className='flex space-x-2 items-center'>
                            <Briefcase className='w-4 h-4' />
                            <p className='text-sm font-light'>Aspiring Full-Stack Developer and IT Instructor</p>
                        </div>
                        <div className='flex space-x-2 items-center text-sm text-gray-300'>
                            <MapPin className='w-4 h-4' />
                            <span>Lucena City, Quezon Province</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1 italic">“Fuck around and Find out.”</p>
                    </div>

                    <div className=''>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            type='button'
                            className="inline-flex items-center text-sm font-bold bg-blue-500 px-3 py-2 rounded-sm hover:bg-blue-600 transition-colors"
                        >   
                            <Download className='w-5 h-5 mr-2'/>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header