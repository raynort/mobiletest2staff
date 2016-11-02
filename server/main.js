import { Meteor } from 'meteor/meteor';
import '../imports/foodlist.js';

Meteor.startup(() => {
  // code to run on server at startup
  function retrievereceipt(vat) {
  	if (vat=="87654325") {
  		return foodlist.find().fetch();
  	}
  }

  function retrievetime(vat) {
  	if (vat=="87654325") {
  		return foodlist.find().fetch();
  	}
  }

  function deduction(acct,amt) {
  	//deduction occurs here
  }
});
