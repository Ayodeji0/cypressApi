

describe("API testing",()=>{
  let authToken=null; // This is to generate token for us to send another get and post request
    before("creating access token",()=>{
 
        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },

            body: {
                    clientName: "ABC",
                    clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
            }
        }).then((response)=>{
          authToken=response.body.accessToken;
        });
    });

    it("creating new order",()=>{    // Authorization and order creation

        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },

            body: {
                    'bookId': 1,
                    "customerName": "xyzabc"
            }

        }).then((response)=>{

         expect(response.status).to.eq(201);
         expect(response.body.created).to.eq(true);

        });
    });

    it('Fetching the orders',()=>{
    cy.request(
        {
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },
            cookies:{
                'cookiesName': 'mycookie'
            }

        },

    ). then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body).has.length(1)
    })
    })

})
