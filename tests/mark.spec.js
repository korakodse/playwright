import { test, expect } from '@playwright/test';
test('mark@api', async ({ request }) => {
     const response = await request.post('http://52.63.155.211/api/teacher/attendance/mark',
        {
            data:{"classroom_id": 7,"user_id": 1,"status": "late"},
            headers:{"Content-Type":"application/json",
                "Authorization": "Bearer d24bc75d036de6556e5b8583ffbf42475ffcf26affd7b51be204c2d9e6270f09",
            }   
        });

        expect(response.status()).toBeGreaterThanOrEqual(100);
        expect(response.status()).toBeLessThan(600);

        const res = await response.json();
        console.log('📩 Response Data:', res);
});