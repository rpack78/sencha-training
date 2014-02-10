var customerOrderItem = function() {
	var customers = [{
			id: 1,
			name: 'Bread Barn',
			phone: '(843) 365-2356'
		}, {
			id: 2,
			name: 'Ice Cream Island',
			phone: '(845) 389-7219'
		}, {
			id: 3,
			name: 'Pizza Palace',
			phone: '(937) 255-7543'
		}
	];

	var orders = [{
			id: 1,
			date: '2010-08-13',
			customer_id: 1
		}, {
			id: 2,
			date: '2010-07-14',
			customer_id: 1
		}, {
			id: 3,
			date: '2010-01-22',
			customer_id: 2
		}, {
			id: 4,
			date: '2010-11-06',
			customer_id: 2
		}, {
			id: 5,
			date: '2010-12-29',
			customer_id: 3
		}, {
			id: 6,
			date: '2010-03-03',
			customer_id: 3
		}
	];

	var items = [{
			id: 1,
			order_id: 1,
			product: 'Chair',
			price: 13.43,
			quantity: 1
		}, {
			id: 2,
			order_id: 2,
			product: 'Stool',
			price: 34.55,
			quantity: 2
		}, {
			id: 3,
			order_id: 2,
			product: 'Bench',
			price: 32.84,
			quantity: 1
		}, {
			id: 4,
			order_id: 2,
			product: 'Carpet',
			price: 98.44,
			quantity: 3
		}, {
			id: 5,
			order_id: 3,
			product: 'Bed',
			price: 23.94,
			quantity: 1
		}, {
			id: 6,
			order_id: 3,
			product: 'Table',
			price: 44.10,
			quantity: 2
		}, {
			id: 7,
			order_id: 4,
			product: 'Stool',
			price: 67.12,
			quantity: 3
		}, {
			id: 8,
			order_id: 4,
			product: 'Chair',
			price: 12.90,
			quantity: 1
		}, {
			id: 9,
			order_id: 4,
			product: 'Shelf',
			price: 56.32,
			quantity: 3
		}, {
			id: 10,
			order_id: 4,
			product: 'Bench',
			price: 33.84,
			quantity: 4
		}, {
			id: 11,
			order_id: 5,
			product: 'Stool',
			price: 68.09,
			quantity: 1
		}, {
			id: 12,
			order_id: 5,
			product: 'Chair',
			price: 90.92,
			quantity: 2
		}, {
			id: 13,
			order_id: 6,
			product: 'Carpet',
			price: 10.78,
			quantity: 3
		}, {
			id: 14,
			order_id: 6,
			product: 'Table',
			price: 21.23,
			quantity: 1
		}
	];

	var getCustomers = function() {
		return customers;
	};

	var getCustomer = function(customerId) {
		return customers[id - 1];
	};
	var getOrder = function(customerId) {
		var result = Ext.Array.filter(orders, function(item) {
			return (item.customerId === customer);
		});
		return result;
	};
	var getItem = function(orderId) {
		var result = Ext.Array.filter(items, function(item) {
			return (item.customerId === customer);
		});
		return result;
	};
	return {
		getCustomers: getCustomers,
		getCustomer: getCustomer,
		getOrder: getOrder,
		getItem: getItem
	};

}();
console.log(customerOrderItem.getCustomers());
console.log(customerOrderItem.getCustomer(1));
console.log(customerOrderItem.getCustomer(2));
console.log(customerOrderItem.getCustomer(3));
console.log(customerOrderItem.getOrders(1));
console.log(customerOrderItem.getOrders(2));
console.log(customerOrderItem.getOrders(3));
console.log(customerOrderItem.getItem(1));
console.log(customerOrderItem.getItem(2));
console.log(customerOrderItem.getItem(3));
console.log(customerOrderItem.getItem(4));
console.log(customerOrderItem.getItem(5));
console.log(customerOrderItem.getItem(6));



