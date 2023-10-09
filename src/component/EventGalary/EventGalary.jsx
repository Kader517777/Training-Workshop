import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const EventGalary = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, });
    }, [])
    return (
        <div>
            <h1 className=" text-3xl font-bold md:mt-5 text-[#ff6900]">Event Galary</h1>
            <div className="overflow-x-hidden grid grid-cols-2 mt-4 md:mt-6">
                <div className="mb-20 md:mb-40" data-aos="zoom-out-right">
                    <img src="https://i.ibb.co/sCb5yTJ/team-building-busines-collaboration-development-concept-75526336.webp" alt="" />
                </div>
                <div></div>
            </div>
            <div className=" overflow-x-hidden grid grid-cols-2">
                <div></div>
                <div data-aos="fade-left">
                    <img src="https://i.ibb.co/4Ytp6pM/timenew.png" alt="" />
                </div>
            </div>
            <div className=" overflow-x-hidden grid grid-cols-2">
                <div className="my-20 md:my-40" data-aos="fade-right">
                    <img src="https://i.ibb.co/SvGJ38r/1674543147-how-to-improve-your-creativity-and-problemsolving-skills-01.jpg" alt="" />
                </div>
                <div></div>
            </div>
            <div className="overflow-x-hidden grid grid-cols-2">
                <div></div>
                <div data-aos="fade-left">
                    <img src="https://i.ibb.co/nLc1QtT/insights-02-18-big-1310x575-1.jpg" alt="" />
                </div>
            </div>
            <div className=" overflow-x-hidden grid grid-cols-2">
                <div className="my-20 md:my-40" data-aos="fade-right">
                    <img src="https://i.ibb.co/F6SjkwL/effects-of-emotional-intelligence-768x576.jpg" alt="" />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default EventGalary;