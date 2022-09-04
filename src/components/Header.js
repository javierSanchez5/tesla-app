import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {selectCars} from '../features/Car/carslice'
import { useSelector } from 'react-redux'

const Menu = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;

  a{
    cursor: pointer;
  }

  ul{
   display:flex;
   flex-wrap: nowrap;
 }
 ul li {
   padding: 0 15px;
 }
`

const MainMenu = styled.div`
  display: flex;
`

const Logo = styled.div`
  margin-left: 40px;
`

const SideMenu = styled.div`
  margin-right: 20px;

`

const MenuToggle = styled.div`
  position: fixed;
  top: 0;
  bottom:0;
  right:0;
  background-color: white;
  width:300px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;


  ul{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
    margin: 30px;
    
  }

  ul li {
    padding: 5px 10px;
    width: 100%;
    text-align: start;
  }

  ul li:hover{
    background-color: #e7e7e7;
    border-radius: 6px;
    transition: 0.6s;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-end;
`
const MenuBurguer = styled(MenuIcon)`
`

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Menu>
      <Logo><img src='images/logo.svg'/></Logo>
      <MainMenu>
        <ul>
          {cars && cars.map((car, index) => (
            <li><a key={index} href='#'>{car}</a></li>
          ))}
        </ul>
      </MainMenu>
      <SideMenu>
          <ul>
            <li><a>Shop</a></li>
            <li><a>Account</a></li>
            <MenuBurguer onClick={()=>setMenuOpen(!menuOpen)}/>
            
          </ul>
      </SideMenu>
      <MenuToggle show={menuOpen}>
        <ul>
          <CloseWrapper>
            <CustomClose onClick={()=>setMenuOpen(!menuOpen)}/>
          </CloseWrapper>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>First Feature again</a></li>
          <li><a href='#'>Trade-In</a></li>
          <li><a href='#'>Test Drive</a></li>
          <li><a href='#'>Insurance</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Semi</a></li>
          <li><a href='#'>Charging</a></li>
          <li><a href='#'>Powerwall</a></li>
          <li><a href='#'>Find Us</a></li>
          <li><a href='#'>Support</a></li>
        </ul>
      </MenuToggle>
    </Menu>
  )
}

export default Header