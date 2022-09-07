import React from 'react';

function Header()
{
    return(
        <header>

        <div className='header'>

<ul>
    <li><a href='_blank'>Services</a></li>
    <li><a href='_blank'>Product</a></li>
    <li><a href='_blank'>Technology</a></li>
    <li><a href='_blank'>About</a>
    &nbsp;&nbsp;<i class="fa-solid fa-chevron-down"></i>
    </li>
    <li><a href='_blank'>Client</a>
    &nbsp;&nbsp;<i class="fa-solid fa-chevron-down"></i>
    </li>
    <li><a href='_blank'>Partner</a></li>
    <li>
    <i class="fa-regular fa-house"></i>&nbsp;&nbsp;
    <i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;
    <i class="fa-regular fa-arrows-cross"></i>
    </li>
    
</ul>
        </div>
        </header>

    );

}
export default Header;