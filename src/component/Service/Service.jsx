import { Link } from "react-router-dom";

const Service = ({ service }) => {
    return (
        <div className="card bg-[whitesmoke] shadow-xl">
            <figure><img className="h-[250px] w-full" src={service.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <p>{service.price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/${service.id}`}><button className="btn btn-primary">{service.button}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;