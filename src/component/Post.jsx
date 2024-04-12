import { useEffect, useState } from "react";
import img2 from "../assets/post1.png";
import img1 from "../assets/post2.png";
import svg from "../assets/svg.png";
import { categories } from "../Data";

const Post = () => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    setCategory(categories);
  }, []);

  return (
    <div className="right-side">
      <div className="right-side-upper">
        <div className="searchbox">
          <h1 className="box-heading">Search</h1>
          <input type="text" />
        </div>
        <div className="box">
          <h1 className="box-heading">Recent Post</h1>
          <div className="line"></div>
          <div className="post">
            <div className="upper-div">
              <img src={img1} alt="" />
            </div>
            <div className="lower-div">
              <div>
                <img src={img2} alt="" />
              </div>
              <div className="flex-col">
                <p className="post-desc">
                  Microsoft Dynamics 365 The Emerging ERP In 2024
                </p>
                <div className="flex-row">
                  <img src={svg} className="card-icon" />
                  <span>February 1,2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="post-desc">LST Drive</div>
        </div>
      </div>
      <div className="right-side-lower">
        <div className="box-1">
          <h1 className="box-heading">Categories</h1>
          <div className="line"></div>
          <div>
            <p className="categories-item">Netsuite ({category.Netsuite})</p>
            <div className="line"></div>
          </div>
          <div>
            <p className="categories-item">Other ({category.Other})</p>
            <div className="line"></div>
          </div>
          <div>
            <p className="categories-item">Product ({category.Product})</p>
            <div className="line"></div>
          </div>
        </div>
        <div className="box-2">
          <h1 className="box-heading italic">Recent Comments</h1>
          <div className="line"></div>
          <div>
            <p className="categories-item faid">No Comments to show</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
