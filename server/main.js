import { Meteor } from 'meteor/meteor';

let count = 0;

Meteor.onConnection((conn) => {
	console.log('conn ->', ++count);
});

Meteor.methods({
	reset() {
		count = 0;
	}
})
