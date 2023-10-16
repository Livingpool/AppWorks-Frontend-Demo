// import { useCookies } from "react-cookie";
import { useUser } from '@clerk/clerk-react'

import useSWRPost from '../useSWRPost'

export default () => {
	const { user } = useUser();

	console.log("Adding session...")
	console.log(user)

	const apiUrl = `http://localhost:3000/users/${user.id}/sessions`;

	const { trigger } = useSWRPost(apiUrl); // 發送 POST 請求

	return { trigger };
}
