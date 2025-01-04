import fabanalysis from '../assets/images/fabric analysis.jpg';

export const SteelFabrication = () => {
    return (
        <main>
            <div>
                <h1 className="text-2xl">Steel Fabrication Drawing</h1>

                <br />

                <p className="text-justify">After receiving client approval on the General Arrangement, we craft Steel Fabrication drawings. These detailed plans include all necessary information on member connections, assembly, and plate details, ensuring smooth fabrication processes.</p>
            </div>

            <br />

            <div className="flex items-center justify-center mt-10">
                <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={fabanalysis} alt="fabricimagetop" />
            </div>
        </main>
    )
}
