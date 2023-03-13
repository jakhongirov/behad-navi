import { Routes, Route } from "react-router-dom";
import Navi from './redirect/redirect';

function App() {
  return (
    <Routes>
      <Route path="/redirect/:campaign_id/:app_ads_id/:user_id" element={< Navi />} />
    </Routes>
  );
}

export default App;
