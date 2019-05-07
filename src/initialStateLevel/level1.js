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
    // 2
    {
        question: <div> Ко је створио лик Мики Мауса?</div>,
        answer: "b",
        a: <span>Мек Доналд</span>,

        b: <span>Волт Дизни </span>,

        c: <span>Шиља</span>,

        d: <span>Стивен Спилберг</span>,
    },
    // 3
    {
        question: <div> Операција "Коњићев скок" је у литератури позната и као</div>,
        answer: "a",
        a: <span>Десант на Дрвар</span>,

        b: <span>опсада Сарајева</span>,

        c: <span>Вировитички мостобран</span>,

        d: <span>пробој Сремског фронта</span>,
    },
    // 4
    {
        question: <div> Бранислав Нушић је наш најпознатији комедиограф. Међу наведеним
            комедијама пронађи ону коју је написао
                </div>,
        answer: "c",
        a: <span>Покондирена тиква</span>,

        b: <span>Избирачица</span>,

        c: <span>Сумњиво лице</span>,

        d: <span>Грађанин племић</span>,
    },
    // 5
    {
        question: <div> На ком континенту живи тигар? </div>,
        answer: "a",
        a: <span>Азија</span>,

        b: <span>Африка</span>,

        c: <span>Јужна Америка</span>,

        d: <span>Аустралија</span>,
    },
    // 6
    {
        question: <div> Најмања кост у телу човека је: </div>,
        answer: "c",
        a: <span>трећа фаланга малог прста</span>,

        b: <span>вито ребро</span>,

        c: <span>узенгија </span>,

        d: <span>носна кост</span>,
    },
    // 7
    {
        question: <div> Географски омотач атмосфера је: </div>,
        answer: "b",
        a: <span>водени омотач</span>,

        b: <span>ваздушни омотач</span>,

        c: <span>стеновити омотач </span>,

        d: <span>биљни и животињски свет</span>,
    },
      // 8
      {
        question: <div> "Exchange office" је место где мењамо: </div>,
        answer: "d",
        a: <span>хаљине</span>,

        b: <span>поштанске маркице</span>,

        c: <span>књиге </span>,

        d: <span>стране валуте</span>,
    },

]
