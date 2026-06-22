import {test, expect} from '@playwright/test'

test("Shadow dom elements", async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/")
    await page.locator("#pizza").fill("Shadow dom")
    await expect(page.locator("#pizza")).toHaveValue("Shadow dom")
    await page.waitForTimeout(2000)
})