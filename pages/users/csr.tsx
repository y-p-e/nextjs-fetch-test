/* eslint no-unused-vars: 0 */
import type {
  NextPage,
} from 'next'

import {User} from '../../services/users/get-users'
import useSWR from 'swr'
import { fetcher } from "../../utils"

const UserList = (props:any) => {
  return (
		<>
			<p>{`username: ${props.user.username}`}</p>
			<p>{`email: ${props.user.email}`}</p>
		</>
  );
}

const CSR: NextPage = () => {
	const {data, error, mutate} = useSWR<User[]>('/api/users/csr', fetcher, {shouldRetryOnError: false})
	const onClickUser = () => {
		mutate(data)
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
			<div>
			{	data.map((user: User, index: number) => (
				<UserList user={user} key={index}/>
				))
			}
			</div>
		</div>
	)
}

export default CSR