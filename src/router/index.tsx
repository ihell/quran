import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

