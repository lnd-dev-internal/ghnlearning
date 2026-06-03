/**
 * particleFrag.ts — Custom Fragment Shader
 * Renders each particle as a soft Gaussian circle for natural bloom interaction.
 */

export const particleFragmentShader = /* glsl */ `
varying vec3  vColor;
varying float vAlpha;

void main() {
  // Soft circular disc with Gaussian falloff
  vec2  uv = gl_PointCoord - 0.5;
  float d  = length(uv);

  if (d > 0.5) discard;

  // Gaussian falloff — wider → softer halo (interacts beautifully with Bloom)
  float alpha = exp(-d * d * 7.0) * vAlpha;

  gl_FragColor = vec4(vColor, alpha);
}
`;
