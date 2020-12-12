import React from 'react';
import './menu.css';
import {Row} from "antd";
import Meal from "../meal";

function MenuList(props){

    const mealsList = props.meals.map(meal =>(
        <Meal name={meal.name} description={meal.description} price={meal.price} quantity={meal.quantity}/>
    ));

    return (
        <div className="menu">
            <h2 className="menu-name">
                {props.menuName}
            </h2>
            <Row gutter={20} className="meal-wrapper" >
                {mealsList}
            </Row>
        </div>
    );
}

export default MenuList;