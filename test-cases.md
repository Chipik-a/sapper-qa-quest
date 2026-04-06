# Functional Test Cases

## TC_KITTY_011

**Title:** User Page: Turning toggle OFF hides image and syncs with Admin

**Preconditions:**

- User page is opened: https://tymfear.github.io/sapper-qa-quest/ 
- Admin page is opened: https://tymfear.github.io/sapper-qa-quest/kitty/admin

**Steps:**
1. Check the current toggle state on the User page
2. If the toggle is OFF, switch it ON
3. Turn the toggle OFF

**Expected Result:**
- The image is not displayed on the User page 
- The toggle on the Admin page  is switched to OFF

----------
## TC_KITTY_012

**Title:** User Page: Turning toggle ON displays image and syncs with Admin

**Preconditions:**

- The page is opened: https://tymfear.github.io/sapper-qa-quest/ 
- Admin page is opened: https://tymfear.github.io/sapper-qa-quest/kitty/admin

**Steps:**
1. Check the current toggle state on the User page
2. If the toggle is ON, switch it OFF
3. Turn the toggle ON

**Expected Result:**
- The image is displayed on the User page 
- The toggle on the Admin page is switched to ON

--------

## TC_KITTY_013

**Title:** Admin Page: Turning toggle OFF hides image and syncs with User

**Preconditions:**

- User page is opened: https://tymfear.github.io/sapper-qa-quest/ 
- Admin page is opened: https://tymfear.github.io/sapper-qa-quest/kitty/admin

**Steps:**
1. Check the current toggle state on the Admin page
2. If the toggle is OFF, switch it to ON
3. Turn the toggle OFF

**Expected Result:**
- The image is not displayed on the Admin page 
- The toggle on the User page is switched to OFF

--------

## TC_KITTY_014

**Title:** Admin Page: Turning toggle ON displays image and syncs with User

**Preconditions:**

- User page is opened: https://tymfear.github.io/sapper-qa-quest/
- Admin page is opened: https://tymfear.github.io/sapper-qa-quest/kitty/admin

**Steps:**
1. Turn the toggle ON on the Admin page
2. If the toggle is ON, switch it OFF 
3. Turn the toggle ON

**Expected Result:**
- The image is displayed on the Admin page 
- The toggle on the User page is switched to ON

--------------------------------------------------------------------------------------------


## TC_KITTY_001\
**Title:** Verify that clicking "Show me a Kitty" navigates the user to the kitty page\

**Preconditions**\
- User opens https://tymfear.github.io/sapper-qa-quest/\
- Page loads successfully\

**Steps**\
1. Locate the "Show me a Kitty" button\
2. Click the button\
\
**Expected Result**\
The user is navigated to https://tymfear.github.io/sapper-qa-quest/kitty\


## TC_KITTY_002\
**Title:** Verify that a cat image is displayed when the kitty page loads\

**Preconditions**\
- User opens https://tymfear.github.io/sapper-qa-quest/kitty\
- Page loads successfully\

**Steps**\
1. Verify that a cat image is displayed on the page\

**Expected Result**
A cat image is displayed immediately after the page loads\

## TC_KITTY_003\

**Title:** Verify that switching the toggle to OFF hides the cat image\

**Preconditions**\
- User opens https://tymfear.github.io/sapper-qa-quest/kitty\
- Page loads successfully\
- Cat image is visible\

**Steps**\
1. Locate the ON/OFF toggle\
2. Switch the toggle to OFF\

**Expected Result**
The cat image disappears from the page\

## TC_KITTY_004\

**Title:** Verify that switching the toggle to ON displays a cat image\

**Preconditions**\
- User is on https://tymfear.github.io/sapper-qa-quest/kitty\
- Page loads successfully\
- Toggle is set to OFF\

**Steps**\
1. Switch the toggle to ON\

**Expected Result**\
A cat image is displayed (loading indicator may appear while fetching)\

## TC_KITTY_005

**Title:** Verify that a loading indicator appears while a new image is being loaded\
\
**Preconditions**\
- User is on https://tymfear.github.io/sapper-qa-quest/kitty\
- Toggle is set to OFF\
\
**Steps**\
1. Switch the toggle to ON\
\
**Expected Result**\
A Loading indicator appears on the page\
\
\
## TC_KITTY_006\
\
**Title:** Verify that a cat image is displayed after loading completes\
\
**Preconditions**\
- User is on https://tymfear.github.io/sapper-qa-quest/kitty\
- Toggle is set to OFF\
\
**Steps**\
1. Switch the toggle to ON\
2. Wait until the loading process finishes\
\
**Expected Result**\
A cat image is displayed on the page\
\
\
## TC_KITTY_007\
\
**Title:** Verify that the "Show Admin Area" button opens the admin page\
\
**Preconditions**\
- User is on https://tymfear.github.io/sapper-qa-quest/kitty\
\
**Steps**\
\
1. Locate the Show Admin Area button\
2. Click the button\
\
**Expected Result**\
The user is navigated to https://tymfear.github.io/sapper-qa-quest/kitty/admin\
\
\
## TC_KITTY_008\
\
**Title:** Verify that the admin toggle is visible on the admin page\
\
**Preconditions**\
- User opens https://tymfear.github.io/sapper-qa-quest/kitty/admin\
- The page loads successfully\
\
**Steps**\
1. Locate the ON/OFF toggle control on the page.\
\
**Expected Result**\
The ON/OFF toggle control is displayed on the page\
\
\
## TC_KITTY_009\
\
**Title:** Verify that the admin toggle sends a request when switched to ON\
\
**Preconditions**\
- User opens https://tymfear.github.io/sapper-qa-quest/kitty/admin\
- The page loads successfully\
\
**Steps**\
1. Locate the ON/OFF toggle\
2. Switch the toggle to ON\
\
**Expected Result**\
The toggle state changes to ON\
\
\
## TC_ADMIN_010\
\
**Title:** Verify that the admin toggle changes state when switched to OFF\
\
**Preconditions**\
- User opens https://tymfear.github.io/sapper-qa-quest/kitty/admin\
- The toggle is set to ON\
\
**Steps**\
1. Switch the toggle to OFF\
\
**Expected Result**\
The toggle state changes to OFF\
\
\
## TC_ADMIN_011\
\
**Title:** Verify that the Credits button opens a popup window\
\
**Preconditions**\
- User opens https://tymfear.github.io/sapper-qa-quest/kitty/admin\
\
**Steps**\
1. Locate the Credits button\
2. Click the button\
\
**Expected Result**\
A popup window appears\
\
\
## TC_ADMIN_012

**Title:** Verify that the popup contains a LinkedIn link

**Preconditions**
- User opens https://tymfear.github.io/sapper-qa-quest/kitty/admin
- The Credits popup is open

**Steps**
1. Locate the LinkedIn link inside the popup

**Expected Result**
A LinkedIn link is displayed in the popup


## TC_ADMIN_013

**Title:** Verify that the LinkedIn link opens the LinkedIn page

**Preconditions**
- User opens https://tymfear.github.io/sapper-qa-quest/kitty/admin
- The Credits popup is open

**Steps**
1. Click the LinkedIn link

**Expected Result**
The LinkedIn page opens in a new tab


## TC_ADMIN_014

**Title:** Verify that the LinkedIn link requests authentication when the user is not logged in

**Preconditions**
- User is not logged in to LinkedIn
- Credits popup is open

**Steps**
1. Click the LinkedIn link

**Expected Result**
- LinkedIn login page is displayed


## TC_ADMIN_015

**Title:** Verify the LinkedIn link behavior when the user is logged in

**Preconditions**
- User is logged in to LinkedIn
- Credits popup is open

**Steps**
1. Click the LinkedIn link

**Expected Result** 
- The LinkedIn page opens
