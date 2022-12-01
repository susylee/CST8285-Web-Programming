//Define class constructor and methods
class Card {
  constructor(name, email, address, phone){
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
  cardDetails() {
    let nameLine = "<strong>Name: </strong>" + this.name + "<br>";
    let emailLine = "<strong>Email: </strong>" + this.email + "<br>";
    let addressLine = "<strong>Address: </strong>" + this.address + "<br>";
    let phoneLine = "<strong>Phone: </strong>" + this.phone + "<hr>";
    return (nameLine + emailLine + addressLine + phoneLine);
  }
}

// Create the objects
let myCardsArray = [];
myCardsArray[0] = new Card("Sue Suthers",
                   "sue@suthers.com",
                   "123 Elm Street, Yourtown ST 99999",
                   "555-555-9876");
myCardsArray[1] = new Card("Fred Fanboy",
                    "fred@fanboy.com",
                    "233 Oak Lane, Sometown ST 99399",
                    "555-555-4444");
myCardsArray[2] = new Card("Jimbo Jones",
                     "jimbo@jones.com",
                     "233 Walnut Circle, Anotherville ST 88999",
                     "555-555-1344");



  myCardsArray.forEach(element=>
    
  document.write(element.cardDetails()));


