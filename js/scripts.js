$(document).ready(function () {

	function AddressBook() {
		this.contacts = [];
		this.currentId = 0;
	}

	AddressBook.prototype.addContact = function(contact) {
		contact.id = this.assignId();
		this.contacts.push(contact);
	}

	AddressBook.prototype.assignId = function() {
		this.currentId += 1;
		return this.currentId;
	}

	function Contact(firstName, lastName, phoneNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
	}

	Contact.prototype.fullName = function() {
		return this.firstName + " " + this.lastName;
	}

	let addressBook = new AddressBook();
	let contact1 = new Contact("Loki", "Odinson", "420-420-6969");
	let contact2 = new Contact("Thor", "Odinson", "420-420-6969");
	addressBook.addContact(contact1);
	addressBook.addContact(contact2);

});