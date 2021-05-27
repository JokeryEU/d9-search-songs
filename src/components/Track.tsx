import { ISearch } from "../types/deezer";
import { Image, ListGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

interface TrackProps {
  track: ISearch;
}

const Track = ({ track }: TrackProps) => {
  const history = useHistory();

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <Image
        roundedCircle
        alt="artistPic"
        style={{ height: "50px", width: "50px" }}
        src={track.artist.picture_medium}
      />
      <span className="mx-2">{track.artist.name} </span> <span>|</span>
      <span className="mx-2">{track.title}</span>
      <div className="ms-auto">
        <Button
          onClick={() => history.push(`/details/${track.id}`)}
          variant="primary"
          className="mx-2 badge "
          style={{ background: "#228800" }}
        >
          Details
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default Track;
