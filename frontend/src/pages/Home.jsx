import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Harminder Singh</span>
        </h1>

        <p className="text-xl text-gray-300 mb-2">
          WordPress & PHP Developer
        </p>

        <p className="text-lg text-gray-400 mb-8">
          Currently learning Laravel + React
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-semibold"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Web Developer with 3+ years of professional experience, specializing in WordPress, PHP, and jQuery. Strong experience in
            developing, customizing, and maintaining WordPress-based websites, including form handling, API integrations, and
            performance optimization. Proven ability to work on long-term and short-term client projects, deliver reliable solutions, and
            collaborate effectively within development teams.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Home