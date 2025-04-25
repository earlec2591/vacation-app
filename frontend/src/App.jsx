import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // Step 1: Set up state to hold plans
  const [plans, setPlans] = useState([]);

  // Step 2: Fetch data from backend when page loads
  useEffect(() => {
    axios.get("http://localhost:5000/api/plans")
      .then((response) => {
        setPlans(response.data); // Save data into state
      })
      .catch((error) => {
        console.error("Error fetching plans:", error);
      });
  }, []);

  // Step 3: Show the plans in a list
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Family Vacation Plans</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            Destination: {plan.destination} <br />
            Date: {plan.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
