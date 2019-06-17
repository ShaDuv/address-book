// Business Logic for AddressBook ---------
//AddressBook constructor
function AddressBook() {
  this.contacts = [],
  // instantiate new AddressBooks with a currentId property
  this.currentId = 0
}

//prototype method to add new Contacts to an AddressBook
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

//ensure each new Contact added to the AddressBook has a unique ID
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//finding Contacts
AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

//deleting Contacts
AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}


// Business Logic for Contacts ---------
//contact constructor
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

//prototype method on Contact constructor
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
