"use client";

import { useEffect } from "react";

const Bootstrap = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <>{children}</>;
};

export default Bootstrap;
