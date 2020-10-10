import React, {useState} from 'react';
import {Form, Input, Modal} from 'antd';
import MenuList from "../menu";
import {connect} from "react-redux";
import {addMenu} from "../../store/actions/menuActions";

function MenuAddModal(props){

    const menus = props.menuReducer.menus;

    const menuList = menus.map(menu => (
        <MenuList menuName={menu.name} meals={menu.meals} />
    ));

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    const [menu, setMenu] = useState({
        name: '',
        description: ''
    });

    const onchange = e => {
        setMenu({...menu, [e.target.name]: e.target.value});
    };

    const addMenu = () => {
        props.addMenu(menu);
        props.setMenuAddModalVisibility(false);
        setMenu({
            name: '',
            description: ''
        })
    }

    return (
        <Modal
            title="New menu"
            visible={props.menuAddModalVisibility}
            onCancel={() => props.setMenuAddModalVisibility(false)}
            okText="Add"
            onOk={addMenu}
        >
            <Form
                name="menu-add-form"
                {...layout}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input menu name!' }]}
                >
                    <Input onChange={onchange} value={menu.name} name="name"/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input menu description!' }]}
                >
                    <Input.TextArea onChange={onchange} value={menu.description} name="description"/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    menuReducer: state.menuReducer
});

const mapDispatchToProps = {
    addMenu
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuAddModal);