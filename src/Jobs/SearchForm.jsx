import React from 'react'
import { Form } from 'react-bootstrap'

export default function SearchForm({params, setParams, setPage}) {
    function paramHandler (e) {
        const param = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams(prevParams => {
            return { ...prevParams, [param]: value}
        })
    }
    return (
      <Form>
        <Form.Row className="align-items-end">
          <Form.Group className="mx-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={paramHandler}
              value={params.description}
              name="description"
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mx-2">Location</Form.Label>
            <Form.Control
              onChange={paramHandler}
              value={params.location}
              name="location"
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              onChange={paramHandler}
              value={params.full_time}
              type="checkbox"
              id="full_time"
              name="full_time"
              label="Only Full time"
              className="ml-2 mb-2"
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
}

