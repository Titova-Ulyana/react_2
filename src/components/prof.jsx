import React from "react";
import Mod from "../components/modal"

const Prof = (props) => {
    return (
<div>
    <div className="p-3">
            <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50" style={{'minWidth':'300px'}}>

                <p className="w-50 text-primary" style={{'minWidth':'250px'}}>id:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>{props.prof.id}</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Телефон:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>{props.prof.phone}</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>email:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>{props.prof.email}</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Имя:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>{props.prof.name}</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Дата регистрации:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>{props.prof.registrationDate}</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Количество найденных животных:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>{props.prof.petsCount}</p>

                <p className="w-50 text-primary" style={{'minWidth':'300px'}}>Количество объявлений:</p>
                <p className="w-50" style={{'minWidth':'300px'}}>{props.prof.ordersCount}</p>
            </div>


<Mod/>
    </div>
</div>

    );
};

export default Prof;