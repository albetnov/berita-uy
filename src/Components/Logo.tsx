import { A } from "@solidjs/router";
import { Component } from "solid-js";
import logo from "../assets/logo.png";

const Logo: Component = () => {
  return (
    <div class="flex items-center gap-5">
      <img src={logo} width={45} />
      <h1 class="font-bold text-2xl mr-auto ml-auto">
        <A href="/">Berita Uy</A>
      </h1>
    </div>
  );
};

export default Logo;
