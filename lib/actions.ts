'use server';

export const onContactFormSubmit = async (formData: FormData) => {
	console.log(formData.get('name'));

	const name = formData.get('name');
	const email = formData.get('email');
	const subject = formData.get('subject');
	const message = formData.get('message');

	if (!name || !email || !subject || !message) return null;
	const mailToString = `mailto:shafiq.belaroussi@gmail?subject=${subject}&body=Hi, my name is${name}.\n${message}`;

	return { mailToString };
};
