import React from 'react'
import {
    InlineMath,
    //   BlockMath 
} from 'react-katex';


export default [
    // 0
    {
        question: <div> Димензије одбојкашког терена су </div>,
        answer: "b",
        a: <span>10 {String.fromCharCode(215)} 10</span>,
      
        b: <span>18 {String.fromCharCode(215)} 9</span>,
      
        c: <span>12 {String.fromCharCode(215)} 6</span>,
      
        d: <span>20 {String.fromCharCode(215)} 40</span>,
      },


    // 1
    {
        question: <div> Колико је <InlineMath>
            {String.raw`\frac{\text{2}}{\text{7}}\cdot{\text{5}}`}
        </InlineMath> ? </div>,
        answer: "d",
        a: <InlineMath>
            {String.raw`\frac{\text{2}}{\text{35}}`}
        </InlineMath>,
        b: <InlineMath>
            {String.raw`\frac{\text{37}}{\text{7}}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\text{2}}{\text{7}}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\text{1}\frac{\text{3}}{\text{7}}`}
        </InlineMath>
    },
    // 3
    {
        question: <div> Операција "Коњићев скок" је у литератури позната и као</div>,
        answer: "a",
        a: <span>Десант на Дрвар</span>,
      
        b: <span>опсада Сарајева</span>,
      
        c: <span>Вировитички мостобран</span>,
      
        d: <span>пробој Сремског фронта</span>,
      }

]
