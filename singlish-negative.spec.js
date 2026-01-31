const { test, expect } = require('@playwright/test');

const negativeTestCases = [
  // Symbols inside sentence
  { id: 'Neg_Fun_0001', singlish: 'mama $$ office yanavaa', wrongSinhala: 'මම office යනවා' },

  // Heavy typos
  { id: 'Neg_Fun_0002', singlish: 'oy@a k0hom@da inn3?', wrongSinhala: 'ඔයා කොහොමද ඉන්නේ?' },

  // Incomplete / shortened words
  { id: 'Neg_Fun_0003', singlish: 'api skl ynv', wrongSinhala: 'අපි ස්කෝලෙ යනවා' },

  // Repeated characters
  { id: 'Neg_Fun_0004', singlish: 'elaaaa machannnn ekennma supiriii vaedak aaaaa', wrongSinhala: 'එල මචන් ඒකනම් සුපිරි වැඩක් ආ' },

  // Only spaces
  { id: 'Neg_Fun_0005', singlish: 'Dr. Perera ge gedhara yanavaa 8 a.m', wrongSinhala: 'Dr. පෙරේර ගෙ ගෙදර යනවා 8 a.m' },

  // Numbers only
  { id: 'Neg_Fun_0006', singlish: '987ehemath6543ekak4dha210', wrongSinhala: 'එහෙමත් එකක්ද' },

  // Special characters only
  { id: 'Neg_Fun_0007', singlish: 'pan but can man', wrongSinhala: 'පන් බට් කන් මන්' },

  // Emoji mixed with text
  { id: 'Neg_Fun_0008', singlish: 'heta trip yamu 😎🚗', wrongSinhala: 'හෙට trip යමු' },

  // Abnormal spacing
  { id: 'Neg_Fun_0009', singlish: 'MaMa GEdhara YAnaVAA', wrongSinhala: 'මම ගෙදර යනවා' },

  // Mixed garbage input
  { id: 'Neg_Fun_0010', singlish: 'meeting eka $$$ 2026 ta@@ gamuu', wrongSinhala: 'meeting එක 2026 යමු' }
];

test.describe('Singlish to Sinhala Translator - Negative Functional Tests', () => {
  for (const data of negativeTestCases) {
    test(`${data.id} - Verify incorrect handling`, async ({ page }) => {

      await page.goto('https://www.swifttranslator.com/');

      const inputBox = page.getByRole('textbox', { name: /Singlish/i });
      await inputBox.fill(data.singlish);

      // wait for real-time conversion
      await page.waitForTimeout(500);

      // Validate that a correct Sinhala sentence is NOT produced
      await expect(page.locator('body')).not.toContainText(data.wrongSinhala, { timeout: 15000 });

      console.log(`${data.id} Passed (Negative): Invalid input not correctly translated`);
    });
  }
});
