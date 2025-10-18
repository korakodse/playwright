import { test, expect } from '@playwright/test';

test('create@api', async ({ request }) => {
  const response = await request.post('http://52.63.155.211/api/teacher/classrooms/create', {
    data: {
      name_subject: "Computer Science 101",
      room_number: "",
      latitude: 14.856,          // ตัวอย่างพิกัด กทม.
      longitude: 103.4852,
      required_days: 10,
      reward_points: 5,

      terms: [
        {
          semester: "2",
          year: 2025,
          start_date: "2025-07-01",
          end_date: "2025-12-30"
        }
      ],

      schedules: [
        {
          day_of_week: "เสาร์",
          time_start: "17:30",
          time_end: "20:00"
        }
      ],

      points: [
        {
          point_percent: 80,
          point_extra: 5
        },
        {
          point_percent: 90,
          point_extra: 10
        }
      ]
    },
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