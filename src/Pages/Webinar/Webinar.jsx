import Swal from "sweetalert2";

const Webiner = () => {

    const handleRegistration = () => {
        Swal.fire(
            'Good job!',
            'You have Registration for Webinar!',
            'success'
        )
    }
    return (
        <div className=" lg:container lg:mx-auto mx-5 card my-12  bg-base-100 shadow-xl">
            <figure><img className="md:h-[450px] w-full" src="https://i.ibb.co/nLc1QtT/insights-02-18-big-1310x575-1.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Mastering Effective Communication Skills</h2>
                <div className=" grid justify-center">
                    <p>This webinar is dedicated to helping you master the art of effective
                        communication. Communication is a cornerstone of success in both
                        personal and professional realms. Join us for an engaging session
                        where you'll learn practical techniques to express yourself clearly,
                        listen actively, and convey your ideas with impact.</p>

                    <div className="grid grid-cols-2">
                        <div>
                            <h1 className=" text-3xl font-bold text-green-600 my-5">Webinar Details:</h1>
                            <ul className="list-disc text-left pl-4 text-xl">
                                <li className="mb-2">Date: 15-10-23</li>
                                <li className="mb-2">Time: 09:00 AM</li>
                                <li className="mb-2">Duration: 3 hours</li>
                                <li className="mb-2">Platform: A/B nonogram, Rajbari</li>
                                <li className="mb-2">Host: Rafiqul Islam</li>
                                <li className="mb-2">Registration Fee: 78$</li>
                            </ul>
                        </div>
                        <div className=" hidden md:grid  my-5">
                            <p className="text-3xl font-bold text-green-600 my-5">Webinar Agenda:</p>
                            <ul className="list-disc text-left pl-4 text-xl">
                                <li className="mb-2">The Foundations of Effective Communication</li>
                                <li className="mb-2">Verbal and Non-Verbal Communication Techniques</li>
                                <li className="mb-2">Listening Skills for Enhanced Understanding</li>
                                <li className="mb-2">Overcoming Communication Barriers</li>
                                <li className="mb-2">Adapting Your Communication Style</li>
                                <li className="mb-2">Building Confidence in Communication</li>
                                <li className="mb-2">Practical Applications of Effective Communication</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card-actions justify-end">
                    <button onClick={handleRegistration} className="btn bg-[#ff6900] text-[white] w-full text-2xl">Registration Now</button>
                </div>
            </div>
        </div>
    );
};

export default Webiner;