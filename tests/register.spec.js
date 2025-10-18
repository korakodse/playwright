import { test, expect } from '@playwright/test';
/**
* @type {string}
*/
test('register1.1@api', async ({ request }) => {
const response = await request.post('http://52.63.155.211/api/register', {
data: {
name:"Kaewta",
lastname: "Apple",
email: "kaewta.apple@example.com",
phone: "1234567890",
password: "password123",
password_confirmation: "password123",
department_id: 2,
role_id: 2,
faculty_id: 1
},
headers: { "Accept": "application/json" }
});
console.log('Status:', response.status());
const res = await response.json();
console.log('Response Data:', res);
});