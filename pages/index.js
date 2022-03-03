import Navbar from '../components/layout/Navbar'
import NavbarMenu from '../components/layout/NavbarMenu'
import MainSection from '../components/Main/MainSection'
import Card from '../components/Main/Card'

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMenu />
      {/* component/main/MainSection.js */}
      <MainSection />
      <Card />
    </>
  )
}
