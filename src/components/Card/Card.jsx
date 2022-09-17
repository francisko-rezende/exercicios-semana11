import PropTypes from "prop-types";
import * as S from "./Card.styles";

export const Card = ({
  iniciaisNome,
  nome,
  descricao,
  seguindo,
  toggleFollow,
  id,
}) => {
  return (
    <div>
      <p>{iniciaisNome}</p>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <S.Button seguindo={seguindo} onClick={() => toggleFollow(id)}>
        {seguindo ? "Deixar de seguir" : "Seguir"}
      </S.Button>
    </div>
  );
};

Card.propTypes = {
  iniciaisNome: PropTypes.string,
  nome: PropTypes.string,
  descricao: PropTypes.string,
  seguindo: PropTypes.bool,
  toggleFollow: PropTypes.func,
  id: PropTypes.number,
};
