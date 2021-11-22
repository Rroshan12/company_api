# company_api
This is the api reference for company resources
API_KEY=BA673A414C3B44C98478BB5CF10A0F832574090C

!!!!!!!!!!!!!!!!!!!!!!!!!!!important!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

you can usepostman collection and import in your system.......you can see postmancollection in repo

1. clone the project with "git clone https://github.com/Rroshan12/company_api.git"
2. type in cmd "npm install". after install all dependies including nodemon
3. "npm start" enjoy

to acces the company api 
you need to send every request with header authorization with bearer key 
you can check with postman

for example
Authorization  Bearer API_KEY  and made request at every endpoint 

API_KEY is given at top use that on

************************************************************************************
end points:
getrequest{
//getallcategories
http://localhost:5000/api/category

//getallcompanies
http://localhost:5000/api/company

//getcategory singel
http://localhost:5000/api/category/:id

//getcompany singel
http://localhost:5000/api/company/:id
}

**************************************************************************************
postRequest{
//createcompany
http://localhost:5000/api/company

//createcategories
http://localhost:5000/api/category


}
**************************************************************************************

putRequest{
//updatecompany
http://localhost:5000/api/company/:id

//updatecategory
http://localhost:5000/api/category/:id


}

*********************************************************************
delete request
{
//deletecompany
http://localhost:5000/api/company/:id

//deletecategory
http://localhost:5000/api/category/:id


}
************************************************************************************************************
paginating
http://localhost:5000/api/company?page=1&limit=10
http://localhost:5000/api/category?page=1&limit=10

categorisedpagination
list of comapny
http://localhost:5000/api/company?category_id=6197a95853732e7fd8b82ac6&page=1&limit=10

only company
http://localhost:5000/api/company/6197a92453732e7fd8b82ac5?category_id=6197a95853732e7fd8b82ac6&page=1&limit=5

