import { SelectMenu, SelectMenuProps } from "makemd-core";
import React from "react";
import { Anchors, Rect } from "types/Pos";
import { showMenu } from "./menu";

export type Point = { x: number; y: number };

export const showSelectMenu = (
  rect: Rect,
  optionProps: SelectMenuProps,
  win: Window,
  defaultAnchor: Anchors,
  onHide?: () => void
) => {
  return showMenu({
    ui: optionProps.ui,
    rect: rect,
    anchor: defaultAnchor,
    win,
    fc: <SelectMenu {...optionProps} />,
    onHide,
  });
};