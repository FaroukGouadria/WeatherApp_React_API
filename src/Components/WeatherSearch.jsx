import React from 'react'

function WeatherSearch() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-4">
                        <div className="card text-white text-center border-0">
                            <img src="https://source.unsplash.com/600x900/?nature,water" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <form>
                                    <div className="input-group mb-4 w-75 mx-auto">
                                        <input   
                                        type="search" 
                                        className="form-control" 
                                        placeholder="Search ..." 
                                        aria-label="search city" 
                                        aria-describedby="basic-addon2"/> 
                                            <button type='submit' className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></button>
                                    </div>
                                </form>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherSearch;
