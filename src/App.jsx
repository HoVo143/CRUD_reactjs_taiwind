

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePages from './pages/HomePages'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

// https://www.youtube.com/watch?v=LDB4uaJ87e0


const App = () => {

  //add
  const addJob = async(newJob) => {
    // console.log(newJob)
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newJob)
    })
    return
  }

  // delete
  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }

  //update
  const updateJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(job)
    })
    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePages/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFound/>} />
  
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
    // <>
    //   <Navbar/>
    //   {/*  */}
    //   <Hero/>
    //   {/*  */}
    //   <HomeCards/>
    //   {/*  */}
    //   <JobListings/>
    //   {/*  */}
    //   <ViewAllJobs/>
    // </>
  )
}

export default App
