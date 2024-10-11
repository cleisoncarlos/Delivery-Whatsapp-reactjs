import React from 'react'
import {MapPinLine, PhoneCall, Timer, Wallet} from '@phosphor-icons/react'

export default function CardHeader() {
  return (
    <div className='bg-dark'>
        <div className='card-body'>

<div className='row'>
    <div className='col-lg-2'>
<img src='https://picsum.photos/200/200' alt='...'/>
    </div>
    <div className='col py-3'>
        <h1 className='text-white'>Lorem Ipsum Dolor</h1>  
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis molestie lectus. Praesent ut malesuada lectus. Maecenas pharetra viverra libero quis accumsan. Cras at ligula vel quam congue tristique. </p> */}
        <p className='text-white'><MapPinLine size={24} weight='duotone'  /> Nome da rua nº 99  <PhoneCall  size={24} weight='duotone'  /> (91) 9999-9999</p>
        <p className='text-white'><Timer size={24} weight="duotone" /> <span className='fw-bold'>Tempo de espera</span> 30min <Wallet size={24} weight="duotone" /> <span className='fw-bold'>Taxa de entrega:</span> R$ 5.00</p>
    
<div className=''>
<span class="badge text-bg-danger">ESTAMOS FECHADOS</span>
<span class="badge text-bg-success">ESTAMOS FUNCIONANDO</span>

</div>

    </div>
</div>

        </div>
    </div>
  )
}
