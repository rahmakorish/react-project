import React from 'react'
import Star from '../component/Star'
export default function Contact() {
  return (
    <div className='contact container-fluid mx-auto p-4 h-75 '>
        <h2>Contact Section</h2>
        <Star/>
    <form className='container w-50 mx-auto p-4'>

   <div class="mb-3 ">
    <label for="UserName"  class="form-label"></label>
    <input type="text" class="form-control" id="UserName" placeholder='User Name' aria-describedby="emailHelp"/>
  </div>
   <div class="mb-3 ">
    <label for="exampleInputAge"  class="form-label"></label>
    <input type="text" class="form-control" id="exampleInputage" placeholder='User age' aria-describedby="emailHelp"/>
  </div>
   <div class="mb-3 ">
    <label for="exampleInputEmail1"  class="form-label"></label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='User Mail' aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"></label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='user Password'/>
  </div>

  <button type="submit" class="btn">Send massage</button>
</form>
    </div>
  )
}
