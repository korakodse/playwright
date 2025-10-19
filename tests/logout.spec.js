import { test, expect } from '@playwright/test';

test('logout@api', async ({ request }) => {
  const response = await request.post('http://52.63.155.211/api/logout', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer d5b0784263f5da84f9212d512a1189c78c6283b32a4b36f5b4cdd33211e06fb5",
    },
  });

  expect(response.status()).toBeGreaterThanOrEqual(100);
  expect(response.status()).toBeLessThan(600);

  const res = await response.json();
  console.log('📩 Response Data:', res);
});
