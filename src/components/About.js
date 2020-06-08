import React, { Component } from "react";
import Rainbow from "../hoc/Rainbow";

class About extends Component {
  render() {
    return (
      <div className="About container">
        <h4 className="center">This is About page</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
          rerum. Illo, facilis. Repellendus deserunt aliquid laboriosam
          repudiandae architecto labore iusto, quia quos, odio itaque numquam
          nobis saepe sint dolores nihil.
        </p>
      </div>
    );
  }
}

export default Rainbow(About);
