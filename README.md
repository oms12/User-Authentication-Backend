# User-Authentication-Backend
1) Backend Code for User Authentication as we need it almost in every project.
2) Used jwt(json web token) for making more secure authentication process.
3) As jwt stores the token on client side we can access multiple servers at the same time as suppose If a bank has two server(as bank is big enough ).
   <ul>
    <li>Suppose a User Login on server1 but it became very busy then user have to be moved on server2.</li>
    <li>As the token is stored at the client side user don't need to login again.</li>
    <li> And hence that's why is user friendly and more secure over session and cookies concept(stores token on server side).</li>
   </ul>
<img src = "https://miro.medium.com/max/1260/0*_TckW18m85-50Ofn." align = "center">
