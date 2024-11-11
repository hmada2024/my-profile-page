import React from 'react';
import './App.css';
import { Mail, Phone, User, Briefcase, Code, GraduationCap, ExternalLink, Home, Info, List, Book } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-between px-8 py-4">
        <div className="text-white text-3xl font-bold">
          My Profile
        </div>
        <nav className="flex space-x-4">
          <a href="#about" className="text-white text-lg hover:text-gray-300">About</a>
          <a href="#experience" className="text-white text-lg hover:text-gray-300">Experience</a>
          <a href="#projects" className="text-white text-lg hover:text-gray-300">Projects</a>
          <a href="#education" className="text-white text-lg hover:text-gray-300">Education</a>
          <a href="#skills" className="text-white text-lg hover:text-gray-300">Skills</a>
          <a href="#contact" className="text-white text-lg hover:text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Profile Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative pb-16">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="p-8 sm:p-10 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">Mohamed Ahmed Ibrahim AbdelAziz</h1>
                <p className="text-lg text-gray-600 mt-1">Civil Engineer</p>
                <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                  <a href="mailto:john.doe@email.com" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <Mail className="w-4 h-4 mr-2" />
                    john.doe@email.com
                  </a>
                  <a href="tel:01091581523" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    <Phone className="w-4 h-4 mr-2" />
                    01091581523
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <section id="about">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">About Me</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Marital Status: Single
                  <br />
                  Birth Date: 8/8/1991
                  <br />
                  Nationality: Egyptian
                  <br />
                  Military status: Done
                  <br />
                  Mobile: 01091581523
                </p>
              </section>

              {/* Experience Section */}
              <section id="experience">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-gray-200 pb-6 last:pb-0">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                    <h3 className="font-semibold text-gray-900">Surveyor</h3>
                    <p className="text-sm text-gray-600 mt-1">Contracting Company • 2016 - Present</p>
                    <p className="mt-2 text-gray-600">Performed all phases of land surveys using GPS devices such as building, landscape, infrastructure, and planning the route of roads.</p>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Notable Projects</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      GPS Survey Project
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">Performed land surveys for building and landscape projects.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Education Section */}
              <section id="education">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Education</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Master of International Commerce Law</h3>
                    <p className="text-sm text-gray-600 mt-1">Ain Shams University • 2016</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Bachelor of Law</h3>
                    <p className="text-sm text-gray-600 mt-1">Assiut University • 2014</p>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Civil 3D 2022", "AutoCAD 2022", "Microsoft Office", "Typing (English)"].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Social Links */}
              <section id="contact">
                <div className="flex flex-col space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
