import { test, expect } from '@playwright/test';
test('reportatrisk@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/classrooms/7/student-atrisk', {
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

test('reportweek@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/classrooms/7/weekly-attendance-summary', {
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

test('reportatten@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/classrooms/7/attendance-summary', {
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