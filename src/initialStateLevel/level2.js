import React from 'react'
import {
  InlineMath,
  //    BlockMath
} from 'react-katex';


export default [
  // 0
  {
    question: <div> Колико је <InlineMath>
      {String.raw`\frac{\text{2}}{\text{3}}\cdot
          \frac{\text{1}}{\text{5}}
          +{\frac{\text{4}}{\text{15}}}`}
    </InlineMath> ? </div>,
    answer: "c",
    a: <InlineMath>
      {String.raw`\text{1}\frac{\text{1}}{\text{15}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\frac{\text{7}}{\text{30}}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{2}}{\text{5}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{3}\frac{\text{9}}{\text{30}}`}
    </InlineMath>,
  },
  // 1
  {
    question: <div> Колико је <InlineMath>
      {String.raw`\text{2}\frac{\text{1}}{\text{5}}+
          \text{5}\frac{\text{1}}{\text{3}}
          \cdot{\frac{\text{3}}{\text{4}}}`}
    </InlineMath> ? </div>,
    answer: "a",
    a: <InlineMath>
      {String.raw`\text{6}\frac{\text{1}}{\text{5}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\frac{\text{7}}{\text{60}}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`8`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{7}\frac{\text{5}}{\text{12}}`}
    </InlineMath>,
  },
  // 2
  {
    question: <div> Колико је <InlineMath>
      {String.raw`\frac{\text{2}}{\text{7}}\cdot
          \text{1}\frac{\text{1}}{\text{4}}
          +{\frac{\text{9}}{\text{14}}}`}
    </InlineMath> ? </div>,
    answer: "b",
    a: <InlineMath>
      {String.raw`\text{2}\frac{\text{1}}{\text{14}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`1`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{13}}{\text{28}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`3`}
    </InlineMath>,
  },
  // 3
  {
    question: <div> Колико је <InlineMath>
      {String.raw`2+
          \text{2}\frac{\text{2}}{\text{9}}
          \cdot{\frac{\text{4}}{\text{5}}}`}
    </InlineMath> ? </div>,
    answer: "d",
    a: <InlineMath>
      {String.raw`\text{2}\frac{\text{1}}{\text{14}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`5`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{13}}{\text{45}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{3}\frac{\text{7}}{\text{9}}`}
    </InlineMath>,
  },
  // 4
  {
    question: <div> Колико је <InlineMath>
      {String.raw`\text{5}\frac{\text{3}}{\text{4}}+
          \text{3}\frac{\text{1}}{\text{4}}
          \cdot{\frac{\text{4}}{\text{13}}}`}
    </InlineMath> ? </div>,
    answer: "b",
    a: <InlineMath>
      {String.raw`\text{8}\frac{\text{7}}{\text{52}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\text{6}\frac{\text{3}}{\text{4}}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{13}}{\text{52}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{2}\frac{\text{8}}{\text{13}}`}
    </InlineMath>,
  }
]
