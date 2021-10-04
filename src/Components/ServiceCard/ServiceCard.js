import React from 'react';

const ServiceCard = (props) => {
    const { course_name, instructor, course_time, price, img, description } = props.coach;
    return (

        <div className="col">
            <div class="card">
                <img style={{ height: "200px" }} src={img} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{course_name}</h5>
                    <p class="card-text">Instructor : {instructor}</p>

                    <p class="card-text">Time : {course_time}</p>
                    <p class="card-text">Price: {price}</p>
                    <p class="card-text">{description}</p>

                </div>
            </div>
        </div>


    );
};

export default ServiceCard;