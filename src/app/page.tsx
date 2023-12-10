import { getUser } from '@/actions/getUser';
import Link from 'next/dist/client/link'
import Logout from './Logout';
import { SteamProfile } from '@/lib/types';

export default async function Home() {

	const user:SteamProfile = await getUser();
		
	return (
		<main>
			{ user ? (
				<>
					Hello, {user.personaname}
					{JSON.stringify(user)}
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