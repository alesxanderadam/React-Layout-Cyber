import React from 'react'

export default function Body() {
    return (
        <>
            <div className='container'>
                <div className='welcome text-center py-5'>
                    <h1>A Warm Welcome</h1>
                    <p>Bootstrap utility classes are used to create this jumbotron since the old <br /> component has been removed from the framework. Why create custom CSS <br /> when you can use utilities? </p>
                    <button className='btn btn-primary d-inline'>Call to action</button>
                </div>
            </div>
        </>
    )
}
