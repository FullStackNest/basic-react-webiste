import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ContactUs from './layouts/ContactUs/ContactUs'
import Home from './layouts/Home/Home'
import Error404NotFound from './layouts/Error404NotFound/Error404NotFound'
import AllServices from './layouts/AllServices/AllServices'
import AboutUs from './layouts/AboutUs/AboutUs'
import PageWrapper from './components/PageWrapper/PageWrapper'
import { routePaths } from './utils/routes'
import Products from './layouts/Products/Products'

function App() {

  return (
    <>
      <Header />
      <PageWrapper>
        <Routes>
          <Route path={routePaths.home} exact element={<Home />} />
          <Route path={routePaths.contactUs} exact element={<ContactUs />} />
          <Route path={routePaths.aboutUs} exact element={<AboutUs />} />
          <Route path={routePaths.allServices} exact element={<AllServices />} />
          <Route path={routePaths.allServicesSubPages} exact element={<AllServices />} />
          <Route path={routePaths.products} exact element={<Products />} />
          <Route path={routePaths.pageNotFound} element={<Error404NotFound />} />

        </Routes>
      </PageWrapper>
      <Footer />
    </>
  )
}

export default App
