import PropTypes from "prop-types";
import * as S from "./Card.styles";

export const Card = (props) => {
  return (
    <div>
      <p>N</p>
      <h2>Nome</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        recusandae atque, distinctio aspernatur cupiditate enim pariatur harum
        aliquam voluptatem laudantium nam ipsum aperiam earum? Rem commodi
        maiores aperiam ab unde.
      </p>
      <S.Button seguindo>Seguir</S.Button>
    </div>
  );
};

Card.propTypes = {};
