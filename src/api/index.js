import {
	initAuth,
	initThinBackend,
	query,
	getCurrentUser,
	loginWithRedirect,
	logout,
} from 'thin-backend';

initThinBackend({
	host: 'https://bolt-note-app-backend.thinbackend.app',
});

/**
 * Will initialize backend.
 * If user is not authenticated,
 * will redirect to the login  page.
 *
 * @returns {void}
 */
const initialize = async () => {
	await initAuth();
	const user = await getCurrentUser();
	if (!user) await loginWithRedirect();
}

/**
 * Check that the user is authenticated or not.
 *
 * @returns {boolean}
 */
export const isAuthed = async () => {
	await initAuth();
	const user = await getCurrentUser();
	return !!user;
}

/**
 * Returns a list of current user's posts.
 *
 * @returns {Post[]}
 */
export const getPosts = async () => {
	await initialize();
	return await query('posts').fetch();
}

export const logOut = async () => await logout();

export const logIn = async () => await initialize();
