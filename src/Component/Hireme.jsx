

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


function Hireme() {
  return (
    <Card className="bg-dark text-[#ffc107] mt-3">
      <Card.Img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAWGnEEfVTST3qa0QhX3eSZfSaqEBJoRuyA&s"
        alt="Card image"
        style={{ maxHeight: "50vh" }}
      />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
        <Card.Text style={{ fontWeight: "bold", fontSize: "34px" }}>
          Interested in working with me?
        </Card.Text>
        <Card.Text>
          {" "}
          <Button variant="primary" className="py-2 px-3">
            <a href="#contact" className='text-decoration-none text-[#ffc107]'> Hire Me </a>
          </Button>{" "}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Hireme;
