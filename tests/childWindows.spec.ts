// Multiple tabs or windows - "popup" event - page.waitForEvent("popup")

// Step by step process to handle multiple tabs/windows using PW:

// 1. Launch the url = page.goto()
// 2. Wait for "popup" event to appear on the page without using "await"  
// - const page1 = page.waitForEvent("popup")
// 3. Identify and click on the element which is responsible for generation of "popup" event on the page.
// 4. We can store the final result of "popup" event in a variable.
// const newPage = await page1
// 5. Perform any action on the new tab/window, we must use "newPage" object
// 6. Come back to the main/original page   and perform any action by using "page" fixture

// promise - pending, success or rejected

import {test, expect} from '@playwright/test'


test("Handling multiple windows", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html", {
        waitUntil: "domcontentloaded",
        timeout: 60_000,
    })

    const page1 = page.waitForEvent("popup")

    await page.locator("#Tabbed button").click()
    const newPage = await page1

    await newPage.getByText("Downloads", {exact:true}).click()
})