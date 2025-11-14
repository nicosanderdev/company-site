import apiClient from './AxiosClient';
import type { ContactFormData, ContactFormResponse, ContactFormError } from '../types/ContactForm';

const baseUrl = import.meta.env.VITE_SUPABASE_URL
    ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/`
    : 'http://localhost:54321/functions/v1/';

const ENDPOINTS = {
    CONTACT_FORM: '/contact-form-handler',
}

/**
 * Submit contact form data to the backend
 * @param formData - The contact form data
 * @returns Promise with the response
 */
const submitContactForm = async (formData: ContactFormData): Promise<ContactFormResponse> => {
    try {
        const result = await apiClient.post<ContactFormResponse>(baseUrl+ENDPOINTS.CONTACT_FORM, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`,
            }
        });

        if (!result.success) {}
        // TODO: Handle error
        
        return result;
    } catch (error : any) {
        console.error('Error fetching messages:', error.response?.data?.message || error.message);
        throw error;
    }
}

/**
 * Alternative method using the Axios client (if you prefer to use it instead of fetch)
 * @param formData - The contact form data
 * @returns Promise with the response
 */
const submitContactFormWithAxios = async (formData: ContactFormData): Promise<ContactFormResponse> => {
    try {
        const response = await apiClient.post<ContactFormResponse>(
            baseUrl+ENDPOINTS.CONTACT_FORM,
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

const contactService = {
    submitContactForm,
    submitContactFormWithAxios,
}

export default contactService;
