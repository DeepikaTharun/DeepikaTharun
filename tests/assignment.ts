import { test, expect, request} from '@playwright/test/'

test('Flipkart page to find locator',   async ({ page }) => {

    await page.goto('https://www.flipkart.com//');
    await page.getByText('ABOUT').click();
    await expect(page.getByText('ABOUT', { exact: true })).toBeVisible();
    await expect(page.getByText('Contact Us', { exact: true })).toBeVisible();
    await expect(page.getByText('About Us', { exact: true })).toBeVisible();
    await expect(page.getByText('Careers', { exact: true })).toBeVisible();
    await expect(page.getByText('Flipkart Stories', { exact: true })).toBeVisible();
    await expect(page.getByText('Press', { exact: true })).toBeVisible();
    await expect(page.getByText('Corporate Information', { exact: true })).toBeVisible();
   
 });
/*<div>
<div class="ykJuJZ">ABOUT</div>
<a href="/helpcentre?otracker=footer_navlinks" class="XnhcQm" aria-label="Contact Us">Contact Us</a>
<a href="https://corporate.flipkart.net/corporate-home" class="XnhcQm" aria-label="About Us">About Us</a>
<a href="https://www.flipkartcareers.com/?otracker=footer_navlinks" class="XnhcQm" aria-label="Careers">Careers</a>
<a href="http://stories.flipkart.com/?otracker=footer_navlinks" class="XnhcQm" aria-label="Flipkart Stories">Flipkart Stories</a>
<a href="http://stories.flipkart.com/category/top-stories/news/" class="XnhcQm" aria-label="Press">Press</a>
<a href="/corporate-information" class="XnhcQm" aria-label="Corporate Information">Corporate Information</a>
</div>*/
