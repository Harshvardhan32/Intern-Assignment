import './App.css';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import HeroSection3 from './components/HeroSection3';
import HeroSection4 from './components/HeroSection4';
import Navbar from './components/Navbar';
import SectionTemplate from './components/SectionTemplate';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';

function App() {
    return (
        <div className='max-w-[1700px] w-11/12 mx-auto font-[Poppins]'>
            <Navbar />
            <HeroSection />
            <HeroSection2 />
            <SectionTemplate />
            <div className='text-center'>
                <p className='uppercase text-xl'>Testimonial</p>
                <p className='text-5xl font-bold'>What Our Users <br />Say Aboute Us?</p>
            </div>
            <HeroSection3 />
            <HeroSection4 />
            <Footer1 />
            <Footer2 />
        </div>
    );
}

export default App;
