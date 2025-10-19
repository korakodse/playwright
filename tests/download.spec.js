import { test, expect } from '@playwright/test';
import fs from 'fs';

test('reportatten@api', async ({ request }) => {
  const response = await request.get('http://52.63.155.211/classrooms/7/attendance-pdf/d24bc75d036de6556e5b8583ffbf42475ffcf26affd7b51be204c2d9e6270f09', {
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
  const response = await request.get('http://52.63.155.211/student/home-attendance-pdf/e95e78070ee19c39da0b63e3c9d86e0f87c4f7f75dec348ebebb8eed16878917', {
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