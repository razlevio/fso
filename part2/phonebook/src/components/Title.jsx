import { startCase } from "lodash";

function Title({ title }) {
  return (
    <h1 className="text-6xl font-bold text-slate-300">{startCase(title)}</h1>
  );
}

export default Title;
