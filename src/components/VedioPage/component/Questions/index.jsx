import React from "react";

export default function Questions() {
  return (
    <>
      <div className="container">
        <div className="">
          <form class="d-flex mt-5 w-100 ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search all course questions"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>Filters:</p>
              <div class="dropdown">
                <a
                  class="btn btn-outline-secondary dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All lectures
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="/">
                      All lectures
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Current lecture
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-8  ">
              <p>Sort by:</p>
              <div className="d-flex gap-2">
              <div class="dropdown">
                <a
                  class="btn btn-outline-secondary dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by recommended
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="/">
                      Sort by most recent
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Sort by most upvoted
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Sort by recommended
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown w-100">
                  <a
                    class="btn btn-outline-secondary dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter questions
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1" className=""> Questions i'm following</label>
                      
                      
                    </li>
                    <li>
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Questions I asked</label>
                      
                    </li>
                    <li>
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Questions without responses</label>
                      
                    </li>
                  </ul>
                </div>
              </div>
              
              
                
                
              </div>
              
            </div>
           
            
          </div>
        </div>
      
    </>
  );
}
