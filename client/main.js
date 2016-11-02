import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/foodlist.js';

import './main.html';

var customerId = "123456";

function deductBalance(acct,amt) {
	// code here

}


Template.barcode_scanner.events({
	'click button': function () {

	  cordova.plugins.barcodeScanner.scan(
	    function (result) {
	      alert("We got a barcode\n" +
	        "Result: " + result.text + "\n" +
	        "Format: " + result.format + "\n" +
	        "Cancelled: " + result.cancelled);
	      	barcode = result.text;
	    }, 
	    function (error) {
	      alert("Scanning failed: " + error);
	    }
	  ); 

	}

});

Template.retrieve_receipt.events({
	'click button':function() {
		var barcode = "87654325";
		if (barcode) {
			item = retrievereceipt(barcode);
		}
	}
});

Template.make_payment.events({
	'click button':function() {
		deductBalance(accountnum,amounttopay);
	}
});

Template.retrieve_time.onCreated(function timeOnCreated() {
  // counter starts at 0
  this.enter_time = new ReactiveVar("N.A.");
  this.leave_time - new ReactiveVar("N.A.2");
});


Template.retrieve_time.events({
	'click button'(event, instance) {
		var barcode = "123456";
		if (barcode) {
			instance.enter_time.set("12.00pm");
			instance.leave_time.set("1.00pm");
		}
	}
});
Template.retrieve_time.helpers({
	enter_time() {
		return Template.instance().enter_time.get();
	},

	leave_time() {
		return Template.instance().leave_time.get();
	},
});

Template.add_item.onCreated(function timeOnCreated() {
  // counter starts at 0
  this.enter_time = new ReactiveVar("N.A.");
  this.leave_time - new ReactiveVar("N.A.2");
});


Template.add_item.events({
	'click button'(event, instance) {
		var barcode = "0123456";
		if (barcode) {
			// add food item to user
		}
	}
});