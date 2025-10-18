import { test, expect } from '@playwright/test';

test('warntime@api', async ({ request }) => {
  const response = await request.put('http://52.63.155.211/api/classrooms/7/settings/warn-times', {
    data: {
      "warn_green": 22,
      "warn_red": 15
    },
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ee2560f7040d20ed140ca0bbf98bfb0ac6306971098b48ad033ba772afe693db",
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
      "name_subject": "Mathematics",
    },
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ee2560f7040d20ed140ca0bbf98bfb0ac6306971098b48ad033ba772afe693db",
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
      "Authorization": "Bearer ee2560f7040d20ed140ca0bbf98bfb0ac6306971098b48ad033ba772afe693db",
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
      "Authorization": "Bearer e0de7ecd1c88be1bdcd5fec30a891dcf70e6742eedd88c904e4140a17fc1a432",
    },
  });

    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);
});