
describe('API Chaining', () => {
    
    it('Getting all Post', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .then((response)=>{
        expect(response.status).to.eq(200)
        const postId = response.body[0].id
        return postId;
        })
        .then((postid)=>{
        cy.request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/comments?postid=${postid}`
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
        })
    });
});