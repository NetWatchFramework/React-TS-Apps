import { product } from "../data/product"

export function Poducts(){
    return(
        <div>
            {product.map((prod) =>(
                <div key={prod.id}>
                    <h2>{prod.title}</h2>
                    <p>{prod.desc}</p>
                    <img src={prod.image} alt={prod.title} />
                </div>
            ))}
        </div>
    )
}
