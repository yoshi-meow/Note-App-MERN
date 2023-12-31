import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

function Notes() {
  const baseUrl = `https://note-app-mern-api.vercel.app/api/notes`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  function getRandomPreferredColor() {
    const preferredColors = ['#C4C1A4', '#e4d7b4', '#FDF4F5', '#C0DBEA', '#BA90C6', '#E8A0BF', '#FFDEB4','#D5B4B4','#93BFCF'];
    const randomIndex = Math.floor(Math.random() * preferredColors.length);
    return preferredColors[randomIndex];
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="notes">
          <li className="add-note-button">
            <Link to={`/add-note`}>
              <ControlPointIcon fontSize="large"  className="add" />
            </Link>
          </li>

          {data.map((item) => (
            <li
              key={item._id}
              style={{
                cursor: "pointer",
                backgroundColor: getRandomPreferredColor(),
              }}
            >
              <Link to={`/note/${item._id}`}>
                <h3>{item.title}</h3>

                <p>
                  {item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notes;
