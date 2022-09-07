import React from 'react';
import pic from '../pic/Computer.png';
import pic2 from '../pic/Tablet.png';

import pic3 from '../pic/Character.png';
import pic4 from '../pic/Mobile.png';
import pic5 from '../pic/Vector1.png';


function SectionFirst()
{
return(
<div className='firstsection'>
<div className='firstcontent'>
<h1>Making the most of the ever-growing <span>Information Technology</span></h1>

<p>Managed by the Team of Professional Experts with extensive experience and impressive track records </p>
    <div className='readMore'><p>Read More</p></div>
</div>
    <div>
    <img className='tablet' src={pic2} alt='Tablet'></img>
    <img className='computer' src={pic} alt='computer'></img>
    <img className='person' src={pic3} alt='person'></img>
    <img className='mobile' src={pic4} alt='mobile'></img>
    <img className='vector1' src={pic5} alt='vector1'></img>
    
    
    </div>
</div>

    
);
}

export default SectionFirst;