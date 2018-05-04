import React from 'react';

class SemiCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:
            [
              {
                id: 1,
                name: 'Hy',
                age: '20',
              },
              {
                id: 2,
                name: 'Bar',
                age: '30',
              },
              {
                id: 3,
                name: 'Baz',
                age: '40',
              },
            ],
    };
  }
  render() {
    return (
      <div>
              SemiCharts
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
const Contact = () => (
  <div>
    <SemiCharts />
        This is from Contact component
  </div>
);

export default Contact;
