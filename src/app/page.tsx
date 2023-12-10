import { getUser } from '@/actions/getUser';
import Link from 'next/dist/client/link'
import Logout from './Logout';

export default async function Home() {

	const user = await getUser();

	return (
		<main>
			{ user ? (
				<>
					Hello, {user.personaname}
					<Logout />
				</>
			) : (
				<>
					<Link href='/api/auth/login'>Login</Link>
				</>
			)}
		</main>
	)
}