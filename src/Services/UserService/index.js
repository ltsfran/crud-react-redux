import axios from 'axios';

export class UserService {
  static get() {
    let data = axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
  }
}
