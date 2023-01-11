
class loginScreen {
    get #enterStoreAddress() { return $('id:button_login_store') }  
    get #storeAddress() { return $('android.widget.EditText') }   
    get #continue() { return $('id:bottom_button') } 
    get #addressCredentials() { return $('id:login_site_creds') }    
    get #userName() { return $('android=new UiSelector().text("Username")') }
    get #password() { return $('android=new UiSelector().text("Password")') }    
    get #twoFactorPasswordBtn() { return $('id:login_enter_password') }

    async goToLogin(urlLoja, username, password) {
        await this.#enterStoreAddress.waitForExist({ timeout: 20000 })
        await this.#enterStoreAddress.click()
        await this.#storeAddress.waitForExist({ timeout: 20000 })
        await this.#storeAddress.setValue(urlLoja)
        await this.#continue.waitForExist({ timeout: 20000 })
        await this.#continue.click()       
        await this.#addressCredentials.waitForExist({ timeout: 20000 })
        await this.#addressCredentials.click()
        await this.#userName.waitForExist({ timeout: 20000 })
        await this.#userName.setValue(username)
        await this.#password.waitForExist({ timeout: 20000 })
        await this.#password.setValue(password)       
        await this.#continue.waitForExist({ timeout: 20000 })
        await this.#continue.click()
        await this.#twoFactorPasswordBtn.waitForExist({ timeout: 20000 })
        await this.#twoFactorPasswordBtn.click()
        await this.#password.waitForExist({ timeout: 20000 })
        await this.#password.setValue(password)
        await this.#continue.waitForExist({ timeout: 20000 })
        await this.#continue.click()
    }

    
  //  async getTextURL() {
     //   await this.#storeAddress.waitForExist({ timeout: 20000 })
      //  return await  this.#storeAddress.getText(urlLoja)
   // }

}


module.exports = new loginScreen