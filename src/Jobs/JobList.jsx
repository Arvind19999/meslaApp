import React, {useState} from 'react';
import JobsData from './JobsData';
import { Container  } from "react-bootstrap";
import Job from './Job';

import JobPagination from './JobPagination';
import SearchForm from './SearchForm';

export default function JobList() {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const {jobs, loading , error, hasNextPage} = JobsData(params, page);
    return (
      <>
      <div className="job-section-bg">
        <Container className="my-2">
          <h2 className="mb-3">GitHub Jobs</h2>
          <SearchForm setParams={setParams} params={params} setPage={setPage}/> 
          <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
          {loading && <h1>Loading ....</h1>}
          {error && <h1>Error ....</h1>}
          {jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
          <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>

        </Container>
        </div> </>
    );
}
