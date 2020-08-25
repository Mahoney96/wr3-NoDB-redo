// const bcrypt =require('bcryptjs');
//Controller files allows for better organization!!

module.exports = {

    register: async(req, res)=> {

    },

    login: async(req, res)=> {

    },

   logout: async(req, res)=> {

    },

    getUser: async(req, res)=> {

    },
}



// AuthController Explained: //

    // 1. Name them the same thing as the endpoints OR will be very confusing. 
    // 2. Should have as many controller functions as endpoints. 
    // 3. All Controller functions NEED to correspond with endpoints. 


    // 1. initial Beginning Controller set-up:

        // module.exports = {

        //     register: async(req, res)=> {
        
        //     },
        // }

    // 2.  create Same number of controllers as there are endpoints - 
            // Auth has (4) endpoints: post-register, post -login, post-logout, post-user, so needed that reflected in controller.


            // module.exports = {

            //     register: async(req, res)=> {
            
            //     },
            
            //     login: async(req, res)=> {
            
            //     },
            
            //    logout: async(req, res)=> {
            
            //     },
            
            //     getUser: async(req, res)=> {
            
            //     },
            // }



    //3. Add the export to the endpoints in the server.index.js file.


    //4. 










// Route Mapping:


// Company Logo:
    // Company Logo Nav => to Homepage for users.

// Shelf:
    // <div class='Shelf'/> navigates to => the  <div class=BinList> for that shelf 
    // GET - /api/shelf/:id  ? => Returns an array of bin objects. If there is no bin, returns null.
    //                       :id is the shelf id. Which can be 'A', 'B', 'C', 'D'

// Bin1:

// Bin1:

// Bin1:

// Bin1:

// + Add inventory:

// Add to Bin:

// Edit-Button:

// Save-Button:

// Delete- Button:


