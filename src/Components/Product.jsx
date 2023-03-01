import React from 'react';
import { AddCarcBtn } from './AddCarcBtn';
import { Discount } from './Discount';
import { Heart } from './Heart';
import '../sass/Product.scss';


const Product = ({name,newPrice, oldPrice,url,discount}) => {
  return (
    <div className='product'>
      <Discount discount={discount}/>
      <Heart/>

      <img className='product__img' src={url} alt="imag" />
      <h2 className='product__name'>{name}</h2>
      <div className='product__detail'>
        <p className='product__detail_oldPrice'>${oldPrice}</p>
        <p className='product__detail_price'>${newPrice}</p>

        <AddCarcBtn name={name} discount={discount} newPrice={newPrice}/>
      </div>
    </div>
  )
}

export {Product}