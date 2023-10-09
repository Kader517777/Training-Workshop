import Benefits from "../../component/Benefits/Benefits";
import EventGalary from "../../component/EventGalary/EventGalary";
import Banner from "../../component/Nanner/Banner";
import Services from "../../component/Services/Services";


const Home = () => {
    return (
        <div className="lg:container lg:mx-auto mx-5">
            <Banner></Banner>
            <Services></Services>
            <Benefits></Benefits>
            <EventGalary></EventGalary>

        </div>
    );
};

export default Home;