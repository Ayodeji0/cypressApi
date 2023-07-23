
describe('ParsinG Json Response',()=>{

    it('Parsing Simple Json Response',()=>{

        cy.request(
            {
                method: 'GET',
                url: 'https://fakestoreapi.com/products',
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body[0].id).to.eq(1)
                expect(response.body[0].price).to.eq(109.95)
                expect(response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
                expect(response.body[0].rating.rate).to.eq(3.9)
                expect(response.body[0].rating.count).to.eq(120)

                expect(response.body[19].id).to.eq(20)
                expect(response.body[19].price).to.eq(12.99)
                expect(response.body[19].title).to.eq("DANVOUY Womens T Shirt Casual Cotton Short")
                expect(response.body[19].rating.rate).to.eq(3.6)
                expect(response.body[19].rating.count).to.eq(145)
            })
    })


    it.only('Parsing Complex Json Response',()=>{

       let totalPrice = 0;

        cy.request(
            {
                method: 'GET',
                url: 'https://fakestoreapi.com/products',
                qs: {limit:7}

            }).then((response)=>{
                expect(response.status).to.eq(200)
               response.body.forEach(element => {
               totalPrice=totalPrice+element.price;
               });
               expect(totalPrice).to.eq(1077.22) // for 5 product it will be a different value for multiple products
            })
    })
})