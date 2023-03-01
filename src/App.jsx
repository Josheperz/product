import {ProductsContainer} from './Components/ProductsContainer';
import { Product } from './Components/Product';
import data from './products.json';


function App() {
  
  return (
    <div className="App">
     
      <ProductsContainer>
        {data.map(product=>
       
            <Product 
              key={product.name}
              name={product.name}
              oldPrice={product.price}
              newPrice={product.price -(product.price * product.discount/100)}
              url={product.url}
              discount={product.discount}
                        
            />
        )}
          
      </ProductsContainer>
      <img className='backgroundApp' src="https://media.istockphoto.com/id/1249634250/es/foto/hermosa-orilla-de-la-playa.jpg?s=612x612&w=0&k=20&c=6SwT2lSOMbBoUHAKlKJjNUu7PAwD5_6DEMiiK1mKvi0=" alt="" />
    </div>
  )
}

export {App}
