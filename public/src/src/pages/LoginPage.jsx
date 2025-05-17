import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const navigate = useNavigate();

        const handleLogin = () => {
            // Hardcoded credentials (as per requirements)
                const users = [
                      { email: 'admin@entnt.in', password: 'admin123', role: 'Admin' },
                            { email: 'inspector@entnt.in', password: 'inspect123', role: 'Inspector' },
                                  { email: 'engineer@entnt.in', password: 'engine123', role: 'Engineer' }
                                      ];
                                          
                                              const user = users.find(u => u.email === email && u.password === password);
                                                  if (user) {
                                                        localStorage.setItem('currentUser', JSON.stringify(user));
                                                              navigate('/dashboard');
                                                                  } else {
                                                                        alert('Invalid credentials!');
                                                                            }
                                                                              };

                                                                                return (
                                                                                    <div style={{ padding: '20px' }}>
                                                                                          <h1>Login</h1>
                                                                                                <input 
                                                                                                        type="email" 
                                                                                                                placeholder="Email" 
                                                                                                                        value={email}
                                                                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                                                                        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
                                                                                                                                              />
                                                                                                                                                    <input
                                                                                                                                                            type="password"
                                                                                                                                                                    placeholder="Password"
                                                                                                                                                                            value={password}
                                                                                                                                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                            style={{ display: 'block', margin: '10px 0', padding: '8px' }}
                                                                                                                                                                                                  />
                                                                                                                                                                                                        <button 
                                                                                                                                                                                                                onClick={handleLogin}
                                                                                                                                                                                                                        style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none' }}
                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                      Login
                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                  }