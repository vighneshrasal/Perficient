import { Route, Routes } from 'react-router-dom'
import { About, Contact, Projects, Services } from '../pages'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='services' element={<Services/>}/>
    </Routes>
  )
}
