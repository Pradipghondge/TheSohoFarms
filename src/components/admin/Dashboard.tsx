"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lead } from '@/types';
import { LeadTable } from './LeadTable';

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchLeads = async () => {
      const res = await fetch('/api/admin/leads');
      if (res.ok) {
        const data = await res.json();
        setLeads(data.data);
      } else {
        router.push('/admin/login');
      }
    };
    fetchLeads();
  }, [router]);
  
  const handleLogout = async () => {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
  }
  
  const handleStatusChange = async (id: string, newStatus: string) => {
      const res = await fetch(`/api/admin/leads/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus }),
      });

      if(res.ok) {
          setLeads(leads.map(lead => lead._id === id ? { ...lead, status: newStatus as Lead['status'] } : lead));
      } else {
          alert('Failed to update status');
      }
  }

  const styles: { [key: string]: React.CSSProperties } = {
      container: { fontFamily: 'sans-serif', padding: '2rem' },
      header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <LeadTable leads={leads} onStatusChange={handleStatusChange} />
    </div>
  );
}
