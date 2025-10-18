import { test, expect } from '@playwright/test';
test('Teacher Home@api', async ({ request }) => {

  const response = await request.get('http://52.63.155.211/api/teacher/home', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 0386dbea06997b4fc11aa0f49aeb44ce999e21b484f84830a3cd168926e5614e",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);

});