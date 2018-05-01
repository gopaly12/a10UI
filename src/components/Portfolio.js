import React from 'react'

function PortfolioTitle(){
    return (
          <h4 className="Dialog-title">
                List of Portfolios
          </h4>
        );
}

function Test(){
    var std ={name:"hair",age:12}
    return (
        <div>
            <h1>Studne name is <span className="dark">{std.name}</span> age is<span className="dark"> {std.age}</span></h1>
        </div>
    )
}
class Welcome extends React.Component {
    render() {
      return <div> {this.props.name} </div>
    }
  }
  class StundetList extends React.Component{
      emp = [{name:"studnet_name1"},{name:"studnet_name2"},{name:"studnet_name3"}]
      render(){
          return <div>name is  </div>
      }
  }
 
const Portfolio = () => (
    <div>
        <Test />    
        <StundetList />
        <PortfolioTitle />
        <Welcome name="Client_1" />
        <Welcome name="Client_2" />
        <Welcome name="Client_3" />
        <Welcome name="Client_4" />
        <Welcome name="Client_5" />
    </div>
)

export default Portfolio
