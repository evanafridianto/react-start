import React, { Component } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Card from "../components/Card";
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: "12345",
          title: "KKN di Desa Penari",
          production: "MD Pictures, Pichouse Films",
          director: "Awi Suryadi",
          year: 2022,
          cover:
            "https://upload.wikimedia.org/wikipedia/id/f/f9/Poster_KKN_di_Desa_Penari_%28versi_uncut%29.jpeg",
        },
        {
          id: "12346",
          title: "Warkop DKI Reborn: Jangkrik Boss! Part 1",
          production: "Falcon Pictures",
          director: "Anggy Umbara",
          year: 2016,
          cover:
            "https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg",
        },
        {
          id: "54321",
          title: "Dilan 1990",
          production: "Max Pictures",
          director: "Fajar Bustomi, Pidi Baiq",
          year: 2018,
          cover:
            "https://upload.wikimedia.org/wikipedia/id/1/19/Dilan_1990_%28poster%29.jpg",
        },
        {
          id: "54322",
          title: "Laskar Pelangi",
          production: "Miles Films",
          director: "Riri Riza",
          year: 2012,
          cover:
            "https://upload.wikimedia.org/wikipedia/id/1/17/Laskar_Pelangi_film.jpg",
        },
      ],
      action: "",
      id: "",
      title: "",
      production: "",
      director: "",
      year: 0,
      cover: "",
      selectedItem: null,
    };
  }
  render() {
    return (
      <>
        <div className="album">
          <Container>
            <Button variant="primary" onClick={() => this.Add()}>
              Add New
            </Button>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
              {this.state.movies.map((item, index) => (
                <Card
                  title={item.title}
                  production={item.production}
                  director={item.director}
                  year={item.year}
                  cover={item.cover}
                  onEdit={() => this.Edit(item)}
                  onDrop={() => this.Drop(item)}
                />
              ))}
            </div>
          </Container>
        </div>
      </>
    );
  }
}
