import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Star() {
  return (
    <div className='star w-25 fw-bold mx-auto d-flex justify-content-center align-items-center'>
        <FontAwesomeIcon icon={faStar} />
    </div>
    
  )
}
