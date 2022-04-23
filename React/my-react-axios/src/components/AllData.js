import React from 'react';
import axios from 'axios';

export default class AllData extends React.Component {
  state = {
    AllData: []
  }

  componentDidMount() {
    axios.get(`https://reqres.in/api/users?page=1`)
      .then(res => {
        const AllData = res.data.data;
        this.setState({ AllData });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.AllData
            .map(Entry =>
              <li key={Entry.id}>First Name is {Entry.first_name} Last Name is {Entry.last_name}</li>
            )
        }
      </ul>
    )
  }
}