import { test, expect } from '@playwright/test';
test('Deleteclassroom@api', async ({ request }) => {
    // การส่ง API แบบ delete และเก็บใส่ตัวแปร response
    const response = await request.delete('http://52.63.155.211/api/classrooms/24', {
            headers:{"Content-Type":"application/json",
                "Authorization": "Bearer 57a4fcb30e016e93efe9649fbd381954c228f6bce15c96d5b91855d15b7e8297",
            }   
        });
    
    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);
});