import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { routePaths } from '@/utils/routes'
import { Home, AllServices, AboutUs, ContactUs, Products, Error404NotFound } from '@/layouts'
import { Footer, Header, PageWrapper } from '@/components'
import { ToastContainer } from 'react-toastify'


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
        <ToastContainer />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default App
