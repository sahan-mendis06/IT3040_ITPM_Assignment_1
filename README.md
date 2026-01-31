# IT3040_ITPM_Assignment_1

Automated test cases for the **Singlish to Sinhala Translator** using **Playwright**.  
This project is created for **ITPM Assignment 1**.

---

##  Project Description

This project automates the testing of the Singlish to Sinhala Translator web application  
(https://www.swifttranslator.com/) using Playwright.

The following test types are included:

-  Positive Functional Test Cases  
-  Negative Functional Test Cases  
-  UI Functional Test Cases  

---

##  Test Scenarios Covered

### Positive Functional Tests
- Valid Singlish sentences are correctly translated to Sinhala.
- Supports numbers, dates, and mixed words.
- Supports long and short sentences.

### Negative Functional Tests
- Handles invalid inputs (symbols, emojis, mixed garbage text).
- Handles mixed English and Singlish words.
- Handles incorrect casing and formatting.
- Ensures incorrect translations are not accepted as valid.

### UI Tests
- Verifies real-time Sinhala output update while typing.
- Verifies output changes when input is changed.

---

## Project Structure
IT3040_ITPM_Assignment_1
├ tests
│ ├ singlish-positive.spec.js
│ ├ singlish-negative.spec.js
│ ├ singlish-ui.spec.js
├ Assignment 1 - Test cases.xlsx
├ package.json
├ package-lock.json
├ playwright.config.js
├ README.md
└ .gitignore


---

Technologies Used

- Node.js
- Playwright
- JavaScript
- GitHub

---

How to Run the Tests

1. Install dependencies
```bash
npm install

2. Run all tests
npx playwright test

3. View report
npx playwright show-report

AUTHOR
Name: Sahan Mendis
Student ID: IT23332980
Module: IT3040 – IT Project Management

 Notes

This project is for academic purposes only.

Test cases are documented in the Excel file:
Assignment 1 - Test cases.xlsx




