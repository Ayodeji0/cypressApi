
describe('api testing',()=>{

    it("Approach1- Hard coded json object",()=>{

        const requestBody= {
            tourist_name: "Deji",
            tourist_email: "john3434@gmail.com",
            tourist_location: "Paris"
        }

        cy.request(
            {
                method: 'POST',
                url:'http://restapi.adequateshop.com/api/Tourist/',
                body: requestBody
            })
            .then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq('Deji')
                expect(response.body.tourist_email).to.eq('john3434@gmail.com')
                expect(response.body.tourist_location).to.eq('Paris')
            })
        
    })


    it("Approach2- Dynamically generating json object",()=>{

        const requestBody= {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"john3434@gmail.com",
            tourist_location: "Paris"
        }

        cy.request(
            {
                method: 'POST',
                url:'http://restapi.adequateshop.com/api/Tourist/',
                body: requestBody
            })
            .then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            })
        
    })


    it.only("Approach3- Using Fixture",()=>{

      cy.fixture('tourist').then((fixturedata)=>{
       const requestBody = fixturedata;
      
       cy.request(
        {
            method: 'POST',
            url:'http://restapi.adequateshop.com/api/Tourist/',
            body: requestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            expect(response.body).has.property('tourist_email', requestBody.tourist_email)
            expect(response.body).have.property('tourist_email', requestBody.tourist_email)
        })

      })

      
        
    })

})