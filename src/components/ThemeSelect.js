import React from "react";

const ThemeSelect = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    };

    return(
        <label className="switch">
            <input type="checkbox" onChange={toggleTheme}/>
            <span className="slider"></span>
        </label>
    )
}

export default ThemeSelect