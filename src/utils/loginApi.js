const mockedUser = {
	id: '123',
	username: 'Wizeline',
};

const juanUser = {
	id: '490',
	username: 'juan',
};

export default async function loginApi(username, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'wizeline' && password === 'Rocks!') {
				return resolve(mockedUser);
			}
			if (username === 'juan' && password === '1') {
				return resolve(juanUser);
			}
			return reject(new Error('Username or password invalid'));
		}, 500);
	});
}
