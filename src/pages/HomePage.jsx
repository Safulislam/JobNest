import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
	return (
		<>
			<Hero title="Code Your Way to Success" subtitle="Unlock opportunities that align with your skills and goals." />
			<HomeCards />
			<JobListings isHome="true" />
			<ViewAllJobs />
		</>
	)
}

export default HomePage