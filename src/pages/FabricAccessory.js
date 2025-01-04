import fabricaccessory from '../assets/images/fabric stress 2.jpeg'

export const FabricAccessory = () => {
    return (
        <main>
            <div>
                <h1 className="text-2xl">Fabric Accessories & Quantity list </h1>

                <br />

                <p className="text-justify">Following fabric design, we meticulously craft detailed drawings for essential hardware accessories. From corner plates to cable end terminals, these components ensure the fabric is securely held in its desired shape, enhancing both functionality and aesthetics.</p>
            </div>

            <br />

            <div className="flex items-center justify-center mt-10">
                <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={fabricaccessory} alt="fabricimagetop" />
            </div>
        </main>
    )
}
