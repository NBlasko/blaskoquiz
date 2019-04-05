import React from 'react'
import {
    InlineMath,
    //   BlockMath 
} from 'react-katex';


export default [
    // 0
    {
        question: <div> Колико је <InlineMath>
            {String.raw`\frac{\text{1}}{\text{2}}\cdot\frac{\text{1}}{\text{2}}`}
        </InlineMath> ? </div>,
        answer: "b",
        a: "1",
        b: <InlineMath>
            {String.raw`\frac{\text{1}}{\text{4}}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\text{2}}{\text{4}}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\frac{\text{2}}{\text{2}}`}
        </InlineMath>
    },


    // 1
    {
        question: <div> Колико је <InlineMath>
            {String.raw`\frac{\text{3}}{\text{8}}\cdot\frac{\text{1}}{\text{4}}`}
        </InlineMath> ? </div>,
        answer: "a",
        a: <InlineMath>
            {String.raw`\frac{\text{3}}{\text{32}}`}
        </InlineMath>,
        b: <InlineMath>
            {String.raw`\frac{\text{4}}{\text{24}}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\text{3}}{\text{2}}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\frac{\text{3}}{\text{12}}`}
        </InlineMath>
    },


    // 2
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
        question: <div> Колико је <InlineMath>
            {String.raw`\frac{\text{3}}{\text{4}}
          \cdot{\frac{\text{4}}{\text{5}}}`}
        </InlineMath> ? </div>,
        answer: "d",
        a: <InlineMath>
            {String.raw`\text{1}\frac{\text{1}}{\text{7}}`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`\frac{\text{12}}{\text{4}}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\text{7}}{\text{9}}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\frac{\text{3}}{\text{5}}`}
        </InlineMath>,
    },
    // 4
    {
        question: <div> Колико је <InlineMath>
            {String.raw`\frac{\text{3}}{\text{22}}
          \cdot{\frac{\text{11}}{\text{7}}}`}
        </InlineMath> ? </div>,
        answer: "b",
        a: <InlineMath>
            {String.raw`\text{22}\frac{\text{1}}{\text{11}}`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`\frac{\text{3}}{\text{14}}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\text{14}}{\text{29}}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\frac{\text{253}}{\text{154}}`}
        </InlineMath>,
    },
    // 5
    {
        question: <div> Колико је <InlineMath>
            {String.raw`\frac{\text{8}}{\text{15}}
          \cdot{\frac{\text{5}}{\text{12}}}`}
        </InlineMath> ? </div>,
        answer: "d",
        a: <InlineMath>
            {String.raw`\text{8}\frac{\text{5}}{\text{12}}`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`\frac{\text{13}}{\text{27}}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\text{13}}{\text{180}}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\frac{\text{2}}{\text{9}}`}
        </InlineMath>,
    },
    // 6
    {
        question: <div> Колико је <InlineMath>
            {String.raw`\text{1}\frac{\text{1}}{\text{13}}
          \cdot{\frac{\text{5}}{\text{7}}}`}
        </InlineMath> ? </div>,
        answer: "b",
        a: <InlineMath>
            {String.raw`\text{1}\frac{\text{5}}{\text{91}}`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`\frac{\text{10}}{\text{13}}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\text{7}}{\text{20}}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\text{1}\frac{\text{6}}{\text{20}}`}
        </InlineMath>,
    }

]
