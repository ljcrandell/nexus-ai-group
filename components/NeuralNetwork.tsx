type Node = { cx: number; cy: number; r: number; delay: number }
type Edge = [number, number]

const nodes: Node[] = [
  { cx: 250, cy: 250, r: 7,  delay: 0   }, // 0 center hub
  { cx: 118, cy: 95,  r: 5,  delay: 0.5 }, // 1
  { cx: 375, cy: 78,  r: 6,  delay: 1.2 }, // 2
  { cx: 48,  cy: 245, r: 5,  delay: 0.8 }, // 3
  { cx: 452, cy: 172, r: 5,  delay: 1.7 }, // 4
  { cx: 148, cy: 402, r: 5,  delay: 0.3 }, // 5
  { cx: 418, cy: 358, r: 5,  delay: 2.1 }, // 6
  { cx: 286, cy: 138, r: 4,  delay: 1.4 }, // 7
  { cx: 168, cy: 268, r: 4,  delay: 0.6 }, // 8
  { cx: 358, cy: 280, r: 4,  delay: 1.9 }, // 9
  { cx: 82,  cy: 378, r: 4,  delay: 0.1 }, // 10
  { cx: 448, cy: 445, r: 4,  delay: 2.5 }, // 11
  { cx: 312, cy: 428, r: 5,  delay: 1.1 }, // 12
  { cx: 195, cy: 155, r: 3,  delay: 2.3 }, // 13
  { cx: 422, cy: 268, r: 3,  delay: 0.9 }, // 14
]

const edges: Edge[] = [
  [0, 7], [0, 8], [0, 9], [0, 14],
  [1, 7], [1, 3], [1, 8], [1, 13],
  [2, 7], [2, 4],
  [3, 8], [3, 10], [3, 5],
  [4, 9], [4, 6], [4, 14],
  [5, 8], [5, 10], [5, 12],
  [6, 9], [6, 11], [6, 12],
  [7, 13], [9, 12], [9, 14],
]

export default function NeuralNetwork() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowStrong">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges with traveling data packets */}
      {edges.map(([from, to], i) => {
        const a = nodes[from]
        const b = nodes[to]
        const dur = `${3.5 + (i % 5) * 0.7}s`
        const begin = `${(i * 0.45) % 5}s`
        const path = `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`
        return (
          <g key={`edge-${i}`}>
            {/* Static connection line */}
            <line
              x1={a.cx} y1={a.cy}
              x2={b.cx} y2={b.cy}
              stroke="#00AEEF"
              strokeWidth="0.75"
              strokeOpacity="0.18"
            />
            {/* Traveling dot */}
            <circle r="2.5" fill="#00AEEF">
              <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={path} />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1"
                dur={dur} begin={begin} repeatCount="indefinite" />
            </circle>
          </g>
        )
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          {/* Ripple ring */}
          <circle cx={node.cx} cy={node.cy} r={node.r} stroke="#00AEEF" strokeWidth="1" fill="none">
            <animate attributeName="r" values={`${node.r};${node.r * 3.8};${node.r * 3.8}`}
              dur="3s" begin={`${node.delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0"
              dur="3s" begin={`${node.delay}s`} repeatCount="indefinite" />
          </circle>
          {/* Core dot */}
          <circle
            cx={node.cx} cy={node.cy} r={node.r}
            fill="#00AEEF"
            filter={i === 0 ? 'url(#glowStrong)' : 'url(#glow)'}
          >
            <animate attributeName="opacity" values="0.6;1;0.6"
              dur="2s" begin={`${node.delay}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  )
}
