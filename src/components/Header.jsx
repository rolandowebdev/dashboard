/* eslint-disable react/prop-types */
import {
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	NotificationOutlined,
} from '@ant-design/icons'
import {
	Badge,
	Button,
	Col,
	Drawer,
	Layout,
	List,
	Row,
	Space,
	Typography,
	theme,
} from 'antd'
import { useState } from 'react'

export const AppHeader = ({ collapsed, setCollapsed }) => {
	const [openComments, setOpenComments] = useState(false)
	const [openNotification, setOpenNotification] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout.Header
			style={{
				paddingInline: 24,
				background: colorBgContainer,
				borderBottom: '1px solid #f1f1f1',
				position: 'sticky',
				top: 0,
				zIndex: 999,
			}}>
			<Row justify='space-between' align='middle'>
				<Col>
					<Button
						type='text'
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							width: 48,
							height: 48,
							backgroundColor: '#001529',
							color: '#fff',
						}}
					/>
				</Col>
				<Col>
					<Typography.Title level={3} style={{ fontWeight: 'bold' }}>
						<span style={{ fontWeight: 'normal' }}>Welcome,</span> User👋
					</Typography.Title>
				</Col>
				<Col>
					<Space size='middle' align='center'>
						<Badge dot count={13}>
							<MailOutlined
								style={{ fontSize: 22 }}
								onClick={() => setOpenComments(true)}
							/>
						</Badge>
						<Badge count={13}>
							<NotificationOutlined
								style={{ fontSize: 22 }}
								onClick={() => setOpenNotification(true)}
							/>
						</Badge>
					</Space>
				</Col>
			</Row>
			<Drawer
				title='Comments'
				open={openComments}
				onClose={() => setOpenComments(false)}
				maskClosable>
				<List renderItem={(item) => <List.Item>{item.body}</List.Item>} />
			</Drawer>
			<Drawer
				title='Notification'
				open={openNotification}
				onClose={() => setOpenNotification(false)}
				maskClosable>
				<List
					renderItem={(item) => (
						<List.Item>
							<Typography.Paragraph strong>{item.title}</Typography.Paragraph>
							has been ordered!
						</List.Item>
					)}
				/>
			</Drawer>
		</Layout.Header>
	)
}
