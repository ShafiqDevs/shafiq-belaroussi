import { defineField, defineType } from 'sanity';
export const headerType = defineType({
	type: 'document',
	name: 'header',
	title: 'Header',
	fields: [
		defineField({
			type: 'array',
			name: 'links',
			title: 'Links',
			of: [{ type: 'string' }],
		}),
		defineField({
			type: 'image',
			name: 'profileImage',
			title: 'Profile Image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			type: 'string',
			name: 'jobTitle',
			title: 'Job Title',
		}),
		defineField({
			type: 'object',
			name: 'about',
			title: 'About',
			fields: [
				{
					type: 'string',
					name: 'introductionTitle',
					title: 'Introduction Title',
				},
				{
					type: 'string',
					name: 'introduction',
					title: 'Introduction',
				},
			],
		}),
		defineField({
			type: 'object',
			name: 'contact',
			title: 'Contact',
			fields: [
				{
					type: 'string',
					name: 'email',
					title: 'Email',
					description: 'Contact Email',
				},
				{
					type: 'string',
					name: 'phoneNumber',
					title: 'Phone Number',
					description: 'Contact Phone Number',
				},
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Header Links',
				subtitle: '',
			};
		},
	},
});
