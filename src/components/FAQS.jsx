import React, {useEffect, useState} from 'react';
import style from './faqs.module.css';

import {data} from './data';

import FAQ from './FAQ';


export default function FAQS() {
  const [faqs, setFaqs]=useState(data);

  return(
    <main className={style.container}>
       <section className={style.faqs}>
       <h1>faqs</h1>
         {faqs.map((faq) => (
      <FAQ key={faq.id} {...faq} />
         )
      
         )}
       </section>
    </main>
  )
}