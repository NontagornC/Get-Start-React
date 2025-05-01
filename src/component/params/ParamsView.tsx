import { useParams } from "react-router-dom";

const ParamsView = () => {
  const param = useParams();
  return (
    <div className="text-white flex flex-col">
      <span>Params</span>
      <span>this is param id : {param?.id}</span>
      <span>this is param name : {param?.name}</span>
    </div>
  );
};

export default ParamsView;
