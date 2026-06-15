"use client";

import { useState } from "react";
import { FormData, FormState } from "@/types";

interface NotchedCardFormProps {
  title: string;
  type: 'enquiry' | 'site-visit';
}

export function NotchedCardForm({ title, type }: NotchedCardFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    isAgent: false,
  });
  const [formState, setFormState] = useState<FormState>({
    submitting: false,
    error: '',
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type: inputType, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ submitting: true, error: '', success: false });

    const payload = {
      ...formData,
      type,
    };

    try {
      const res = await fetch('/api/public/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setFormState({ submitting: false, error: '', success: true });
        setFormData({ name: '', email: '', phone: '', isAgent: false });
      } else {
        setFormState({ submitting: false, error: data.message || 'Submission failed.', success: false });
      }
    } catch (error) {
      setFormState({ submitting: false, error: 'An unexpected error occurred.', success: false });
    }
  };

  return (
    <div className="register-form-card-wrapper" data-reveal>
      <div className="register-form-card">
        <img src="/creatives/bird.webp" alt="Hummingbird" className="hummingbird-img" />
        <h3>{title}</h3>
        {formState.success ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h4>Thank You!</h4>
            <p>Your submission has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required/>
            <input name="phone" type="tel" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required/>
            <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required/>
            <label className="checkbox-label">
              <input name="isAgent" type="checkbox" checked={formData.isAgent} onChange={handleChange} />
              <span>I am a real estate agent</span>
            </label>
            <button type="submit" className="cta-button btn-gold" disabled={formState.submitting}>
              {formState.submitting ? 'Submitting...' : 'Register Now'}
            </button>
            {formState.error && <p style={{ color: 'red', marginTop: '1rem' }}>{formState.error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
