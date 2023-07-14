import React, { Component } from "react";

import styled from "styled-components";
import Navbar from "./Navbar";

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 30px;
  z-index: 20;
  display: none;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => (props.open ? "#FFF" : "#374259")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};

      opacity: ${(props) => (props.open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  ${"" /* ${(props) => (props.open ? "none" : "flex")}; */}

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`;

export default class BurgerMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  clickHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <>
        <Div open={this.state.isOpen} onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar open={this.state.isOpen} />
      </>
    );
  }
}
