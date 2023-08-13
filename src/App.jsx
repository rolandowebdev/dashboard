/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Col, Layout, Row, Space, Typography, theme } from 'antd'
import { AppSidebar } from './components/Sidebar'
import { AppFooter } from './components/Footer'
import { AppHeader } from './components/Header'
import { MenuCard } from './components/Card'
import {
	DollarOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { ordersOne, ordersTable, ordersTwo } from './utils/dataTable'
import { AppTable } from './components/Table'

export const App = () => {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout>
			<AppSidebar collapsed={collapsed} />
			<Layout>
				<AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
				<Layout.Content
					style={{
						paddingTop: 12,
						paddingInline: 24,
						background: colorBgContainer,
						minHeight: `calc(100vh - 135px)`,
					}}>
					<Space size={12} direction='vertical' style={{ width: '100%' }}>
						<Row gutter={24}>
							<Col span={24}>
								<Space size={2} direction='vertical'>
									<Typography.Title level={3}>Dashboard</Typography.Title>
								</Space>
							</Col>
							<Col span={6}>
								<MenuCard
									icon={
										<ShoppingCartOutlined
											style={{
												color: 'green',
												backgroundColor: 'rgba(0,255,0,0.25)',
												borderRadius: '100%',
												fontSize: 24,
												padding: 8,
											}}
										/>
									}
									title='Orders'
									value={13}
								/>
							</Col>
							<Col span={6}>
								<MenuCard
									icon={
										<ShoppingOutlined
											style={{
												color: 'blueviolet',
												backgroundColor: 'rgba(0,0,255,0.25)',
												borderRadius: '100%',
												fontSize: 24,
												padding: 8,
											}}
										/>
									}
									title='Inventory'
									value={240}
								/>
							</Col>
							<Col span={6}>
								<MenuCard
									icon={
										<UserOutlined
											style={{
												color: 'red ',
												backgroundColor: 'rgba(255,0,0,0.25)',
												borderRadius: '100%',
												fontSize: 24,
												padding: 8,
											}}
										/>
									}
									title='Customers'
									value={345}
								/>
							</Col>
							<Col span={6}>
								<MenuCard
									icon={
										<DollarOutlined
											style={{
												color: 'orange',
												backgroundColor: 'rgba(255,100,0,0.25)',
												borderRadius: '100%',
												fontSize: 24,
												padding: 8,
											}}
										/>
									}
									title='Revenue'
									value={112}
								/>
							</Col>
						</Row>
						<Row gutter={16} align='stretch' wrap>
							<Col span={12}>
								<AppTable
									data={ordersOne?.products.slice(0, 5) || []}
									columnsData={ordersTable}
								/>
							</Col>
							<Col span={12}>
								<AppTable
									data={ordersTwo?.products.slice(0, 5) || []}
									columnsData={ordersTable}
								/>
							</Col>
						</Row>
					</Space>
				</Layout.Content>
				<AppFooter />
			</Layout>
		</Layout>
	)
}
