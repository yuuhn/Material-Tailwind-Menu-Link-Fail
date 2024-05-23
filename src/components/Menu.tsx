"use client";
import React from "react";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export default function MenuTest() {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <Menu open={openNav} handler={setOpenNav}>
      <MenuHandler>
        <IconButton>hello</IconButton>
      </MenuHandler>
      <MenuList className="">
        <ul className="outline-none outline-0">
          <a href="#test">
            <MenuItem>hello</MenuItem>
          </a>
        </ul>
      </MenuList>
    </Menu>
  );
}
