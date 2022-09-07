import React from 'react';
import pic from '../pic/cover.png';
import pic2 from '../pic/cover1.png';
import pic3 from '../pic/cover2.png';
import pic4 from '../pic/cover3.png';
import pic5 from '../pic/Vector.png';
import pic6 from '../pic/twitter.png';
import pic7 from '../pic/instagram.png';
import pic8 from '../pic/Line 1.png';





function MobileSpecialist()
{
return(
    <div className='mobile-div'>

<h2>Mobile Specialist</h2>
<div className='line'>

<img src={pic8} alt='line'></img>
</div>
    
<div className='mobilespecialist'>
<div className='card'>
<img src={pic} alt='coverpic'></img>
<p className='dept'>System Analyst</p>
<p>Rodney Stratton</p>
<div className='card-img'>
<img src={pic5} alt='facebook'></img>
<img src={pic6} alt='twitter'></img>
<img src={pic7} alt='instagram'></img>

</div>

</div>
<div className='card'>
<img src={pic2} alt='coverpic'></img>
<p className='dept'>System Analyst</p>
<p>Rodney Stratton</p>
<div className='card-img'>

<img src={pic5} alt='facebook'></img>
<img src={pic6} alt='twitter'></img>
<img src={pic7} alt='instagram'></img>
</div>

</div>
<div className='card'>
<img src={pic3} alt='coverpic'></img>
<p className='dept'>Programmer</p>
<p>Rodney Stratton</p>
<div className='card-img'>

<img src={pic5} alt='facebook'></img>
<img src={pic6} alt='twitter'></img>
<img src={pic7} alt='instagram'></img>
</div>

</div>
<div className='card'>
<img src={pic4} alt='coverpic'></img>
<p className='dept'>Programmer</p>
<p>Rodney Stratton</p>
<div className='card-img'>

<img src={pic5} alt='facebook'></img>
<img src={pic6} alt='twitter'></img>
<img src={pic7} alt='instagram'></img>
</div>

</div>
</div>
</div>
);
}
export default MobileSpecialist;