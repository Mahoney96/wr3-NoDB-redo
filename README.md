#### Shelfie Wr3-App

#### Database

#### Front-end (client-side)

    Dependencies:
        - express
        - express-session (handles making user sessions/ session in general)
        - axios => (req, res)
        - react-redux 
        -react-router-DOM

    File Structure:
    - src
        - Components:
            - Header (Act as breadcrumb) - 
            - 
        - Router:
            Routing Needed:
            -
        -
        


#### Server: 
    - massive (to be rquired in Main server file)
    - express (Handles creating a RESTFUL API)
    - express-sessions (Handles creating user-sessions/App sessions in general)
    - Express ()


#### Back-End (Database - SQL)

    Dependencies:
        - express (Backend is created using Express)
        - massive => backend (req, res) (connection with Heroku & SQL DB)
        - SQL (database)
        - dotenv (loads App environment variables, )
        - bcryptjs (authentication/security)

    Endpoints:
        - Shelves
            • GET - api/shelf/:id -Returns a bin object. If there is no bin, returns null
            • (:id) is the shelf id. Which can be 'A', 'B', 'C', 'D'.

        - Bins
            • GET - /api/bin/:id - Returns a bin object. If there is no bin, returns null. 
                • (:id) is the (shelf) and (bin) (id) EX. - 'A2', 'C4', 'B2'..

            • PUT - /api/bin/:id - (Updates) and (Returns) a (bin) {object}
                • This endpoint is only accesible if there is a bin object.
                    • (:id) is the (shelf) and (bin) combined. EX - 'A5', 'B1', 'C3'.

            •DELETE - /api/bin/:id - Deletes a bin object. Returns nothing.
                • :id is the shelf and bn id combined. EX. - 'A2', 'C4', 'B2'.
            
            • POST /api/bin/:id - Cretes a new bin object. Returns nothing. 
                • This endpoint should only be accessible if there is not a bin object already. 
                • :id is the shelf and bin id combined. EX. - 'A2', 'C4', 'B2'.


    File Structure:

    Environment:
        - dotenv: (For environment connection between db. local port, and server)
        - massive: (Handling our connection with Heroku & SQL DB)


***icebox***


#### Reference Notes: 


Link for generating images: http://lorempixel.com/200/200/business/


bycrpt - not needed in this App for functionality. Will be attempting to add. 


    Front-End: ( Front-end calls the backend for 'bins' data)

        Bins: (listed on front-end; display full or empty)
        - bin1 ()
        - bin2 ()
        - bin3 ()
        - bin4 ()
        - bin5 ()

    Back-End:
        bcrypt vs bcryptjs:
            - bcrypt: only works with node, would need further dependencies.
            - bcryptjs: Works on all majors browsers. what to use for app.


    Axios:
     - Library that helps structure http requests.
     - Axios written in controller and component files.
     - Axios is writtne in 




 #### Sctratch Notes


