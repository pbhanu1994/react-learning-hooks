import FormatName from "../FormatName";
import Tick from '../Tick';
import PropsPassing from '../Props/PropsPassing';
import ExtractComponent from '../Extracting/ExtractComponent';
import EventHandling from '../EventHandling';
import { Greeting } from '../Conditional/Greeting';
import {Blog} from '../ListsAndKeys/Blog';
import {Link} from "react-router-dom"

export default function Home() {
    return (
      <div className="App">
        <Link to="/dashboard">Go to Dashboard</Link>
        <hr />
        <Link to="/customhook">Go to Custom Hook</Link>
        <hr />
        <Link to="/context">Go to Context</Link>
        <FormatName />
        <hr />
        <Tick />
        <hr />
        <PropsPassing />
        <hr />
        <ExtractComponent />
        <hr />
        <EventHandling />
        <hr />
        <Greeting />
        <hr />
        <Blog />
      </div>
    );
  }