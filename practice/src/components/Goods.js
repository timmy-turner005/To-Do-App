function Goods() {
    const products= [
        {id: 1, name:"laptop", price:"100k"},
        {id: 2, name:"phone", price:"200k"},
        {id: 3, name:"car", price:"800k"}
    ]

    return (
        <div>
            {
                products.map((display) => (
                    <h3 key={display.id}>{display.name}: ${display.price}</h3>
                ))
            }
        </div>
    )
}

export default Goods;