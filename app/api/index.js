export default class Api {
  fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          userId: '123123123',
          userName: 'Kamil Wolczyk'
        });
      }, 1000);
    });
  }
}