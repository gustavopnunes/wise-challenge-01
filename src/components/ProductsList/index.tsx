import { useEffect, useState } from "react";
import { ProductsListStyled } from "./styles";
import { api } from "../../services";
import { Product } from "../Product";

interface ProductProps {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
}

export const ProductsList = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<ProductProps[]>(`/produto/`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <ProductsListStyled>
      {loading ? (
        <p>loading</p>
      ) : (
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>quantidade</th>
              <th>preço</th>
            </tr>
            {products &&
              products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.nome}
                  amount={product.quantidade}
                  price={new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.preco)}
                />
              ))}
          </tbody>
        </table>
      )}
    </ProductsListStyled>
  );
};
