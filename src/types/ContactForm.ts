export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export interface ContactFormError {
  status?: number;
  message: string;
  originalError?: any;
}
