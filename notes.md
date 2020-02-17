first of all i had to start small
because sometimes we tend to think of our project as this awesome thing, and keep on adding features, which in return: overwhelming us 

which is toxic for app developers 
because youll see your project as something you cant handle

what i did, i have a piece of paper near by
so anytime i have a feature i want to add i just write it down
and forget about it
instead of keeping it in my head, which can cause either:
1. getting overwhelmed
2. forget about the feature

once thats out of my head i return to what im focusing on
the core concept of my app
which is very important when it comes to output base
- dont care about the design
- nor if it can only handle one seat
- the important thing is it has the core concept

which for this project was to help conductors of bus, to take note which seats are occupied or vacant.

Problem One:
    answering the core question
        - i created a box, made out of just a div with few style
        - then went straight into javascript

        - mamde the first prototype where there was a universal variable 
            -that indicates wether the seat is vacant: blue or occupied: green
            - the problem was the global variable holds 1 data, one true or false
            - which means if i have 3 seats
                - if i set the first seat into occupied
                - it will change the default:blue color into green
                - but apparently if i click on the seat besides it
                    - it checks on the 'global variable' which will be a problem for upcoming numerous seats.
            - what i did to fix
                - i first created an object
                    - had to learn an object first and how to create one
                - than found out if we are gonna make a thousands seats, we cant rely on one simple object
                - we neead a CLASS
                    -and had to relearn that too
                
                