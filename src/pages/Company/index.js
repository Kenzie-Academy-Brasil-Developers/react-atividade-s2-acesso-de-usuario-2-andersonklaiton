import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Company = ({ members }) => {
  const params = useParams();
  const member = members.find((member) => member.id === params.id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>
      <p>Nome da empresa: {member && member.name}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Company;