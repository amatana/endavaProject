# Why we did the app ?

### The main purpose for this app is to help the company with the process of hiring people. You can have different type of users and administrate the candidates flow considering HR and IT areas, through interviews and report generation.

# How does it work?

### Before adding any candidates you should have at least 1 tag (which you will be able to create at the **home** of an SIST ADMIN user) and then you can start creating questions and tag them with the different topics they belong to.
## HR will first create the candidate and assign it to an IT and HR interviewer/s (all of them users in db) and once you have questions in your Questions Managment you will be able to (once the candidate is created and assigned to yourself) go and create the interview.

# How to get started ?

###1 Run **npm install** in your console.
###2 Run **npm start** in your console and wait until it shows: 'SERVER LISTENING AT PORT 3001'
###3 Then, go to **http://localhost:3001/users/addUser** and create your first user.** It must be an HR ADMIN!! **
###4 Go to **http://localhost:3001/login** and log in with the user you have just created. 
###5 Got to Users Management and create a SYST ADMIN user. 
###6 Log out and log in with the SYST ADMIN.
###7 Create Tags from the Tags Managment.
###8 Create Questions from the Questions Managment from the HR admin (for the HR questions) and from the SYST admin (for the IT questions).
###9 Start creating Candidates (from the Candidates Managment) and enjoy!!

# Want to use the app in your phone?!

## With the server running, check you are on the same wifi network from your cellphone, open a new tab in your console and type: **ifconfig**, and check the **inetNumber: theOpenPort / login** and register. 
##For example in my computer I would have to type this in my internet cellphone app  **10.100.0.171:3001/login**

# Developed by:
## Gastón d'Hiriart (gastondh91@gmail.com)
## Juan Manuel Iban (jmiban@gmail.com)
## Joaquin Quiroga (aenoriss@gmail.com)
## Leonardo Carroccio (leocarrocio@gmail.com)
## Ana Amat (amatana95@gmail.com)