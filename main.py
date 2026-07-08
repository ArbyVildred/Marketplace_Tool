from app.collector.browser import Browser
from config.settings import MARKET_URL

browser = Browser()

playwright, context, page = browser.launch()

page.goto(MARKET_URL)

input("Browser launched successfully.\nPress ENTER to exit.")

try:
    page.close()
except:
    pass

try:
    context.close()
except:
    pass

try:
    playwright.stop()
except:
    pass