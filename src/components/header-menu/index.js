import React from 'react';
import './header-menu.css';
import { Menu } from 'antd';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;

function HeaderMenu(){
    return (
        <Menu mode="horizontal" style={{display: "flex", justifyContent: "center"}} selectedKeys={"food"}>
            <Menu.Item key="food">
                <Link to="/">Food</Link>
            </Menu.Item>
            <Menu.Item key="employee">
                <Link to="/employee">Employee</Link>
            </Menu.Item>
            <Menu.Item key="reservation">
                <Link to="/reservation">Reservation</Link>
            </Menu.Item>
            <Menu.Item key="orders">
                <Link to="/orders">Order</Link>
            </Menu.Item>
        </Menu>
    );
}

export default HeaderMenu;