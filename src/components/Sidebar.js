import React from 'react'
import { Hamburger, Pizza, BeerStein, BeerBottle, IceCream} from '@phosphor-icons/react'


export default function Sidebar() {
  return (

    <div className="bg-danger text-white sidebar">

 <img src='https://picsum.photos/60/60' className="img-fluid mb-5" alt='...'/>
 
  
    <ul class="nav flex-column align-items-center">
        <li class="nav-item mb-4">
        <Hamburger size={36} weight="duotone" /> 
      
        </li>
        <li class="nav-item mb-4">
        <Pizza size={36} weight="duotone" /> 
      
        </li>
        <li class="nav-item mb-4">
        <BeerBottle size={36} weight="duotone" /> 
      
        </li>
        <li class="nav-item mb-4">
        <BeerStein size={36} weight="duotone" /> 
      
        </li>
        <li class="nav-item mb-4">
        <IceCream size={36} weight="duotone" /> 
      
        </li>
    </ul>
</div>
  )
}
