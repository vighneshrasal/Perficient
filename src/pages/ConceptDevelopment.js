import threedimage from '../assets/images/3dconceptdevelopment.png'

export const ConceptDevelopment = () => {
    return (
        <main>
            <div>
                <h1 className="text-2xl">3D Concept Development</h1>

                <br />

                <p className="text-justify">Our 3D Concept Development service offers clients a clear understanding of our proposed solutions. Using advanced 3D modeling and rendering software, we bring innovation to life, ensuring our designs align with our creative vision.</p>
            </div>

            <br />

            <div className="flex items-center justify-center mt-10">
                <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={threedimage} alt="fabricimagetop" />
            </div>
        </main>
    )
}
