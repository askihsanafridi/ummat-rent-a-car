export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#e7ebf0] border-t-[#f5b301]" />
        <p className="text-sm text-[#6b7787]">Loading...</p>
      </div>
    </div>
  );
}
