import '../sass/ProductsContainer.scss';

const ProductsContainer = ({children}) => {
  return (
    <section className="products" >
      <h1 className="products__title">Ecoturismo Venezuela</h1>
      <div className="products__container">
        {children}
      </div>

    </section>
  )
}

export {ProductsContainer}