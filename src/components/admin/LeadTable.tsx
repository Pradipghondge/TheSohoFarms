"use client";

import { Lead } from "@/types";

interface LeadTableProps {
  leads: Lead[];
  onStatusChange: (id: string, newStatus: string) => Promise<void>;
}

export function LeadTable({ leads, onStatusChange }: LeadTableProps) {
  const styles: { [key: string]: React.CSSProperties } = {
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '2rem' },
    th: { border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' },
    td: { border: '1px solid #ddd', padding: '8px' },
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Phone</th>
          <th style={styles.th}>Type</th>
          <th style={styles.th}>Date</th>
          <th style={styles.th}>Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>
            <td style={styles.td}>{lead.name}</td>
            <td style={styles.td}>{lead.email}</td>
            <td style={styles.td}>{lead.phone}</td>
            <td style={styles.td}>{lead.type}</td>
            <td style={styles.td}>{new Date(lead.createdAt).toLocaleDateString()}</td>
            <td style={styles.td}>
              <select 
                  value={lead.status}
                  onChange={(e) => onStatusChange(lead._id, e.target.value)}
              >
                  <option value="Pipeline">Pipeline</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Closed">Closed</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
