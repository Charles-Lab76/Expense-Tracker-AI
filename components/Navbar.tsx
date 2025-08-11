import { checkUser } from '@/lib/checkUser';

export default function Navbar() {
    const user = checkUser();
    return <div> Navbar</div>;

}



/*

import React from 'react';

const Navbar = () => {
    const user = checkUser();
  return <div> Navbar</div>;
  
};

export default Navbar;
*/