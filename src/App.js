import "./App.css";
import { useState, useEffect } from "react";
import workExperience from "./work-experience";
import Button from "./components/Button";

function App() {
  const [experiences, setExperiences] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [copmIndex, setCompIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setExperiences(workExperience);
    setCompanies([...workExperience.map((item) => item.company)]);
    setLoading(false);
  }, []);

  function changeExperiemnce(e) {
    setLoading(true);
    const index = e.target.dataset.index;
    setCompIndex(index);
    setLoading(false);
  }

  return (
    <div className="container">
      <header>
        <h1>Experience</h1>
        <div className="underline"></div>
      </header>

      <aside className="flex">
        {companies.map((item, index) => (
          <Button
            index={index}
            changeExperiemnce={changeExperiemnce}
            key={index * 5}
            btnStyle="company"
          >
            {item}
          </Button>
        ))}
      </aside>

      <main>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>{experiences[copmIndex].title}</h1>

            <div className="middle  flex">
              <span>{experiences[copmIndex].company}</span>
              <span className="duration">{experiences[copmIndex].dates}</span>
            </div>

            {experiences[copmIndex].duties.map((item, index) => {
              return (
                <div className="bottom flex" key={index}>
                  <i className="fas fa-forward fa-1x"></i>
                  <p>{item}</p>
                </div>
              );
            })}
          </>
        )}
      </main>
      <footer>
        <button>More Info</button>
      </footer>
    </div>
  );
}

export default App;
