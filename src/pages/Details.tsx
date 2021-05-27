import { Col, Container, Row, Card } from "react-bootstrap";
import { ITrack } from "../types/deezer";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

type MusicParams = {
  id: string;
};
const Details = () => {
  const { id } = useParams<MusicParams>();
  const [track, setTrack] = useState<ITrack>();

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/track/${id}`);
        const data = await res.json();
        console.log(data);
        setTrack(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          <h3
            className="fw-bold mt-4"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            Home
          </h3>
          <Card className="mt-5 mx-auto" style={{ width: "30rem" }}>
            <Card.Img
              variant="top"
              src={track?.album.cover_medium}
              alt="albumCover"
            />
            <Card.Body>
              <Card.Title className="fw-bold">{track?.artist.name}</Card.Title>
              <Card.Title>{track?.title}</Card.Title>
              <Card.Text>
                <a href={track?.preview}>Preview</a>
                <span className="ms-3">{track?.duration} sec</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
