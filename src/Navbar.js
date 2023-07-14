import React from "react";

import styled from "styled-components";
import style from "./Navbar.module.css";

const Ul = styled.ul`
  display: flex;
  justify-content: right;
  margin: 20px 50px;
  z-index: 15;
  padding:0;
  li {
    padding: 18px 30px;
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    margin:0;
    flex-direction: column;
    background-color: #FAAB78;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.3s linear;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
    text-align: center;
    justify-content: flex-start;
    padding-top: 20px;
    height: 100vh;
    width: 50%;
  }
`;

export default function Navbar({ open }) {
  return (
    <div>
      <Ul open={open} className={style.list}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </Ul>
    </div>
  );
}
