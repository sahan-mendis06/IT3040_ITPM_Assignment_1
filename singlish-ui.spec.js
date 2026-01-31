const { test, expect } = require('@playwright/test');

test.describe('Singlish to Sinhala Translator - UI Tests', () => {

  test('Pos_UI_0001 - Verify Sinhala output updates in real time', async ({ page }) => {

    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: /Singlish/i });

    // Type sentence slowly to observe real-time update
    await inputBox.type('api heta kathaa karamu', { delay: 150 });

    // Validate Sinhala output appears in real time
    await expect(page.locator('body')).toContainText('අපි හෙට කතා කරමු', { timeout: 15000 });

    console.log('Pos_UI_0001 Passed: Sinhala output updated automatically in real time');
  });

});
