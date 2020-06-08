import React from "react";

const Contact = (props) => {
  // programatic redirect
  // props contains additional data because it is loaded by BrowserRouter

  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  console.log(props);

  return (
    <div className="Contact container">
      <h4 className="center">This is Contact page</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
        rerum. Illo, facilis. Repellendus deserunt aliquid laboriosam
        repudiandae architecto labore iusto, quia quos, odio itaque numquam
        nobis saepe sint dolores nihil.
      </p>
    </div>
  );
};

export default Contact;
