import React from 'react'
import Star from '../component/Star'

export default function Portfolio(){
  return(
    <div className='portfolio container-fluid mx-auto p-4 h-75 '>
        <h1>Portfolio Component</h1>
        <Star/>
    <section className="py-4">
      <div className="container-fluid">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="item">
              <img src="house.png" className="w-100" alt=""/>

              
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src="cake.png" className="w-100" alt=""/>

              
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src="circus.png" className="w-100" alt=""/>

              
            </div>
          </div>
                    <div className="col-md-4">
            <div className="item">
              <img src="house.png" className="w-100" alt=""/>

              
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src="cake.png" className="w-100" alt=""/>

              
            </div>
          </div>
          <div className="col-md-4">
            <div class="item">
              <img src="circus.png" class="w-100" alt=""/>

              <div class="caption bg-white text-center">
              </div>
            </div>
          </div>
            </div>
          </div>
    </section>
    </div>
)
}
