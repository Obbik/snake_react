import React from "react";
import Snakefood from "./snakefood";
import Snake from "./snakeboard";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.changedir = this.changedir.bind(this);
    this.firstrandomfood = this.firstrandomfood.bind(this);
    this.state = {
      snakefooodcord: false,
      dir: "right",
      snake: [
        [0, 0],
        [0, 5],
        [0, 10],
      ],
    };
  }
  componentDidUpdate() {
    this.eat();
    this.randomfood();
  }
  eat = () => {
    let snakex = [...this.state.snake];

    let add = snakex[snakex.length - 1];

    if (
      snakex[snakex.length - 1][0] === this.state.snakefooodcord[0] &&
      snakex[snakex.length - 1][1] === this.state.snakefooodcord[1]
    ) {
      this.setState({
        snake: [...this.state.snake, [...add]],
      });
      this.setState({ snakefooodcord: false });
    }
    console.log(...this.state.snake);
  };

  componentDidMount() {
    setInterval(this.movesnake, 250);
    this.firstrandomfood();
    document.addEventListener("keydown", this.changedir, false);
  }

  randomfood = () => {
    if (this.state.snakefooodcord === false) {
      let food_coords_x = Math.floor(Math.random() * 20) * 5;
      let food_coord_y = Math.floor(Math.random() * 20) * 5;
      this.setState({ snakefooodcord: [food_coord_y, food_coords_x] });
    }
  };

  firstrandomfood = () => {
    let food_coord_y = Math.floor(Math.random() * 12) * 5 + 5;
    let food_coords_x = Math.floor(Math.random() * 12) * 5 + 5;
    this.setState({ snakefooodcord: [food_coord_y, food_coords_x] });
  };
  changedir = (e) => {
    switch (e.key) {
      case "a":
        if (this.state.dir !== "right") {
          this.setState({ dir: "left" });
        }

        break;
      case "d":
        if (this.state.dir !== "left") {
          this.setState({ dir: "right" });
        }

        break;
      case "s":
        if (this.state.dir !== "top") {
          this.setState({ dir: "bottom" });
        }
        break;
      case "w":
        if (this.state.dir !== "bottom") {
          this.setState({ dir: "top" });
        }

        break;
      default:
        break;
    }
  };

  movesnake = () => {
    let x = [...this.state.snake];
    let y = x[x.length - 1];
    switch (this.state.dir) {
      case "right":
        y = [y[0], y[1] + 5];
        break;
      case "left":
        y = [y[0], y[1] - 5];
        break;
      case "bottom":
        y = [y[0] + 5, y[1]];
        break;
      case "top":
        y = [y[0] - 5, y[1]];
        break;
      default:
        y = [y[0], y[1] + 5];
    }

    x.push(y);
    x.shift();
    this.setState({ snake: x });
    if (y[1] === 100) {
      y[1] = 0;
    }
    if (y[1] === -5) {
      y[1] = 95;
    }
    if (y[0] === -5) {
      y[0] = 95;
    }
    if (y[0] === 100) {
      y[0] = 0;
    }
    this.Snakedeath();
  };

  Snakedeath = () => {
    let snakex = [...this.state.snake];

    for (let y = 0; y < snakex.length - 2; y++) {
      if (
        snakex[snakex.length - 1][0] === snakex[y][0] &&
        snakex[snakex.length - 1][1] === snakex[y][1]
      ) {
        this.Endgame();
      }
    }
  };

  Endgame = () => {
    alert("koniec Gry ");
    window.location.reload(false);
  };

  render() {
    return (
      <div className="game">
        <div className="snake-container">
          <Snake kropka={this.state.snake} />
          <Snakefood coords={this.state.snakefooodcord} />
        </div>
      </div>
    );
  }
}

export default App;
