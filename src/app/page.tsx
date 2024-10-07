import { Fragment } from "react";
import { tw } from "typewind";

export default function Page() {
  return (
    <Fragment>
      <div className={tw.lg(tw.text_7xl)}>hello</div>
      <div className="text-red-400">hello</div>
    </Fragment>
  )
}
