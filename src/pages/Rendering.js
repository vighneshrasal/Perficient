import React from 'react';
import threedrendering from '../assets/images/3drendering.png'

export const Rendering = () => {
    return (
        <main>
            <div>
                <h1 className="text-2xl">3D Renderings</h1>

                <br />

                <p className="text-justify">Our 3D Rendering service offers clients a clear understanding of our proposed solutions. Using advanced 3D modeling and rendering software, we bring innovation to life, ensuring our designs align with our creative vision.</p>
            </div>

            <br />

            <div className="flex items-center justify-center mt-10">
                <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={threedrendering} alt="fabricimagetop" />
            </div>
        </main>
    )
}
