import axios from 'axios';

export default function fetcher(url: string) {
  axios.get(url, { withCredentials: true }).then((response) => response.data);
}
