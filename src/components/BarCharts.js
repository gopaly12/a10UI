import React from 'react'
import BarChart from 'react-bar-chart';
const data = [
    { text: "man", value: 500 },
    { text: "woman", value: 300 },
    { text: "rja", value: 199 }
]

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
componentDidMount: () => {
    window.onresize = () => {
        this.setState({ width: this.refs.root.offsetWidth });
    };
}


class BarCharts extends React.Component {
    constructor() {
        super()
        this.state = {
            width: '500'
        }
    }
    render() {
        return (
            <div ref='root'>
                <div>
                    <BarChart ylabel='Quantity'
                        width={this.state.width}
                        height={500}
                        margin={margin}
                        animate={true}
                        data={data}
                        onBarClick={this.handleBarClick}
                    />
                </div>
            </div>
        )

    }

}



export default BarCharts;
