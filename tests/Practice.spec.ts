/*import {test,expect} from "@playwright/test"
test("Login page into the automation demo application", async({page}) => {
    //go to url
    await page.goto("https://demoqa.com/automation-practice-form");
    //validate the test is available in the launch page
    await page.getByText("Practice Form")
    await page.getByText("Student Registration Form")
    //enter the username in input field
    await page.getByRole('textbox', { name: 'First Name' }).fill('Adarsh')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Aarushi')
   //enter the email details
    //await page.getByRole('Email', { name : 'Email' }).fill('deepu123@gmail.com')
    await page.locator(':text-is("Email")')

    })
*/

import{test,expect} from "@playwright/test"
test.only("Handling the values from dropdown list" , async({page}) =>{
//go to url
await page.goto("https://demoqa.com/select-menu");
//selecting the first drop box option in  "Select Value"
const SelectValue = page.locator("#withOptGroup")
await SelectValue.click()
await page.getByRole('option', { name: 'A root option' }).click();
//Validate whether "Select One" has selected the option or not
await expect(SelectValue).toContainText("A root option")
//selecting the second drop box option in  "Select One"
const SelectOne = page.locator("#selectOne")
await SelectOne.click();
await page.getByRole('option', { name: 'Mrs.' }).click();
//Validate whether "Select One" has selected the option or not
await expect(SelectOne).toContainText("Mrs.")
})
