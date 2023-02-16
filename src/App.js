import logo from './JETS-logo.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={
            <div className="text-center my-24 space-x-4 drop-shadow-lg p-6">
              <div className="text-center">
                <img src={logo} alt="Logo" className="inline w-20 animate-bounce" />
              </div>
              <h2 className=" my-12 text-2xl text-blue-900 font-semibold">Portal Currently Undergoing Routine Maintenance</h2>
              <h3 className="font-semibold">We should be back online:<br />Friday, 17-02-2023</h3>
              <p className="mt-4">For more information please contact the ICT department. <b>Thank you for your patience</b>.</p>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
