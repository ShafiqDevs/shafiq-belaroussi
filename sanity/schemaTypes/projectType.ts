import { ProjectsIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

// projects will have fields: image, project title, project description and a link to the project if available

export const projectType = defineType({
	type: 'document',
	name: 'projects',
	title: 'Project Selection',
	icon: ProjectsIcon,
	fields: [
		defineField({
			type: 'image',
			name: 'projectThumbnail',
			title: 'Project Thumbnail',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			type: 'string',
			name: 'projectName',
			title: 'Project Name',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			type: 'text',
			name: 'projectDescription',
			title: 'Project Description',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			type: 'string',
			name: 'projectLink',
			title: 'Project Link',
			description: 'Optional: Add a link to your project',
		}),
	],
});
