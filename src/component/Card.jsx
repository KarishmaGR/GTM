import { CiCalendarDate, CiUser } from "react-icons/ci";

import { careers } from "../Data";
import { useEffect, useState } from "react";
import Post from "./Post";

const Card = () => {
  const [career, setCareers] = useState([]);
  useEffect(() => {
    setCareers(careers);
    console.log(career);
  }, []);

  return (
    <div className="main-container">
      <div className="left-side">
        {career &&
          career.map((item, index) => {
            return (
              <>
                <div key={index} className="card">
                  <div className="card-heading">
                    <h1>{item.title}</h1>
                    <div className="card-icon">
                      <div>
                        <CiCalendarDate className="icon" />
                        <span>{item.date}</span>
                      </div>
                      <div>
                        <CiUser className="icon" />
                        <span>{item.auther}</span>
                      </div>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <a href="">Read More</a>
                </div>
              </>
            );
          })}

        <div className="next-button">
          <a href="">1</a>
          <a href="">2</a>
          <a href="">Next</a>
        </div>
      </div>

      <Post />
    </div>
  );
};
export default Card;
