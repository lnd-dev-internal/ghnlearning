export const particleVertexShader = /* glsl */ `
// ── Simplex 3D Noise ──────────────────────────────────────────────────────────
vec3 _mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 _mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 _permute(vec4 x){return _mod289(((x*34.0)+1.0)*x);}
vec4 _taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=_mod289(i);
  vec4 p=_permute(_permute(_permute(
    i.z+vec4(0.0,i1.z,i2.z,1.0))
    +i.y+vec4(0.0,i1.y,i2.y,1.0))
    +i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=_taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

// ── Uniforms / Attributes ─────────────────────────────────────────────────────
uniform float uTime;
uniform float uIntroProgress;      // alpha: 0=hidden, 1=visible at text
uniform float uScrollProgress;     // 0=at text, 1=disintegrated
uniform float uAssemblyProgress;   // 0=flying, 1=sphere
uniform float uSplitProgress;      // 0=sphere, 1=4 mini-circles
uniform float uHideProgress;       // 0=visible, 1=fully hidden (stats section)
uniform float uPixelRatio;

attribute vec3  aTextPos;    // text pixel positions
attribute vec3  aFreePos;    // disintegration targets
attribute vec3  aSpherePos;  // big sphere surface positions
attribute vec3  aMiniPos;    // 4 mini-sphere positions
attribute float aSize;
attribute float aRandom;
attribute vec3  aColor;

varying vec3  vColor;
varying float vAlpha;

void main() {
  // ── Phase weights ──────────────────────────────────────────────────────────
  float intro      = uIntroProgress;
  float dis        = smoothstep(0.0, 0.9, uScrollProgress);
  float assemble   = smoothstep(0.0, 1.0, uAssemblyProgress);
  float split      = smoothstep(0.0, 1.0, uSplitProgress);

  // ── PHASE 1: particles at text positions (still + subtle drift) ────────────
  vec3 pos = aTextPos;

  // Micro-drift so text particles feel alive, not frozen
  float atText = (1.0 - dis) * intro;
  float dT     = uTime * 0.07 + aRandom * 6.28;
  pos += vec3(
    snoise(vec3(dT, aRandom*3.1, 0.0)),
    snoise(vec3(0.0, dT, aRandom*2.7)),
    snoise(vec3(aRandom*2.3, 0.0, dT))
  ) * 0.014 * atText;

  // ── PHASE 2: disintegration — noise flow upward ───────────────────────────
  float tN  = uTime * 0.18 + aRandom * 6.28318;
  vec3  ni  = vec3(aFreePos.x*0.35+tN, aFreePos.y*0.35+tN*0.6, aFreePos.z*0.35+tN*1.3);
  float str = 2.6 * dis * (1.0 - assemble);
  vec3  noiseOff = vec3(
    snoise(ni),
    snoise(ni+vec3(100.0,0.0,0.0)),
    snoise(ni+vec3(0.0,100.0,0.0))
  ) * str;
  pos = mix(pos, aFreePos + noiseOff, dis);

  // ── PHASE 3: sphere assembly (rotating) ───────────────────────────────────
  float angle = uTime * 0.30;
  float cosA  = cos(angle), sinA = sin(angle);
  vec3 rotSphere = vec3(
    aSpherePos.x * cosA - aSpherePos.z * sinA,
    aSpherePos.y,
    aSpherePos.x * sinA + aSpherePos.z * cosA
  );
  pos = mix(pos, rotSphere, assemble);

  // ── PHASE 4: split into 4 mini-circles ────────────────────────────────────
  // Rotate mini-spheres at the same rate for visual continuity
  vec3 rotMini = vec3(
    aMiniPos.x * cosA - aMiniPos.z * sinA,
    aMiniPos.y,
    aMiniPos.x * sinA + aMiniPos.z * cosA
  );
  pos = mix(pos, rotMini, split * assemble); // only splits from sphere state

  // ── COLOR ──────────────────────────────────────────────────────────────────
  float midFlight = dis * (1.0 - assemble);

  // Flight: deeper orange, slightly warmer
  vec3 flightColor = mix(aColor, vec3(0.88, 0.28, 0.0), 0.70);

  // Sphere: rich deep orange
  vec3 orangeColor = vec3(
    mix(aColor.r, 0.92, 0.85),
    mix(aColor.g, 0.22, 0.80),
    mix(aColor.b, 0.00, 0.95)
  );
  // Mini-circles: darker burnt orange
  vec3 miniColor = vec3(
    mix(aColor.r, 0.70, 0.88) * 0.75,
    mix(aColor.g, 0.14, 0.88) * 0.75,
    mix(aColor.b, 0.00, 0.98) * 0.75
  );

  vColor  = mix(aColor, flightColor, midFlight);
  vColor  = mix(vColor, orangeColor, assemble);
  vColor  = mix(vColor, miniColor, split * assemble);

  // No sparkle boost — not needed for NormalBlending light theme

  // ── SIZE ───────────────────────────────────────────────────────────────────
  float sizeMult = 1.0 + midFlight * 1.5;
  float sparkle  = 1.0 + snoise(vec3(aRandom*5.0, uTime*0.4, 0.0)) * 0.38;
  sizeMult = mix(sizeMult, sparkle * 1.05, assemble);
  // Mini-circles: SMALLER than sphere — reduces the overblown look
  float miniSizeBoost = 0.42 + snoise(vec3(aRandom*4.0, uTime*0.5, 1.0)) * 0.12;
  sizeMult = mix(sizeMult, miniSizeBoost, split * assemble);

  vec4 mvPos   = modelViewMatrix * vec4(pos, 1.0);
  gl_Position  = projectionMatrix * mvPos;
  gl_PointSize = aSize * sizeMult * uPixelRatio * (20.0 / -mvPos.z);
  gl_PointSize = clamp(gl_PointSize, 0.5, 8.0);  /* crisp, not blurry */

  // ── ALPHA ──────────────────────────────────────────────────────────────────
  float midAlpha  = 1.0 - midFlight * 0.08;
  float sphAlpha  = 0.72 + aRandom * 0.24;  /* high contrast point cloud */
  float miniAlpha = 0.62 + aRandom * 0.20;  // visible mini-circles
  float baseAlpha = mix(midAlpha, sphAlpha, assemble);
  baseAlpha       = mix(baseAlpha, miniAlpha, split * assemble);
  vAlpha          = intro * baseAlpha;

  // Fade out entirely during stats section
  vAlpha *= (1.0 - uHideProgress);
}
`;
