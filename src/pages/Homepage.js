import React from "react";
import "./HomePage.css";
import { Table, Button } from "react-bootstrap";
const Homepage = () => {
  return (
    <>
      <h1>Tour Details</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>1</td>
            <td>JUL 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>JUL 19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default Homepage;
