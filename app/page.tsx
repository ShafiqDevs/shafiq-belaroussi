import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { getHeaderContent } from '@/sanity/lib/Header/getHeaderLinks';
import { urlFor } from '@/sanity/lib/image';
import { getProjectsContent } from '@/sanity/lib/projects/getProjectsContent';
import { ArrowUpCircle } from 'lucide-react';

import Link from 'next/link';

export default async function Home() {
	const headerLinks = await getHeaderContent();
	const projects = await getProjectsContent();

	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
			{/* Header */}
			<Header headerLinks={headerLinks?.links ?? []} />
			{/* Hero */}
			<section
				id='hero'
				className='snap-start'>
				<Hero
					profileImageLink={urlFor(
						headerLinks?.profileImage ? headerLinks?.profileImage : ''
					).url()}
					jobTitles={
						headerLinks?.jobTitle ? headerLinks?.jobTitle : ''
					}
				/>
			</section>
			{/* About */}
			<section
				id='about'
				className='snap-center'>
				<About
					profileImageLink={urlFor(
						headerLinks?.profileImage ? headerLinks?.profileImage : ''
					).url()}
					about={{
						introduction: headerLinks?.about?.introduction ?? '',
						introductionTitle: headerLinks?.about?.introduction ?? '',
					}}
				/>
			</section>
			{/* WorkExperience */}
			{/* <section
				id='experience'
				className='snap-center'>
				<WorkExperience />
			</section> */}
			{/* Skills */}
			{/* <section
				id='skills'
				className='snap-start'>
				<Skills />
			</section> */}
			{/* Projects */}
			<section
				id='projects'
				className='snap-center'>
				<Projects projects={projects} />
			</section>
			{/* Contact Me */}
			<section
				id='contact'
				className='snap-start'>
				<Contact
					email={headerLinks?.contact?.email}
					phone={headerLinks?.contact?.phoneNumber}
				/>
			</section>
			<Link
				href={'#hero'}
				className=''>
				<div className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<ArrowUpCircle className='rounded-full hover:scale-110 transition-transform duration-200 ease-in-out' />
					</div>
				</div>
			</Link>
		</div>
	);
}
