import React from 'react'
import "../../../styles/globals.css"

const Page = () => {
    return (
        <div className='bg-red-500 w-110 h-160 translate-x-1/2'>
            <div>
                <form action="#" method="post">
                    <div>
                        <h1>Log in</h1>
                    </div>
                    <div>
                        <input type="email" name="email-field" />
                    </div>
                    <div>
                        <input type="password" name="password-field" id="" />
                    </div>
                    <div>
                        <input type="submit" value="Log in" />
                    </div>
                    <div>
                        <a href="#">Forgotten Password</a>
                    </div>
                    <div>
                        <input type="checkbox" name="remember-log-in" />
                        <label htmlFor="remember-log-in">Remember me</label>
                    </div>
                </form>
                
                <div>
                    <span>New to Netflix?</span>
                    <a href='#'>Register now.</a>
                </div>
            </div>
        </div>
    )
}

export default Page