import {test,expect} from "@playwright/test"
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
    <input required="" id="gender-radio-1" class="form-check-input" type="radio" value="Male" name="gender">