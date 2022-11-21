import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import Banner from './Banner'
import Base from './Base'
function Homepage() {
  return (
<Base>
   <div>
    <Banner/>
    <UncontrolledCarousel className="carousel-inner tales" 
    items={[
      {
      
        key: 1,
        src: '/images/g2.jpg',
        
      },
      {
        key: 2,
        src: '/images/g1.jpg'
      },
      {
        key: 3,
        src: '/images/g3.jpg'
      }
    ]}
   />
  </div>
  <div>
    <h3>
      Giit computer center
    </h3>
    <p>Giit computer center provide you a quality coaching. You can master many languages here.</p>
  </div>
  </Base>
  )
}

export default Homepage