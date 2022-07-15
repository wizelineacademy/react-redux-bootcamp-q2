const baseUrl = 'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api';

const request = ({ resource, id = '', method = 'GET' }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${baseUrl}/${resource}/${id}`, {
        method,
        headers: {
          'x-api-key': '4V7m4uHsEuavdZYr7kFQo5oadhtB1uw94fSoIqiU',
        },
      });
      const json = await response.json();
      if (!response.ok) {
        reject(json.errorMessage);
      }
      resolve(json);
    } catch (error) {
      reject(error.message);
    }
  });
};

export const getProducts = () => {
  return request({
    resource: 'products',
  });
};

export const getProduct = (id) => {
  return request({
    resource: 'products',
    id,
  });
};

export const postOrder = () => {
  return request({
    resource: 'orders',
    method: 'POST',
  });
};
