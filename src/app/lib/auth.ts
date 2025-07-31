
export function mockLogin(username: string, password: string): string | null {
    // Simula autenticación
    if (username === 'john' && password === '1234abcd') {
      // Token simulado tipo JWT
      return JSON.stringify({
        token: 'mock-token',
        username,
        exp: Date.now() + 60 * 60 * 1000 // 1h
      });
    }
    return null;
  }
  
  export function mockLogout() {
    localStorage.removeItem('auth');
  }
  
  export function isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    const auth = localStorage.getItem('auth');
    if (!auth) return false;
    try {
      const { exp } = JSON.parse(auth);
      return Date.now() < exp;
    } catch {
      return false;
    }
  }
  
  export function getUser(): string | null {
    if (!isAuthenticated()) return null;
    const auth = localStorage.getItem('auth');
    if (!auth) return null;
    return JSON.parse(auth).username;
  }
  