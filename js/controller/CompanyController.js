class CompanyController {

  getCompanyInfo() {
    return new Promise(resolve => {
      new ServiceAidBackHttpRequest().getCompanyInfo()
        .then(company => {
          resolve(JSON.parse(company))
        })
    })
  }

}