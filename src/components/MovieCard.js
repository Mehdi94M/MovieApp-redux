import React from 'react'
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function MovieCard ( {movie} ) {
  return (
    <div>
        <Card style={{ width: '400px' , height:'500px' , backgroundColor : 'blue' }}>
  <Card.Img variant="top" src={movie.posterUrl} style = {{ height:'250px'}} />
  <Card.Body>
    <Card.Title> {movie.title} </Card.Title>
    <Card.Text>
      {movie.description}.
    </Card.Text>
    <Link to={`/trailercard/${movie.id}`}>
    <Button variant="outline-success">watch the movie</Button>
    </Link>
  </Card.Body>
</Card>
    </div>
  )
}
