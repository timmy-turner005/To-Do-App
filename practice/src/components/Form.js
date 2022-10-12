import { Component } from "react";

class Form extends Component {
        state= {
            nickname: ""
        }
    handleSubmit=(event) => {
        event.preventDefault();
        console.log({
            nick: this.state.nickname
        })
    }

    handleChange= (event) => {
        this.setState({
            nickname: event.target.value,
        })
        console.log(this.state.nickname);
    }
    render() {
        return <div>Form
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.nickname} placeholder="name"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    }
}


export default Form;