# Skylight QA Automation

Playwright automation scripts for the Skylight web application, covering core family management flows as part of the QA Engineer take-home exercise. These flows are designed around the experience of a primary parent setting up and managing a household of four children, ensuring the app delivers a seamless and intuitive experience for families.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Playwright](https://playwright.dev/) installed
- Chrome browser
- Active Skylight account with credentials

## Project Structure

skylight-automation/
├── tests/
│   ├── add_family_profiles.spec.ts
│   └── add_tasks.spec.ts
├── utils/
│   ├── login.ts
│   ├── add_profiles.ts
│   └── add_tasks.ts
├── playwright.config.ts
└── README.md

## Test Flows

### Flow 1 — add_family_profiles.spec.ts
Logs in as the primary parent and adds four age-appropriate child profiles (ages 4, 8, 12, and 16) to the household. Each profile is assigned a random avatar and random color. Covers the core family setup experience a new Skylight user would complete when getting started with the app.

### Flow 2 — add_tasks.spec.ts
Assigns age-appropriate chores and routines to each child profile. Tasks are tailored to each child's age to reflect realistic family usage — simpler tasks for younger children and more responsibility for older ones. This flow covers the core chore management experience that is central to Skylight's value for families.

### utils/login.ts
Reusable login function called by all test files to avoid duplicating login steps and make credential updates easier to maintain in one place.

### utils/add_profiles.ts
Reusable function that handles the full profile creation flow including random avatar selection, random color assignment, and form completion.

### utils/add_tasks.ts
Reusable function that handles adding a task from the Task Box to a specified profile, supporting both chore and routine task types with configurable time of day for routines.

## How to Run

Run individual tests:

npx playwright test add_family_profiles --headed --project=chromium --workers=1
npx playwright test add_tasks --headed --project=chromium --workers=1

Run all tests:

npx playwright test --project=chromium --workers=1

## Test Credentials

Update the email and password values in each test file's beforeEach block before running. Do not commit credentials to version control.

## Environment

- Tested on: Windows 11
- Browser: Chrome
- Application URL: https://ourskylight.com

## Notes

- Tests were written against the production environment of the Skylight web application
- The add_family_profiles test assumes the account has no existing child profiles before running
- Calendar linking in profile creation is currently disabled due to a discovered defect (See Defect 005)
- Tasks assigned in add_tasks.spec.ts are intentionally age-appropriate to reflect realistic family usage
- Flows are designed to be run sequentially — add_family_profiles should be run before add_tasks
- Developed as part of a QA Engineer candidate exercise exploring the Skylight app as a primary parent managing a family of four