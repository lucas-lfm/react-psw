import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, model, km, category, year, price }) => {
  return (
    <div className={styles.card}>
      <h2>{model}</h2>
      <ul>
        <li>
          <span>Marca:</span> {brand}
        </li>
        <li>
          <span>Categoria:</span> {category}
        </li>
        <li>
          <span>Ano:</span> {year}
        </li>
        <li>
          <span>Quilometragem:</span> {km} km
        </li>
        <li>
          <span>Preço:</span> R$ {price}
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
