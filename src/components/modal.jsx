import React, { useState } from "react";

const Mod = () => {
    const [modal,setModal] = useState();
    console.log(modal)

    return (
<div>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Изменить данные
    </button>
    
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">

            <div className="modal-body">
            
                <form style={{'minWidth':'300px'}}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setModal({...modal, exampleInputEmail1:e.target.value})}/>
                        <div  className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                    </div>
                </form>

                <form>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Введите номер телефона</label>
                        <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp" onChange={(e)=>setModal({...modal, phone:e.target.value})}/>
                        <div className="form-text">Используйте цифры, +, -.</div>
                    </div>
                </form>

            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" className="btn btn-primary">Сохранить изменения</button>
            </div>
        </div>
        </div>
    </div>
</div>

    );
};

export default Mod;