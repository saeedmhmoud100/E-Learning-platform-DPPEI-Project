import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./style.css"
export default function InstructorSection({instructor}) {


  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="instructor-section">
      <h1 className="h4 fw-bolder mb-2">Instructor</h1>
      <div className="instructor-card">
        <div className="instructor-info">
          <Link className="instructor-name fs-5" to={{
    pathname: '/inst-profile',
    search: `?id=${instructor.id}`,
  }}>{instructor?.user?.username}</Link>
          <p className="instructor-tagline text-muted">{instructor?.user?.title}</p>
        
            <div className="instructorimg  me-3 ">
                <img src={instructor?.user?.profile_image}className="w-100 h-100" alt="Instructor" />
            </div>

            
        </div>
        <div className="instructor-bio">
          <h2 className="h6 fw-bold my-3">Tech Your Way to the Top</h2>
       <div>
        {instructor?.brief_description}
       </div>
          
          {/* Show More/Show Less Toggle */}
          {showMore && (
            <div className="show-more-content">
              {instructor?.user?.description}
            </div>
          )}

          {/* Show More/Show Less Button */}
          <button onClick={toggleShowMore} className="btn btn-link">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

