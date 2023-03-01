import '../sass/AddCardBtn.scss';

const AddCarcBtn = ({name, discount,newPrice}) => {
  return (
    <button onClick={()=> {alert(`Excelente eleccion del paquete turistico ${name}, cuenta con un descuento de ${discount}% y lo disfrutaras por tan solo $${newPrice}. `)}}>Comprar</button>
  )
}

export {AddCarcBtn};
