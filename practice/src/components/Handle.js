function Handle() {
    function handleClick() {
        console.log("clicked");
    }
return (
    <div>
        <h4>this is the number of users on this platform</h4>
        <button onClick={handleClick}>users</button> 
    </div>
)
}

export default Handle; 