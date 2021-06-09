import React, {useState} from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from './Themes';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Header = () => {
    const [theme, setTheme] = useState("light");
    const [toggleButton, setToggleButton] = useState('Dark Mode')

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      };

    const handleButton = () => {
        toggleButton === 'Dark Mode' ? setToggleButton("Light Mode") : setToggleButton("Dark Mode");
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
        <div className="header">
            <ul className="header-ul" >
                <li className="header-li"><h3>Where in the world?</h3></li>
                <li className="header-li"><button onClick={() => {themeToggler(); handleButton()}} className="nav-btn"><HiOutlineMoon/> {toggleButton}</button></li>
            </ul>
        </div>
        </StyledApp>
        </ThemeProvider>
    )
}

export default Header
