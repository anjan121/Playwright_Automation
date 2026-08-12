const path = require("path");

// PROJECT ROOT
const PROJECT_ROOT =  path.resolve(__dirname, "..");

// FOLDER PATHS
const SCREENSHOT_FOLDER = path.join(PROJECT_ROOT, "screenshots");
const LOG_FOLDER = path.join(PROJECT_ROOT, "logs");
const REPORT_FOLDER = path.join(PROJECT_ROOT, "reports");
const TEST_DATA_FOLDER = path.join(PROJECT_ROOT, "test_data");

// FILE PATHS
const EXCEL_SHEET_PATH = path.join(TEST_DATA_FOLDER, "project_documents.xlsx");
const JSON_DATA_PATH = path.join(TEST_DATA_FOLDER, "testData.json");
const REPORT_FILE = path.join(REPORT_FOLDER, "AutomationReport.html");

// CUSTOM VIEWPORTS
const DESKTOP_VIEWPORT = {width: 1920,height: 1080};

const LAPTOP_VIEWPORT = {width: 1366,height: 768};

const TABLET_VIEWPORT = { width: 768,height: 1024};

const MOBILE_VIEWPORT = {width: 390,height: 844};

// CONSTANTS

const AutomationConstants = {
  // PROJECT DETAILS
  PROJECT_NAME: "Ecommerce Playwright Automation Framework",
  PROJECT_VERSION: "1.0",
  AUTHOR: "Gurupreeth Singh",

  // BROWSERS
  CHROMIUM_BROWSER: "chromium",
  FIREFOX_BROWSER: "firefox",
  WEBKIT_BROWSER: "webkit",
  BROWSER: "chromium",
  HEADLESS: false,

  // PLAYWRIGHT DEVICE EMULATION
  USE_DEVICE_EMULATION: false,
  DEVICE_NAME: "iPhone 15",

  // CUSTOM VIEWPORTS
  DESKTOP_VIEWPORT,
  LAPTOP_VIEWPORT,
  TABLET_VIEWPORT,
  MOBILE_VIEWPORT,

  // Change ONLY this line whenever required
  VIEWPORT: DESKTOP_VIEWPORT,

  // OR
  // VIEWPORT: LAPTOP_VIEWPORT,
  // VIEWPORT: TABLET_VIEWPORT,
  // VIEWPORT: MOBILE_VIEWPORT,

  // OR
  // VIEWPORT: null,

  // WAITS
  SMALL_WAIT: 2000,
  MEDIUM_WAIT: 5000,
  LONG_WAIT: 10000,
  EXPLICIT_WAIT: 10000,
  PAGE_LOAD_TIMEOUT: 30000,
  ACTION_TIMEOUT: 15000,
  NAVIGATION_TIMEOUT: 30000,

  // APPLICATION URLS
  APPLICATION_URL: "http://localhost:5173",
  HOME_PAGE_URL: "http://localhost:5173/",
  SHOP_PAGE_URL: "http://localhost:5173/shop",
  CART_PAGE_URL: "http://localhost:5173/cart",
  WISHLIST_PAGE_URL: "http://localhost:5173/wishlist",
  LOGIN_PAGE_URL: "http://localhost:5173/login",
  REGISTER_PAGE_URL: "http://localhost:5173/register",
  PROFILE_PAGE_URL: "http://localhost:5173/profile",

  // PROJECT PATHS
  PROJECT_ROOT,
  SCREENSHOT_FOLDER,
  LOG_FOLDER,
  REPORT_FOLDER,
  TEST_DATA_FOLDER,

  // FILES
  EXCEL_SHEET_PATH,
  JSON_DATA_PATH,
  REPORT_FILE,

  // FILE PREFIXES
  LOG_FILE_PREFIX: "Automation",
  REPORT_FILE_PREFIX: "AutomationReport",
  DEFAULT_SCREENSHOT_NAME: "Screenshot",

  // FILE EXTENSIONS
  SCREENSHOT_EXTENSION: ".png",
  EXCEL_EXTENSION: ".xlsx",
  JSON_EXTENSION: ".json",
  LOG_EXTENSION: ".log",
  REPORT_EXTENSION: ".html",

  // SCREENSHOT SETTINGS
  FULL_PAGE_SCREENSHOT: true,
};

module.exports = AutomationConstants;
