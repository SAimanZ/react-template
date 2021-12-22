import React from 'react'
import { HeaderCard } from './HeaderCard'
export const Footer = () => {
    return (
        <div>
                 <div className='border container-fluid header'> 
        
    <div className=' p-3 row'>
       <div class=" col-md-3" style={{
    height: "257px"}}
>
<h3 className='tabs'>ABOUT US </h3>
<p className='tabs'>Donec cursus eros et risus scelerisque, sit amet ultrices arcu scelerisque.
     Sed consequat fermentum turpis, vulputate maximus.Donec cursus eros et risus scelerisque,
     sit amet ultrices arcu scelerisque. Sed consequat fermentum turpis, vulputate maximus</p>
     <div class="row">
        <div class="col-12 m-1"><div className='bg-light p-2'>TRAVEL</div></div>
</div>
</div>
       <div class=" col-md-3" style={{
    height: "257px"}}
>
   
<h3 className='tabs'>USEFULL LINKS </h3>
<HeaderCard/>
 
</div>
       <div class=" col-md-3" style={{
    height: "257px"}}
>
<h3 className='tabs'>BASIS </h3>
<HeaderCard/>

</div>
       <div class=" col-md-3" style={{
    height: "257px"}}
><div className='container'>
<h3 className='tabs'>TODO LIST </h3>
<div class="row">
        <div class="col-12 m-1"><div className='bg-light p-2'>TRAVEL</div></div>
        <div class="col-12 m-1 "><div className='bg-danger p-2'>TECHNOLOGY</div></div>
        <div class="col-12 m-1"><div className='bg-light p-2'>FASHION</div></div>
        <div class="col-12 m-1 "><div className='bg-danger p-2'>ANIMAL</div></div>
      </ div>
</div>

</div>
        </div>    
  
      
  </div>
        </div>
    )
}
