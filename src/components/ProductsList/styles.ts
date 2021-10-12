import styled from "styled-components";

export const ProductsListStyled = styled.div`
  display: flex;
  table {
    width: 90%;
    max-width: 720px;
    margin: 0 auto;

    th {
      background-color: #5a7684;
      text-transform: uppercase;
      padding: 4px;
    }

    td {
      padding: 4px;
    }
  }

  table,
  th,
  td {
    border: 1px solid white;
    border-collapse: collapse;
  }

  p {
    text-transform: uppercase;
    margin: 0 auto;
  }
`;
