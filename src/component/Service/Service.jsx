import { Link } from "react-router-dom";

const Service = ({ service }) => {
    return (
        <div className="card bg-[whitesmoke] shadow-xl">
            <figure><img className="h-[250px] w-full" src={service.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p className=" text-base">{service.description}</p>
                <p className=" text-2xl font-bold">{service.price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/${service.id}`}><button className="btn bg-[#ff6900] text-[white]">{service.button}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;