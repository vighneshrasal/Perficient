import fabricform from '../assets/images/fabric stress.jpg'

export const FabricForm = () => {
    return (
        <main>
            <div>
                <h1 className="text-2xl">Fabric Form finding, Patterning and Nesting</h1>

                <br />

                <p className="text-justify">At this stage, once the steel structure is in place and based on survey reports, we meticulously craft the fabric to meet functional and aesthetic requirements. With precision cutting, patterning, and nesting, we optimize fabric usage, minimizing wastage while adhering to specifications.</p>
            </div>

            <br />

            <div className="flex items-center justify-center mt-10">
                <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={fabricform} alt="fabricimagetop" />
            </div>
        </main>
    )
}
