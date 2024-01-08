import React from "react";
import './index.css'
import logo from '../../assets/images/logo.png'

import { Menu, Icon, Button } from 'antd';
import {Link, withRouter} from "react-router/lib";

const SubMenu = Menu.SubMenu;
class LeftNav extends React.Component {
    state = {
        mode: 'inline',
        selectedKey: '/publish',
    }

    menuClick = e => {
        this.setState({ selectedKey: e.key });
    };

    render() {
        const { router, location, children } = this.props;
        const path = location.pathname;

        return (
            <div className='left-navi'>
                <div className='left-navi-header'>
                    <span>社区管理平台</span>
                </div>

                <Menu
                    selectedKeys={[path]}
                    mode="inline"
                    theme="dark"
                    onClick={this.menuClick}
                >
                    <Menu.Item key="/publish">
                        <Link to='/publish'>
                            <Icon type="pie-chart" />
                            <span>已发表</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/draft">
                        <Link to='/draft'>
                            <Icon type="desktop" />
                            <span>草稿箱</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/edit">
                        <Link to='/edit'>
                            <Icon type="inbox" />
                            <span>编辑发表</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav);
