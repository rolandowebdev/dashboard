/* eslint-disable react/prop-types */
import {
	LogoutOutlined,
	OrderedListOutlined,
	UserOutlined,
	CustomerServiceOutlined,
	BarChartOutlined,
} from '@ant-design/icons'
import { Button, Divider, Layout, Menu, Space } from 'antd'

const getItem = (label, key, icon, children, type) => {
	return {
		label,
		key,
		icon,
		children,
		type,
	}
}

const menuItems = [
	getItem('Customers', 'sub1', <UserOutlined />, [
		getItem('Tom', 'tom'),
		getItem('Bill', 'bill'),
		getItem('Alex', 'alex'),
	]),
	getItem('Orders', 'sub2', <OrderedListOutlined />, [
		getItem('Orders 1', 'orders-1'),
		getItem('Orders 2', 'orders-2'),
	]),
	{ type: 'divider' },
	getItem('Inventory', 'sub3', <BarChartOutlined />, [
		getItem('Inventory 1', 'inventory-1'),
		getItem('Inventory 2', 'inventory-2'),
		getItem('Inventory 3', 'inventory-3'),
		getItem('Inventory 4', 'inventory-4'),
	]),
	getItem('Service', 'sub4', <CustomerServiceOutlined />, [
		getItem('Service 1', 'service-1'),
		getItem('Service 2', 'service-2'),
		getItem('Service 3', 'service-3'),
		getItem('Service 4', 'service-4'),
	]),
]

export const AppSidebar = ({ collapsed }) => {
	return (
		<Layout.Sider
			trigger={null}
			theme='dark'
			style={{ borderRight: 0, width: '100%' }}
			collapsible
			collapsed={collapsed}
			width={240}>
			<Space
				size={2}
				direction='vertical'
				style={{
					width: '100%',
					paddingInline: '8px',
					position: 'sticky',
					top: '14px',
				}}>
				<Menu
					theme='dark'
					defaultSelectedKeys={['1']}
					items={menuItems}
					style={{
						borderRadius: '8px',
						padding: '6px',
					}}
				/>
				<Divider
					style={{
						marginBlock: '12px',
						backgroundColor: '#4c6781',
					}}
				/>
				<Button
					block
					type='primary'
					icon={<LogoutOutlined />}
					style={{
						height: '40px',
						borderRadius: '8px',
					}}>
					{!collapsed ? 'Logout' : null}
				</Button>
			</Space>
		</Layout.Sider>
	)
}
