import { Copy, FacebookIcon, GithubIcon } from "lucide-react"
import { useState } from "react"


const Contact = () => {
    const [isCopied, setCopied] = useState(false)

    const HandleCopy = async () => {
        try {
            await navigator.clipboard.writeText("jerwinquijano19@gmail.com")
            setCopied(true)
            setTimeout(() => setCopied(false), 800)
        } catch (error) {
            console.log("Failed to Copy Text")
        }
    }

    return (
        <div className='flex flex-col items-center bg-gray-900 text-white p-8 md:px-16'>
            <h1 className='text-4xl text-white font-bold md:text-6xl'>Let's Connect!</h1>
            <div className='mt-5'>
                {/* copy email */}
                <div className="inline-flex items-center rounded-xl bg-gray-800 px-5 py-3 shadow-sm">
                    <div className="relative min-w-[22ch] text-start">
                        <span
                            className={`absolute inset-0 transition-opacity ${isCopied ? "opacity-0" : "opacity-100"
                                }`}
                        >
                            jerwinquijano19@gmail.com
                        </span>

                        <span
                            className={`transition-opacity ${isCopied ? "opacity-100" : "opacity-0"}`}
                        >
                            Copied!
                        </span>
                    </div>

                    <button
                        aria-label="Copy email"
                        className="ml-4 flex items-center justify-center rounded-md p-1.5 text-gray-300 hover:bg-gray-700 hover:text-white transition"
                        onClick={HandleCopy}
                    >
                        <Copy className="h-5 w-5" />
                    </button>
                </div>
                {/* socials */}
                <div className="flex items-center mt-5">
                    <a
                        className="inline-flex items-center px-4 py-2.5 bg-gray-700 rounded-md text-base hover:bg-gray-800 transition-colors"
                        href="https://github.com/jico19"
                        target="_blank"
                    >
                        <GithubIcon className="w-5 h-5 mr-2" />
                        Github
                    </a>

                    <div className="mx-4 h-10 w-px bg-gray-600"></div>

                    <a
                        className="inline-flex items-center px-4 py-2.5 bg-gray-700 rounded-md text-base hover:bg-gray-800 transition-colors"
                        href="https://www.facebook.com/Ekkosecc"
                        target="_blank"
                    >
                        <FacebookIcon className="w-5 h-5 mr-2" />
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact