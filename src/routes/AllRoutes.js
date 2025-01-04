import { Route, Routes } from 'react-router-dom'
import { About, Contact, Projects, Services } from '../pages'
import { ConceptDevelopment } from '../pages/ConceptDevelopment'
import { Rendering } from '../pages/Rendering';
import { StructuralAnalysis } from '../pages/StructuralAnalysis';
import { SteelArrangement } from '../pages/SteelArrangement';
import { SteelFabrication } from '../pages/SteelFabrication';
import { FabricForm } from '../pages/FabricForm';
import { FabricAccessory } from '../pages/FabricAccessory';


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='3dconceptdevelopment' element={<ConceptDevelopment/>}/>
        <Route path='rendering' element={<Rendering/>}/>
        <Route path='structuralanalysis' element={<StructuralAnalysis/>}/>
        <Route path='steelarrangement' element={<SteelArrangement/>}/>
        <Route path='steelfabrication' element={<SteelFabrication/>}/>
        <Route path='fabricform' element={<FabricForm/>}/>
        <Route path='fabricaccessory' element={<FabricAccessory/>}/>
    </Routes>
  )
}
