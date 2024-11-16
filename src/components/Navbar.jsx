import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li className="bg-transparent mx-2"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#921A40] text-[#921A40]"
            : "border-2 border-transparent"} to="/">Home</NavLink></li>
        <li className="bg-transparent mx-2"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#921A40] text-[#921A40]"
            : "border-2 border-transparent"} to="/about">About</NavLink></li>
        <li className="bg-transparent mx-2"><NavLink className={({ isActive }) => isActive ? "border-2 border-[#921A40] text-[#921A40]"
            : "border-2 border-transparent"} to="/add-product">Add Product</NavLink></li>
    </>
    return (
        <div className="navbar px-6 md:px-12 lg:px-20 py-5 bg-[#E7717D] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 
                        shadow text-[#921A40] font-semibold">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost font-rubik text-2xl lg:text-3xl font-medium 
                text-[#921A40]">Snowbell</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn bg-[#921A40] text-white border-2 border-[#921A40] 
                hover:border-[#921A40] hover:bg-transparent hover:text-[#921A40]" to="/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;