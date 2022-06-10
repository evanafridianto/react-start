import React from "react";
import { Button, Card as Content, ButtonGroup, Col } from "react-bootstrap";

export default class Card extends React.Component {
  render() {
    return (
      <>
        <Col>
          <Content className="shadow-sm">
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
                Production : {this.props.production}
                <br />
                Director : {this.props.director}
                <br />
                Year : {this.props.year}
              </Content.Text>
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
            </Content.Body>
          </Content>
        </Col>
      </>
    );
  }
}
