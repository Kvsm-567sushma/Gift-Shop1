import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contact'
import Products from './pages/Products'
import WebLayout from './layouts/WebLayout'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminOrders from './pages/Admin/AdminOrders'
import About from './pages/About'


// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                  
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/contact' element={<Contacts />} />
                        <Route path='/about' element={<About />} />
                       

                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/products' element={<AdminProducts />} />
                        <Route path='/admin/orders' element={<AdminOrders />} />
                        
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App