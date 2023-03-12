import { useState } from 'react';

function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
   
            );
}

export default LandingPage;
