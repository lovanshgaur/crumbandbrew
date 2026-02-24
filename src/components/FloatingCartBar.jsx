export default function FloatingCartBar({ cart, onClick }) {
  const items = Object.values(cart);

  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  if (totalCount === 0) return null;

  return (
    <div
      onClick={onClick}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-black text-white px-5 py-4 rounded-full flex items-center justify-between shadow-xl z-50 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold">
          {totalCount}
        </div>

        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-wider opacity-70">
            Your Tray
          </p>
          <p className="font-semibold text-sm">₹{totalPrice}</p>
        </div>
      </div>

      <p className="text-xs uppercase tracking-wider opacity-80">Review →</p>
    </div>
  );
}
