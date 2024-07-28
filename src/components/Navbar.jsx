import React from "react";
import "./css/Navbar.css";
import { Item } from "./helpers/NavbarItem";

const Navbar = ()=>{
    return (
        <>
        <div className="nav_container">

            <span className="dapp_title">
                <span className="DVote">
                    DVote
                </span>
                -
                <span className="India">
                    India
                </span>
            </span>

            <Item path={""} option={"Home"} />
            <Item path={"loginuser"} option={"Vote"}> </Item>
            <Item path={"loginadmin"} option={"Admin Login"}> </Item>
            <Item path={"aboutus"} option={"About Us"}> </Item>
        </div>
        </>
    )
}

export default React.memo(Navbar);