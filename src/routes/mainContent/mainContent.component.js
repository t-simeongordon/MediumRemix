import { Outlet } from "react-router-dom";

const MainContent = () => {
    return (
        <>
            <div>Main Content</div>
            <Outlet/>
        </>
    ) 
}

export default MainContent;