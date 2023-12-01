const CarDetails = ({ car }) => {
  return (
    <div>
      <h2>Model: {car.model}</h2>
      <p>Marca: {car.brand}</p>
      <p>Cor: {car.color}</p>
      <p>Ano: {car.year}</p>
      <p>Preço: R$ {car.price},00</p>
      <p>Desconto: {car.discount}%</p>
      <p>Valor em oferta: R$ {car.price - car.price * (car.discount / 100)}</p>
    </div>
  );
};

export default CarDetails;
