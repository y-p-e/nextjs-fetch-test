import { fetcher } from "../../utils"

export type ApiContext = {
	apiRootUrl: string
}

export type User = {
	username: string,
	email: string,
}

const getUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getUsers