import {component} from "react";
class Build extends component {
    constructor() {
        super();
        this.state= {
            parts: "mouth",
        }
    }
render() {
    return <h3>i eat bread with my: {this.state.parts}</h3>;
}
}

export default Build;