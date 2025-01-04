import pinklineimage from '../assets/images/pink line diagram.jpg';

export const StructuralAnalysis = () => {
    return (
        <main>
            <div>
                <h1 className="text-2xl">Structural Analysis and Reaction Report</h1>

                <br />

                <p className="text-justify">Our Structural Analysis & Design Basis Report offers vital insights, including membrane stresses and structural forces. Using state-of-the-art Non-Linear Analysis programs, we ensure compliance with design codes and deliver clear, comprehensive reports using standard software.</p>
            </div>

            <br />

            <div className="flex items-center justify-center mt-10">
                <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={pinklineimage} alt="fabricimagetop" />
            </div>
        </main>
    )
}
