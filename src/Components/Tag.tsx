import { ParentComponent } from "solid-js";

const Tag: ParentComponent = ({ children }) => (
  <div class="px-5 py-1 border border-slate-400">{children}</div>
);

export default Tag;
