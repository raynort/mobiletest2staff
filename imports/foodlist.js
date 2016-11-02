foodlist = new Mongo.Collection('fooditem');

foodlist.insert({
	item_name: "Coke",
	item_qty: 1,
	item_price: 1.75
});

memberlist = new Mongo.Collection('member');

memberlist.insert({
	name: "Tom",
	balance: 100
});