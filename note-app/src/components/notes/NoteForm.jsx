import React from "react";
import Card from "../shared/Card";

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onLimitChangeTitleHandler = this.onLimitChangeTitleHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onLimitChangeTitleHandler(event) {
    let inputText = event.target.value;
    let result = "";

    // Solution taken from https://stackoverflow.com/a/53593174
    if (inputText.length > 50) {
      result = inputText.slice(0, 50);
    } else {
      result = inputText;
    }

    this.setState(() => {
      return {
        title: result,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: '',
        body: '',
      };
    });
  }

  render() {
    return (
      <Card>
        <form className="note-form" onSubmit={this.onSubmitEventHandler}>
          <p>Sisa karakter {50 - this.state.title.length}</p>
          <input
            className="note-input mb-3"
            type="text"
            name="title"
            placeholder="Nama catatan"
            value={this.state.title}
            onChange={this.onLimitChangeTitleHandler}
            required
          />
          <textarea
            className="note-input"
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="Isi Catatan"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          >
          </textarea>
          <button className="button border border-primary bg-white text-dark hover:bg-primary hover:text-white transition ease-linear" type="submit">
            Submit
          </button>
        </form>
      </Card>
    );
  }
}
