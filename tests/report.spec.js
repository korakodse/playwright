import { test, expect } from '@playwright/test';
test('reportatrisk@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/classrooms/7/student-atrisk', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 57a4fcb30e016e93efe9649fbd381954c228f6bce15c96d5b91855d15b7e8297",
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
      "Authorization": "Bearer 57a4fcb30e016e93efe9649fbd381954c228f6bce15c96d5b91855d15b7e8297",
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
      "Authorization": "Bearer 57a4fcb30e016e93efe9649fbd381954c228f6bce15c96d5b91855d15b7e8297",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);

});