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
test("Handling the values from dropdown list" , async({page}) =>{
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
//Selecting the oldSelectMenu drop down list
const ColorsDropdownlist = page.locator("#oldSelectMenu")
await ColorsDropdownlist.selectOption({value:"3"})
await expect(ColorsDropdownlist).toHaveValue("3")
//Selecting the Multi style drop down list
await page.locator("#react-select-4-input").click();
await page.locator("#react-select-4-input").fill("Green")
await page.keyboard.press('Enter')
await page.locator("#react-select-4-input").fill("Black")
await page.keyboard.press('Enter')
await page.locator("#react-select-4-input").fill("Blue")
await page.keyboard.press('Enter')
await expect(page.locator('[class*="multiValue"]')).toContainText(['Green','Black','Blue'])
})

test("Handling double click and right click", async({page}) => {
await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
await page.getByText("Double-Click Me To See Alert").dblclick();
await page.getByText("right click me").dblclick();
await page.waitForTimeout(3000)
})

test("Handling the mouse over options",async({page})=>{
await page.goto("https://www.spicejet.com/")
await page.getByText("Add-ons" , {exact:true}).hover()
await expect(page.getByTestId("test-id-SpiceMax")).toHaveText("SpiceMax")

})
test("Handling scrolling down the page",async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByText("Download Files",{exact:true}).click()
await page.locator("#inputText").fill("testing")
await page.locator("#inputText").fill("scroll up")
await expect(page.locator("#inputText")).toHaveValue("scroll up")
})