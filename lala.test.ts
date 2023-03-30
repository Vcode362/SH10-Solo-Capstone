import { lalaPage } from "./lalaPage";
const lala=new lalaPage

test ("addToCart" ,async()=>{
await lala.navigate()
await lala.click(lala.shopNow)
await lala.click(lala.addToCartBtn)
await lala.click(lala.checkOutBtn)
await lala.driver.sleep(3000)
})
test("login",async()=>{
    await lala.click(lala.logInBtn)
    await lala.click(lala.createAnAcctBtn)
    await lala.setInput(lala.firstName,"jane")
    await lala.setInput(lala.lastName,"doe")
    await lala.setInput(lala.emailField,'test@test.com' )
    await lala.setInput(lala.passWordField,'123password')
    await lala.click(lala.createBtn)
    await lala.click(lala.newsLtrSignUpBtn)
    await lala.click(lala.Menu)
    await lala.setInput(lala.emailField, 'test@test.com')
    await lala.setInput(lala.passWordField, '123password')
    await lala.click (lala.signInBtn)
    

})