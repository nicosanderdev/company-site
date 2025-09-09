import apiClient from './AxiosClient';
import type { ContactFormData, ContactFormResponse, ContactFormError } from '../types/ContactForm';

class ContactService {
  private readonly baseUrl: string;

  constructor() {
    // Use Supabase Edge Function URL for contact form submission
    this.baseUrl = import.meta.env.VITE_SUPABASE_URL 
      ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form-handler`
      : 'http://localhost:54321/functions/v1/contact-form-handler';
  }

  /**
   * Submit contact form data to the backend
   * @param formData - The contact form data
   * @returns Promise with the response
   */
  async submitContactForm(formData: ContactFormData): Promise<ContactFormResponse> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      const contactError: ContactFormError = {
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
        originalError: error,
      };
      throw contactError;
    }
  }

  /**
   * Alternative method using the Axios client (if you prefer to use it instead of fetch)
   * @param formData - The contact form data
   * @returns Promise with the response
   */
  async submitContactFormWithAxios(formData: ContactFormData): Promise<ContactFormResponse> {
    try {
      // Override the base URL for this specific call since it's a Supabase function
      const response = await apiClient.post<ContactFormResponse>(
        this.baseUrl,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`,
          },
        }
      );
      return response;
    } catch (error) {
      const contactError: ContactFormError = {
        status: (error as any)?.status,
        message: (error as any)?.message || 'An unexpected error occurred',
        originalError: error,
      };
      throw contactError;
    }
  }
}

// Export a singleton instance
export const contactService = new ContactService();
export default ContactService;
