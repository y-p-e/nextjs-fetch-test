import type {
  NextPage,
} from 'next'

import {User} from '../../services/users/get-users'
import useSWR from 'swr'
import { fetcher } from "../../utils"


const CSR: NextPage = () => {
	const {data, error, mutate} = useSWR<User[]>('http://localhost:8080/users', fetcher, {shouldRetryOnError: false})
	console.log(data)
	const onClickUser = () => {
		mutate(data, false)
	}

	if (data === undefined) {
		return (
			<div>
				<h1>CSRによるユーザー一覧情報取得</h1>
				<button onClick={onClickUser}>ユーザー情報取得</button>
			</div>
		)
	}
	
	return (
		<div>
			<h1>CSRによるユーザー一覧情報取得</h1>
			<button onClick={onClickUser}>ユーザー情報取得</button>
			{	data.map((user: User) => (
					<>
						<p>{`username: ${user.username}`}</p>
						<p>{`email: ${user.email}`}</p>
					</>
				))
			}
		</div>
	)
}

export default CSR