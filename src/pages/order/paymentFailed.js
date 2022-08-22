import React from 'react'
import Image from "next/image";
import failed from '../../../public/images/failed.png';
import Router from 'next/router';

function paymentFailed() {
    return (
        <div className="card m-auto m-5 p-5">
            <div className="card-body text-center p-5 mb-5">
              <Image
                src={failed}
                alt="tick"
                width={100}
                height={100}
              />
                <h2 className={'text-danger fw-bold mt-4'}>Payment Failed</h2>
            </div>
            <style jsx>{`
             .card-body {
               font-family: 'Lora';
             }
            `}           
            </style>
        </div>
    )
}

export default paymentFailed
