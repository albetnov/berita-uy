import { ParentComponent } from "solid-js";

const MenuItem: ParentComponent = (props) => {
  return (
    <li class="p-3 border border-slate-100 rounded-lg mb-3 shadow hover:cursor-pointer transition-all delay-200 hover:shadow-lg">
      {props.children}
    </li>
  );
};

export default MenuItem;
