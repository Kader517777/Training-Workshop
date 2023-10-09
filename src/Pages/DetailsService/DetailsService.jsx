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
    return (
        <>
            {findService ?
                <div className=" lg:container lg:mx-auto card my-12 mx-5   bg-base-100 shadow-xl">
                    <figure><img className="md:h-[450px] w-full" src={findService?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl md:text-3xl text-green-500">{findService?.name}</h2>
                        <p className=" text-base md:text-xl">{findService?.description}</p>
                        <p className=" text-xl text-orange-500 font-bold">{findService?.price}</p>
                        <div className="card-actions justify-end grid grid-cols-2 mt-7">
                            <button onClick={''} className="btn bg-[#ff6900] text-[white] w-full text-2xl">Workshop</button>
                            <button onClick={''} className="btn bg-[#ff6900] text-[white] w-full text-2xl">Webinar</button>
                        </div>
                    </div>
                </div> :
                <div className="text-3xl text-green-500 grid justify-center items-center h-screen font-bold"><p>Please choose your Event</p></div>

            }
        </>
    );
};

export default DetailsService;