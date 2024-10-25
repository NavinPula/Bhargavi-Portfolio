import { Container } from "./styles";
import Bhargavi from "../../assets/Bhargavi.jpeg";
import htmlIcon from "../../assets/html-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import angularIcon from "../../assets/angular-icon.png";
import mongoDB from "../../assets/mongodb-icon.jpg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi there! I'm Bollina Bhargavi, a Full Stack Software Developer with 3.6
          years of experience in developing end-to-end Mobile and Web
          Enterprise-based applications using React JS, AngularJS, Node JS,
          Express JS, Redux, MsSQL, MongoDB and Ionic Framework and is capable of working
          with new technology through proven ability to understand and deliver
          what is needed on time. My passion lies in delivering custom online
          experiences tailored to my client's needs.
        </p>
        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          I have gained hands-on experience working as a software developer and
          love tackling projects that push my boundaries. You can explore some
          of my work in the projects section.
        </p>
        <p>
          I am open to new collaborations and opportunities where I can
          contribute and grow. Feel free to connect with me; links are in the
          footer.
        </p>

        <h3>Here are my main skills:</h3>
          <div className="hard-skills">
            <div className="hability" title="VS Code" >
              <img src={vscodeIcon} alt="Visual Studio Code" />
            </div>
            <div className="hability" title="React">
              <img src={reactIcon} alt="React" />
            </div>
            <div className="hability" title="Angular">
              <img src={angularIcon} alt="Angular" />
            </div>
            <div className="hability" title="TypeScript">
              <img src={typescriptIcon} alt="TypeScript" />
            </div>
            <div className="hability" title="Node JS">
              <img src={nodeIcon} alt="Node.js" />
            </div>
            <div className="hability" title="HTML">
              <img src={htmlIcon} alt="HTML" />
            </div>
            <div className="hability" title="CSS">
              <img src={cssIcon} alt="CSS" />
            </div>
            <div className="hability" title="Bootstrap">
              <img src={bootstrapIcon} alt="Bootstrap" />
            </div>
            <div className="hability" title="Javascript">
              <img src={jsIcon} alt="JavaScript" />
            </div>
            <div className="hability" title="MySQL">
              <img src={mysqlIcon} alt="MySQL" />
            </div>
            <div className="hability" title="MongoDB">
              <img src={mongoDB} alt="MongoDB" />
            </div>
        </div>
      </div>
      <div className="about-image">
        <img style={{ borderRadius: "20px" }} src={Bhargavi} alt="Bhargavi" />
      </div>
    </Container>
  );
}
