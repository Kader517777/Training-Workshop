
const Workshop = () => {
    return (
        // <div className=" container h-screen mx-auto bg-white p-8 rounded shadow-md">

        //     <h1 className="text-2xl font-bold mb-4">Topics Covered in a Development Workshop</h1>

        //     <ul className="list-disc text-left pl-4">
        //         <li className="mb-2">Leadership and Management Skills</li>
        //         <li className="mb-2">Time Management and Productivity</li>
        //         <li className="mb-2">Effective Communication</li>
        //         <li className="mb-2">Problem Solving and Critical Thinking</li>
        //         <li className="mb-2">Stress Management and Well-being</li>
        //         <li className="mb-2">Professional Development and Career Advancement</li>
        //         <li className="mb-2">Technical and Soft Skills Training</li>
        //         <li className="mb-2">Innovation and Creative Thinking</li>
        //         <li className="mb-2">Conflict Resolution and Negotiation Skills</li>
        //         <li className="mb-2">Adaptability and Change Management</li>
        //     </ul>

        // </div>
        <div className=" container mx-auto max-h-screen card my-12  bg-base-100 shadow-xl">
            <figure><img className="h-[550px] w-full" src="https://i.ibb.co/TbcvvbP/images.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Topics Covered in a Development Workshop</h2>
                <div className=" grid grid-cols-2 justify-center">
                    <ul className="list-disc text-left pl-4 ">
                        <li className="mb-2">Leadership and Management Skills</li>
                        <li className="mb-2">Time Management and Productivity</li>
                        <li className="mb-2">Effective Communication</li>
                        <li className="mb-2">Problem Solving and Critical Thinking</li>
                        <li className="mb-2">Stress Management and Well-being</li>
                    </ul>
                    <ul className="list-disc text-left pl-4">
                        <li className="mb-2">Professional Development and Career Advancement</li>
                        <li className="mb-2">Technical and Soft Skills Training</li>
                        <li className="mb-2">Innovation and Creative Thinking</li>
                        <li className="mb-2">Conflict Resolution and Negotiation Skills</li>
                        <li className="mb-2">Adaptability and Change Management</li>
                    </ul>
                </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Workshop;