import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl = "" }) => {
  return (
    <Col md={4} sm={6} xs={12}>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="img-fluid"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <p className="description-text">{description}</p>
          </div>
        </div>
      </a>
    </Col>
  );
};

ProjectCard.defaultProps = {
  projectUrl: ""
};