import { Outlet } from "react-router";
import TopBar from "./topBar";

export default function MobileWrraper() {

    return (
        <div>
            <TopBar/>
            <Outlet/>
        </div>
    )
    
};
