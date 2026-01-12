import React from 'react';

const About = () => {
    return (
        <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <div className="card text-center">
                    <h2 className="mb-md" style={{ color: 'var(--color-secondary)' }}>
                        About Me
                    </h2>
                    <p className="mb-md" style={{ textAlign: 'left', lineHeight: '1.8' }}>
                        普段音楽活動を行なっています。<br />
                        色々な音楽に触れ、様々な感性を基に一緒に作品を作りたく始めました！
                    </p>
                    <img
                        src="/assets/card.png"
                        alt="Business Card"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            margin: '24px auto',
                            borderRadius: '8px',
                            border: '1px solid #eee'
                        }}
                    />
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                        こちらは私の名刺になります！☝️
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
