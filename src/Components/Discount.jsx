import '../sass/Discount.scss'


const Discount = ({discount}) => {
  return (
    <div className='discount'>-{discount}%</div>
  )
}

export {Discount}