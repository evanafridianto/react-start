import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  Modal,
  Figure,
  ModalBody,
} from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
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
      modalShow: false,
      action: "",
      id: "",
      title: "",
      production: "",
      director: "",
      year: 0,
      cover: "",
      selectedItem: null,

      keyword: "",
      movieFilter: "",
    };
    this.state.movieFilter = this.state.movies;
  }
  modalClose = () => this.setState({ modalShow: false });
  modalShow = () => this.setState({ modalShow: true });

  searching = (e) => {
    // if (e.keyCode === 13) {
    let keyword = this.state.keyword.toLowerCase();
    let movie = this.state.movies;
    let result = movie.filter((item) => {
      return (
        item.title.toLowerCase().includes(keyword) ||
        item.production.toLowerCase().includes(keyword) ||
        item.director.toLowerCase().includes(keyword)
      );
    });
    this.setState({ movieFilter: result });
    // }
  };

  resetForm = () => {
    this.setState({
      id: Math.floor(100000 + Math.random() * 900000),
      title: "",
      production: "",
      director: "",
      year: "",
      cover: "",
      action: "insert",
    });
  };

  Add = () => {
    this.modalShow();
    this.resetForm();
  };

  Edit = (data) => {
    this.modalShow();
    this.setState({
      id: data.id,
      title: data.title,
      production: data.production,
      director: data.director,
      year: data.year,
      cover: data.cover,
      action: "update",
      selectedItem: data,
    });
  };

  Save = (event) => {
    event.preventDefault();
    let movie = this.state.movies;

    if (this.state.action === "insert") {
      Swal.fire({
        title: "Good job!",
        text: "Data saved successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      movie.push({
        id: this.state.id,
        title: this.state.title,
        production: this.state.production,
        director: this.state.director,
        year: this.state.year,
        cover: this.state.cover,
      });
    } else if (this.state.action === "update") {
      let index = movie.indexOf(this.state.selectedItem);
      movie[index].id = this.state.id;
      movie[index].title = this.state.title;
      movie[index].production = this.state.production;
      movie[index].director = this.state.director;
      movie[index].year = this.state.year;
      movie[index].cover = this.state.cover;
      Swal.fire({
        title: "Good job!",
        text: "Data updated successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    }

    this.setState({ movie: movie });
    this.modalClose();
    this.resetForm();
  };
  Drop = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // let movie = this.state.movies;
        let movie = this.state.movieFilter;
        let index = movie.indexOf(item);
        movie.splice(index, 1);
        this.setState({ buku: movie });

        Swal.fire({
          title: "Good job!",
          text: "Data deleted successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  render() {
    var year = [];
    for (let i = new Date().getFullYear(); i >= 2000; i--) {
      year.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return (
      <>
        <div className="album">
          <Container>
            <Button variant="primary" onClick={() => this.Add()}>
              Add New
            </Button>
            <Form.Group className="mt-3">
              <Form.Control
                type="text"
                placeholder="Search"
                value={this.state.keyword}
                onChange={(e) => this.setState({ keyword: e.target.value })}
                onKeyUp={(e) => this.searching(e)}
              />
            </Form.Group>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
              {this.state.movieFilter.map((item, index) => (
                <Card
                  key={index}
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
            <Modal
              show={this.state.modalShow}
              onHide={this.state.modalShow}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header>
                <Modal.Title>Movies Form</Modal.Title>
                <Button
                  variant="light"
                  onClick={this.modalClose}
                  className="btn-close"
                ></Button>
              </Modal.Header>
              <ModalBody>
                <Form onSubmit={(e) => this.Save(e)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="hidden"
                      value={this.state.id}
                      required
                      name="id"
                      placeholder="Id"
                      onChange={(e) => this.setState({ id: e.target.value })}
                    />
                    <Form.Control
                      type="text"
                      value={this.state.title}
                      required
                      placeholder="Title"
                      name="title"
                      onChange={(e) => this.setState({ title: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Production</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.production}
                      required
                      placeholder="Production"
                      name="production"
                      onChange={(e) =>
                        this.setState({ production: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Director</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.director}
                      required
                      placeholder="Director"
                      name="director"
                      onChange={(e) =>
                        this.setState({ director: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Select
                      aria-label="Year"
                      name="year"
                      value={this.state.year}
                      onChange={(e) => this.setState({ year: e.target.value })}
                    >
                      {year}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cover</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.cover}
                      required
                      placeholder="Cover"
                      name="cover"
                      onChange={(e) => this.setState({ cover: e.target.value })}
                    />
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
                    <Button variant="secondary" onClick={this.modalClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
                  </Modal.Footer>
                </Form>
              </ModalBody>
            </Modal>
          </Container>
        </div>
      </>
    );
  }
}
