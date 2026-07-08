from playwright.sync_api import sync_playwright

from config.settings import (
    CHROME_PATH,
    USER_DATA_DIR,
    PROFILE,
)

class Browser:

    def launch(self):

        playwright = sync_playwright().start()

        browser = playwright.chromium.launch_persistent_context(

            executable_path=CHROME_PATH,

            user_data_dir=USER_DATA_DIR,

            channel=None,

            headless=False,

            args=[
                f"--profile-directory={PROFILE}",
                "--start-maximized",
            ],

            no_viewport=True,
        )

        page = browser.new_page()

        return playwright, browser, page