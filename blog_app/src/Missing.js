import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Post Not Found</h2>
      <p>Well, that's desappointing.</p>
      <p>
        <Link to="/">Back to Home Page</Link>
      </p>
    </main>
  );
};

export default Missing;
