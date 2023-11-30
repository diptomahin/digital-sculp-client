import { NavLink, Outlet } from "react-router-dom";
import UseLoggedUser from "../../Hooks/UseLoggedUser";
import { Spinner } from 'flowbite-react';


const Dashboard = () => {
    const { savedUser, userLoading } = UseLoggedUser()
    const { userRole } = savedUser;
    if (userLoading) {
        return <Spinner aria-label="Default status example" />;
    }
    if (userRole === 'admin') {
        return (
            <div className="flex">
                <div className="w-64 min-h-screen bg-[#D4F6C8] pt-10">
                    <ul className="menu p-4">
                        <>
                            <li><NavLink to='/dashboard/all-employee-list' style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#FFE074" : " ",
                                    padding: isActive ? "10px" : " ",
                                    borderRadius: isActive ? "5px" : ""

                                }
                            }}>All Employee</NavLink></li>
                        </>
                    </ul>
                    <ul className="menu p-4">
                        <>
                            <li><NavLink to='/' style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#FFE074" : " ",
                                    padding: isActive ? "10px" : " ",
                                    borderRadius: isActive ? "5px" : ""

                                }
                            }}>Home</NavLink></li>
                        </>
                    </ul>
                </div>
                <div></div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        );
    }
    else if (userRole === 'employee') {
        return (
            <div className="flex">
            <div className="w-64 min-h-screen bg-[#D4F6C8] pt-10">
                <ul className="menu p-4">
                    <>
                        <li><NavLink to='/dashboard/work-sheet' style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#FFE074" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}>Work sheet</NavLink></li>
                    </>
                </ul>
                <ul className="menu p-4">
                    <>
                        <li><NavLink to='/' style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#FFE074" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}>Home</NavLink></li>
                    </>
                </ul>
            </div>
            <div></div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        )
    }
    else if (userRole === 'hr') {
        return (
            <div className="flex">
            <div className="w-64 min-h-screen bg-[#D4F6C8] pt-10">
                <ul className="menu p-4">
                    <>
                        <li><NavLink to='/dashboard/progress' style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#FFE074" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}>Progress</NavLink></li>
                    </>
                </ul>
                <ul className="menu p-4">
                    <>
                        <li><NavLink to='/dashboard/employee-list' style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#FFE074" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}>Employee</NavLink></li>
                    </>
                </ul>
                <ul className="menu p-4">
                    <>
                        <li><NavLink to='/' style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#FFE074" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}>Home</NavLink></li>
                    </>
                </ul>
            </div>
            <div></div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        )
    }
};

export default Dashboard;