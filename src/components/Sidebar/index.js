import React from "react";
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SidebarRoute,SideButton} from './SidebarElements';
import "./sidebar.css";

const Sidebar =({isOpen, toggle})=>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
          <div className="row">
        <SidebarLink to='/login'>Login</SidebarLink>
        <p>or</p>
        <SidebarLink to='/register'>Sign up</SidebarLink>
        </div>
<<<<<<< HEAD
        <SidebarLink to='/profile'>Profile</SidebarLink>
        {/* still to do */}
        <SidebarLink to='/products'>Donuts</SidebarLink> 
        {/* Remember to add favorites catalog (in future)-Lucas */}
        <SidebarLink to='/products'>Favorites</SidebarLink>
      </SidebarMenu>
      <SideButton>
        <SidebarRoute to='/products'>Order now</SidebarRoute>
=======
        <SidebarLink to='/products'>Donuts</SidebarLink>
        <SidebarLink to='/'>Favorites</SidebarLink>
        {/* <SidebarLink to='/'>Location</SidebarLink> */}
      </SidebarMenu>
      <SideButton>
        <SidebarRoute to='/checkout'>Order now</SidebarRoute>
>>>>>>> origin/myles-backend
      </SideButton>
    </SidebarContainer>
    );
};

export default Sidebar;