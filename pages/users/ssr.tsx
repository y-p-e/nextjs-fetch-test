import type {
	GetServerSideProps,
	InferGetServerSidePropsType,
  NextPage,
} from 'next'

import getUsers, {ApiContext, User} from '../../services/users/get-users'

type UserPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const SSR: NextPage<UserPageProps> = ({users}: UserPageProps) => {
	return (
		<div>
			<h1>SSRによるユーザー一覧情報取得</h1>
			{users.map((user: User) => (
				<>
					<p>{`username: ${user.username}`}</p>
					<p>{`email: ${user.email}`}</p>
				</>
			))}
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
  const context: ApiContext = {apiRootUrl: 'http://localhost:8080'}
	const users = await getUsers(context)

  return {
    props: {
      users,
    },
  }
}

export default SSR