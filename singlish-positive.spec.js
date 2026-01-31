const { test, expect } = require('@playwright/test');

const testCases = [
  { id: 'Pos_Fun_0001', singlish: 'Oyaata kohomadha dhaen?', sinhala: 'ඔයාට කොහොමද දැන්?' },
  { id: 'Pos_Fun_0002', singlish: 'mama gamee yanavaa', sinhala: 'මම ගමේ යනවා' },
  { id: 'Pos_Fun_0003', singlish: 'api heta chaarikaavak yamu', sinhala: 'අපි හෙට චාරිකාවක් යමු' },

  { id: 'Pos_Fun_0004', singlish: 'oyaa eeka hariyata kiyavalaa', sinhala: 'ඔයා ඒක හරියට කියවලා' },
  { id: 'Pos_Fun_0005', singlish: 'mama ehema karanne naehae', sinhala: 'මම එහෙම කරන්නේ නැහැ' },
  { id: 'Pos_Fun_0006', singlish: 'oyaata podi udhavvak karanna puLuvandha?', sinhala: 'ඔයාට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },

  { id: 'Pos_Fun_0007', singlish: 'api kaeema kanna yanavaa inpasse passe movie balamu', sinhala: 'අපි කෑම කන්න යනවා ඉන්පස්සෙ පස්සෙ movie බලමු' },
  { id: 'Pos_Fun_0008', singlish: 'oya enavaanam mama innavaa', sinhala: 'ඔය එනවානම් මම ඉන්නවා' },
  { id: 'Pos_Fun_0009', singlish: 'hari hari hodhatama vaeda karala thiyenavaa', sinhala: 'හරි හරි හොදටම වැඩ කරල තියෙනවා' },

  { id: 'Pos_Fun_0010', singlish: 'mama iiyee office giyaa', sinhala: 'මම ඊයේ office ගියා' },
  { id: 'Pos_Fun_0011', singlish: 'api dhaen kaeema kanavaa', sinhala: 'අපි දැන් කෑම කනවා' },
  { id: 'Pos_Fun_0012', singlish: 'oyaalata eeka therenne naehae', sinhala: 'ඔයාලට ඒක තෙරෙන්නෙ නැහැ' },

  { id: 'Pos_Fun_0013', singlish: 'karuNaakara eeka dhenna', sinhala: 'කරුණාකර ඒක දෙන්න' },
  { id: 'Pos_Fun_0014', singlish: 'mata WiFi password eka evanna', sinhala: 'මට WiFi password එක එවන්න' },
  { id: 'Pos_Fun_0015', singlish: 'api meeting eka Zoom valin karamu', sinhala: 'අපි meeting එක Zoom වලින් කරමු' },

  { id: 'Pos_Fun_0016', singlish: 'oyaa colombo yanna hadhanne kavurun kii nisaadha?', sinhala: 'ඔයා colombo යන්න හදන්නෙ කවුරුන් කී නිසාද?' },
  { id: 'Pos_Fun_0017', singlish: 'Rs. 2500 k mata gevanna thiyenavaa', sinhala: 'Rs. 2500 ක් මට ගෙවන්න තියෙනවා' },
  { id: 'Pos_Fun_0018', singlish: '7.30 AM venakota api yamu', sinhala: '7.30 AM වෙනකොට අපි යමු' },

  { id: 'Pos_Fun_0019', singlish: '2026-01-30 thamayi mata exam eka liyanna velaa thiyenne.', sinhala: '2026-01-30 තමයි මට exam එක ලියන්න වෙලා තියෙන්නෙ.' },
  { id: 'Pos_Fun_0020', singlish: 'mamagedharayanavaa', sinhala: 'මමගෙදරයනවා' },
  { id: 'Pos_Fun_0021', singlish: 'mama gedhara yanavaa. oyaa enavadha naedhdha?', sinhala: 'මම ගෙදර යනවා. ඔයා එනවද නැද්ද?' },

  { id: 'Pos_Fun_0022', singlish: 'ela machan eekanam siraama vaedak', sinhala: 'එල මචන් ඒකනම් සිරාම වැඩක්' },
  { id: 'Pos_Fun_0023', singlish: 'mama phone ekata App ekak download karaa', sinhala: 'මම phone එකට App එකක් download කරා' },
  { id: 'Pos_Fun_0024', singlish: 'mama iiyee office giyaa. Office yanna pitath vuNaata passee mage gaman maargaya puraama bara traffic ekak thibba nisaa niyamitha veelaavata ethaenata LaGAaa venna baeri vuNaa. ee heethuva nisaa mama managerta call karalaa thathvaya paehaedhili karalaa kiyalaa dhiilaa, adha vaedata enna baeri bavath dhaenum dhunnaa. eekata manager mata heta dhinayee vaedata paemiNenna kiyalaa upadhes dhunnaa', sinhala: 'මම ඊයේ office ගියා. Office යන්න පිටත් වුණාට පස්සේ mage ගමන් මාර්ගය පුරාම බර traffic එකක් තිබ්බ නිසා නියමිත වේලාවට එතැනට ළඟාඅ වෙන්න බැරි වුණා. ඒ හේතුව නිසා මම මනගෙර්ට call කරලා තත්වය පැහැදිලි කරලා කියලා දීලා, අද වැඩට එන්න බැරි බවත් දැනුම් දුන්නා. ඒකට manager මට හෙට දිනයේ වැඩට පැමිණෙන්න කියලා උපදෙස් දුන්නා' }
];

test.describe('Singlish to Sinhala Translator - Positive Functional Tests', () => {
  for (const data of testCases) {
    test(`${data.id} - Verify translation`, async ({ page }) => {

      await page.goto('https://www.swifttranslator.com/');

      const inputBox = page.getByRole('textbox', { name: /Singlish/i });
      await inputBox.fill(data.singlish);

      // Validate Sinhala output appears
      await expect(page.locator('body')).toContainText(data.sinhala, { timeout: 15000 });

      console.log(`${data.id} Passed: ${data.singlish} → ${data.sinhala}`);
    });
  }
});
