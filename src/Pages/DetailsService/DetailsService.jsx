import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsService = () => {
    const dynamicID = useParams();
    const [servises, setServices] = useState([])
    useEffect(() => {
        fetch('t-workshop.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const findService = servises.find((item) => item.id == dynamicID.id);
    console.log(findService);
    return (
        <div>
            kgjflkdfhgo
        </div>
    );
};

export default DetailsService;