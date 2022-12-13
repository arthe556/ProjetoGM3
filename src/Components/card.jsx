import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Imagens/terry.jpg" />
      <Card.Body>
        <Card.Title>TerryPaladino</Card.Title>
        <Card.Text>
            Sofrimento é o que resume
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
}

export default BasicExample;