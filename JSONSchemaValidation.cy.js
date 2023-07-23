
// install ajv package in order to run this schema

 const AJV = require('ajv')
 const avj = new AJV()


describe('Json Schema API',()=>{

    it('Schema Validation Against Response',()=>{

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }).then((response)=>{

             const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
              }  // schema ends here
              const validate=avj.compile(schema)
              const isvalid =validate(response.body)
              expect(isvalid).to.be.true
        })

    })

})