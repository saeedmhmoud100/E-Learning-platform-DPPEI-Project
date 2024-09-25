import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./style.css"
export default function InstructorSection() {


  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="instructor-section">
      <h1 className="h4 fw-bolder mb-2">Instructors</h1>
      <div className="instructor-card">
        <div className="instructor-info">
          <Link className="instructor-name fs-5" to="/inst-profile">SkillSprints Inc.</Link>
          <p className="instructor-tagline text-muted">Closing the Digital Skills Gap</p>
          <div className=" d-flex  ">
            <div className="instructorimg  me-3 ">
                <img src="/images/instructorPhoto.jpg" className="w-100" alt="Instructor" />
            </div>

          <ul className="instructor-stats list-unstyled">
            <li> 
            <i className="fa-solid fa-star me-2"></i>
            <span>4.5 Instructor Rating</span>
        </li>
            <li> 
            <i className="fa-solid fa-medal me-2"></i>
            <span>19,150 Reviews</span>
            </li>
            <li>
            <i className="fa-solid fa-user-group me-2"></i>
                <span> 350,123 Students</span>
            </li>
            <li> 
            <i className="fa-solid fa-circle-play me-2"></i>
            <span> 39 Courses</span></li>
          </ul>
         

          </div>
         
        </div>
        <div className="instructor-bio">
          <h2 className="h6 fw-bold my-3">Tech Your Way to the Top</h2>
          <p>
            <strong>Welcome to SkillSprints!</strong> We're thrilled you're here to explore the world of digital skills. You're stepping into a community dedicated to empowering your digital journey.
          </p>
          <h5>Who We Are</h5>
          <p>
            SkillSprints is more than a media company. We're your personal digital skills coach, guiding you through the evolving digital landscape. Our mission? Simple:{" "}
            <em>Closing the Digital Skills Gap.</em> Whether you're starting from scratch or looking to level up, we're here to light the way.
          </p>
          
          {/* Show More/Show Less Toggle */}
          {showMore && (
            <div className="show-more-content">
              <h5>What We Do</h5>
              <p>
                Our approach is unique – think of us as your digital skills gym. With a library of engaging videos and interactive content, we make learning Microsoft Office, Google Docs, browser usage, and even desktop cybersecurity not just informative but also enjoyable. We believe that learning digital skills should be as captivating as scrolling through your favorite social media feed.
              </p>
              <h5>For the Beginners and the Curious</h5>
              <p>
                If you're among the one-third of workers diving into the digital world for the first time, breathe easy. We've got you covered with step-by-step guides that speak your language, minus the jargon. You'll go from novice to confident user, all at your own pace.
              </p>
              <h5>For the Aspiring Tech Whizzes</h5>
              <p>
                To the more advanced learners, SkillSprints is your secret weapon. Dive into advanced topics, challenge yourself with expert-level content, and accelerate your learning.
              </p>
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

