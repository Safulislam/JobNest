import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPages from './pages/NotFoundPages';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
	// Add Job.
	const addJob = (newJob) => {
		const res = fetch('/api/jobs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}
			, body: JSON.stringify(newJob)
		});
		return;
	}

	// Delete Job.
	const deleteJob = async (id) => {
		const res = fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		});
		return;
	}
	// Update Job.
	const updateJob = (updatedJob) => {
		const res = fetch(`/api/jobs/${updatedJob.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			}
			, body: JSON.stringify(updatedJob)
		});
		return;
	}

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/jobs' element={<JobsPage />} />
				<Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
				<Route path='/edit-job/:id' element={<EditJobPage updatedJobSubmit={updateJob} />} loader={jobLoader} />
				<Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
				<Route path='*' element={<NotFoundPages />} />
			</Route>
		)
	)

	return <RouterProvider router={router} />
	// return (
	// 	<>
	// 		<NavBar />
	// 		<Hero />
	// 		<HomeCards />
	// 		<JobListings />
	// 		<ViewAllJobs />
	// 	</>
	// )
}

export default App