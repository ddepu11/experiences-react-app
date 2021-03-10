import "./App.css";
import { useState } from "react";

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [employees, setEmployees] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>Experience</h1>
        <div className="underline"></div>
      </header>

      <aside className="flex">
        <button>Tommy</button>
        <button>Tommy</button>
        <button>Tommy</button>
      </aside>

      <main>
        <h1>Full stack developer</h1>

        <span>Tommy</span>

        <span className="duration">december 2014 - present</span>

        <div>
          <i class="fas fa-forward fa-2x"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            quas cupiditate aliquam qui eaque atque beatae illum? Exercitationem
            aut, tenetur asperiores veniam ad eius nemo ab quam necessitatibus
            dolor alias.
          </p>
        </div>
      </main>
      <footer>
        <button>More Info</button>
      </footer>
    </div>
  );
}

export default App;
