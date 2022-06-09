import React from "react";
import { Button, Card as Content, Row, Col, Container } from "react-bootstrap";

export default class Card extends React.Component {
  render() {
    return (
      <>
        <div class="col">
          <div class="card shadow-sm">
            <Content.Img
              width={200}
              height={350}
              alt="200x200"
              src={this.props.cover}
              className="img mb-3"
              variant="top"
            />
            <Content.Body>
              <Content.Title>{this.props.title}</Content.Title>
              <Content.Text>
                Produksi : {this.props.production}
                <br />
                Sutradara : {this.props.director}
                <br />
                Tahun : {this.props.year}
              </Content.Text>
              <div class="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Button variant="outline-success">Edit</Button>
                  <Button variant="outline-danger">Delete</Button>
                </div>
              </div>
            </Content.Body>
          </div>
        </div>
      </>
    );
  }
}
