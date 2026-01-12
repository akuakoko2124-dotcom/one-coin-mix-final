import React from 'react';

const Contact = () => {
    return (
        <div className="section text-center" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h2 className="mb-lg" style={{ color: 'var(--color-primary)' }}>
                    Let's Create Together!
                </h2>

                <p className="mb-lg" style={{ fontSize: '1.1rem' }}>
                    一緒に楽しみましょう！<br />
                    お気軽にDM/リプください📩
                </p>

                <a
                    href="https://x.com/onecoinmix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                    <span>@onecoinmix</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                </a>

                <div style={{ marginTop: '48px', padding: '24px', borderTop: '1px solid #ddd' }}>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                        © {new Date().getFullYear()} ONE COIN MIX. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
