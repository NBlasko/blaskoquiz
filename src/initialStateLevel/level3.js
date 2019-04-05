import React from 'react'
import {
  InlineMath,
  // BlockMath 
} from 'react-katex';


export default [
  // 0
  {
    question: <div> Колико је <InlineMath>
      {String.raw`\text{3}\frac{\text{3}}{\text{4}}\cdot
          (\frac{\text{3}}{\text{5}}
          +{\frac{\text{2}}{\text{3}}})-2`}
    </InlineMath> ? </div>,
    answer: "b",
    a: <InlineMath>
      {String.raw`\text{1}\frac{\text{7}}{\text{8}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\text{2}\frac{\text{3}}{\text{4}}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{8}}{\text{12}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{2}\frac{\text{11}}{\text{60}}`}
    </InlineMath>,
  },
  // 1
  {
    question: <div> Колико је <InlineMath>
      {String.raw`(\frac{\text{17}}{\text{9}}
          -\text{1}\frac{\text{1}}{\text{6}})\cdot
          (\text{2}\frac{\text{7}}{\text{10}}
          -{\frac{\text{3}}{\text{5}}})`}
    </InlineMath> ? </div>,
    answer: "a",
    a: <InlineMath>
      {String.raw`\text{1}\frac{\text{31}}{\text{60}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\text{2}\frac{\text{23}}{\text{90}}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{7}}{\text{12}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{2}\frac{\text{1}}{\text{5}}`}
    </InlineMath>,
  },
  // 2
  {
    question: <div> Изврши одговарајућа скраћивања,
          па израчунај производ <InlineMath>
        {String.raw`\frac{\text{7}}{\text{8}}\cdot
          \frac{\text{20}}{\text{9}}\cdot
          \frac{\text{6}}{\text{35}}
             `}
      </InlineMath>. Производ је </div>,
    answer: "a",
    a: <InlineMath>
      {String.raw`\frac{\text{1}}{\text{3}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\text{2}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{7}}{\text{12}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{2}\frac{\text{1}}{\text{35}}`}
    </InlineMath>,
  },
  // 3
  {
    question: <div> Изврши одговарајућа скраћивања,
      па израчунај производ <InlineMath>
        {String.raw`\frac{\text{12}}{\text{5}}\cdot
      \frac{\text{4}}{\text{9}}\cdot
      \frac{\text{15}}{\text{16}}
         `}
      </InlineMath>. Производ је </div>,
    answer: "b",
    a: <InlineMath>
      {String.raw`\frac{\text{1}}{\text{25}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\text{1}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{7}}{\text{80}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\text{2}\frac{\text{37}}{\text{144}}`}
    </InlineMath>,
  },
  // 4
  {
    question: <div> Изврши одговарајућа скраћивања,
      па израчунај производ <InlineMath>
        {String.raw`\frac{\text{42}}{\text{75}}\cdot
      \frac{\text{15}}{\text{32}}\cdot
      \frac{\text{5}}{\text{28}}
         `}
      </InlineMath>. Производ је </div>,
    answer: "c",
    a: <InlineMath>
      {String.raw`\frac{\text{6}}{\text{25}}`}
    </InlineMath>,

    b: <InlineMath>
      {String.raw`\text{1}`}
    </InlineMath>,

    c: <InlineMath>
      {String.raw`\frac{\text{3}}{\text{64}}`}
    </InlineMath>,

    d: <InlineMath>
      {String.raw`\frac{\text{377}}{\text{2400}}`}
    </InlineMath>,
  }

]
