import {useState} from "react";
function Hello(props) {
    const [display]= useState(false);
    if(display) {
        return (
            <div>
                <h3>Hello World! My name is Timmy</h3>
            </div>
        )
} else {
    return (
        <div>
            <h3>hell no! this is not my name</h3>
        </div>
    )
}
}

export default Hello;


