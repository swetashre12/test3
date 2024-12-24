"use client";
import React , { useState } from 'react';
import { job } from '@/app/constant/job';
import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import './HiringDetails.css'

const HiringDetails = () => {
  const truncateText = (text:string, length:number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  const [filters, setFilters] = useState({
    jobType: [],
    industry: [],
    location: [],
    country: [],
  });

  const [search, setSearch] = useState({
    what: "",
    where: "",
  });

  const [searchFilters, setSearchFilters] = useState({
    what: "",
    where: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void =>  {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilter = checked
        ? [...prevFilters[name as keyof typeof prevFilters], value]
        : prevFilters[name as keyof typeof prevFilters].filter((item) => item !== value);
      return {
        ...prevFilters,
        [name]: updatedFilter,
      };
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSearch((prevSearch) => ({
      ...prevSearch,
      [name]: value,
    }));
  };

  const handleSearchClick = () => {
    setSearchFilters(search);
  };

  const filteredJobs = job.filter((jobItem) => {
    return (
      (filters.jobType.length > 0
        ? filters.jobType.some((type) => jobItem.type.includes(type))
        : true) &&
      (filters.industry.length > 0
        ? filters.industry.some((industry) =>
            jobItem.industry.includes(industry)
          )
        : true) &&
      (filters.country.length > 0
        ? filters.country.some((country) => jobItem.country.includes(country))
        : true) &&
      (filters.location.length > 0
        ? filters.location.some((location) => jobItem.city.includes(location))
        : true) &&
      (searchFilters.what
        ? jobItem.job_title
            ?.toLowerCase()
            .includes(searchFilters.what.toLowerCase())
        : true) &&
      (searchFilters.where
        ? jobItem.city
            ?.toLowerCase()
            .includes(searchFilters.where.toLowerCase()) ||
          jobItem.country
            ?.toLowerCase()
            .includes(searchFilters.where.toLowerCase()) 
          // jobItem.state
          //   ?.toLowerCase()
          //   .includes(searchFilters.where.toLowerCase())
        : true)
    );
  });
  return (
    <div>
      <section className="hire-more pb-5">
        <div className="row px-0 mx-0 service justify-content-center">
          <div className="col-md-4 col-lg-3 col-xl-3 service-list mx-0 pb-2 pb-md-5 ps-xl-5 pe-xl-3">
            <div>
              <h4 className="text-start job-type ps-3">Filters</h4>
              <div className="filters">
                <div className="p-4">
                  <div className="text-start job-type">Job Type</div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Full Time"
                      id="fulltime"
                      name="jobType"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="fulltime"
                      >
                        Full time
                      </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Part Time"
                      id="parttime"
                      name="jobType"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="parttime"
                      >
                        Part time
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div className="text-start job-type">Industry</div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Engineering"
                      id="tech"
                      name="industry"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="tech"
                      >
                        Engineering
                      </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Marketing"
                      id="tech1"
                      name="industry"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="tech1"
                      >
                        Marketing
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div className="text-start job-type">City</div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Anywhere in Nepal"
                      id="remote"
                      name="location"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="remote"
                      >
                        Anywhere in Nepal
                      </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Janakpur"
                      id="remote2"
                      name="location"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="remote2"
                      >
                        Janakpur
                      </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Kathmandu"
                      id="remote1"
                      name="location"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="remote1"
                      >
                        Kathmandu
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div className="text-start job-type">Country</div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="country"
                      name="country"
                      value="Nepal"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="country"
                      >
                        Nepal
                      </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="country1"
                      name="country"
                      value="USA"
                      onChange={handleFilterChange}
                    />
                    <div className="text-start">
                      <label
                        className="form-check-label ps-2 label-filter"
                        htmlFor="country1"
                      >
                        USA
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-xl-8 service-right mt-5 pt-3">
            <div className="search-filter mx-lg-5">
              <div className="row mt-5 justify-content-center py-lg-3 p-4 p-lg-0">
                <div className="col-lg-4 ">
                  <div className="mb-3 text-start">
                    <label htmlFor="searchinputWhat" className="form-label">
                      What
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        className="form-control"
                        id="searchinputWhat"
                        name="what"
                        placeholder="Job title or skill"
                        onChange={handleSearchChange}
                      />
                      <span className="icon">
                        <IoSearch />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="mb-3 text-start">
                    <label htmlFor="searchinputWhere" className="form-label">
                      Where
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        className="form-control"
                        id="searchinputWhere"
                        name="where"
                        placeholder="City,state/province,or country"
                        onChange={handleSearchChange}
                      />
                      <span className="icon">
                        <ImLocation />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 my-auto pt-2 ps-xl-5">
                  <button
                    className="btn btn-success btn-src btn-lg"
                    onClick={handleSearchClick}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <h1 className="py-5 mt-5 current-open text-center">Current Openings</h1>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((elem, index) => (
                <div className="hire-box" key={index}>
                  <Link href={`/hiring/${elem.slug}`}>
                    <div
                      key={index}
                      className="open-job my-5 mx-lg-5 p-4 p-lg-5"
                    >
                      <div className="row">
                        <div className="col-8 text-start">
                          <div className="job-title">{elem.job_title}</div>
                          {elem.application_closed === "yes" ? (
                          <div className="application-closed-tag">
                            <span className="closed">Application Closed</span>
                          </div>
                        ) : (""  )}
                          <div className="py-2">
                            {elem.place}, {elem.city}, {elem.country}
                          </div>
                        </div>
                        <div className="col-4 text-end px-0 px-sm-2">
                          <div className="job-type">{elem.type}</div>
                          <div>{elem.post_date}</div>
                        </div>
                      </div>
                      <div className="text-start">{elem.Experience}</div>
                      <div className="row">
                        <div className="col-sm-8 text-start pt-2">
                          {truncateText(elem.job_desc, 150)}
                        </div>
                        <div className="col-sm-4 text-start text-sm-end more-hire pt-1 pt-sm-0">
                          <div>
                            <button className="btn btn-success btn-more">
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="no-jobs-message">No jobs available</div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HiringDetails
