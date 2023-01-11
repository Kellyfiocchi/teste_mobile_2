class myStoreScreen {   
    get #getEbac() { return $('id:toolbar_subtitle') }
    get #goProducts() { return $('~Products') }
    get #addProducts() { return $('~Add products') }
    get #simplePhysical() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }

    async clickAddProduct() {
        await this.#goProducts.waitForExist({ timeout: 20000 })
        await this.#goProducts.click()
        await this.#addProducts.waitForExist({ timeout: 20000 })
        await this.#addProducts.click()
        await this.#simplePhysical.waitForExist({ timeout: 20000 })
        await this.#simplePhysical.click()
    }



    async ebacShop() {
        await this.#getEbac.waitForExist({ timeout: 30000 })
        return await this.#getEbac.getText()
    }



}

module.exports = new myStoreScreen