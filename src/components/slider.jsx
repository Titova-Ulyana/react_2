import React from 'react';




const Slider = (props) => {
    return (
<div>
    
    <div id="carouselExampleIndicators" className="carousel slide m-auto  bg-opacity-25 w-75 p-2" data-bs-ride="carousel" style={{'minHeight':'350px', 'backgroundColor':'#DBC6FE'}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">

        <div className="carousel-item active text-center">
          <div style={{'textAlign':'center', 'min-height':'300px'}}><img src={props.pets.photos} alt="Собака" style={{'textAlign':'center', 'width':'300px', 'height':'auto'}}/></div>
          <h2>{props.pets.naiden}</h2>
          <p style={{'margin-bottom':'50px'}}>{props.pets.description}</p>
        </div>
        <div className="carousel-item text-center">
          <div style={{'textAlign':'center', 'min-height':'300px'}}><img src={props.pets.photos} alt="Мышь" style={{'textAlign':'center', 'width':'300px', 'height':'auto'}}/></div>
         <h2 className="text-center">Найдена мышь</h2>
          <p style={{'margin-bottom':'50px'}}>Мышь серая, была утеряна в центральном районе</p>
        </div>
        <div className="carousel-item text-center">
          <div style={{'textAlign':'center', 'min-height':'300px'}}><img src={props.pets.photos} alt="Горилла" style={{'textAlign':'center', 'width':'300px', 'height':'auto'}}/></div>
          <h2 className="text-center">Найдена горила</h2>
          <p style={{'margin-bottom':'50px'}}>Горилла, была утеряна в красногвардейчком райне районе</p>
      </div>

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