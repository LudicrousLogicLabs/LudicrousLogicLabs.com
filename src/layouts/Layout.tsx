import React from "react";
import Nav from "../components/Nav";
interface LayoutProps {
    page: React.FC
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ page: Page }) => {
    return (
        <div className="h-full w-full">
            <Nav />
            <Page />
        </div>
    )
}
export default Layout;