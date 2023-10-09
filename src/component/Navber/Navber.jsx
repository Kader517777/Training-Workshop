import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";

const Navber = () => {
    const { user, signUp, loader } = useContext(userContext);
    const detailsId = useParams();

    const handleSignOut = () => {
        signUp();
    }

    console.log(detailsId);
    return (
        <div className="container mx-auto mb-8 navbar bg-[whitesmoke]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? " text-2xl text-[white] bg-[#ff6900] font-bold" : "text-2xl font-bold text-rose-400"
                            }
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? " text-2xl text-[white] bg-[#ff6900] font-bold" : "text-2xl font-bold text-rose-400"
                            }
                        >
                            Login
                        </NavLink></li>
                    </ul>
                </div>
                <h1 className="py-2 px-3 text-xl font-bold text-[white] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Training~~Workshop</h1>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? " text-2xl font-bold text-[white] bg-[#ff6900]" : "text-2xl font-bold text-rose-400"
                        }
                    >
                        Home
                    </NavLink></li>
                    <li><NavLink
                        to="/workshop"
                        className={({ isActive }) =>
                            isActive ? " text-2xl font-bold text-[white] bg-[#ff6900]" : "text-2xl font-bold text-rose-400"
                        }
                    >
                        Workshop
                    </NavLink></li>
                    <li><NavLink
                        to="/webinar"
                        className={({ isActive }) =>
                            isActive ? " text-2xl font-bold text-[white] bg-[#ff6900]" : "text-2xl font-bold text-rose-400"
                        }
                    >
                        Webinar
                    </NavLink></li>
                    {!user ? <li><NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? " text-2xl text-[white] bg-[#ff6900] font-bold" : "text-2xl font-bold text-rose-400"
                        }
                    >
                        Login
                    </NavLink></li> :

                        <li><NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? " text-2xl text-[white] bg-[#ff6900] font-bold" : "text-2xl font-bold text-rose-400"
                            }
                        >
                            <button onClick={handleSignOut}>SignUp</button>
                        </NavLink></li>

                    }
                </ul>
            </div>
        </div>
    );
};

export default Navber;