import React from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const Images = ({images, name, id}) => {


    return (<div className={'carousel slide'} id={id} data-bs-ride="carousel">
        <div className={'carousel-inner'}>
        {
        images.map((url, index) => (
            <div className={'carousel-item' + (index === 0 ? ' active' : '')} key={generateUniqueID()}>
                <img src={url} alt={name} className={'d-block img-thumbnail'}/>
            </div>
        ))
    }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={'#'+ id}
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={'#'+ id}
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>)
}
export default Images;