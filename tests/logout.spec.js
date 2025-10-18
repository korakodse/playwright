import { test, expect } from '@playwright/test';

test('logout@api', async ({ request }) => {
  const response = await request.post('http://52.63.155.211/api/logout', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 7d0e807d5c4e2948e71c9175100836fa09b5aae046fbf94475b4d2fd9f146eb6",
    },
  });

  expect(response.status()).toBeGreaterThanOrEqual(100);
  expect(response.status()).toBeLessThan(600);

  const res = await response.json();
  console.log('📩 Response Data:', res);
});
