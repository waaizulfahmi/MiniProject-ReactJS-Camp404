import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "./images/logo.png";
import axios from "axios";

function Katalog() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/shoes")
      .then((response) => {
        setShoes(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  return (
    <div className=" mt-5 mx-5 px-5 py-1 ">
      <h3 className="text-center pb-5">Katalog Produk </h3>
      <div className="grid">
        {shoes.map((sepatu, index) => (
          <Card style={{ width: "18rem" }} key={index} className="box shadow">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title className="text-black">
                {sepatu.nama.toUpperCase()}
              </Card.Title>
              <Card.Text>Rp. {sepatu.harga.toLocaleString()}</Card.Text>
              <Button variant="primary">Buy Now !</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Katalog;
