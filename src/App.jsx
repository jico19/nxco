import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import TechMarquee from "./components/TechStack"
import Works from "./components/Works"
import Contact from "./components/Contact"
function App() {
  // 
  return (
    <div className="bg-gray-900 w-full min-h-screen px-0 md:px-40 py-20">
      <Header />
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <About />
        </div>
        <div className="w-full md:w-1/2">
          <Experience />
        </div>
      </div>
      <TechMarquee /> 
      <Works />
      <Contact />
    </div>
  )
}

export default App
