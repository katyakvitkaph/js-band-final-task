import { useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  let [loading] = useState(true);
  let [color] = useState("orange");

  return (

      <ClipLoader color={color} loading={loading} css={override} height='4' width='200' />

  );
}

export default Loader;