import React from 'react'
import { Hamburger, Pizza, BeerStein, BeerBottle, IceCream} from '@phosphor-icons/react'


export default function Sidebar() {
  return (

    <div className="bg-danger text-white sidebar p-3 flex-shrink-0">
    {/* <button className="btn btn-outline-light mb-3" id="toggleSidebar">
    <List size={32} />
    </button> */}
 
    <ul class="nav flex-column d-flex align-items-center">
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
