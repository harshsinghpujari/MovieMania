import React from 'react'

function Contact() {
  return (
    
    <div className="mt-16 px-8 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-amber-300">Contact</h1>
        <p className="text-lg text-gray-300 mb-6">
        Got feedback, ideas, or just want to say hi? Let’s connect 👋
        </p>

        <p className="text-lg text-gray-300">
          📧 Email: <a href="mailto:himanshusingh83683@gmail.com" className="text-blue-400 underline">himanshusingh83683@gmail.com</a>
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/harshsinghpujari" target="_blank" className="text-gray-300 hover:text-white">GitHub</a>

          <a href="https://www.linkedin.com/in/himanshusingh83/" target="_blank" className="text-gray-300 hover:text-white">LinkedIn</a>
          
          <a href="https://x.com/harsh_singh_o07" target="_blank" className="text-gray-300 hover:text-white">Twitter</a>
        </div>

    </div>

   
  )
}

export default Contact
