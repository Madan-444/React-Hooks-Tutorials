import React, { Component } from 'react'

 class IntervalCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     componentDidMount(){
         console.log('updated value')
         this.interval = setInterval(this.tick,1000)
     }
     componentWillUnmount(){
         console.log('code cleaning')
         clearInterval(this.interval)
     }
     tick=()=> {
         console.log('tick')
         this.setState({
             count:this.state.count +1
         })
     }
     
    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
            </div>
        )
    }
}

export default IntervalCounter
