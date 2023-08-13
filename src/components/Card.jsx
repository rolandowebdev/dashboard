/* eslint-disable react/prop-types */
import { Card, Space, Statistic } from 'antd'

export const MenuCard = ({ title, value, icon }) => {
	return (
		<Card bordered>
			<Space direction='horizontal' size={2}>
				{icon}
				<Statistic title={title} value={value} />
			</Space>
		</Card>
	)
}
