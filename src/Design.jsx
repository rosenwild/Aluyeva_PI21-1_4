import "./styles.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import KidsShelf from "./Book";
import MyButton from "./ContactButton";

function Card({ children, classname }) {
  return <div className={classname}>{children}</div>;
}

function BookShelf() {
  return (
    <Tabs
      defaultActiveKey="main"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="main" title="Main page">
        <Card classname={"mainCard"}>
          <div>Welcome to my BookShelf!</div>
        </Card>
      </Tab>
      <Tab eventKey="kids" title="Kids books">
        <KidsShelf category={{ name: "kids" }} />
      </Tab>
      <Tab eventKey="adults" title="Adult books">
        <KidsShelf category={{ name: "adults" }} />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <MyButton />
      </Tab>
    </Tabs>
  );
}

export default function App() {
  return (
    <div className="App">
      <BookShelf />
    </div>
  );
}
