import "./auth.css";
import React, { Component, useState } from 'react';
import logo1 from '../../images/undraw_cat_epte.svg'
import logo2 from '../../images/undraw_dog_c7i6.svg'
import { Helmet } from 'react-helmet';


// class MyComponent extends Component {
//     const [isSignUpMode, setIsSignUpMode] = useState(false);

//     const handleSignUpClick = () => {
//       console.log("testing1");
//       setIsSignUpMode(true);
//     };

//     const handleSignInClick = () => {
//       console.log("testing2");
//       setIsSignUpMode(false);
//     };

// å
//     render() {
//         return (
//             <div>
//                 <Helmet>
//                     <script src="./auth.js"></script>
//                     <script
//                         src="https://kit.fontawesome.com/64d58efce2.js"
//                         crossorigin="anonymous"
//                     ></script>
//                 </Helmet>
//                 <div class="container">
//                     <div class="forms-container">
//                         <div class="signin-signup">
//                             <form action="#" class="sign-in-form">
//                                 <h2 class="title">Sign in</h2>
//                                 <div class="input-field">
//                                     <i class="fas fa-user"></i>
//                                     <input type="text" placeholder="Username" />
//                                 </div>
//                                 <div class="input-field">
//                                     <i class="fas fa-lock"></i>
//                                     <input type="password" placeholder="Password" />
//                                 </div>
//                                 <input type="submit" value="Login" class="btn solid" />
//                                 <p class="social-text">Or Sign in with social platforms</p>
//                                 <div class="social-media">
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-facebook-f"></i>
//                                     </a>
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-twitter"></i>
//                                     </a>
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-google"></i>
//                                     </a>
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-linkedin-in"></i>
//                                     </a>
//                                 </div>
//                             </form>
//                             <form action="#" class="sign-up-form">
//                                 <h2 class="title">Sign up</h2>
//                                 <div class="input-field">
//                                     <i class="fas fa-user"></i>
//                                     <input type="text" placeholder="Username" />
//                                 </div>
//                                 <div class="input-field">
//                                     <i class="fas fa-envelope"></i>
//                                     <input type="email" placeholder="Email" />
//                                 </div>
//                                 <div class="input-field">
//                                     <i class="fas fa-lock"></i>
//                                     <input type="password" placeholder="Password" />
//                                 </div>
//                                 <input type="submit" class="btn" value="Sign up" />
//                                 <p class="social-text">Or Sign up with social platforms</p>
//                                 <div class="social-media">
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-facebook-f"></i>
//                                     </a>
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-twitter"></i>
//                                     </a>
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-google"></i>
//                                     </a>
//                                     <a href="#" class="social-icon">
//                                         <i class="fab fa-linkedin-in"></i>
//                                     </a>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     <div class="panels-container">
//                         <div class="panel left-panel">
//                             <div class="content">
//                                 <h3>New here ?</h3>
//                                 <p>
//                                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//                                     ex ratione. Aliquid!
//                                 </p>
//                                 <button class="btn transparent" id="sign-up-btn">
//                                     Sign up
//                                 </button>
//                             </div>
//                             <img src={logo1} class="image" alt="" />
//                         </div>
//                         <div class="panel right-panel">
//                             <div class="content">
//                                 <h3>One of us ?</h3>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//                                     laboriosam ad deleniti.
//                                 </p>
//                                 <button class="btn transparent" id="sign-in-btn">
//                                     Sign in
//                                 </button>
//                             </div>
//                             <img src={logo2} class="image" alt="" />
//                         </div>
//                     </div>
//                 </div>


//             </div>


//         );
//     }

// }

// export default MyComponent;


export default function () {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };
    return (
        <div>
            <Helmet>
                <script
                    src="https://kit.fontawesome.com/64d58efce2.js"
                    crossorigin="anonymous"
                ></script>
            </Helmet>
            <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="#" class="sign-in-form">
                            <h2 class="title">Sign in</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" class="btn solid" />
                            <p class="social-text">Or Sign in with social platforms</p>
                            <div class="social-media">
                                <a href="#" class="social-icon">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        <form action="#" class="sign-up-form">
                            <h2 class="title">Sign up</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" class="btn" value="Sign up" />
                            {/* <p class="social-text">Or Sign up with social platforms</p> */}
                            {/* <div class="social-media">
                                <a href="#" class="social-icon">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div> */}
                        </form>
                    </div>
                </div>

                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button class="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                                Sign up
                            </button>
                        </div>
                        <img src={logo1} class="image" alt="" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button class="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                                Sign in
                            </button>
                        </div>
                        <img src={logo2} class="image" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
} 
