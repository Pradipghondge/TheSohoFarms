export type Pair = [string, string];

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  type: 'enquiry' | 'site-visit';
  status: 'Pipeline' | 'Contacted' | 'Closed';
  createdAt: string;
  isAgent?: boolean;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  isAgent: boolean;
}

export interface FormState {
  submitting: boolean;
  error: string;
  success: boolean;
}
