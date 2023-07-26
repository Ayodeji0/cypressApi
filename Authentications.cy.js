
describe('Authentication', () => {
    
    it('Basic Authentication', () => {
        cy.request(
            {
                method: 'GET',
                url: 'https://postman-echo.com/basic-auth',
                auth: {
                    user: 'username',
                    pass: 'password'
                }
            }).then((response)=>{
           expect(response.status).to.eq(401)
           expect(response.body.authenticated).to.eq(false);
            })
    });

    it('Digest Authentication', () => {
        cy.request(
            {
                method: 'GET',
                url: 'https://postman-echo.com/basic-auth',
                auth: {
                    username: 'username',
                    password: 'password',
                    method:   'digest'
                }
            }).then((response)=>{
           expect(response.status).to.eq(401)
           expect(response.body.authenticated).to.eq(false);
            })
    });

 const token = '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'
    it.only('Bearer Token Authentication', () => {
        cy.request(
            {
                method: 'GET',
                url: 'https://api.github.com/user/repos',
                headers: {
                   Authorization:'Bearer '+token
                }
            }).then((response)=>{
           expect(response.status).to.eq(200)
            })
    });
});