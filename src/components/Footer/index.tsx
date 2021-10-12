import { FooterStyled } from "./styles";

export const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Fonte dos dados:{" "}
        <a
          href="https://wise-challenge01-django-server.herokuapp.com"
          target="_blank"
          rel="noreferrer"
        >
          api django + django rest framework
        </a>
      </p>
    </FooterStyled>
  );
};
