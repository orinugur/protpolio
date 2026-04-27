export default function About() {
  return (
    <div className="container section">
      <h1 className="title-glow" style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>소개 (About Me)</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-color)', wordBreak: 'keep-all' }}>
            Agentic AI로 미래를 이끄는 개발자
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', wordBreak: 'keep-all' }}>
            LLM API 전문 개발자로서 강력한 언어 모델과 실무 애플리케이션 간의 격차를 해소하는 데 주력하고 있습니다. 특히 단순한 챗봇이 아닌, 복잡한 문제를 해결하기 위해 자율적으로 동작하는 "Agentic AI" 시스템 구축을 전문으로 합니다.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, wordBreak: 'keep-all' }}>
            자동화된 코드 리뷰 파이프라인 구축, 코드베이스를 이해하는 지능형 CLI 툴 개발, AI 워크플로우를 오케스트레이션하는 복잡한 풀스택 웹 애플리케이션 제작에 이르기까지, 기존 소프트웨어 엔지니어링과 최신 AI 기술에 대한 깊은 이해를 바탕으로 완성도 높은 서비스를 제공합니다.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--accent-color)' }}>
            핵심 역량 (Core Competencies)
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>LLM & AI</h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}>• Prompt Engineering</li>
                <li style={{ marginBottom: '8px' }}>• Function / Tool Calling</li>
                <li style={{ marginBottom: '8px' }}>• Streaming Architecture</li>
                <li style={{ marginBottom: '8px' }}>• RAG Systems</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Frontend</h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}>• Next.js / React</li>
                <li style={{ marginBottom: '8px' }}>• TypeScript</li>
                <li style={{ marginBottom: '8px' }}>• TailwindCSS / Vanilla CSS</li>
                <li style={{ marginBottom: '8px' }}>• Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Backend & Tools</h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}>• Node.js / Python</li>
                <li style={{ marginBottom: '8px' }}>• CLI Tooling</li>
                <li style={{ marginBottom: '8px' }}>• VS Code Extension API</li>
                <li style={{ marginBottom: '8px' }}>• CI/CD & Webhooks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
