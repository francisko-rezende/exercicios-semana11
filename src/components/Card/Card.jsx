import PropTypes from "prop-types";
import * as S from "./Card.styles";

export const Card = ({ iniciaisNome, nome, descricao, seguindo }) => {
  return (
    <div>
      <p>{iniciaisNome}</p>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <S.Button seguindo={seguindo}>Seguir</S.Button>
    </div>
  );
};

Card.propTypes = {
  iniciaisNome: PropTypes.string,
  nome: PropTypes.string,
  descricao: PropTypes.string,
  seguindo: PropTypes.bool,
};
