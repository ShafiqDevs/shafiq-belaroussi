import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

export const getProjectsContent = async () => {
	const PROJECT_CONTENT_QUERY = defineQuery(`*[
        _type == "projects"
    ]`);
	try {
		const projects = await sanityFetch({
			query: PROJECT_CONTENT_QUERY,
		});

		console.log('projects:', projects.data);

		// check if projects is not empty and return [] otherwise return projects data
		return projects.data.length > 0 ? projects.data : [];
	} catch (error) {
		console.error('Error fetching projects:', error);
		return [];
	}
};
