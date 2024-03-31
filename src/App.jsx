import React, { useState } from "react";

import "./App.css";
import "./styles/layout.css";

import CustomLayout from "./layout";
import FirstWeek from "./pages/FirstWeek";
import SecondWeek from "./pages/SecondWeek";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <CustomLayout
        isButton={page == 2 ? true : false}
        page={page}
        setPage={setPage}
      >
        {page == 1 ? <FirstWeek /> : <SecondWeek />}
      </CustomLayout>
    </>
  );
}

export default App;
