import threedimage from '../assets/images/3dconceptdevelopment.png';
import threedrendering from '../assets/images/3drendering.png'
import pinklineimage from '../assets/images/pink line diagram.jpg';
import coneline from '../assets/images/cone line diagram.jpg';
import fabanalysis from '../assets/images/fabric analysis.jpg';
import fabricform from '../assets/images/fabric stress.jpg';
import fabricaccessory from '../assets/images/fabric stress 2.jpeg'

export const Services = () => {
  return (
    <main>
      <div>
        <h1 className="text-2xl">Services we offer</h1>
      </div>

      <br />

      <div>
        <h1 className="text-2xl">3D Concept Development</h1>

        <br />

        <p className="text-justify">Our 3D Concept Development service offers clients a clear understanding of our proposed solutions. Using advanced 3D modeling and rendering software, we bring innovation to life, ensuring our designs align with our creative vision.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={threedimage} alt="fabricimagetop" />
      </div>

      <br />

      <div className='mt-10'>
        <h1 className="text-2xl">3D Renderings</h1>

        <br />

        <p className="text-justify">Our 3D Rendering service offers clients a clear understanding of our proposed solutions. Using advanced 3D modeling and rendering software, we bring innovation to life, ensuring our designs align with our creative vision.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={threedrendering} alt="fabricimagetop" />
      </div>

      <br />

      <div className='mt-10'>
        <h1 className="text-2xl">Structural Analysis and Reaction Report</h1>

        <br />

        <p className="text-justify">Our Structural Analysis & Design Basis Report offers vital insights, including membrane stresses and structural forces. Using state-of-the-art Non-Linear Analysis programs, we ensure compliance with design codes and deliver clear, comprehensive reports using standard software.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={pinklineimage} alt="fabricimagetop" />
      </div>

      <br />

      <div className='mt-10'>
        <h1 className="text-2xl">Steel General Arrangement Drawing</h1>

        <br />

        <p className="text-justify">After our structural analysis is approved, we create General Arrangement drawings. These drawings showcase the layout of structural elements in plan, elevation, and sections. They also include pipe sizes for precise quantity estimations, streamlining the procurement process.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={coneline} alt="fabricimagetop" />
      </div>

      <br />

      <div className='mt-10'>
        <h1 className="text-2xl">Steel Fabrication Drawing</h1>

        <br />

        <p className="text-justify">After receiving client approval on the General Arrangement, we craft Steel Fabrication drawings. These detailed plans include all necessary information on member connections, assembly, and plate details, ensuring smooth fabrication processes.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={fabanalysis} alt="fabricimagetop" />
      </div>

      <br />

      <div className='mt-10'>
        <h1 className="text-2xl">Fabric Form finding, Patterning and Nesting</h1>

        <br />

        <p className="text-justify">At this stage, once the steel structure is in place and based on survey reports, we meticulously craft the fabric to meet functional and aesthetic requirements. With precision cutting, patterning, and nesting, we optimize fabric usage, minimizing wastage while adhering to specifications.</p>
      </div>

      <br />

      <div className="flex items-center justify-center mt-10">
        <img id="home-image" className="max-w-xl min-w-40 rounded-lg" src={fabricform} alt="fabricimagetop" />
      </div>

      <br />

      <div className='mt-10'>
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
