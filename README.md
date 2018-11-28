# Ironhack-Project2-MyCloset

MODELS:
1. User-
    - Username: String
    - Password: String
        
        User Profile
        - First Name: String
        - Last Name: String
        - E-mail Address: String
        - Image: URL String
        - Closets: [Array of closet IDs]

2. Outfit-
    - autocreated when you match clothing together and say YES
    - timestamp
    - event

3. Clothing-
    - Category: [ActiveWear, DayWear, NightWear, ProfessionalWear, FormalWear]  //BONUS, not mandatory
    - Season: [Winter, Spring, Summer, Fall]  //BONUS, not mandatory
    - Type: [top, bottom, dress]
    - Sub-Type: String
    - Color: String
    - Top Size: [XS, S, M, L, XL]  //BONUS, not mandatory
    - Bottom Size: Number  //BONUS, not mandatory
    - Dress Size: [XS, S, M, L, XL]  //BONUS, not mandatory
    - Last Worn: Date  //BONUS, not mandatory
    - Favorites: [Array of Clothing IDs]



ROUTES:
1. Users-
    - GET/POST signup
    - GET/POST login
    - GET logout
    - GET profile

2. Clothing-
    - GET/POST create new
    - GET show all clothing
    - GET show one detailed item
    - GET show items based on any filter //BONUS, not mandatory
    - GET show items based on "last worn date" //BONUS, not mandatory
    - GET/PUT edit
    - DELETE remove

3. Outfits-
    - GET/POST create new
    - GET all outfits
    - GET detailed outfit
    - GET/PUT edit
    - DELETE remove

4. Closets- (part of user)
    - create new- happens in sign-up route


Troubleshoot:
As of Nov. 24: need to relook at clothing routes js - get/post for photo upload not working, seperated it from the create new clothing route as well as the hbs file. Look at Picture Model (created, but i don't htink it's necessary). Look at file.url - originally in POST route of create new clothing, kept giving error as "url of undefined".

