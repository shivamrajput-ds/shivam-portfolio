'use client';
import { useState } from 'react';

// Keep the array definition clean, formatting happens down in the JSX
const points = Array.from({ length: 115 }, (_, i) => {
  const angle = i * 2.399963;
  const radius = Math.sqrt(i / 115);
  return { 
    x: 230 + Math.cos(angle) * radius * 150, 
    y: 161 + Math.sin(angle) * radius * 79 - Math.cos(angle) * radius * 34, 
    r: i % 9 === 0 ? 3.2 : 1.7 
  };
});

export function DataVisual() {
  const [view, setView] = useState<'projection' | 'distribution'>('projection');

  return <figure className="data-visual">
    <div className="visual-top"><span className="mono">FIG. 01 / FINDING STRUCTURE</span><span className="visual-cross" aria-hidden="true">+</span></div>
    <div className="plot-wrap"><svg className="data-plot" viewBox="0 0 460 330" role="img" aria-labelledby="plot-title plot-description">
      <title id="plot-title">{view === 'projection' ? 'Synthetic data projected onto a curved surface' : 'Illustrative probability distributions'}</title>
      <desc id="plot-description">An abstract mathematical illustration, not a project result or measured performance.</desc>
      <g className="plot-grid">{[0,1,2,3,4,5,6].map(i => <path key={'x'+i} d={'M ' + (40+i*54) + ' 63 L ' + (40+i*54) + ' 274'} />)}{[0,1,2,3,4].map(i => <path key={'y'+i} d={'M 40 ' + (63+i*53) + ' H 418'} />)}</g>
      
      {view === 'projection' ? <g>
        <g className="surface-lines">{Array.from({length:12},(_,i) => <path key={'a'+i} d={'M '+(58+i*10)+' '+(223-i*7)+' C '+(156+i*6)+' '+(274-i*7)+', '+(209+i*11)+' '+(53+i*2)+', '+(291+i*10)+' '+(110+i*8)} />)}{Array.from({length:13},(_,i) => <path key={'b'+i} d={'M '+(58+i*19.5)+' '+(223-90*Math.sin(i/12*Math.PI))+' Q '+(166+i*15)+' '+(157-55*Math.sin(i/12*Math.PI))+' '+(168+i*19.4)+' '+(146-45*Math.sin(i/12*Math.PI)+i*4.3)} />)}</g>
        
        {/* Fixed: Coordinates now explicitly formatted to 2 decimals matching the distribution paths below */}
        <g>
          {points.map((p, i) => (
            <circle 
              key={i} 
              cx={p.x.toFixed(2)} 
              cy={p.y.toFixed(2)} 
              r={p.r} 
              fill="currentColor" 
              opacity={i % 3 === 0 ? .85 : .3} 
            />
          ))}
        </g>
        
        <path d="M 53 275 H 412 M 53 275 V 65" className="plot-axis" /><text x="392" y="297">x₁</text><text x="31" y="69">x₂</text>
        <circle cx="268" cy="130" r="6" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5" /><path d="M 278 127 L 315 83 H 387" className="annotation-line" /><text x="322" y="74">latent structure</text>
      </g> : <g>
        <path d="M 53 275 H 412 M 53 275 V 65" className="plot-axis" />
        {[0,1,2].map(k => { const d = Array.from({length:101},(_,i)=>{const x=53+i*3.59;const y=275-174*Math.exp(-Math.pow((x-(165+k*62))/(48+k*15),2)/2);return (i?'L':'M')+x.toFixed(2)+' '+y.toFixed(2)}).join(' ');return <path key={k} d={d} fill="none" stroke="currentColor" strokeWidth="1.5" opacity={1-k*.27} />;})}
        <text x="339" y="297">value</text><text x="62" y="59">density</text><text x="250" y="86">signal / variation</text>
      </g>}
    </svg></div>
    <figcaption className="visual-bottom"><div className="view-options" role="group" aria-label="Illustration view"><button aria-pressed={view==='projection'} onClick={() => setView('projection')}>Projection</button><button aria-pressed={view==='distribution'} onClick={() => setView('distribution')}>Distribution</button></div><span className="mono">SYNTHETIC DATA</span></figcaption>
  </figure>;
}
