import React, {useEffect, useState} from 'react';
import {Form, Modal, Input} from 'antd';
import MenuList from "../menu";
import {connect} from "react-redux";
import {addMeal, getMenus} from "../../store/actions/menuActions";

function MealAddModal(props){

    const menus = props.menuReducer.menus;

    const menuList = menus.map(menu => (
        <MenuList menuName={menu.name} meals={menu.meals} />
    ));

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    const [meal, setMeal] = useState({
        name: '',
        price: '',
        description: ''
    });

    const onchange = e => {
        setMeal({...meal, [e.target.name]: e.target.value});
    };

    const addMeal = () => {
        props.addMeal(meal);
        props.setMealAddModalVisibility(false);
        setMeal({
            name: '',
            price: '',
            description: ''
        })
    }

    return (
        <Modal
            title="New meal"
            visible={props.mealAddModalVisibility}
            onCancel={() => props.setMealAddModalVisibility(false)}
            okText="Add"
            onOk={addMeal}
        >
            <Form
                name="meal-add-form"
                {...layout}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input meal name!' }]}
                >
                    <Input onChange={onchange} value={meal.name} name="name"/>
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input meal price!' }]}
                >
                    <Input onChange={onchange} value={meal.price} name="price"/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input meal description!' }]}
                >
                    <Input.TextArea onChange={onchange} value={meal.description} name="description"/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    menuReducer: state.menuReducer
});

const mapDispatchToProps = {
    addMeal
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MealAddModal);