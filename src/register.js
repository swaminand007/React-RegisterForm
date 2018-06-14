import React from "react";
import ReactDOM from "react-dom";

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.Create = this.Create.bind(this);
  }
  handleChange(event) {
    this.setState({ data: event.target.value });
  }
  Create(event) {
    alert("A name was submitted: " + this.state.data);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Register form</h1>
        <form>
          <table border="1">
            <tr>
              <th>Name</th>
              <td>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>
                <input type="date" />
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <input type="radio" placeholder="Enter name" />Male
                <input type="radio" placeholder="Enter name" />Female
                <input type="radio" placeholder="Enter name" />Others
              </td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>
                <input type="number" placeholder="Enter Mobile Number" />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <input type="text" placeholder="Enter email" />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input type="password" placeholder="Enter password" />
              </td>
            </tr>
            <tr col-span="2" align="right">
              <input type="submit" value="Register" onClick={this.Create} />
              <h4>{this.state.data}</h4>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
export default Create;
