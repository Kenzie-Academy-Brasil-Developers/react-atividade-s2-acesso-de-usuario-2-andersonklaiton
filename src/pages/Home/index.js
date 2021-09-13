import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return (
    <>
      {members.map((member) =>
        member.type === "pj" ? 
          <Link key={member.id} to={`/company/${member.id}`}>{member.name}</Link>: 
          <Link key={member.id} to={`/customer/${member.id}`}>{member.name}</Link>
      )}
    </>
  );
};

export default Home;