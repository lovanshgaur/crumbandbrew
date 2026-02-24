"use client";

export default function CartDrawer({ cart, updateCart, isOpen, onClose }) {
  const items = Object.values(cart);

  if (!isOpen) return null;
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />

      <div className="fixed right-0 top-0 h-full w-[380px] bg-white z-50 p-6 overflow-y-auto shadow-xl">
        <h2 className="text-xl font-semibold mb-6">Your Tray</h2>

        {items.length === 0 ? (
          <p className="text-neutral-500">Your tray is empty.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-neutral-500">₹{item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateCart(item, "dec")}
                      className="border rounded-full px-2"
                    >
                      −
                    </button>

                    <span className="text-sm font-medium">{item.qty}</span>

                    <button
                      onClick={() => updateCart(item, "inc")}
                      className="border rounded-full px-2"
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className="font-medium">₹{item.price * item.qty}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 border-t pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button
          onClick={onClose}
          className="mt-8 w-full border rounded-full py-3"
        >
          Close
        </button>
      </div>
    </>
  );
}
