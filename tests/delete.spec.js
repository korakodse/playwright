import { test, expect } from '@playwright/test';
test('Deleteclassroom@api', async ({ request }) => {
    // การส่ง API แบบ delete และเก็บใส่ตัวแปร response
    const response = await request.delete('http://52.63.155.211/api/classrooms/23', {
            headers:{"Content-Type":"application/json",
                "Authorization": "Bearer d5b0784263f5da84f9212d512a1189c78c6283b32a4b36f5b4cdd33211e06fb5",
            }   
        });
    
    expect(response.status()).toBeGreaterThanOrEqual(100);
    expect(response.status()).toBeLessThan(600);

    const res = await response.json();
    console.log('📩 Response Data:', res);
});