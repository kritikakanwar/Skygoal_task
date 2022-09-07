import React from 'react';
import pic from '../pic/Device.png';
import pic2 from '../pic/Desk.png';
import pic3 from '../pic/person.png';
import pic4 from '../pic/Plant.png';
import pic5 from '../pic/Coffee.png';






function SecondSection()
{
return(
<div className='secondsection'>
    <div className='secondimage'>
        <img className='desktop' src={pic} alt='personwithdesktop'></img>
        <img className='desk' src={pic2} alt='desk'></img>
        <img className='person2' src={pic3} alt='person'></img>
        <img className='plant' src={pic4} alt='plant'></img>
        <img className='coffee'src={pic5} alt='coffee'></img>
        
        
        
    </div>
<div className='secondcontent'>
<h1>Welcome to <span>Dwidasa Samsara Indonesia(DSI)</span></h1>
<div>

<p>Dwidasa Samsara Indonesia(DSI) was firstly established in 2010 by the founders, who each of them has a common end 
objective to innovate new creations
by making the most of the ever growing information technology through <span>DSI</span>'s distinct front-end-based application concept.</p>
<p>
    Managed by a team of professional experts with extensive experience and impressive track records ,<span>DSI</span> believes that continous improvements and innovations 
    assure your bussiness to run effectively and efficiently.
</p>
</div>
</div>
    
</div>

    
);
}

export default SecondSection;