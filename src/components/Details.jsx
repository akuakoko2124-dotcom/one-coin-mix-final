import React from 'react';

const Details = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="card">
                    <h2 className="mb-md text-center" style={{ color: 'var(--color-secondary)' }}>
                        Service Details
                    </h2>

                    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div>
                            <h3 style={{ borderBottom: '2px solid var(--color-accent)', paddingBottom: '8px', marginBottom: '12px' }}>
                                💻 利用DAW・ソフト
                            </h3>
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                <li className="mb-sm">・Logic Pro X</li>
                                <li className="mb-sm">・Waves Plugins</li>
                                <li className="mb-sm">・iZotope RX / Ozone</li>
                                <li className="mb-sm">...and more!</li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ borderBottom: '2px solid var(--color-accent)', paddingBottom: '8px', marginBottom: '12px' }}>
                                🎧 好きなアーティスト
                            </h3>
                            <p>
                                様々なジャンルの音楽を聴いています。<br />
                                感性を活かしたミックスを提供します！
                            </p>
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: '24px' }}>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            ※詳細は固定ツイートもご確認ください
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
