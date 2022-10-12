import {Component} from "react";
class Increase extends Component {
    constructor() {
        super()
        this.state= {
            Increase: 0,
        }
    }
    increment=() => {
        console.log(this.state.Increase + 1)
        this.setState({
            Increase: this.state.Increase + 1,
        })
    }

    render() {
        return (
            <div>
                <h3>count</h3>
                <button onClick={this.increment}>count</button>
            </div>
        )
    }
}

export default Increase;