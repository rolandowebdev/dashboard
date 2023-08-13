export const ordersTable = [
	{
		title: 'Resent Orders',
		dataIndex: 'title',
	},
	{
		title: 'Quantity',
		dataIndex: 'quantity',
		render: (value) => <span>${value}</span>,
	},
	{
		title: 'Discount',
		dataIndex: 'discountedPrice',
		render: (value) => <span>${value}</span>,
	},
	{
		title: 'Total',
		dataIndex: 'total',
	},
]

export const ordersOne = {
	products: [
		{
			id: 59,
			title: 'Spring and summershoes',
			price: 20,
			quantity: 3,
			total: 60,
			discountPercentage: 8.71,
			discountedPrice: 55,
		},
		{
			id: 88,
			title: 'TC Reusable Silicone Magic Washing Gloves',
			price: 29,
			quantity: 2,
			total: 58,
			discountPercentage: 3.19,
			discountedPrice: 56,
		},
		{
			id: 18,
			title: 'Oil Free Moisturizer 100ml',
			price: 40,
			quantity: 2,
			total: 80,
			discountPercentage: 13.1,
			discountedPrice: 70,
		},
		{
			id: 95,
			title: 'Wholesale cargo lashing Belt',
			price: 930,
			quantity: 1,
			total: 930,
			discountPercentage: 17.67,
			discountedPrice: 766,
		},
		{
			id: 39,
			title: 'Women Sweaters Wool',
			price: 600,
			quantity: 2,
			total: 1200,
			discountPercentage: 17.2,
			discountedPrice: 994,
		},
	],
}

export const ordersTwo = {
	products: [
		{
			id: 96,
			title: 'lighting ceiling kitchen',
			price: 30,
			quantity: 2,
			total: 60,
			discountPercentage: 14.89,
			discountedPrice: 51,
		},
		{
			id: 91,
			title: 'Black Motorbike',
			price: 569,
			quantity: 3,
			total: 1707,
			discountPercentage: 13.63,
			discountedPrice: 1474,
		},
		{
			id: 9,
			title: 'Infinix INBOOK',
			price: 1099,
			quantity: 1,
			total: 1099,
			discountPercentage: 11.83,
			discountedPrice: 969,
		},
		{
			id: 16,
			title: 'Hyaluronic Acid Serum',
			price: 19,
			quantity: 1,
			total: 19,
			discountPercentage: 13.31,
			discountedPrice: 16,
		},
		{
			id: 54,
			title: 'Pubg Printed Graphic T-Shirt',
			price: 46,
			quantity: 3,
			total: 138,
			discountPercentage: 16.44,
			discountedPrice: 115,
		},
	],
}
