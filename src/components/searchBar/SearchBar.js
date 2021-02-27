import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    value: "",
    filter: "",
    data: "",
  };
  constructor(p) {
    super(p);
  }

  dataSearch = (e) => {
    const value = e.target.value.toLowerCase();

    this.state.contacts.map((user) => {
      const filter = user.name.toLowerCase().match(value);
      if (value !== "") {
        if (filter !== null) {
          this.setState(() => {
            return {
              filter: filter,
            };
          });
        }
      }
    });
    console.log(this.state.filter);
  };

  createLi() {
    return <li>{this.state.filter.input}</li>;
  }
  render() {
    return (
      <div id="sb_wrap">
        <div className="searchbar form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search people by name..."
            onChange={this.dataSearch}
          />
        </div>
        <ul id="contacts">{this.createLi()}</ul>
      </div>
    );
  }
}

export default SearchBar;
