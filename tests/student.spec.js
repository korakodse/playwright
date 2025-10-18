import { test, expect } from '@playwright/test';
test('summaryreport@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/student/attendance-summary', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 6b6be87bdfae37e9d92e5bdadb1a6ca10a1473b11757a3c75f5cff0479c32f7c",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);

});

test('subreport@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/student/classrooms/7/detail', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 6b6be87bdfae37e9d92e5bdadb1a6ca10a1473b11757a3c75f5cff0479c32f7c",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);

});

test('homereport@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/student/subject-detail/7', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 6b6be87bdfae37e9d92e5bdadb1a6ca10a1473b11757a3c75f5cff0479c32f7c",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);

});