
const Benefits = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[whitesmoke] py-5 my-7 gap-8">
            <div className="ml-20">
                <h1 className="text-3xl font-bold mb-6">Workshops Benefits</h1>
                <ul className=" list-disc ml-5">
                    <li>Hands-on Learning</li>
                    <li className="my-4">Interactive Environment</li>
                    <li>Skill Development</li>
                    <li className="my-4">Immediate Feedback</li>
                    <li>Networking Opportunities</li>
                    <li className="my-4">Customized Content</li>
                    <li>Problem-Solving and Creativity</li>
                </ul>
            </div>
            <div>
                <img src="https://i.ibb.co/C2HccYm/stock-vector-this-colorful-illustration-shows-effective-vertical-communication-within-a-team-1621037.jpg" alt="" />
            </div>
            <div className="ml-20">
                <h1 className="text-3xl font-bold mb-6">Webinars Benefits</h1>
                <ul className=" list-disc ml-5">
                    <li>Convenience and Accessibility</li>
                    <li className="my-4">Time Efficiency</li>
                    <li>Expert Insights</li>
                    <li className="my-4">Cost-Effectiveness</li>
                    <li>Recording and Reusability</li>
                    <li className="my-4">Engagement Tools</li>
                    <li>Less Disruption to Daily Routine</li>
                </ul>
            </div>
        </div>
    );
};

export default Benefits;