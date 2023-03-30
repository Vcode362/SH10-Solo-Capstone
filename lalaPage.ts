import {Builder, By, until, WebDriver} from 'selenium-webdriver'
import { BasePage } from './basePage'
export class lalaPage extends BasePage
{driver:WebDriver
url: string
constructor (){
    super({url:"https://kulalaland.com/"})
}
shopNow: By = By.xpath('(//a [@href="#lamp"])[1]')
addToCartBtn: By = By.xpath('//button[@value="add to cart<span>•</span> $249"]')
checkOutBtn: By = By.xpath('//button[text()=" Check out "]')
logInBtn: By = By.xpath('(//a[@class="s2kwpi1 _1fragema3 _1fragemah _1fragemap s2kwpi2 _1fragema9"])[2]')
createAnAcctBtn: By = By.xpath('//a[@href="/account/register"]')
firstName: By = By.xpath('//input[@name="customer[first_name]"]')
lastName: By = By.xpath('//input[@name="customer[last_name]"]')
emailField: By = By.xpath('//input[@name="customer[email]"]')
passWordField: By = By.xpath('//input[@name="customer[password]"]')
createBtn: By = By.xpath('//input[@value="Create"]')
newsLtrSignUpBtn: By = By.xpath('//input[@value="sign up"]')
Menu: By = By.xpath('(//div[@class="menu-bar"])[1]')
signInBtn: By = By.xpath('//input[@value="Sign In"]')


}
