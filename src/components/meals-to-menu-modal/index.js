import React, {useEffect, useState} from 'react';
import {Form, Input, Modal, Select} from 'antd';
import MenuList from "../menu";
import {connect} from "react-redux";
import {addMealsToMenu, addMenu, getMealsWithoutMenu} from "../../store/actions/menuActions";

const onMount = (props) => () => {
    props.getMealsWithoutMenu();
};


function MealsToMenuAddModal(props){

    useEffect(onMount(props), []);

    const { Option } = Select;

    const menus = props.menuReducer.menus;

    const [menuId, setMenuId] = useState(null);

    const mealsWithoutMenu = props.menuReducer.noMenuMeals;

    const mealsWithoutMenuList = mealsWithoutMenu.map(meal => (
        <Option key={meal.id}>{meal.name}</Option>
    ));

    const menuList = menus.map(menu => (
        <Option key={menu.id}>{menu.name}</Option>
    ));

    const [certainMenuMealList, setCertainMenuMealList] = useState([]);
    let mealList = [];

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    function handleChange(id) {
        for(let i = 0; i < props.menuReducer.menus.length; i++){
            if(props.menuReducer.menus[i].id == id){
                mealList = props.menuReducer.menus[i].meals;
                setMenuId(props.menuReducer.menus[i].id);
                break;
            }
        }

        mealList = mealList.map(meal => (
            <span key={meal.id} style={{display: "block", marginBottom: 10}}>{meal.name}</span>
        ));

        setCertainMenuMealList(mealList);
    }

    const [addMealsToMenuList, setAddMealsToMenuList] = useState({
        meals: []
    });

    const addMeal = (id) => {
        let meals = [];
        for (let i = 0; i < id.length; i++){
            meals.push({id: id[i]});
        }
        setAddMealsToMenuList({meals: meals});
    };

    const addMealsToMenu = () => {
        props.addMealsToMenu(addMealsToMenuList, menuId);
        props.setMealsToMenuAddModalVisibility(false);
    }

    return (
        <Modal
            title="Add meals to menu"
            visible={props.mealsToMenuAddModalVisibility}
            onCancel={() => props.setMealsToMenuAddModalVisibility(false)}
            okText="Add"
            onOk={addMealsToMenu}
        >
            <Form
                name="meals-to-menu-add-form"
                {...layout}
            >
                <Select style={{ width: '100%', marginBottom: 20 }} onChange={handleChange}>
                    {menuList}
                </Select>
                {certainMenuMealList.length == 0 ? "There are no meals in menu" : certainMenuMealList}
                <Select
                    mode="tags"
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    onChange={addMeal}
                    values={addMealsToMenuList.meals}
                >
                    {mealsWithoutMenuList}
                </Select>
            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    menuReducer: state.menuReducer
});

const mapDispatchToProps = {
    getMealsWithoutMenu,
    addMealsToMenu
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MealsToMenuAddModal);