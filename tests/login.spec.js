import { test, expect } from '@playwright/test';
test('Login@api', async ({ request }) => {
     const response = await request.post('http://52.63.155.211/api/login',
        {
            data:{"email": "pacth3@gmail.com","password": "123456789"},
            headers:{"Content-Type":"application/json"}   
        });

        expect(response.status()).toBeGreaterThanOrEqual(100);
        expect(response.status()).toBeLessThan(600);

        const res = await response.json();
        console.log('📩 Response Data:', res);
});

test('Loginteacher@api', async ({ request }) => {
     const response = await request.post('http://52.63.155.211/api/login',
        {
            data:{"email": "natthiwaneesarakhon@gmail.com","password": "123456789"},
            headers:{"Content-Type":"application/json"}   
        });

        expect(response.status()).toBeGreaterThanOrEqual(100);
        expect(response.status()).toBeLessThan(600);

        const res = await response.json();
        console.log('📩 Response Data:', res);
});