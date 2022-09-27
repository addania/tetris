import * as React from "react";
import { Square } from "./Square";

type GridRowProps = {
  width: number;
};

export const GridRow = ({ width }: GridRowProps) => {
  let row = [];
  for (let i = 0; i < width; i++) {
    row.push(<Square />);
  }

  return <>{row}</>;
};

type GridProps = {
  width: number;
  height: number;
};
export const Grid = ({ width, height }: GridProps) => {
  let col = [];
  for (let i = 0; i < height; i++) {
    col.push(
      <div style={{ height: "30px" }}>
        <GridRow width={width} />
      </div>
    );
  }
  return <>{col}</>;
};
