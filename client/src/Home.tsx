import Hero from './Hero'
import Navbar from './Navbar'
import Cardpanel from './Cardpanel'
import Impactpanel from './Impactpanel'
import Servicespanel from './Servicespanel'
import Endsection from './Endsection'
import Footer from './Footer'
import Hero2 from './Hero2'
import {motion} from 'framer-motion'

const Home = () =>{

    
    return (
        <motion.div initial={{opacity:1}}  exit={{opacity:0}}>
          <Navbar /> 
          <Hero2 />
          <Cardpanel />
          <Impactpanel />
          <Servicespanel />
          <Endsection />
          <Footer />
        </motion.div>
    )
}

export default Home;