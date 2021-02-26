from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.get('https://www.melon.com/chart/index.htm')

table = driver.find_element_by_xpath(
    '//*[@id="frm"]/div/table/tbody').find_elements_by_tag_name('tr')

for index, value in enumerate(table):
    
    homeType = value.find_elements_by_tag_name('td')[3]
    print( homeType.text)

