import coneline from '../assets/images/cone line diagram.jpg';

export const SteelArrangement = () => {
    return (
        <main>
            <div>
                <h1 className="text-2xl">Steel General Arrangement Drawing</h1>

                <br />

                <p className="text-justify">After our structural analysis is approved, we create General Arrangement drawings. These drawings showcase the layout of structural elements in plan, elevation, and sections. They also include pipe sizes for precise quantity estimations, streamlining the procurement process.</p>
            </div>

            <br />

            <div className="flex items-center justify-center mt-10">
                <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={coneline} alt="fabricimagetop" />
            </div>
        </main>
    )
}
