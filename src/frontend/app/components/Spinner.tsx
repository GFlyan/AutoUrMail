export default function Spinner() {
  return (
    <div className="relative w-16 md:w-20 h-16 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 animate-spin rounded-full">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(#F26416, #F28C20)',
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
          mask:
            'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
        }}
      />
    </div>
  );
}