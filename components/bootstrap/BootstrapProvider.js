"use client";

import { useEffect } from "react";

function BootstrapProvider() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}

export default BootstrapProvider;
