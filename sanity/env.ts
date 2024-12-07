export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-06';

export const dataset = assertValue(
	process.env.NEXT_PUBLIC_SANITY_DATASET,
	'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);
export const liveContentReadToken = assertValue(
	process.env.NEXT_PUBLIC_SANITY_LIVE_CONTENT_READ_TOKEN,
	'Missing sanity live content read token'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
