import React, {Component} from 'react'
import {Line, Bar, Bubble} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Day 1','Day 2','Day 3','Day 4','Day 5'],
                datasets:[
                    {
                        label:'Weather',
                        data:[
                            19,
                            24,
                            28,
                            19,
                            31
                        ],
                        backgroundColor:[
                            'rgba(99,169,255,0.8)',
                            'rgba(99,169,255,0.8)',
                            'rgba(99,169,255,0.8)',
                            'rgba(99,169,255,0.8)',
                            'rgba(99,169,255,0.8)'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle:false,
        displayLegend:false,
        legendPosition:'right'
    }
    render(){
        return(
            <div className="Chart">
                <div className="ChartDock">
                    <h3>Weather For Bangalore, IN</h3>
                </div>
                <div>
                    <p>Highest weather in 5 days</p>
                </div>
                <Line
                    data={this.state.chartData}
                    options={{
                        animationEnabled: true,
                        title:{
                            display:true,
                            fontSize:  15,
                            maintainAspectRatio: true
                        },
                        legend:{
                            display:false,
                            position:'right'
                        },scales: {
                            xAxes: [{
                                        gridLines: {
                                            display:false
                                        }
                                    }],
                            yAxes: [{
                                        gridLines: {
                                            display:false
                                        }   
                                    }]
                            }

                    }}
                />
            </div>
        )
    }
}


export default Chart;