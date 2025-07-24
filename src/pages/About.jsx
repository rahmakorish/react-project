import Star from '../component/Star'

export default function About() {
  return (
    <div className='about container-fluid mx-auto p-4 h-75 '>
        <h1 className='fw-5'>About component</h1>
        <Star/>
        <div>
        <div className='about-content d-flex flex-coloumn flex-wrap justify-content-center align-items-center'>
        <p className='w-25 m-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. 
        </p>
        <p className='w-25 m-5'>Freelancer is a free bootstrap theme created by Route. 
            The download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy customization. 
          </p>
        </div>
    </div>
    </div>
  )
}
