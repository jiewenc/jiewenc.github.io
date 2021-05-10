import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'

const Films = () => {
    return (
        <>

            <div className="third">
                {/*
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) => 
                    <Project id={x.id} url={x.url} name={x.name} />
                    )}
                </div>
                */}
                <div className="row type1">
                    <img className="film1" />
                    <div className="film-title">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Films;
