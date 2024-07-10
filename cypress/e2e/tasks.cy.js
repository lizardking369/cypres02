describe('tasks management', () => {
    // it('should open and close the new task modal', () => {
    //   cy.visit('http://localhost:5173/');
    //   cy.contains("Add Task").click()
    //   cy.get(".backdrop").click({force:true})
    //   cy.get(".backdrop").should('not.exist');
    //   cy.get(".modal").should("not.exist");
    //   cy.get('[data-cy="start-add-task-button"]').click();
    //   cy.get('[type="button"]').click();
    //   cy.get("backdrop").should("not.exist");
    //   cy.get(".modal").should("not.exist");
    // });

    it("should creater new task",()=>{
        cy.visit('http://localhost:5173/');
        cy.contains("Add Task").click();
        cy.get('#title').type("first task")
        cy.get('#summary').type("this is my first task")
        //find selector with value
        cy.get('#category').children().eq(0).invoke("val").then((value)=>{
            cy.get("#category").select(value);
            
        })
        cy.contains("Add Task").click();
      
        // cy.get('#category').children().eq(0).invoke("val").then((value)=>{
        //     console.log(value)
        // })
        // cy.get('#category').children().eq(1).invoke("val").then((value)=>{
        //     console.log(value)+
        // })
        // cy.contains("Add Task").click()
   let e=0;
        for(let i=0; i<8;i++){
           
            cy.contains("Add Task").click();
            cy.get('#title').type(`${i+2} task`)
            cy.get('#summary').type(`this is my ${i+2} task which is less important`)
            cy.get('#category').children().eq(i%4).invoke("val").then((value)=>{
                cy.get("#category").select(value);
                
            })
            cy.contains("Add Task").click();
            cy.get(".task").eq(i+1).contains(`this is my ${i+2} task which is less important`)
            e++
        };
        
        cy.get('.task-list').children().should('have.length.gte',e+1)
        
        // cy.contains("Add Task").click();
        // cy.get('#title').type("second task")
        // cy.get('#summary').type("this is my second  task which is less important")
        // cy.get('#category').find("Urgent")
    });
  });
  