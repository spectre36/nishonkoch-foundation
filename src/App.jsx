import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Awards from "./pages/Awards";
import JoinUs from "./pages/JoinUs";
import Donate from "./pages/Donate";
import Partnerships from "./pages/Partnerships";

import EFA from "./pages/EFA";
import SOR from "./pages/SOR";
import Attonirbhor from "./pages/Attonirbhor";
import TreePlantation from "./pages/TreePlantation";
import Flooddrive from "./pages/Flooddrive";
import Ushnota from "./pages/Ushnota";
import Cleanup from "./pages/Cleanup";
import Workshop from "./pages/Workshop";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/partnerships" element={<Partnerships />} />

        {/* Project Pages */}
        <Route path="/projects/education-for-all" element={<EFA />} />
        <Route path="/projects/spirit-of-ramadan" element={<SOR />} />
        <Route path="/projects/attonirbhor" element={<Attonirbhor />} />
        <Route path="/projects/tree-plantation" element={<TreePlantation />} />
        <Route path="/projects/flood-drive" element={<Flooddrive />} />
        <Route path="/projects/ushnota" element={<Ushnota />} />
        <Route path="/projects/clean-up" element={<Cleanup />} />
        <Route path="/projects/workshop" element={<Workshop />} />
      </Route>
    </Routes>
  );
}

export default App;