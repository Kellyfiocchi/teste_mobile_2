class MyStoreScreen {
    get #myStoreLogo() {
        return $('~My store')
    }

    get #myStoreName() {
        return $('toolbar_subtitle')
    }

    async getStoreName() {
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDislayed() {
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.myStoreLogo.IsDislayed()
    }
}

module.exports = new HomeScreen()