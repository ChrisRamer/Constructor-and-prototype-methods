$(document).ready(function () {

	function Contact(firstName, lastName, phoneNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
	}

	Contact.prototype.fullName = function() {
		return this.firstName + " " + this.lastName;
	}

	let testContact = new Contact("Loki", "Odinson", "420-420-6969");
	console.log("Full name is: " + testContact.fullName());

});