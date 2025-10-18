import { test, expect } from '@playwright/test';
import fs from 'fs';

test('reportatten@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/classrooms/7/attendance-pdf/0386dbea06997b4fc11aa0f49aeb44ce999e21b484f84830a3cd168926e5614e', {
    headers: {
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(200);

  // ตรวจสอบ content-type
  expect(response.headers()['content-type']).toContain('application/pdf');

  // ดาวน์โหลด PDF ไปยังไฟล์เพื่อเช็กขนาด/เปิดดู
  const buffer = await response.body();
  expect(buffer.byteLength).toBeGreaterThan(0);

  fs.writeFileSync('at-risk_report_test.pdf', buffer);
  console.log('✅ PDF saved as at-risk_report_test.pdf, size:', buffer.byteLength);

});

test('homedownload@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/student/home-attendance-pdf/2f01e963a7a3e593fad8b3842c640b1ebb4e80197984b01030fdc337d6aff8bb', {
    headers: {
      "Content-Type": "application/json",
    },
  });

    expect(response.status()).toBe(200);

  // ตรวจสอบ content-type
  expect(response.headers()['content-type']).toContain('application/pdf');

  // ดาวน์โหลด PDF ไปยังไฟล์เพื่อเช็กขนาด/เปิดดู
  const buffer = await response.body();
  expect(buffer.byteLength).toBeGreaterThan(0);

  fs.writeFileSync('homeStudent.pdf', buffer);
  console.log('✅ PDF saved as homeStudent.pdf, size:', buffer.byteLength);

});