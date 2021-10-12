import { ProductStyled } from "./styles";

interface ProductProps {
  id: number;
  name: string;
  amount: number;
  price: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  name,
  amount,
  price,
}) => {
  return (
    <ProductStyled>
      <td>{id}</td>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </ProductStyled>
  );
};
