import React from "react";

import { Layout } from 'antd';
import LeftNav from "../../components/leftNav";
import './admin.css'

const { Header, Footer, Sider, Content } = Layout;
export class Admin extends React.Component {

    render() {
        const { router, location, children } = this.props;
        return (
            <Layout className='admin-container'>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        {children}
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
