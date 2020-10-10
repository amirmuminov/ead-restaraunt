import React, {useEffect, useState} from 'react';
import './food-body.css';
import {Col, Row} from "antd";
import FoodBodyButtons from "../food-body-buttons";
import MenuList from "../menu";
import {connect} from "react-redux";
import {getMenus} from "../../store/actions/menuActions";
import MealAddModal from "../meal-add-modal";

const onMount = (props) => () => {
    props.getMenus();
};

function FoodBody(props){
    useEffect(onMount(props), []);
    
    const menus = props.menuReducer.menus;
    
    const menuList = menus.map(menu => (
        <MenuList menuName={menu.name} meals={menu.meals} />
    ));

    return (
        <div className="container">
            <Row gutter={20}>
                <Col span={6}>
                    <FoodBodyButtons/>
                </Col>
                <Col span={18}>
                    {menuList}
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    menuReducer: state.menuReducer
});

const mapDispatchToProps = {
    getMenus
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodBody);