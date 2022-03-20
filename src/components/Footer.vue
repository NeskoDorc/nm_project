<template>
      <footer class="footer">

        <div class="container flex">

            <div class="footer-social flex">
                <div class="social-icon"><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div class="social-icon"><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div class="social-icon"><a href="mailto:name@email.com" ><i class="fa-solid fa-envelope"></i></a>
                </div>

            </div>

            <div class="footer-links">
                <ul>
                    <li> <a href="#home" v-smooth-scroll>Home</a></li>
                    <li> <a href="#who" v-smooth-scroll >About Us</a> </li>
                    <li><a href="#what" v-smooth-scroll >Our Work</a> </li>
                    <li><a href="mailto:name@email.com" >Contact</a> </li>

                </ul>
            </div>
            <div class="footer-back">

                <div class="social-icon">
                    <a href="#home"  v-smooth-scroll><i class="fa-solid fa-up-long"></i></a>
                </div>
            </div>


        </div>


    </footer>
</template>

<script>
    export default {

      
       
        
    }


</script>

<style lang="scss" scoped>

@media only screen and (min-width: 320px) {

    
 .footer {
        margin-top: 50px;
        background-color: $back-color;
        height: 60px;
        .container {
         
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    &-social {
        margin-left: 15px;
        
        justify-content: center;
        align-items: center;
        
    }

     .social-icon a{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        height: 35px;
        width: 35px;
        background-color: $white-color;
        border-radius: 50%;
        margin-right: 15px;
        font-size: 30px;
        color: $grey-color;
        text-decoration: none;
        
        transition: color 0.3s ease-in;
        &:hover {
        color: $green-light-color;
        
    }
    }

    
    &-links {
        display: none;
    }
    }
   
    
   
   




}

@media only screen and (min-width: 480px) {}

@media only screen and (min-width: 768px) {


    .footer-links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -50px;

        ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        li a{

             text-decoration: none;
        padding: 10px;
        font-size: 16px;
        color: $font-color;
        }
    }
    }
   
   
    
}


</style>