import { test, expect } from '@playwright/test';
test('reportatrisk@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/classrooms/7/student-atrisk', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer d24bc75d036de6556e5b8583ffbf42475ffcf26affd7b51be204c2d9e6270f09",
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
      "Authorization": "Bearer d24bc75d036de6556e5b8583ffbf42475ffcf26affd7b51be204c2d9e6270f09",
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
      "Authorization": "Bearer d24bc75d036de6556e5b8583ffbf42475ffcf26affd7b51be204c2d9e6270f09",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);

});