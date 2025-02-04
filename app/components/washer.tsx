export default function Washer() {
  const pathStyle: React.CSSProperties = {
    lineHeight: 'normal',
    fontVariantLigatures: 'normal',
    fontVariantPosition: 'normal',
    fontVariantCaps: 'normal',
    fontVariantNumeric: 'normal',
    fontVariantAlternates: 'normal',
    fontFeatureSettings: 'normal',
    textIndent: 0,
    textAlign: 'start',
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
    textTransform: 'none',
    textOrientation: 'mixed',
    whiteSpace: 'normal',
    padding: 0,
    isolation: 'auto',
    mixBlendMode: 'normal',
    color: '#000',
    opacity: 1,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="70"
      viewBox="3.5 1 10 16"
      id="washing-machine"
      // style={{border:'1px solid black'}}
    >
      <path
        style={pathStyle}
        d="M10.847656 1.8515625V2.3808594H11.90625V1.8515625zM8.7304688 1.8515625V2.3808594H9.7890625V1.8515625z"
        color="#000"
        enableBackground="accumulate"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
      ></path>
      <path
        style={pathStyle}
        d="m 3.7050781,0.79296875 c -0.3527778,0 -0.6034726,0.21671085 -0.7011719,0.41210935 -0.097699,0.1953986 -0.09375,0.3828125 -0.09375,0.3828125 V 15.345703 c 0,0 -0.00395,0.187414 0.09375,0.382813 0.097699,0.195398 0.3483941,0.410156 0.7011719,0.410156 h 9.5234379 c 0.352777,0 0.603472,-0.214758 0.701172,-0.410156 0.0977,-0.195399 0.09375,-0.382813 0.09375,-0.382813 V 1.5878906 c 0,0 0.0039,-0.187414 -0.09375,-0.3828125 -0.0977,-0.1953985 -0.348395,-0.41210935 -0.701172,-0.41210935 z m 0,0.52929685 h 9.5234379 c 0.176388,0 0.19197,0.049956 0.226562,0.1191406 0.03459,0.069185 0.03906,0.1464844 0.03906,0.1464844 V 15.345703 c 0,0 -0.0045,0.0773 -0.03906,0.146485 -0.03459,0.06918 -0.05017,0.11914 -0.226562,0.11914 H 3.7050781 c -0.1763888,0 -0.19197,-0.04996 -0.2265625,-0.11914 -0.034592,-0.06919 -0.039063,-0.146485 -0.039063,-0.146485 V 1.5878906 c 0,0 0.00447,-0.077299 0.039063,-0.1464844 0.034593,-0.069185 0.050174,-0.1191406 0.2265625,-0.1191406 z"
        color="#000"
        enableBackground="accumulate"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
      ></path>
      <path
        style={pathStyle}
        d="M3.1757812 2.9101562V3.4394531H13.757812V2.9101562zM8.4667969 4.7617188c-2.1887463 0-3.96875 1.7800037-3.96875 3.96875-3e-7 2.1887462 1.7800036 3.9687502 3.96875 3.9687502 2.1887461 0 3.9687501-1.780004 3.9687501-3.9687502 0-2.1887463-1.780004-3.9687501-3.9687501-3.96875zm0 .5292968c1.9027631 0 3.4394531 1.5366898 3.4394531 3.4394532 0 1.9027632-1.53669 3.4394532-3.4394531 3.4394532-1.9027635 0-3.4394534-1.53669-3.4394531-3.4394532 0-1.9027634 1.5366898-3.4394532 3.4394531-3.4394532zM3.1757812 14.023438v.529296H13.757812v-.529296z"
        color="#000"
        enableBackground="accumulate"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
      ></path>
      <path
        style={pathStyle}
        d="m 8.4667969,5.8203125 c -1.6042449,0 -2.9101563,1.3059114 -2.9101563,2.9101563 1e-7,1.6042452 1.3059115,2.9121092 2.9101563,2.9121092 1.6042441,0 2.9101561,-1.307865 2.9101561,-2.9121092 0,-1.6042447 -1.305912,-2.910156 -2.9101561,-2.9101563 z m 0,0.5292969 c 1.3182617,2e-7 2.3808591,1.0625976 2.3808591,2.3808594 0,1.3182612 -1.0625974,2.3828122 -2.3808591,2.3828122 -1.3182619,0 -2.3808593,-1.06455 -2.3808594,-2.3828122 0,-1.318262 1.0625974,-2.3808594 2.3808594,-2.3808594 z"
        color="#000"
        enableBackground="accumulate"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
      ></path>
      <path
        style={pathStyle}
        d="m 5.8203125,8.2011719 v 0.5292969 c 1.4231376,0 1.7111484,0.2241718 2.1835937,0.4941406 0.4724454,0.2699688 1.0968215,0.5644531 2.8437498,0.5644531 V 9.2597656 C 9.1550012,9.2597656 8.7211745,9.0248229 8.2675781,8.765625 7.8139818,8.5064271 7.3075916,8.2011719 5.8203125,8.2011719 Z"
        color="#000"
        enableBackground="accumulate"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
      ></path>
    </svg>
  );
}
