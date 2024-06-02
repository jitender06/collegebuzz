import React from 'react'
import P1 from './assets/p1.jpeg'
import P2 from './assets/p2.jpeg'
import P3 from './assets/p3.jpeg'
export default function Team() {
  return (
    <div className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">College Buzz Team</h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">College Buzz: Your Campus, Your Connection, Your Voice.</p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src={P1} alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 className="text-2xl">Vineet Kanher</h4>
                    <span className="block text-sm text-gray-500">Btech Computer Science Engineering</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src={P2} alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 className="text-2xl">Rashmi Singh</h4>
                    <span className="block text-sm text-gray-500">Btech Computer Science Engineering</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src={P3} alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 className="text-2xl">Suhani Chauhan</h4>
                    <span className="block text-sm text-gray-500">Btech Computer Science Engineering</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
