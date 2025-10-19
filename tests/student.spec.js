import { test, expect } from '@playwright/test';
test('summaryreport@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/api/student/attendance-summary', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer e95e78070ee19c39da0b63e3c9d86e0f87c4f7f75dec348ebebb8eed16878917",
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
      "Authorization": "Bearer e95e78070ee19c39da0b63e3c9d86e0f87c4f7f75dec348ebebb8eed16878917",
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
      "Authorization": "Bearer e95e78070ee19c39da0b63e3c9d86e0f87c4f7f75dec348ebebb8eed16878917",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);

});