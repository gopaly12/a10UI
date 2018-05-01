import React from 'react'
class ServiceList extends React.Component{
    render(){
        return <div> PI PICharts</div>
    }
}
  
class PICharts extends React.Component{
     
    render(){
      
        return (
            <div> 
                <h1>Hello 1111{this.props.name}!</h1>
            </div>
        )
    }
}


export default PICharts
  