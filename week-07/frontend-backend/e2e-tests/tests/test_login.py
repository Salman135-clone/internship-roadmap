import os
import time
import pytest
from dotenv import load_dotenv
from playwright.async_api import async_playwright,expect



load_dotenv()
@pytest.mark.asyncio
async def test_login():
    async with async_playwright() as playwright:
        browser=await playwright.chromium.launch(headless=False, slow_mo=700)
        context=await browser.new_context()
        page=await context.new_page()
       
        base_url = os.getenv("BASE_URL")
        user_email = os.getenv("USER_EMAIL")
        user_password = os.getenv("USER_PASSWORD")
        admin_email=os.getenv('ADMIN_EMAIL')
        admin_password=os.getenv('ADMIN_PASSWORD')
        new_user_email=os.getenv('NEW_USER_EMAIL')
        new_user_password=os.getenv('NEW_USER_PASSWORD')
        user_name=os.getenv('NEW_USER_USERNAME')


        profile_button = page.locator("button:has(img[alt='avatar'])")
        menu_button = page.get_by_role("button", name="Open user menu")
        logout_button = page.get_by_text("Logout")
        admin_logout_button = page.get_by_text("Sign out")
        login_success=page.get_by_text("Login Successful")    
        invalid_credentials=page.get_by_text("Invalid email or password")
        user_not_found = page.get_by_text("User not found")
        
        signup_success=page.get_by_text('Register Successful')
        signup_user_already_register=page.get_by_text('User Already Register')

        login_button=page.get_by_role('link',name='log in')
        login_form_btn=page.get_by_role('button' ,name="Sign in")
        signup_btn=page.get_by_role('link' ,name="Sign up")
        signup_form_btn=page.get_by_role('button' ,name="Sign up")

        

        await page.goto(base_url)
        print('Site open successfully')
        time.sleep(2)

        await page.get_by_role('link',name='About').click()
        print('About Page Loaded')
        time.sleep(2)

        await page.get_by_role('link',name='Contact Us').click()
        print('Contact Page loaded')
        time.sleep(2)

        await signup_btn.click()
        print('Sigup page loaded')

        await page.get_by_label('Username').fill(user_name)
        time.sleep(1)
        await page.get_by_label('Email address').fill(new_user_email)
        time.sleep(1)
        await page.get_by_label('Password').fill(new_user_password)
        time.sleep(2)

        await signup_form_btn.click()
        print('Signup btn clicked ')

        try:
            if await signup_success.is_visible(timeout=3000):
                await signup_success.wait_for(state='hidden', timeout=7000)
                print('Signup done')
            elif await signup_user_already_register.is_visible(timeout=7000):
                print('User already register')
            else:
               print("No recognized toast message found")
        except TimeoutError:
            print("Toast did not appear within timeout")
            await page.screenshot(path="toast_timeout_error.png")    


        await login_button.click()
        print('Log in page loaded')
        time.sleep(1)

        await page.get_by_label('Email address').fill(user_email)
        time.sleep(1)

        await page.get_by_label('Password').fill(user_password)
        time.sleep(1)

        await login_form_btn.click()
        print('Sign in button click')
        time.sleep(2)

        try:
            if await login_success.is_visible(timeout=3000):
                await login_success.wait_for(state="hidden", timeout=10000)
                print("Login successful ")
                await profile_button.click()
                await logout_button.click()
                print('Logout Successfully')
                
            elif await invalid_credentials.is_visible(timeout=300):
                print("Invalid credentials ")
            elif await user_not_found.is_visible(timeout=3000):
                 print("User not found")
            else:
               print("No recognized toast message found")
        except TimeoutError:
            print("Toast did not appear within timeout")
            await page.screenshot(path="toast_timeout_error.png")    

        time.sleep(5)


        await login_button.click()
        print("For Admin login page loaded")

        await page.get_by_label('Email address').fill(admin_email)
        await page.get_by_label('Password').fill(admin_password)
        await login_form_btn.click()
        print("Admin sign in button clicked")

        try:
            if await login_success.is_visible(timeout=3000):
                print("Admin login successful")
                await login_success.wait_for(state="hidden", timeout=10000)

                await menu_button.click()
                await admin_logout_button.click()
                print("Admin logged out successfully")

            elif await invalid_credentials.is_visible(timeout=3000):
                print("Admin Invalid credentials")
            elif await user_not_found.is_visible(timeout=3000):
                print("Admin User not found")
            else:
                print("Admin login: No recognized toast message")

        except TimeoutError:
            print("Admin login toast did not appear within timeout")
            await page.screenshot(path="admin_toast_timeout_error.png")

        time.sleep(5)
        await browser.close()