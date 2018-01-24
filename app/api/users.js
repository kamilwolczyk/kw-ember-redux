export default class UsersApi {
  static async fetchUser() {
      return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        if (!response.ok) {
          return new Error("Http request failed");
        }

        return response;
      }).then(res => res.json()).then((data) => {
        return data.map(user => ({ firstName: user.name.split(' ')[0], lastName: user.name.split(' ')[1] }));
      });
  }
}