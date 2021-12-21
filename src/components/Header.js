import React from 'react'
import { HeaderCard } from './HeaderCard'
export const Header = () => {
    return (
        <div className='border container-fluid header'> 
        <h1>helo aiman</h1>
    <div className='border p-3 row'>
       <div class="border col-md-3" style={{
    height: "257px"}}
>
<h3 className='tabs'>ABOUT US </h3>
<p className='tabs'>Donec cursus eros et risus scelerisque, sit amet ultrices arcu scelerisque.
     Sed consequat fermentum turpis, vulputate maximus.Donec cursus eros et risus scelerisque,
     sit amet ultrices arcu scelerisque. Sed consequat fermentum turpis, vulputate maximus</p>
</div>
       <div class="border col-md-3" style={{
    height: "257px"}}
>
   
<h3 className='tabs'>USEFULL LINKS </h3>
<HeaderCard/>
 
</div>
       <div class="border col-md-3" style={{
    height: "257px"}}
>
<h3 className='tabs'>BASIS </h3>
<HeaderCard/>

</div>
       <div class="border col-md-3" style={{
    height: "257px"}}
>
<h3 className='tabs'>TODO LIST </h3>
<button type="button" class="btn btn-secondary btn-lg button-hndl">list attachment😊</button>
<button type="button" class="btn btn-secondary btn-lg button-hndl">list assign</button>
<button type="button" class="btn btn-secondary btn-lg button-hndl">add button</button>

</div>
        </div>    
  
      
  </div>

        
    )
}
