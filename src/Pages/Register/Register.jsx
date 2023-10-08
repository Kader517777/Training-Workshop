import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";

const Register = () => {
    const { createUser } = useContext(userContext);
    const [currentUser, setCurrentUser] = useState();
    console.log(currentUser);

    const handleRegitration = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password < 6) {
            return toast.error('At least 6 characters');
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('At least 1 capital letter');
        }
        else if (!/[!S#$%&?]/.test(password)) {
            return toast.error('At least 1 special character');
        }

        createUser(email, password)
            .then(res => {
                const signinUser = res.user;
                setCurrentUser(signinUser);
            })
        console.log(email, password);
    }
    return (
        <div className=" container mx-auto hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h1 className=" text-3xl">Please Register</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegitration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p href="#" className="label-text-alt link link-hover">Already have a account? <Link to='/login' className=" text-green-500 text-xl font-bold">Please Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                {currentUser && <h1 className="  text-green-500 text-xl font-bold">successfully register complete</h1>}
            </div>
        </div>
    );
};

export default Register;