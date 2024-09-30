"use client";
import React from "react";
import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <Menubar
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
        backgroundColor: "#001F3F",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ height: "40px", marginRight: "10px" }}
        />
        <h1 style={{ margin: 0, color: "white" }}>FreshCart</h1>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <MenubarMenu>
          <Link href="/products">
            <MenubarTrigger>Products</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/cart">
            <MenubarTrigger>Cart</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/login">
            <MenubarTrigger>Logout</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}

export default Navbar;
