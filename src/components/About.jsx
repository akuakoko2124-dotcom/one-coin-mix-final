import React, { useState } from 'react';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <div className="card text-center">
                    <div className="mb-md">
                        <h2 style={{
                            color: 'var(--color-secondary)',
                            borderBottom: '2px solid var(--color-accent)',
                            display: 'inline-block',
                            paddingBottom: '0.5rem',
                            margin: 0,
                            fontSize: '1.8rem',
                            fontWeight: 'bold'
                        }}>
                            About Me
                        </h2>
                    </div>

                    <div style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
                        <div
                            onClick={toggleModal}
                            style={{
                                cursor: 'pointer',
                                display: 'inline-block',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.impact-btn').style.transform = 'translateY(-5px) scale(1.02)';
                                e.currentTarget.querySelector('.impact-btn').style.boxShadow = '0 15px 30px rgba(255, 127, 80, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.impact-btn').style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.querySelector('.impact-btn').style.boxShadow = '0 10px 20px rgba(255, 127, 80, 0.3)';
                            }}
                        >
                            <span
                                className="impact-btn"
                                style={{
                                    display: 'inline-block',
                                    color: '#fff',
                                    backgroundColor: 'var(--color-primary)',
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold',
                                    padding: '1rem 3rem',
                                    borderRadius: '50px',
                                    boxShadow: '0 10px 20px rgba(255, 127, 80, 0.3)',
                                    transition: 'all 0.3s ease',
                                    border: '4px solid #fff',
                                    outline: '2px solid var(--color-primary)'
                                }}
                            >
                                ONE COIN MIXとは？何者？
                            </span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <h3 style={{
                            color: 'var(--color-secondary)',
                            borderBottom: '2px solid var(--color-accent)',
                            display: 'inline-block',
                            paddingBottom: '0.5rem',
                            margin: 0,
                            fontSize: '1.8rem',
                            fontWeight: 'bold'
                        }}>
                            Portfolio
                        </h3>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                        marginBottom: '2rem'
                    }}>
                        <div style={{ flex: '1 1 300px', maxWidth: '480px' }}>
                            <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>ホゲホゲ / ホゲホゲ</p>
                            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Portfolio Video 1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 300px', maxWidth: '480px' }}>
                            <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>ホゲホゲ / ホゲホゲ</p>
                            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <iframe
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Portfolio Video 2"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                        <h3 style={{
                            color: 'var(--color-secondary)',
                            borderBottom: '2px solid var(--color-accent)',
                            display: 'inline-block',
                            paddingBottom: '0.5rem',
                            margin: 0,
                            fontSize: '1.8rem',
                            fontWeight: 'bold'
                        }}>
                            Business card
                        </h3>
                    </div>

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

                    {/* Modal */}
                    {isModalOpen && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1000
                            }}
                            onClick={toggleModal}
                        >
                            <div
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    maxWidth: '600px',
                                    width: '90%',
                                    position: 'relative',
                                    maxHeight: '90vh',
                                    overflowY: 'auto',
                                    textAlign: 'left'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={toggleModal}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        padding: '5px',
                                        color: '#333'
                                    }}
                                >
                                    ×
                                </button>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--color-secondary)', borderBottom: '2px solid var(--color-accent)', display: 'inline-block', paddingBottom: '5px' }}>
                                    ONE COIN MIXとは？何者？
                                </h3>
                                <p style={{ lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                                    私はもともとHip-Hopアーティストとして活動し、独学でMIXを磨いてきました。当時はお金もなく、パソコンの内蔵マイク一本で試行錯誤しながら録音していた苦労は、今でも私の原体験として根強く残っています。{'\n\n'}
                                    月日が流れ、機材や環境、そして技術も整ってきた今、「当時の自分と同じ悩みを持つ人の力になりたい」という想いで立ち上げたのが『ONECOINMIX』です。{'\n\n'}
                                    単なるMIX作業の提供にとどまらず、このご縁をきっかけに、皆さんが音楽に没頭していく楽しさを隣で共有していきたいと考えています。技術的なことはもちろん、「もっとこうしたい」という相談だけでも大歓迎です。音楽を愛する仲間として、まずは気軽にお話ししませんか？
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
