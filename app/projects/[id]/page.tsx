import { projectsData } from '@/data/projectsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ImageGallery from '@/components/ImageGallery';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="container section" style={{ maxWidth: '900px' }}>
      <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', marginBottom: '30px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        프로젝트 목록으로 돌아가기
      </Link>
      
      <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: 1.2 }}>{project.title}</h1>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
          {project.techStack.map(tech => (
            <span key={tech} style={{
              fontSize: '0.85rem',
              padding: '6px 14px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              border: '1px solid var(--glass-border)'
            }}>
              {tech}
            </span>
          ))}
        </div>
        
        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <img src={project.coverImage} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--accent-color)' }}>프로젝트 개요</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {project.description}
          </p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--accent-color)' }}>담당 역할</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            {project.role}
          </p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--accent-color)' }}>주요 기능 (Key Features)</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--accent-color)' }}>아키텍처 및 워크플로우</h2>
          <div style={{ 
            background: 'rgba(0,0,0,0.2)', 
            padding: '20px', 
            borderRadius: '8px', 
            borderLeft: '4px solid var(--accent-color)',
            fontFamily: 'monospace',
            color: '#e2e8f0',
            lineHeight: 1.6
          }}>
            {project.architecture.split(' -> ').map((step, idx, arr) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>{idx + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
        
        <ImageGallery images={project.images} projectTitle={project.title} />
      </div>
    </div>
  );
}
