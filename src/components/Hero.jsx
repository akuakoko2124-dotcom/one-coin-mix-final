import React from 'react';

const Hero = () => {
    return (
        <div className="section text-center">
            <div className="container">
                <div className="mb-lg animate-float">
                    <img
                        src="/assets/logo.png"
                        alt="ONE COIN MIX Logo"
                        style={{
                            maxWidth: '280px',
                            width: '100%',
                            margin: '0 auto',
                        }}
                    />
                </div>

                <h1 style={{
                    fontSize: '2.5rem',
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--spacing-md)',
                    lineHeight: '1.2'
                }}>
                    ONE COIN MIX
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text)',
                    fontWeight: 'bold'
                }}>
                    🎙ボーカルMIX 500円から承ります🎙
                </p>
            </div>
        </div>
    );
};

export default Hero;
