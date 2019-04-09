import React from 'react'
import {
    InlineMath,
    //   BlockMath 
} from 'react-katex';


export default [
    // 0
    {
        question: <div> Израчунај дужину кружног лука, полупречника
           <i> r</i> = 6<i>cm</i>, коме одговара централни угао од 30{'\u00b0'}.
           Дужина кружног лука је: </div>,
        answer: "d",
        a: <InlineMath>
            {String.raw`\frac{\pi}{\text{30}}`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`\text{1}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`2\pi`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\pi`}
        </InlineMath>,
    },
    // 1
    {
        question: <div> Израчунај дужину кружног лука, полупречника
           <i> r</i> = 6<i>cm</i>, коме одговара централни угао од 45{'\u00b0'}.
           Дужина кружног лука је: </div>,
        answer: "b",
        a: <InlineMath>
            {String.raw`\pi`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`\frac{3}{2}\pi`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\pi}{2}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`3`}
        </InlineMath>,
    },
    // 2
    {
        question: <div> Израчунај дужину кружног лука, полупречника
           <i> r</i> = 8<i>cm</i>, коме одговара централни угао од 60{'\u00b0'}.
           Дужина кружног лука је: </div>,
        answer: "a",
        a: <InlineMath>
            {String.raw`\frac{8}{3}\pi`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`2\pi`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\pi}{15}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`60`}
        </InlineMath>,
    },
    // 3
    {
        question: <div> Израчунај дужину кружног лука, полупречника
           <i> r</i> = 9<i>cm</i>, коме одговара централни угао од 120{'\u00b0'}.
           Дужина кружног лука је: </div>,
        answer: "d",
        a: <InlineMath>
            {String.raw`\pi`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`9`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`3\pi`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`6\pi`}
        </InlineMath>,
    },
    // 4
    {
        question: <div> Израчунај дужину кружног лука, полупречника
           <i> r</i> = 12<i>cm</i>, коме одговара централни угао од 240{'\u00b0'}.
           Дужина кружног лука је: </div>,
        answer: "b",
        a: <InlineMath>
            {String.raw`9\pi`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`16\pi`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`3\pi`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`24\pi`}
        </InlineMath>,
    },
    // 5
    {
        question: <div> Израчунај дужину кружног лука, полупречника
           <i> r</i> = 5<i>cm</i>, коме одговара централни угао од 12{'\u00b0'}.
           Дужина кружног лука је: </div>,
        answer: "b",
        a: <InlineMath>
            {String.raw`\frac{\pi}{12}`}
        </InlineMath>,

        b: <InlineMath>
            {String.raw`\frac{\pi}{3}`}
        </InlineMath>,

        c: <InlineMath>
            {String.raw`\frac{\pi}{6}`}
        </InlineMath>,

        d: <InlineMath>
            {String.raw`\frac{\pi}{2}`}
        </InlineMath>,
    }


]
