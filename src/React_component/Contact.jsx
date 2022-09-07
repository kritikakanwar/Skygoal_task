import React from 'react';

import pic1 from '../pic/image 7.png';
import pic2 from '../pic/image 9.png';
import pic3 from '../pic/image 10.png';
import pic4 from '../pic/image 11.png';
import pic5 from '../pic/image 14.png';
import pic6 from '../pic/image 13.png';

function Contact()
{
return(
  <div>
    <h2 className='contact-h2'>Contact</h2>
    <div className='contact-div'>
    <div>
        <p><strong>PT Dwidasa Samsara Indonesia</strong></p>
        <p>Ruko Jalur Sutera 29A No. 53<br></br>
Alam Sutera Serpong, Tangerang 15323
</p>
</div>
<div>
    <p>Phone : +62.21.5314.1135<br></br>
Fax : +62.21.5314.1135<br></br>
Email : community@dwidasa.com</p>
</div>
<div className='componylogo'>


      <div>
        <img src={pic1} alt='image7'></img>&nbsp;
        <img src={pic2} alt='image9'></img>&nbsp;
        <img src={pic3} alt='image10'></img>
        </div>
        <div className='company-logo'>
        <img src={pic4} alt='image11'></img>
        <img src={pic5} alt='image13'></img>
        <img src={pic6} alt='image14'></img>
        
      </div>
      </div>
      </div>  
    </div>
   
);
}
export default Contact;