import { Col, Container, Row, Card } from "react-bootstrap";
import { ITrack } from "../types/deezer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type MusicParams = {
  id: string;
};
const Details = () => {
  const { id } = useParams<MusicParams>();
  const [track, setTrack] = useState<ITrack>();

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `${process.env.REACT_APP_API_URL}/track/${id}`
        );
        const data = await resp.json();
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
                <p>{track?.duration} mins</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
