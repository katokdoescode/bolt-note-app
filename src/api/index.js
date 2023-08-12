import {
	initAuth,
	initThinBackend,
	query,
	getCurrentUser,
	loginWithRedirect,
} from 'thin-backend'

initThinBackend({
	host: 'https://bolt-note-app-backend.thinbackend.app',
})

await initAuth()
const user = await getCurrentUser()
if (!user) await loginWithRedirect()

export const posts = await query('posts').fetch()
