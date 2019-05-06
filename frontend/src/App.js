import React from 'react';

import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

class App extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="desktop" />
							<span>Home</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="bank" />
							<span>Branch & Office</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="cluster" />
							<span>Organization</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="team" />
							<span>Position</span>
						</Menu.Item>
						<Menu.Item key="5">
							<Icon type="tool" />
							<span>Settings</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{ padding: '0 20px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>Organization</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
						</Breadcrumb>
						<div style={{ background: '#fff', padding: 24, minHeight: 800 }}>Content</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						OD HCMG ©2019 Created by RR
      				</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default App;