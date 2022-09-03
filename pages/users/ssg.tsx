import type {
	GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

import getUsers, {ApiContext, User} from '../../services/users/get-users'

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>

const SSG: NextPage<UserPageProps> = ({users}: UserPageProps) => {
	return (
		<div>
			<h1>SSGによるユーザー一覧情報取得</h1>
			{users.map((user: User) => (
				<>
					<p>{`username: ${user.username}`}</p>
					<p>{`email: ${user.email}`}</p>
				</>
			))}
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {apiRootUrl: 'http://localhost:8080'}
	const users = await getUsers(context)

  return {
    props: {
      users,
    },
  }
}

export default SSG