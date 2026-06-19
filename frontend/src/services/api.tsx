import axios, { type AxiosResponse } from 'axios';

export default class APIService {
  private static readonly client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  static async submitQuestionnaire<D = FormData>(data: D): Promise<AxiosResponse<boolean>> {
    return this.client.post<string, AxiosResponse<boolean>, D>('/api/prediction', data);
  }
}
