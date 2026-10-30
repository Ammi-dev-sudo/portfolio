export default function MadagascarFlag({ className = '' }) {
  return (
    <svg
      viewBox="0 0 28 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Drapeau de Madagascar"
      role="img"
    >
      <rect width="28" height="20" fill="#FFFFFF" />
      <rect x="0" y="0" width="9.33" height="20" fill="#007A3D" />
      <rect x="9.33" y="0" width="18.67" height="10" fill="#FC3D32" />
      <rect x="9.33" y="10" width="18.67" height="10" fill="#007A3D" />
    </svg>
  )
}
