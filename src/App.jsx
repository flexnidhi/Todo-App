import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:", list[index].value);
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };

  return (
    <Container className="todo-container">
      <Row className="text-center">
        <h1>TODO LIST</h1>
      </Row>
      <hr />
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Add item..."
              size="lg"
              value={userInput}
              onChange={(item) => updateInput(item.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" className="mt-2" onClick={addItem}>
              ADD
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item key={item.id} className="todo-item">
                {item.value}
                <span>
                  <Button
                    className="action-btn"
                    variant="light"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="action-btn"
                    variant="light"
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;