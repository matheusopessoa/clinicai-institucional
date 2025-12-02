import { z } from 'zod';

// API Configuration
const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';

// API Client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `HTTP ${response.status}`);
    }

    return response.json();
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient(SERVER_URL);

// Types and Schemas
export const businessTypeOptions = [
  { value: 'clinic', label: 'Clínica' },
  { value: 'consulting_room', label: 'Consultório' },
  { value: 'hospital', label: 'Hospital' },
  { value: 'other', label: 'Outro' },
] as const;

export const clinicInfoSchema = z.object({
  business_name: z.string().min(2, 'Nome fantasia deve ter pelo menos 2 caracteres'),
  business_type: z.enum(['clinic', 'consulting_room', 'hospital', 'other'], {
    required_error: 'Tipo de negócio é obrigatório',
  }),
  specialty: z.string().optional(),
  number_of_employees: z.number().min(1, 'Deve ter pelo menos 1 funcionário').optional(),
});

export const personalInfoSchema = z.object({
  full_name: z.string().min(2, 'Nome completo deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone_number_id: z.string().min(10, 'Telefone é obrigatório'),
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Senha deve conter pelo menos uma letra minúscula, uma maiúscula e um número'),
});

export const registrationSchema = clinicInfoSchema.merge(personalInfoSchema);

export type ClinicInfo = z.infer<typeof clinicInfoSchema>;
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type RegistrationData = z.infer<typeof registrationSchema>;

// API Functions
export const registerUser = async (data: RegistrationData) => {
  return apiClient.post<{
    success: boolean;
    message: string;
    user: {
      id: number;
      userSlug: string;
      businessName: string;
      email: string;
      lastLogin: Date | null;
    };
  }>('/api/auth/register', {
    business_name: data.business_name,
    email: data.email.toLowerCase(),
    password: data.password,
    business_type: data.business_type,
    full_name: data.full_name,
    specialty: data.specialty,
    number_of_employees: data.number_of_employees,
    phone_number_id: data.phone_number_id,
  });
};

// Utility function to format phone number (Brazilian format)
export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length <= 11) {
    if (cleaned.length <= 2) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else if (cleaned.length <= 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    } else {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
  }

  return value;
};

// Email verification functions
export const verifyEmailCode = async (code: string) => {
  return apiClient.post<{
    success: boolean;
    message: string;
    user: {
      id: number;
      email: string;
      businessName: string;
    };
  }>('/api/auth/verify-email', { code });
};

export const resendVerificationCode = async (email: string) => {
  return apiClient.post<{
    success: boolean;
    message: string;
  }>('/api/auth/resend-verification', { email });
};
