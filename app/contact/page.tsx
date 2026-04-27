export default function Contact() {
  return (
    <div className="container section">
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '20px' }}>연락처</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '50px', wordBreak: 'keep-all' }}>
          협업이나 프로젝트에 대해 논의하고 싶으신가요? 언제든지 편하게 연락해 주세요.
        </p>

        <form className="glass-panel" style={{ padding: '40px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>이름 (Name)</label>
            <input type="text" placeholder="이름을 입력하세요" style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'inherit'
            }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>이메일 (Email)</label>
            <input type="email" placeholder="your@email.com" style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'inherit'
            }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>메시지 (Message)</label>
            <textarea placeholder="문의 사항을 남겨주세요." rows={5} style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
              resize: 'vertical'
            }} />
          </div>
          <button type="button" className="btn-primary" style={{ marginTop: '10px', width: '100%' }}>
            메시지 보내기
          </button>
        </form>
        
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="#" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
          <span style={{ color: 'var(--glass-border)' }}>|</span>
          <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          <span style={{ color: 'var(--glass-border)' }}>|</span>
          <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
        </div>
      </div>
    </div>
  );
}
