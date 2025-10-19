import { test, expect } from '@playwright/test';
test('Deleteclassroom@api', async ({ request }) => {
    // การส่ง API แบบ delete และเก็บใส่ตัวแปร response
    const response = await request.delete('http://52.63.155.211/api/classrooms/23', {
            headers:{"Content-Type":"application/json",
                "Authorization": "Bearer d24bc75d036de6556e5b8583ffbf42475ffcf26affd7b51be204c2d9e6270f09",
            }   
        });
    
    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);
});