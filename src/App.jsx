import './style.css';
import React from 'react';
import Header from './React_component/Header';
import Footer from './React_component/Footer';
import SectionFirst from './React_component/SectionFirst';
import SecondSection from './React_component/SecondSection';
import Product from './React_component/Product';
import MobileSpecialist from './React_component/MobileSpecialist';
import Contact from './React_component/Contact';

function App()
{
return(
    <div>
        <Header />
        <SectionFirst />
        <SecondSection />
        <Product />
        <MobileSpecialist />
        <Contact />
        <Footer />
    </div>
);
}

export default App;