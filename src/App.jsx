// ALL MY IMPORT FILES
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./App.css";

const firstName = prompt("Enter your first name"); // The variable that contains the prompt of the input of the users name

const App = () => {
  return (
    <div
      className="App"
      style={{
        fontFamily: "Roboto, sans-serif",
        color: "#fff",
      }}
    >
      {/* Card element starts here */}
      <Card
        style={{
          width: "18rem",
          height: "25rem",
          margin: "auto",
          marginTop: "20px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "rgba(128, 128, 128, 0.16)",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {/* name of the product */}
          <Name />
          {/* Image of product */}
          <Image />
          {/* Description of product */}
          <Description />
          {/* Price of product */}
          <Price />
        </Card.Body>
      </Card>

      {/* The writup that checks the user imput first name and displays first name and the image */}
      <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
        Hello, {firstName ? firstName : "there"}! Check out this cool laptop
      </p>
      {/* if first name is true image would show but if false then it wont show */}
      {firstName && (
        <div style={{ textAlign: "center" }}>
          <img
            src="https://dlcdnrog.asus.com/rog/media/1672747404787.webp"
            alt="ROG Strinx"
            style={{
              maxWidth: "18rem",
              margin: "20px",
              borderRadius: "10px",
              border: "5px solid grey",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
