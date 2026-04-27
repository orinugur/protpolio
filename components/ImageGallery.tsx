'use client';

import { useState } from 'react';

interface ImageProps {
  images: { url: string; caption: string }[];
  projectTitle: string;
}

export default function ImageGallery({ images, projectTitle }: ImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent-color)' }}>스크린샷 및 데모 (Gallery)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <div 
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid var(--glass-border)',
                  cursor: 'zoom-in',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  width: '100%',
                  maxWidth: '900px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={`${projectTitle} screenshot ${idx + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    maxHeight: '700px',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ 
                background: 'var(--glass-bg)', 
                padding: '20px 30px', 
                borderRadius: '8px', 
                borderLeft: '4px solid var(--accent-color)',
                width: '100%',
                maxWidth: '900px'
              }}>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
            padding: '20px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Zoomed screenshot" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain',
              boxShadow: '0 10px 50px rgba(0,0,0,0.5)',
              borderRadius: '8px'
            }} 
          />
          <button 
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
