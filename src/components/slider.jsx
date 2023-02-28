import React from 'react';
import Test from "../components/test"

import dog from '../img/pets/собака.jpg';
import mouse from '../img/pets/мышь.jpg';
import gorill from '../img/pets/горилла.jpg';

let pets1={photos:dog, kind:'Найдена собака', description:'Собака рыжая, была утеряна в красногвардейчком райне районе', css:'carousel-item active text-center'}
let pets2={photos:mouse, naiden:'Найдена мышь', description:'Мышь серая, была утеряна в центральном районе', css:'carousel-item text-center'}
let pets3={photos:gorill, naiden:'Найдена горила', description:'Горилла, была утеряна в красногвардейчком райне районе', css:'carousel-item text-center'}


const Slider = () => {
    return (
<div>
    
    <div id="carouselExampleIndicators" className="carousel slide m-auto  bg-opacity-25 w-75 p-2" data-bs-ride="carousel" style={{'minHeight':'350px', 'backgroundColor':'#DBC6FE'}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">


<Test pets={pets1}/>
<Test pets={pets2}/>
<Test pets={pets3}/>

    </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{'backgroundColor':'#AB78DE'}}></span>
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{'backgroundColor':'#AB78DE'}}></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>  
</div>
    )
}
export default Slider;