import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';
import { client } from '../client';

const HEADER_LINKS_QUERY = defineQuery(`
        *[
            _type=="header"
         ][0]
            
            `);
export const getHeaderContent = async () => {
	try {
		const headerLinks = await sanityFetch({
			query: HEADER_LINKS_QUERY,
		});
		// if header links is empty or undefied return null
		if (!headerLinks) return null;
		return headerLinks.data;
	} catch (error) {
		console.error('Error fetching header links:', error);
		return null;
	}
};
