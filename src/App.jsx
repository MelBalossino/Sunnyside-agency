import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Services from "./components/Services/Services"
import TestimonialsContainer from "./components/TestimonialsContainer/TestimonialsContainer"
import ImagesGallery from "./components/ImagesGallery/ImagesGallery"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <main className="max-w-[1440px] mx-auto relative">
    <Header />
    <Main />
    <Services />
    <TestimonialsContainer />
    <ImagesGallery />
    <Footer />
    </main>
  )
}

export default App
