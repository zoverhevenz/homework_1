import React from "react";
import { Remarkable } from "remarkable";

class Plice extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "Привет, мир!" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="Plice">
        <h3>Входные данные</h3>
        <label htmlFor="markdown-content">Введите что-то в формате Plice</label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.st.value}
        />
        <h3>Вывод</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default Plice;
