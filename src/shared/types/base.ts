export interface BaseApiResponse {
  status: string;
  code: number;
  message: string;
}

export interface ApiResponse<T> extends BaseApiResponse {
  data: T;
}
