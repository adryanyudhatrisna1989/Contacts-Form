import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Adryan Yudhatrisna",
        email: "ayudhatrisna@gmail.com",
        phone: "616-787-7991"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "616-733-7341"
      },
      {
        id: 3,
        name: "Jamal Smith",
        email: "smith@gmail.com",
        phone: "616-223-5433"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
