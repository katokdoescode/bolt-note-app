import {
	initAuth,
	initThinBackend,
	query,
	getCurrentUser,
	loginWithRedirect,
} from 'thin-backend';

initThinBackend({
	host: 'https://bolt-note-app-backend.thinbackend.app',
});

const initialize = async () => {
	await initAuth();
	const user = await getCurrentUser();
	if (!user) await loginWithRedirect();
}

export const getPosts = async () => {
	await initialize();
	return await query('posts').fetch();
}
