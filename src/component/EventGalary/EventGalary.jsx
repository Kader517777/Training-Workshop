import Aos from "aos";
import { useEffect } from "react";

const EventGalary = () => {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div data-aos="fade-right"><img src="https://i.ibb.co/4Ytp6pM/timenew.png" alt="" /></div>
            <div data-aos="fade-left"><img src="https://i.ibb.co/4Ytp6pM/timenew.png" alt="" /></div>
        </div>
    );
};

export default EventGalary;