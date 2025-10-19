import { test, expect } from '@playwright/test';
test.skip('Login@api', async ({ request }) => {
     const response = await request.post('http://52.63.155.211/api/login',
        {
            data:{"email": "pacth3@gmail.com","password": "123456789"},
            headers:{"Content-Type":"application/json"}   
        });

        expect(response.status()).toBeGreaterThanOrEqual(100);
        expect(response.status()).toBeLessThan(600);

        const res = await response.json();
        console.log('📩 Response Data:', res);
});

test.skip('LoginTeacher@api', async ({ request }) => {
     const response = await request.post('http://52.63.155.211/api/login',
        {
            data:{"email": "natthiwaneesarakhon@gmail.com","password": "123456789"},
            headers:{"Content-Type":"application/json"}   
        });

        expect(response.status()).toBeGreaterThanOrEqual(100);
        expect(response.status()).toBeLessThan(600);

        const res = await response.json();
        console.log('📩 Response Data:', res);
});

test.skip('Update Users@api', async ({ request }) => {
    // การส่ง API แบบ put และเก็บใส่ตัวแปร response
     const response = await request.post('http://52.63.155.211/api/profile/update-data',
        {
            data:{
            field: "name", 
            data:{"name": "ขิง","lastname": "นักเรียน"}
            },
            headers:{"Content-Type":"application/json",
                "Authorization": "Bearer e95e78070ee19c39da0b63e3c9d86e0f87c4f7f75dec348ebebb8eed16878917"
            }   
        });
        expect(response.status()).toBe(200)
        const res = await response.json();

        // ✅ แสดงข้อมูลที่ตอบกลับจาก API
        console.log('📩 Response Data:', res);
});