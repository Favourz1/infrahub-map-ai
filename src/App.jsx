import { Route, Routes } from "react-router-dom";
import { DashboardView } from "Layouts";
import { CountyPage, Plan } from "Pages";


function App() {

  return (
    <Routes>

      <Route element={<DashboardView />}>
        <Route exact path="/" element={<CountyPage />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/dashboard" element={<CountyPage />} />
        <Route path="/profile" element={<CountyPage />} />
      </Route>

    </Routes>
  )
}

export default App
