import { test, expect } from '@playwright/test';

test('warntime@api', async ({ request }) => {
  const response = await request.put('http://52.63.155.211/api/classrooms/7/settings/warn-times', {
    data: {
      "warn_green": 20,
      "warn_red": 10
    },
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

test('changename@api', async ({ request }) => {
  const response = await request.put('http://52.63.155.211/api/classrooms/7/subject', {
    data: {
      "name_subject": "Math",
    },
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

test('holiday@api', async ({ request }) => {
  const response = await request.put('http://52.63.155.211/api/classrooms/7/settings/holidays', {
    data: {
        "holidays": [
            "2025-12-25",
            "2026-01-01",
            "2026-04-13"
        ]
    },
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

test('status@api', async ({ request }) => {
  const response = await request.put('http://52.63.155.211/api/classrooms/7/settings/status', {
    data: {
        "status": "1"
    },
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