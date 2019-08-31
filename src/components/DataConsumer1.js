import React, { memo } from 'react';
import withData from './withData';

const DataConsumer1 = ({data, children}) => {
    return (
        <>
            {data && children ? 
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='card-title'>{children}</h2>
                            <div className='card-text'>Title := {data.title}</div>
                            <div className='card-text'>Body := {data.body}</div>
                        </div>
                    </div> 
                </div>: null
            }
        </>
    )
}

export default withData(memo(DataConsumer1));