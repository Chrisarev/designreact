import Hero from './Hero'
import Navbar from './Navbar'
import Cardpanel from './Cardpanel'
import Impactpanel from './Impactpanel'
import Servicespanel from './Servicespanel'
import Endsection from './Endsection'
import Footer from './Footer'

const Home = () =>{

    return (
        <>
          <Navbar />
          <Hero />
          <Cardpanel />
          <Impactpanel />
          <Servicespanel />
          <Endsection />
          <Footer />
        </>
    )
}

export default Home;