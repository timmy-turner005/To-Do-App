import {Component} from "react";
class Message extends Component {
    constructor() {
        super()
        this.state= {
            counter: 0,
        }
    }
    increment= () => {
        console.log("count")
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    
    render() {
        return (
            <div>
                <h2>users on this platform are: {this.state.counter}</h2>
                <button onClick={this.increment}>click</button>
            </div>
        )
}
}
export default Message;