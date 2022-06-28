import React from "react";
import { Button, Card, ButtonGroup, Col } from "react-bootstrap";

export default class CardMovies extends React.Component {
  render() {
    return (
      <>
        <Col>
          <Card className="shadow-sm">
            <Card.Img
              width={200}
              height={350}
              alt="200x200"
              src={this.props.cover}
              className="img mb-3"
              variant="top"
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                Production : {this.props.production}
                <br />
                Director : {this.props.director}
                <br />
                Year : {this.props.year}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <ButtonGroup>
                  <Button variant="outline-success" onClick={this.props.onEdit}>
                    Edit
                  </Button>
                  <Button variant="outline-danger" onClick={this.props.onDrop}>
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
