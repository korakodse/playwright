import { test, expect } from '@playwright/test';

test('notifications@api', async ({ request }) => {
  const response = await request.post('http://52.63.155.211/api/test-send-noti', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_TOKEN", // ใช้ token ของ teacher/admin
    },
    data: {
      // ถ้าต้องการ set เวลา mock สำหรับทดสอบ
      "mock_time": "2025-10-17T08:00:00+07:00"
    }
  });

  expect(response.status()).toBe(200);

  const res = await response.json();
  console.log('📩 Notifications result:', res);

  // ตัวอย่าง assertion
  expect(res).toHaveProperty('sent');          // มี key sent = จำนวน noti ที่ส่ง
  expect(res).toHaveProperty('warnings');      // มี key warnings = จำนวนเรคคอร์ด warnings ที่ insert
  expect(res.sent).toBeGreaterThanOrEqual(0);  // ส่งได้ 0 ขึ้นไป
});