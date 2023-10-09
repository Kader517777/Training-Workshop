import Swal from "sweetalert2";


const Workshop = () => {

    const handleRegistration = () => {
        Swal.fire(
            'Good job!',
            'You have Registration for Workshop!',
            'success'
        )
    }

    return (
        <div className=" lg:container lg:mx-auto mx-5 card my-12  bg-base-100 shadow-xl">
            <figure><img className="md:h-[450px] w-full" src="https://i.ibb.co/SvGJ38r/1674543147-how-to-improve-your-creativity-and-problemsolving-skills-01.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Topics Covered in a Development Workshop</h2>
                <div className=" grid justify-center">
                    <p>This workshop is designed to enhance your communication skills and help
                        you become a more effective and confident communicator. Effective
                        communication is a crucial skill in both personal and professional settings,
                        and this workshop will provide you with the tools and techniques to express
                        yourself clearly, listen actively, and convey your ideas with impact.</p>

                    <div className="grid grid-cols-2">
                        <div>
                            <h1 className=" text-3xl font-bold text-green-600 my-5">Workshop Details:</h1>
                            <ul className="list-disc text-left pl-4 text-xl">
                                <li className="mb-2">Date: 15-10-23</li>
                                <li className="mb-2">Time: 09:00 AM</li>
                                <li className="mb-2">Duration: 3 hours</li>
                                <li className="mb-2">Location: A/B nonogram, Rajbari</li>
                                <li className="mb-2">Facilitator: Rafiqul Islam</li>
                                <li className="mb-2">Registration Fee: 78$</li>
                            </ul>
                        </div>
                        <div className=" hidden md:grid  my-5">
                            <p className="text-3xl font-bold text-green-600 my-5">Workshop Agenda:</p>
                            <ul className="list-disc text-left pl-4 text-xl">
                                <li className="mb-2">Understanding the Importance of Effective Communication </li>
                                <li className="mb-2">Verbal Communication Skills</li>
                                <li className="mb-2">Non-Verbal Communication and Body Language</li>
                                <li className="mb-2">Active Listening and Empathetic Communication</li>
                                <li className="mb-2">Overcoming Communication Barriers</li>
                                <li className="mb-2">Building Confidence in Public Speaking</li>
                                <li className="mb-2">Practical Communication Scenarios and Role-Playing</li>
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

export default Workshop;