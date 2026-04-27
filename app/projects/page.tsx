import { projectsData } from '@/data/projectsData';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="container section">
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }} className="title-glow">프로젝트</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '50px', fontSize: '1.2rem', wordBreak: 'keep-all' }}>
        LLM 연동, Agentic AI, 그리고 풀스택 개발 분야에서의 최근 주요 작업물입니다.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {projectsData.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                {/* Fallback image style since Next.js Image component might need config */}
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundImage: `url(${project.coverImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease'
                }} className="card-img" />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>
                  {project.shortDescription}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} style={{
                      fontSize: '0.8rem',
                      padding: '4px 10px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: 'var(--accent-color)',
                      borderRadius: '20px',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span style={{ fontSize: '0.8rem', padding: '4px 10px', color: 'var(--text-secondary)' }}>
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .glass-card:hover .card-img {
          transform: scale(1.05);
        }
      `}} />
    </div>
  );
}
