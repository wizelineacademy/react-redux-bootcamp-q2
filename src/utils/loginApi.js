const mockedUser = {
	id: '123',
	username: 'Wizeline',
};

export default async function loginApi(username, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'wizeline' && password === 'Rocks!') {
				return resolve(mockedUser);
			}
			return reject(new Error('Username or password invalid'));
		}, 500);
	});
}

export const getUser = () => {
	return sessionStorage.getItem('user');
}