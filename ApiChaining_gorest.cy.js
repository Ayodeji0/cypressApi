
describe('Gorest API Chaining', () => {

    const auth_token =' Bearer 6dc4614e84f6df930bf6743df8dfef48ed6e9995a3cad6952fdc766f420911f5'
    it('create, update, delete user in Gorest API', () => {
        
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            body:{
                name: 'Kemi Johnson',
                gender: 'male',
                email: Math.random().toString(5).substring(2)+ '@gmail.com',
                status:'active'
            },
            headers:{
                Authorization:auth_token
            }
        }).then((response)=>{
        expect(response.status).to.eq(201)
        const userid = response.body.id

        //updating 
        cy.request({
            method:'PUT',
            url:`https://gorest.co.in/public/v2/users/${userid}`,
            body:{
                name:'Funmi ojegbeje'
            },
            headers:{
                Authorization:auth_token
            },
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Funmi ojegbeje')

            // delete request
            cy.request({
                method:'DELETE',
                url:`https://gorest.co.in/public/v2/users/${userid}`,
                headers:{
                    Authorization:auth_token
                },
            }).then((response)=>{
            expect(response.status).to.eq(204)
            })
        })
        })
    });
    
});