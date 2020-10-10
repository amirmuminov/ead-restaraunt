import React, {useState} from 'react';
import './food-body-buttons.css';
import {Row, Col, Button} from "antd";
import MealAddModal from "../meal-add-modal";
import MenuAddModal from "../menu-add-modal";
import MealsToMenuAddModal from "../meals-to-menu-modal";

function FoodBodyButtons(){

    const [mealAddModalVisibility, setMealAddModalVisibility] = useState(false);
    const [menuAddModalVisibility, setMenuAddModalVisibility] = useState(false);
    const [mealsToMenuAddModalVisibility, setMealsToMenuAddModalVisibility] = useState(false);

    return (
        <div>
            <Button type="primary" className="active-button" onClick={() => setMealAddModalVisibility(true)}>Add meal</Button>
            <Button type="primary" className="active-button" onClick={() => setMenuAddModalVisibility(true)}>Add menu</Button>
            <Button type="primary" className="active-button" onClick={() => setMealsToMenuAddModalVisibility(true)}>Add meals to menu</Button>
            <MealAddModal mealAddModalVisibility={mealAddModalVisibility}
                          setMealAddModalVisibility={setMealAddModalVisibility}/>
            <MenuAddModal menuAddModalVisibility={menuAddModalVisibility}
                          setMenuAddModalVisibility={setMenuAddModalVisibility}/>
            <MealsToMenuAddModal mealsToMenuAddModalVisibility={mealsToMenuAddModalVisibility}
                                 setMealsToMenuAddModalVisibility={setMealsToMenuAddModalVisibility}/>
        </div>
    );
}

export default FoodBodyButtons;