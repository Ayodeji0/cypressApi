



describe("API testing",()=>{

    const queryParam = { page: 2};

    it("Passing Query Parameter",()=>{

        cy.request({

             method: 'GET',
             url: 'https://reqres.in/api/users',
             qs: queryParam

        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.status).to.equal(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).has.length(6); // how to get the number of datas in an array 
            expect(response.body.data[0]).have.property('id', 7) // how to pick first data in an array of datas

        })
    })

})