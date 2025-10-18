import { test, expect } from '@playwright/test';
test('mark@api', async ({ request }) => {
     const response = await request.post('http://52.63.155.211/api/teacher/attendance/mark',
        {
            data:{"classroom_id": 7,"user_id": 1,"status": "late"},
            headers:{"Content-Type":"application/json",
                "Authorization": "Bearer e4414b919be3b63c721ecfc0e6c0638f4ebc5da3aaa22ae9b42c6f01a65b4ae8",
            }   
        });

        expect(response.status()).toBeGreaterThanOrEqual(100);
        expect(response.status()).toBeLessThan(600);

        const res = await response.json();
        console.log('📩 Response Data:', res);
});