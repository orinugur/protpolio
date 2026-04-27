export default function Footer() {
  return (
    <footer style={{
      padding: '40px 0',
      marginTop: '100px',
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <p>© {new Date().getFullYear()} 김민석. All rights reserved.</p>
        <p style={{ marginTop: '10px' }}>LLM API Developer & Agentic AI Specialist</p>
      </div>
    </footer>
  );
}
