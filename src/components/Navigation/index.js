import React from "react";

function Navigation(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("about")}>About</span>
                </li>
                <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                </li>
                <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("contact")}>Contact</span>
                </li>
                <li className={currentTab === "about" ? "mx-2" : "mx-2"}>
                    <span>Welcome</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;