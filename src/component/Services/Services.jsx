import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [servises, setServices] = useState([])
    useEffect(() => {
        fetch('t-workshop.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 ">
            {servises.map((service) => <Service key={service.id} service={service} ></Service>)}
        </div>
    );
};

export default Services;