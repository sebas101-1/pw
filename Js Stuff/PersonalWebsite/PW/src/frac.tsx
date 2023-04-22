import React, { Component } from "react";
import Sketch from "react-p5";

export default class Frac extends Component {
  x = 50
  y = 50

  setup(p5:any, parent:any){
    p5.createCanvas(500, 500).parent(parent)
  }
  draw(p5:any){
    p5.background(0)
    p5.ellipse(this.x, this.y, 70, 70)
    this.x++
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}