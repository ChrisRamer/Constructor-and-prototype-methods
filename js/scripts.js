// Business Logic

function AddressBook() {
	this.contacts = [];
	this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
	contact.id = this.assignId();
	this.contacts.push(contact);
}

AddressBook.prototype.deleteContact = function (id) {
	for (let i = 0; i < this.contacts.length; i++) {
		if (this.contacts[i] && this.contacts[i].id == id) {
			delete this.contacts[i];
			return true;
		}
	}
	return false;
}

AddressBook.prototype.assignId = function () {
	this.currentId += 1;
	return this.currentId;
}

AddressBook.prototype.findContact = function (id) {
	for (let i = 0; i < this.contacts.length; i++) {
		if (this.contacts[i] && this.contacts[i].id == id) {
			return this.contacts[i];
		}
	}
	return false;
}

function Contact(firstName, lastName, phoneNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function () {
	return this.firstName + " " + this.lastName;
}

// User interface logic
let addressBook = new AddressBook();

$(document).ready(function () {

	$("form#new-contact").submit(function (e) { 
		e.preventDefault();
		const firstNameInput = $("input#new-first-name").val();
		const lastNameInput = $("input#new-last-name").val();
		const phoneNumberInput = $("input#new-phone-number").val();
		let newContact = new Contact(firstNameInput, lastNameInput, phoneNumberInput);
		addressBook.addContact(newContact);
		console.log(addressBook.contacts);
	});

});