import preactLogo from "../../assets/tatum.jpeg";
import Form from "./form";
import "./style.css";

export function Home() {
  return (
    <div className="home">
      <a href="https://preactjs.com" target="_blank" rel="noreferrer">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <h1>Tatum Hello</h1>
      <Form />
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" className="resource" rel="noreferrer">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
