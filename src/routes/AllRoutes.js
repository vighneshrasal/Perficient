import { Route, Routes } from 'react-router-dom'
import { About, Contact, Projects, Services } from '../pages'
import { ConceptDevelopment } from '../pages/ConceptDevelopment'
import { Rendering } from '../pages/Rendering';


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='3dconceptdevelopment' element={<ConceptDevelopment/>}/>
        <Route path='rendering' element={<Rendering/>}/>
    </Routes>
  )
}
