/* eslint-disable react/prop-types */
import { Table as AntTable } from 'antd'

export const AppTable = ({ data, columnsData }) => {
	return (
		<AntTable
			bordered
			columns={columnsData}
			dataSource={data}
			pagination={false}
		/>
	)
}
