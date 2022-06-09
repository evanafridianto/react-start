import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  Modal,
  Figure,
  ModalBody,
} from "react-bootstrap";
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
      modalOpen: false,
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

  openModal = () => this.setState({ modalOpen: true });
  closeModal = () => this.setState({ modalOpen: false });
  resetForm = () => {
    this.setState({
      id: Math.random(1, 10000000),
      title: "",
      production: "",
      director: "",
      year: "",
      cover: "",
      action: "insert",
    });
  };
  Add = () => {
    this.openModal();
    this.resetForm();
  };
  Edit = (data) => {
    this.openModal();
    this.setState({
      id: data.id,
      title: data.title,
      production: data.production,
      director: data.director,
      year: data.year,
      cover: data.cover,
      action: "update",
    });
  };
  render() {
    var year = [];
    for (let i = new Date().getFullYear(); i >= 1800; i--) {
      year.push(<option value="{i}">{i}</option>);
    }
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
            {/* modal  */}
            <Modal show={this.state.modalOpen} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Movies Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form id="movies-form" onSubmit={(ev) => this.Save(ev)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="hidden"
                      value={this.state.id}
                      placeholder="Id"
                    />
                    <Form.Control
                      type="text"
                      value={this.state.title}
                      placeholder="Title"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Production</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.production}
                      placeholder="Production"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Director</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.director}
                      placeholder="Director"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Select aria-label="Default select example">
                      {year}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cover</Form.Label>
                    <Form.Control type="file" placeholder="Cover" />
                  </Form.Group>
                  <Figure>
                    <Figure.Image
                      width={80}
                      height={90}
                      alt="80x90"
                      src={this.state.cover}
                    />
                  </Figure>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </Container>
        </div>
      </>
    );
  }
}
