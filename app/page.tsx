import Link from 'next/link';

export default function Home() {
  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 180px)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '20px', letterSpacing: '2px' }} className="floating">
          HELLO, WORLD! I AM
        </h2>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '20px', lineHeight: 1.1, wordBreak: 'keep-all' }} className="title-glow">
          김민석
        </h1>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', marginBottom: '30px', wordBreak: 'keep-all' }}>
          <span className="text-gradient">LLM API Developer</span> & Agentic AI Specialist.
        </h3>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '50px', maxWidth: '600px', lineHeight: 1.8, wordBreak: 'keep-all' }}>
          대형 언어 모델(LLM)을 활용하여 지능적이고 자율적인 시스템을 구축합니다.
          CLI 코드 에이전트부터 자동화된 코드 리뷰 봇, 그리고 견고한 풀스택 애플리케이션까지 다양한 AI 기반 솔루션을 개발합니다.
        </p>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/projects" className="btn-primary">
            프로젝트 보기
          </Link>
          <Link href="/contact" className="btn-secondary">
            연락하기
          </Link>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(3,10,22,0) 70%)',
        borderRadius: '50%',
        zIndex: -1,
        filter: 'blur(40px)'
      }} className="floating"></div>
    </div>
  );
}
